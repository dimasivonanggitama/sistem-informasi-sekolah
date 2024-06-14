import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <HStack justifyContent={"flex-start"} bgColor={"lightgrey"} height={"18%"} width={"100%"} padding={5}>
        <Box bgImage={"main.png"} bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"100%"} height={"100%"} width={"15%"} ></Box>
        <Text>Navigation Bar</Text>
    </HStack>
  )
}
