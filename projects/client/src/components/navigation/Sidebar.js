import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidebar = (props) => {
  const navigate = useNavigate();
  var bgColorDataKaryawan, bgColorDataOrangTua, bgColorDataPrestasi, bgColorDataSiswa = "transparent";
  var borderColorDataKaryawan, borderColorDataOrangTua, borderColorDataPrestasi, borderColorDataSiswa = "transparent";
  var defaultIndex = -1;
  var variantDataKaryawan, variantDataOrangTua, variantDataPrestasi, variantDataSiswa = "ghost";

  switch(props.currentPage) {
    case "datasiswa":
      bgColorDataKaryawan = "transparent";
      bgColorDataOrangTua = "transparent";
      bgColorDataPrestasi = "transparent";
      bgColorDataSiswa = "orange.200";
      borderColorDataKaryawan = "transparent";
      borderColorDataOrangTua = "transparent";
      borderColorDataPrestasi = "transparent";
      borderColorDataSiswa = "gray";
      defaultIndex = 0;
      variantDataKaryawan = "ghost";
      variantDataOrangTua = "ghost";
      variantDataPrestasi = "ghost";
      variantDataSiswa = "solid";
      break;
    case "datakaryawan":
      bgColorDataKaryawan = "orange.200";
      bgColorDataOrangTua = "transparent";
      bgColorDataPrestasi = "transparent";
      bgColorDataSiswa = "transparent";
      borderColorDataKaryawan = "gray";
      borderColorDataOrangTua = "transparent";
      borderColorDataPrestasi = "transparent";
      borderColorDataSiswa = "transparent";
      defaultIndex = 3;
      variantDataKaryawan = "solid";
      variantDataOrangTua = "ghost";
      variantDataPrestasi = "ghost";
      variantDataSiswa = "ghost";
      break;
    case "dataorangtua":
      bgColorDataKaryawan = "transparent";
      bgColorDataOrangTua = "orange.200";
      bgColorDataPrestasi = "transparent";
      bgColorDataSiswa = "transparent";
      borderColorDataKaryawan = "transparent";
      borderColorDataOrangTua = "gray";
      borderColorDataPrestasi = "transparent";
      borderColorDataSiswa = "transparent";
      defaultIndex = 2;
      variantDataKaryawan = "ghost";
      variantDataOrangTua = "solid";
      variantDataPrestasi = "ghost";
      variantDataSiswa = "ghost";
      break;
    case "dataprestasi":
      bgColorDataKaryawan = "transparent";
      bgColorDataOrangTua = "transparent";
      bgColorDataPrestasi = "orange.200";
      bgColorDataSiswa = "transparent";
      borderColorDataKaryawan = "transparent";
      borderColorDataOrangTua = "transparent";
      borderColorDataPrestasi = "gray";
      borderColorDataSiswa = "transparent";
      defaultIndex = 1;
      variantDataKaryawan = "ghost";
      variantDataOrangTua = "ghost";
      variantDataPrestasi = "solid";
      variantDataSiswa = "ghost";
      break;
    default: 
      bgColorDataKaryawan = bgColorDataOrangTua = bgColorDataPrestasi = bgColorDataSiswa = "transparent";
      borderColorDataKaryawan = borderColorDataOrangTua = borderColorDataPrestasi = borderColorDataSiswa = "transparent";
      defaultIndex = -1;
      variantDataKaryawan = variantDataOrangTua = variantDataPrestasi = variantDataSiswa = "ghost";
      break;
  }
  return (
    <VStack alignItems={"flex-start"} bgColor={"lightgrey"} border="1px" borderColor="gray.300" boxShadow="md" height={"100%"} width={"15%"}>
      <Accordion borderColor={"grey"} width={"100%"} defaultIndex={[defaultIndex]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton bgColor={"orange.200"} _hover={{background: "orange.300", color: "black"}} >
              <Box as='span' flex='1' textAlign='left'>
                <Text as={"u"}>Manajemen Data</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack alignItems={"flex-start"} gap={0} width={"100%"}>
              <Button justifyContent={"flex-start"} bgColor={bgColorDataSiswa} border={"1px"} borderColor={borderColorDataSiswa} _hover={{background: "orange.300", color: "black"}} onClick={() => navigate("/datasiswa")} variant={variantDataSiswa} width={"100%"}><Text paddingLeft={"10%"}>Data Siswa</Text></Button>
              <Button justifyContent={"flex-start"} bgColor={bgColorDataOrangTua} border={"1px"} borderColor={borderColorDataOrangTua} _hover={{background: "orange.300", color: "black"}} onClick={() => navigate("/dataorangtua")} variant={variantDataOrangTua} width={"100%"}><Text paddingLeft={"10%"}>Data Orang Tua</Text></Button>
              <Button justifyContent={"flex-start"} bgColor={bgColorDataPrestasi} border={"1px"} borderColor={borderColorDataPrestasi} _hover={{background: "orange.300", color: "black"}} onClick={() => navigate("/dataprestasi")} variant={variantDataPrestasi} width={"100%"}><Text paddingLeft={"10%"}>Data Prestasi</Text></Button>
              <Button justifyContent={"flex-start"} bgColor={bgColorDataKaryawan} border={"1px"} borderColor={borderColorDataKaryawan} _hover={{background: "orange.300", color: "black"}} onClick={() => navigate("/datakaryawan")} variant={variantDataKaryawan} width={"100%"}><Text paddingLeft={"10%"}>Data Karyawan</Text></Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Akademik
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Button justifyContent={"flex-start"} bgColor={"orange.200"} border={"1px"} borderColor={"gray"} _hover={{background: "orange.300", color: "black"}} variant={"solid"} width={"100%"}><Text paddingLeft={"10%"}>Matematika</Text></Button>
            <Button justifyContent={"flex-start"} bgColor={"orange.200"} border={"1px"} borderColor={"gray"} _hover={{background: "orange.300", color: "black"}} variant={"solid"} width={"100%"}><Text paddingLeft={"10%"}>Ekonomi</Text></Button>
            <Button justifyContent={"flex-start"} bgColor={"orange.200"} border={"1px"} borderColor={"gray"} _hover={{background: "orange.300", color: "black"}} variant={"solid"} width={"100%"}><Text paddingLeft={"10%"}>Bahasa Indonesia</Text></Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  )
}
