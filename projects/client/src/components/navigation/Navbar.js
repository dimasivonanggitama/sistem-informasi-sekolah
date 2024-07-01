import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = (props) => {
    const navigate = useNavigate();
    return (
        <HStack justifyContent={"flex-start"} bgColor={"lightgrey"} height={"15%"} width={"100%"} border="1px" borderColor="gray.300" boxShadow="md" paddingX={5}>
            <Button bgImage={"main.png"} bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"100%"} height={"100%"} width={"15%"} onClick={() => navigate("/")} variant="link"></Button>
            { props.type === "guest" ?
                <Button colorScheme='blue' onClick={() => navigate("login")}>Login</Button>
            : <></> }
        </HStack>
    )
}
