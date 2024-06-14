import { Box, Collapse, Text } from '@chakra-ui/react'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

export const InputWithError = (props) => {
  const bool = props.errors && props.touched;
  const margin = (props.margin)? props.margin : 5;
  const marginBottom = (props.marginBottom)? props.marginBottom : 1;
  const padding = (props.padding)? props.padding : 1;
  return (
    <Box
      borderRadius="10"
      bgColor={bool? 'red' : 'transparent'}
      color="white"
      margin={margin}
      marginBottom={marginBottom}
      padding={padding}
      width={(props.width)? props.width : "100%"}
      in={bool}
      sx={{
          "transition": "background-color 0.5s ease-out"
      }}
      alignItems={"start"}
      textAlign={"left"}
    >
      <InputGroup size='md'>
        <Input
          id={props.id}
          name={props.name}
          pr='4.5rem'
          type={props.type === 'password' ? (props.show ? 'text' : 'password') : props.type}
          placeholder={props.type === 'password' ? (props.isConfirm? 'Konfirmasi kata sandi' : 'Kata sandi') : props.placeholder}
          bgColor="white" 
          borderColor={"grey"} 
          color={"black"}
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />
        {props.type === 'password' ? 
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={props.handleClick} colorScheme={props.show? "red" : "gray"} >
              {props.show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
          : <></>}
      </InputGroup>
      <Collapse in={bool}>
        <Text fontSize={"md"} paddingLeft="1">{props.errors}</Text>
      </Collapse>
    </Box>
  )
}