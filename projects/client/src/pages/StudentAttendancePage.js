import React from 'react'
import { AppPageFrame } from './AppPageFrame'
import { IconButton, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { TbCheck, TbFirstAidKit, TbInfoCircle, TbWashDry, TbX } from 'react-icons/tb'
import { AttendanceButton } from '../components/button/AttendanceButton'

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
                        <Th>30 Juni 2024</Th>
                        <Th>01 Juli 2024</Th>
                        <Th>02 Juli 2024</Th>
                        <Th>03 Juli 2024</Th>
                        <Th>04 Juli 2024</Th>
                        <Th>05 Juli 2024</Th>
                        <Th>08 Juli 2024</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Betrand Peto Putra Onsu</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Chairani Kalla</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='blue' aria-label='Present' fontSize='20px' icon={<TbInfoCircle />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Gusti Raden Ajeng Nurastuti Wijareni</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='blue' aria-label='Present' fontSize='20px' icon={<TbInfoCircle />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='red' aria-label='Present' fontSize='20px' icon={<TbX />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Izzat Assegaf</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='orange' aria-label='Present' fontSize='20px' icon={<TbFirstAidKit />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Kaesang Pangarep</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Kevin Apriliano Sumaatmadja</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='red' aria-label='Present' fontSize='20px' icon={<TbX />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='blue' aria-label='Present' fontSize='20px' icon={<TbInfoCircle />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Muhammad Alif Fakhri</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><AttendanceButton /></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Muhammad Zikri Bintani</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' border={"1px"} borderColor={"gray"} colorScheme='gray' aria-label='Present' fontSize='20px' icon={<TbWashDry />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Muhammad Zinedine Alam Ganjar</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' border={"1px"} borderColor={"gray"} colorScheme='gray' aria-label='Present' fontSize='20px' icon={<TbWashDry />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                    </Tr>
                    <Tr>
                        <Td>Putri Indahsari Tanjung Jatikusumo</Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' colorScheme='teal' aria-label='Present' fontSize='20px' icon={<TbCheck />}/></Td>
                        <Td><IconButton isRound={true} variant='solid' border={"1px"} borderColor={"gray"} colorScheme='gray' aria-label='Present' fontSize='20px' icon={<TbWashDry />}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
                        <Td><AttendanceButton isDisabled={true}/></Td>
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
