import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = (props) => {
    const navigate = useNavigate();
    return (
        <HStack justifyContent={"center"} bgColor={"lightgrey"} border={"1px"} borderColor={"gray.300"} boxShadow={"md"} height={"100px"} width={"100%"}>
            <HStack justifyContent={"space-between"} width={"1500px"} height={"100%"} bgColor={"darkgrey"}>
                <Button bgImage={"main.png"} bgRepeat={"no-repeat"} bgSize={"contain"} height={"100%"} width={"320px"} onClick={() => navigate("/")} variant="link"></Button>
                { props.type === "guest" ?
                    <Button colorScheme='blue' onClick={() => navigate("login")}>Login</Button>
                : <></> }
            </HStack>
        </HStack>
    )
}
