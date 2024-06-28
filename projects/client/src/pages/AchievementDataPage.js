import React from 'react'
import { AppPageFrame } from './AppPageFrame'
import { IconButton, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { TbFileText } from 'react-icons/tb';

export const AchievementDataPage = () => {
    const currentPage = "dataprestasi"
    return (
        <AppPageFrame currentPage={currentPage} role="employee"><Text as={"b"} fontSize={"3xl"}>Data Prestasi</Text>
            <TableContainer height={"100%"} width={"100%"}>
                <Table colorScheme={"black"} variant='simple'>
                    <TableCaption>Semua data telah ditampilkan</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nama Kejuaraan</Th>
                            <Th>Cabang Kejuaraan</Th>
                            <Th>Peringkat Prestasi</Th>
                            <Th>Tingkat Kejuaraan</Th>
                            <Th>Lokasi Kejuaraan</Th>
                            <Th>Penyelenggara Kejuaraan</Th>
                            <Th>Tahun Prestasi</Th>
                            <Th>Peraih Prestasi</Th>
                            <Th>Dokumen</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Olimpiade Sains Nasional (OSN) SMA</Td>
                            <Td>Biologi</Td>
                            <Td>Juara 2</Td>
                            <Td>Kabupaten/Kota Provinsi Kepulauan Riau</Td>
                            <Td>Batam</Td>
                            <Td>Kementerian Pendidikan dan Kebudayaan</Td>
                            <Td>2022</Td>
                            <Td>Catherine Jonan, Chairani Kalla</Td>
                            <Td><IconButton aria-label='Open document' colorScheme='teal' icon={<TbFileText />}/></Td>
                        </Tr>
                        <Tr>
                            <Td>Musabaqah Tilawatil Qur'an (MTQ) Ke-IX</Td>
                            <Td>Cabang Tilawah Golongan Remaja (Qori'ah)</Td>
                            <Td>Juara 1</Td>
                            <Td>Kabupaten/Kota Bengkalis Provinsi Riau</Td>
                            <Td>Duri</Td>
                            <Td>Lembaga Tilawatil Qur'an Kabupaten Bengkalis</Td>
                            <Td>2019</Td>
                            <Td>Izzat Assegaf</Td>
                            <Td><IconButton aria-label='Open document' colorScheme='teal' icon={<TbFileText />}/></Td>
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
