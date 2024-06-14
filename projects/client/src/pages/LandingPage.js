import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components/navigation/Navbar'


const LandingPage = () => {
  return (
    <Flex minH={"100vh"} bg="pink">
      <VStack width={"100%"}>
        <Navbar />
        <Text textColor={"white"}>This is LandingPage</Text>
      </VStack>
    </Flex>
  )
}

export default LandingPage