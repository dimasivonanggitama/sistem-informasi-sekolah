import { Button, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { TbCheck, TbCircleFilled, TbFirstAidKit, TbInfoCircle, TbWashDry, TbX } from 'react-icons/tb'

export const AttendanceButton = (props) => {
  return (
    <Menu>
        <MenuButton 
            as={IconButton} 
            border="1px"
            borderColor="gray"
            isRound={true}
            variant='solid'
            colorScheme='gray'
            aria-label='Done'
            fontSize='20px'
            icon={<TbWashDry/>} 
            isDisabled={props.isDisabled}
        ></MenuButton>
        <MenuList>
            <MenuItem as={Button} justifyContent={"flex-start"} color={"green"} leftIcon={<TbCheck />}>
              <HStack width="100%" justifyContent={"space-between"}>
                <Text>Hadir</Text>
                <TbCircleFilled />
              </HStack>
            </MenuItem>
            <MenuItem as={Button} justifyContent={"flex-start"} color={"orange.500"} leftIcon={<TbFirstAidKit />}>
              <HStack width="100%" justifyContent={"space-between"}>
                <Text>Sakit</Text>
                <TbCircleFilled />
              </HStack>
            </MenuItem>
            <MenuItem as={Button} justifyContent={"flex-start"} color={"blue"} leftIcon={<TbInfoCircle />}>
              <HStack width="100%" justifyContent={"space-between"}>
                <Text>Izin</Text>
                <TbCircleFilled />
              </HStack>
            </MenuItem>
            <MenuItem as={Button} justifyContent={"flex-start"} color={"red"} leftIcon={<TbX />}>
              <HStack width="100%" justifyContent={"space-between"}>
                <Text>Alfa</Text>
                <TbCircleFilled/>
              </HStack>
            </MenuItem>
        </MenuList>
    </Menu>
  )
}
