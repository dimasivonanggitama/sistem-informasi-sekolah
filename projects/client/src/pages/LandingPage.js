import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/navigation/Navbar'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Flex minH={"100vh"} bg="pink">
      <VStack width={"100%"}>
        <Navbar type="guest"/>
        <Text textColor={"white"}>This is LandingPage</Text>
      </VStack>
    </Flex>
  )
}

export default LandingPage