import { useParams } from "react-router-dom"

const Room = () => {
    const { room } = useParams()
    console.log(room)
    return (
        <div>
            {room}
        </div>
    )
}

export default Room