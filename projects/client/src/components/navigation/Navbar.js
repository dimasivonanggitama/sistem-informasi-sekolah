import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <HStack justifyContent={"flex-start"} bgColor="grey" padding={5} width={"100%"}>
        <Text>Navigation Bar</Text>
    </HStack>
  )
}
