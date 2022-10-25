import { useParams } from "react-router-dom"
import { Flex } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"
import Messages from "./Messages"
import { useState, useEffect } from "react"

const Room = () => {
    const { room } = useParams()
    console.log(room)

    const name = sessionStorage.getItem("user");

    let interval;
    interval = setInterval(() => {
        if (messages.length < JSON.parse(localStorage.getItem("messages") ?? []).length) {
            setMessages(JSON.parse(localStorage.getItem("messages")));
        }
    }, 500);

    const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")) ??
    [])

    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages]);

    const [inputMessage, setInputMessage] = useState("")

    const handleSendMessage = () => {
        if (!inputMessage.trim().length) {
            return
        }

        const data = inputMessage; 

        setMessages((old) => [...old, { from: name, text: data }]);
        setInputMessage("")
    }

    return (
        <Flex w='100%' h='100vh' justify="center" align="center">
            <Flex w='40%' h='90%' flexDir="column">
                <Header />
                <Messages messages={messages} />
                <Footer inputMessage={inputMessage} setInputMessage={setInputMessage} handleSendMessage={handleSendMessage} />
           </Flex>
        </Flex>
    )
}

export default Room