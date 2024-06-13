import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Flex minH={"100vh"} bg="grey">
      <VStack width={"100%"}>
        <HStack bg="orange" justifyContent={"space-between"} minW={"100vh"} padding={5}>
          <Text>Navigation Bar</Text>
          <Button colorScheme='blue' onClick={() => navigate("loginPage")}>Login</Button>
        </HStack>
        <Text textColor={"white"}>This is LandingPage</Text>
      </VStack>
    </Flex>
  )
}

export default LandingPage