import { Flex, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../components/navigation/Navbar'
import { Sidebar } from '../components/navigation/Sidebar'

export const AppPageFrame = (props) => {
  return (
    <Flex minH={"100vh"} bg={(props.role === "employee") ? "orange.100" : "#CEE3F0"}>
      <VStack gap={0} width={"100%"}>
        <Navbar type="guest"/>
        <HStack height={"100%"} width={"100%"}>
          <Sidebar currentPage={props.currentPage}/> {/* Sidebar has a width of 15% */}
          <VStack alignItems={"flex-start"} height={"100%"} padding={5} width={"85%"}>
            {props.children}
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  )
}
