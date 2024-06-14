import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
     const navigate = useNavigate();
    return (
        <HStack justifyContent={"flex-start"} bgColor={"lightgrey"} height={"18%"} width={"100%"} padding={5}>
            <Button bgImage={"main.png"} bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"100%"} height={"100%"} width={"15%"} onClick={() => navigate("/")} variant="link"></Button>
        </HStack>
    )
}
