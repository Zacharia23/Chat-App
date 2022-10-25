import { useParams } from "react-router-dom"
import { Flex } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"
import Messages from "./Messages"
import { useState } from "react"

const Room = () => {
    const { room } = useParams()
    console.log(room)

    const [messages, setMessages] = useState([
        { from: "Anon", text: "Him my name is chat" }, 
        { from: "me", text: "Hy there" }, 

    ])

    return (
        <Flex w='100%' h='100vh' justify="center" align="center">
            <Flex w='40%' h='90%' flexDir="column">
                <Header />
                <Messages messages={messages} />
                <Footer />
           </Flex>
        </Flex>
    )
}

export default Room