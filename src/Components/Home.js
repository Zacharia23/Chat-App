import Prompt from "./Prompt"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDisclosure } from "@chakra-ui/react"

const Home = () => {

    const navigate = useNavigate(); 

    const [username, setUsername] = useState('Anonymous')
    const [room, setRoom] = useState('General')
    const [show, setShow] = useState(true)

    return (
        <div>
            <Prompt
                username={username}
                setName={setUsername}
                room={room}
                setRoom={setRoom}
                show={show}
                onHide={() => {
                    console.log(`Gets to here...`)
                    sessionStorage.setItem("user", username)
                    if (username === "") {
                        setShow(true)
                    } else {
                        setShow(false)
                    }
                    navigate(`rooms/${room}`)
                }}
            />
        </div>
        
    )
}

export default Home