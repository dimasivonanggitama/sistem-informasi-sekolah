import { Button, HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { TbSearch } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export const Navbar = (props) => {
    const navigate = useNavigate();
    return (
        <HStack justifyContent={"center"} bgColor={"lightgrey"} border={"1px"} borderColor={"gray.300"} boxShadow={"md"} height={"100px"} width={"100%"}>
            <HStack justifyContent={"space-between"} width={"1500px"} height={"100%"}>
                <Button bgImage={"main.png"} bgRepeat={"no-repeat"} bgSize={"contain"} height={"100%"} width={"320px"} onClick={() => navigate("/")} variant="link"></Button>
                <HStack borderRadius={"15"} height={"100%"} gap={1}>
                    <Button bg={"gray.200"} height={"100%"} paddingX={"5"}>Home</Button>
                    <Button bg={"transparent"} height={"100%"} paddingX={"5"}>Profil</Button>
                    <Button bg={"transparent"} height={"100%"} paddingX={"5"}>Pendidikan</Button>
                    <Button bg={"transparent"} height={"100%"} paddingX={"5"}>Program</Button>
                    <Button bg={"transparent"} height={"100%"} paddingX={"5"}>Fasilitas</Button>
                    <Button bg={"transparent"} height={"100%"} paddingX={"5"}>Informasi</Button>
                    <Button bg={"transparent"} height={"100%"} paddingX={"5"}>Kontak</Button>
                </HStack>
                <InputGroup width={"contain"}>
                    <Input bg={"white"} placeholder='Cari kata kunci...'></Input>
                    <InputRightElement>
                        <TbSearch></TbSearch>
                    </InputRightElement>
                </InputGroup>
                { props.type === "guest" ?
                    <Button colorScheme='blue' onClick={() => navigate("login")}>Login</Button>
                : <></> }
            </HStack>
        </HStack>
    )
}
