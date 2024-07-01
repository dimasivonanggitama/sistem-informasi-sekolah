import React from 'react'
import { AppPageFrame } from './AppPageFrame'
import { IconButton, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { TbCheck, TbWashDry } from 'react-icons/tb'

export const StudentAttendancePage = () => {
    return (
        <AppPageFrame currentPage="studentattendance">
            <Text as={"b"} fontSize={"3xl"}>Kehadiran Siswa</Text>
            <Text as={"b"} fontSize={"xl"}><Text as={"i"}>Matematika</Text></Text>
            <TableContainer height={"100%"} width={"100%"}>
                <Table colorScheme={"black"} variant='simple'>
                <TableCaption>Semua data telah ditampilkan</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nama Siswa</Th>
                        <Th>25 Juni 2024</Th>
                        <Th>26 Juni 2024</Th>
                        <Th>27 Juni 2024</Th>
                        <Th>01 Juli 2024</Th>
                        <Th>02 Juli 2024</Th>
                        <Th>03 Juli 2024</Th>
                        <Th>04 Juli 2024</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Betrand Peto Putra Onsu</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='gray' aria-label='Unchecked' fontSize='20px' icon={<TbWashDry />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='gray' aria-label='Unchecked' fontSize='20px' icon={<TbWashDry />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' border={"1px"} borderColor={"gray"} colorScheme='gray' aria-label='Unchecked' fontSize='20px' icon={<TbWashDry />}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Chairani Kalla</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='gray' aria-label='Unchecked' fontSize='20px' icon={<TbWashDry />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='gray' aria-label='Unchecked' fontSize='20px' icon={<TbWashDry />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' border={"1px"} borderColor={"gray"} colorScheme='gray' aria-label='Unchecked' fontSize='20px' icon={<TbWashDry />}/></Td>
                    </Tr>
                </Tbody>
                    <Tfoot>
                        <Tr>
                        
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </AppPageFrame>
    )
}
