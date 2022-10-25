import {Flex, Text, Avatar} from '@chakra-ui/react'
import { useEffect, useRef } from 'react';

const Messages = ({ messages }) => {
    const AlwaysScrollToBottom = () => {
        const elementRef = useRef(); 
        useEffect(() => elementRef.current.scrollIntoView())
        return <div ref={elementRef} />
    }
    return (
        <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
            {messages.map((item, index) => {
                if (item.from === sessionStorage.getItem("user")) {
                    return (
                        <Flex key={index} w="100%" justify="flex-end">
                            <Flex
                                bg="blue.300"
                                color="white"
                                minW="100px"
                                maxW="350px"
                                my="1"
                                borderRadius="5px"
                                p="2"
                            >
                                <Text>{ item.text}</Text>

                            </Flex>
                            
                      </Flex>  
                    )
                } else {
                    return (
                    
                        <Flex key={index} w ="100%">
                            <Avatar
                                name={ item.from} 
                                bg="gray.400"
                            >
                            </Avatar>
                            <Flex
                                bg="gray.100"
                                color="black"
                                minW="100px"
                                maxW="350px"
                                my="1"
                                ml="2"
                                borderRadius="5px"
                                p="2"
                            >
                                <Text>{ item.text}</Text>
                            </Flex>
                        </Flex>
                    )
                }
            })}
            <AlwaysScrollToBottom/>
        </Flex>
    )
}

export default Messages