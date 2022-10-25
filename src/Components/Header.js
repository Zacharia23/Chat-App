import { Flex, Avatar, AvatarBadge, Text, Divider } from "@chakra-ui/react"

const Header = () => {

    const name = sessionStorage.getItem("user")

    return (
        <>
            <Flex w="100%">
                <Avatar size='lg' name={name} scr=''>
                    <AvatarBadge boxSize="1em" bg='green.500' />
                </Avatar>
                <Flex flexDirection="column" mx="5" justify="center">
                    <Text fontSize="lg" fontWeight="bold">
                        {name}
                    </Text>
                    <Text color="gray.500"> online </Text>

                </Flex>

            </Flex>
            <Divider py={2}/>
        </>
       
    )
}

export default Header