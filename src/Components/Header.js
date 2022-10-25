import { Flex, Avatar, AvatarBadge, Text, Divider } from "@chakra-ui/react"

const Header = () => {
    return (
        <>
            <Flex w="100%">
                <Avatar size='lg' name='Use name' scr=''>
                    <AvatarBadge boxSize="1em" bg='green.500' />
                </Avatar>
                <Flex flexDirection="column" mx="5" justify="center">
                    <Text fontSize="lg" fontWeight="bold">
                        User Name
                    </Text>
                    <Text color="gray.500"> online </Text>

                </Flex>

            </Flex>
            <Divider py={2}/>
        </>
       
    )
}

export default Header