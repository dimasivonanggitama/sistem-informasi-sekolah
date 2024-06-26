import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Sidebar = (props) => {
  return (
    <VStack alignItems={"flex-start"} bgColor={"lightgrey"} border="1px" borderColor="gray.300" borderTopColor={"gray"} borderTopStyle={"dashed"} boxShadow="md" height={"100%"} width={"15%"}>
      <Button justifyContent={"flex-start"} _hover={{background: "black", color: "white"}} variant={"ghost"} width={"100%"}><Text fontStyle={"italic"}>Manajemen Data</Text></Button>
      <VStack alignItems={"flex-start"} gap={0} width={"100%"}>
        <Button justifyContent={"flex-start"} bgColor={"orange.200"} border={"1px"} borderColor={"gray"} _hover={{background: "orange.200", color: "black"}} variant={"solid"} width={"100%"}><Text paddingLeft={"10%"}>Data Siswa</Text></Button>
        <Button justifyContent={"flex-start"} _hover={{background: "black", color: "white"}} variant={"ghost"} width={"100%"}><Text paddingLeft={"10%"}>Data Orang Tua</Text></Button>
        <Button justifyContent={"flex-start"} _hover={{background: "black", color: "white"}} variant={"ghost"} width={"100%"}><Text paddingLeft={"10%"}>Data Karyawan</Text></Button>
      </VStack>
    </VStack>
  )
}
