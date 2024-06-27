import { Box, Flex, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components/navigation/Navbar'
import { Sidebar } from '../components/navigation/Sidebar'

export const AppPageFrame = (props) => {
  return (
    <Flex minH={"100vh"} bg={(props.role === "employee") ? "orange.100" : "blue.100"}>
      <VStack gap={0} width={"100%"}>
        <Navbar type="guest"/>
        <HStack height={"100%"} width={"100%"}>
          <Sidebar/> {/* Sidebar has a width of 15% */}
          <VStack alignItems={"flex-start"} padding={5} width={"85%"}>
            {props.children}
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  )
}
