const express = require('express')
const cors = require('cors')
const {Server} = require('socket.io')

const app = express()
const server = require('http').createServer(app)

const PORT = process.env.PORT || 8000;

const io = new Server(server, {
    cors: {
        origin: '*', credentials: true,
    },
})

const appName = "Chat4Test"
const connections = []
const rooms = {}
const users = []

app.use(cors())

const userJoin = (id, name, room) => {
    const user = {id, name, room}

    users.push(user)

    return user;
}

const userLeave = id => {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = id => users.find(user => user.id === id)

const getUsersInRoom = room => users.filter(user => user.room === room)

app.get('/info', (req, res) => {
    const array = Object.values(rooms).map(value => {
        return [value];
    })
    const info = {}
    array.map(room => {
        let users = []
        getUsersInRoom(room.toString()).map(user => users.push(user.name))
        info[room] = {
            users: users,
        }
    })
    res.status(200).json({rooms, users, info})
})

app.get('*', (req, res) => {
    res.status(200).send(
        '<h1> Welcome to Chat App </h1>'
    )
})

io.on('connection', socket => {
    connections.push(socket)
    console.log(`${socket.id} connected: ${connections.length} connected`);

    socket.on("room", data => {
        let user = userJoin(socket.id, data.user, data.room);
        rooms[socket.id] = user.room;
        socket.join(user.room);

        io.to(user.room).emit("room:data", {
            room: user.room,
            users: getUsersInRoom(user.room)
        })

        socket.emit("chat:new", {
            user: appName,
            message: 'Welcome to Chat App'
        })

        socket.broadcast.to(user.room).emit("chat:new", {
            user: appName,
            message: `${user.name} has joined the room.`
        })
        socket.broadcast.to(user.room).emit('load')
    })

    socket.on("room:left", data => {
        const user = userLeave(socket.id)
        socket.leave(user.room)

        if(user) {
            socket.to(user.room).emit("chat:new", {
                user: appName,
                message: `${user.name} has left the room`
            })
            io.in(user.room).emit("room:data", {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }
    })

    /** When client emits 'chat' this listens and executes */
    socket.on("chat", data => {
        io.in(data.room).emit("chat:new", {
            user: data.user,
            message: data.message
        })
    })

    socket.on("chat:typing", data => {
        socket.broadcast.to(data.room).emit("user.typing", {
            user: data.user
        })
    })

    socket.on("disconnecting", reason => {
        const user = userLeave(socket.id)
        if (user) {
            socket.to(user.room).emit("chat:new", {
                user: appName,
                message: `${user.name} has left the room`
            })
            io.in(user.room).emit("room:data", {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }
    })

    socket.on("disconnect", reason => {
        delete rooms[socket.id]
        connections.splice(connections.indexOf(socket), 1)
        console.log(`Disconnected: ${connections.length} remaining`)
    })
})

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})





