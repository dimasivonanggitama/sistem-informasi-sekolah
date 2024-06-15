import React, { useState } from "react";
import { Box, Button, Card, CardBody, CardHeader, Center, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Image, Input, InputGroup, InputRightElement, Stack, Text, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { userKeepLogin } from "../../redux/reducers/UserAuthReducer";
import { useNavigate } from "react-router-dom";
import { InputWithError } from "../components/input/InputWithError";
import { TbLock, TbLockQuestion } from 'react-icons/tb';
import { Navbar } from "../components/navigation/Navbar";
// import InputPassword from "../../components/input/InputPassword";

export const LoginPage = () => {  
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast()
  // const login = useSelector((state) => state.UserAuthReducer.login)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    identifier: Yup.string()
    .required("NIS atau NIK tidak boleh kosong!")
    .matches(
      /^[0-9]+$/,
      "Format NIS atau NIK tidak valid!"
    ),
    password: Yup.string().required("Password tidak boleh kosong!"),
  });

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.identifier);
      const isPhoneNumber = /^\d{9,14}$/.test(values.identifier);
    
      if (isEmail) {
        values.email = values.identifier;
      } else if (isPhoneNumber) {
        values.phone = values.identifier;
      }
      setIsLoading(true)
      // dispatch(userKeepLogin(values, setIsLoading, toast));
    },
  })

  return (
    <Box>
      <Flex minH={"100vh"} align={"center"} justify={"center"} bgImage={"background.jpg"} bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"cover"} filter={"blur(8px)"}></Flex>
      <Flex minH={"100vh"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} width={"100%"}>
        <VStack width={"100%"}>
          <Navbar />
        </VStack>
      </Flex>
      <Flex minH={"100vh"} align={"center"} justify={"center"} position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} width={"100%"}>
        <Card border="1px" borderColor="gray.300" boxShadow="md" minHeight="30%" width="30%">
          <CardHeader display="flex" flexDirection="column" alignItems="center" gap="5">
            <TbLock size={70}/>
            <Heading fontSize={"3xl"}>Login</Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={formik.handleSubmit}>
              <InputWithError type="text" id="identifier" name="identifier" placeholder="NIS atau NIK" bgColor="white" borderColor="grey" color="black" value={formik.values.identifier} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="0" padding="1" errors={formik.errors.identifier} touched={formik.touched.identifier} />
              <InputWithError type="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} handleClick={() => setShowPassword(!showPassword)} show={showPassword} margin="0" padding="1" errors={formik.errors.password} touched={formik.touched.password}/>
              <VStack spacing={10}>
                {/* <Button onClick={() => navigate("/forgot-password-user")} variant="link" color={"blue.400"}>Forgot password?</Button> */}
                <Button color={"blue.400"} justifyContent={"flex-start"} onClick={() => navigate("#")} variant="link" width={"100%"}><TbLockQuestion/>Lupa password?</Button>
                <Button isLoading={isLoading} loadingText="Signing in" bg={"blue.400"} color={"white"} _hover={{ bg: "blue.500" }} type="submit" width={"100%"}>Login</Button>
              </VStack>
            </form>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};
