import { Box, Button, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/navigation/Navbar'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Flex bg={"pink"}>
      <VStack width={"100%"}>
        <Navbar type="guest"/>
        <Stack height={"435px"} width={"100%"} bgColor={"red"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>Carousel</Text></Stack>
        <Stack height={"435px"} width={"100%"} bgColor={"blue"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>Video</Text></Stack>
        <Stack height={"400px"} width={"100%"} bgColor={"cyan"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>Fasilitas</Text></Stack>
        <Stack height={"400px"} width={"100%"} bgColor={"red"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>Program</Text></Stack>
        <Stack height={"400px"} width={"100%"} bgColor={"purple"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>Instagram Highlights</Text></Stack>
        <Stack height={"400px"} width={"100%"} bgColor={"grey"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>Galeri</Text></Stack>
        <Stack height={"400px"} width={"100%"} bgColor={"green"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>What people say</Text></Stack>
        <Stack height={"400px"} width={"100%"} bgColor={"orange"} justifyContent={"center"} alignItems={"center"}><Text as="b" fontSize={"6xl"} color={"white"}>Footer</Text></Stack>
      </VStack>
    </Flex>
  )
}

export default LandingPage