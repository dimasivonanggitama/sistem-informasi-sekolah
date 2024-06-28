import React from 'react'
import { AppPageFrame } from './AppPageFrame';
import { Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

export const EmployeeDataPage = () => {
    const currentPage = "datakaryawan";
    return (
        <AppPageFrame currentPage={currentPage} role="employee">
            <Text as={"b"} fontSize={"3xl"}>Data Karyawan</Text>
            <TableContainer height={"100%"} width={"100%"}>
            <Table colorScheme={"black"} variant='simple'>
                <TableCaption>Semua data telah ditampilkan</TableCaption>
                <Thead>
                <Tr>
                    <Th>Nama Karyawan</Th>
                    <Th>NIK</Th>
                    <Th>Alamat</Th>
                    <Th>Nomor Telepon</Th>
                    <Th>Posisi</Th>
                    <Th>Jabatan Struktural</Th>
                    <Th>Status</Th>
                    <Th>Tahun Masuk</Th>
                    <Th>Tahun Keluar</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>Budi Gunadi Sadikin</Td>
                    <Td>2024062804</Td>
                    <Td>Jl. Lingkar</Td>
                    <Td>081234567893</Td>
                    <Td>Guru Kimia</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Ignasius Djonan</Td>
                    <Td>2024062805</Td>
                    <Td>Jl. Siak</Td>
                    <Td>081234567894</Td>
                    <Td>Guru Ekonomi</Td>
                    <Td>-</Td>
                    <Td>Tidak Aktif</Td>
                    <Td>2020</Td>
                    <Td>2023</Td>
                </Tr>
                <Tr>
                    <Td>Nadiem Anwar Makarim</Td>
                    <Td>2024062801</Td>
                    <Td>Jl. Pipa Air Bersih</Td>
                    <Td>081234567890</Td>
                    <Td>Guru TIK</Td>
                    <Td>Kepala Sekolah</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Siti Nurbaya Bakar</Td>
                    <Td>2024062803</Td>
                    <Td>Jl. Jend. Sudirman</Td>
                    <Td>081234567892</Td>
                    <Td>Guru Biologi</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Sri Mulyani</Td>
                    <Td>2024062802</Td>
                    <Td>Jl. Hangtuah</Td>
                    <Td>081234567891</Td>
                    <Td>Guru Ekonomi</Td>
                    <Td>Staff Keuangan</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Yaqut Cholil Qoumas</Td>
                    <Td>2024062806</Td>
                    <Td>081234567895</Td>
                    <Td>Jl. Siak</Td>
                    <Td>Guru Agama</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Agus Harimurti Yudhoyono</Td>
                    <Td>2024062807</Td>
                    <Td>081234567896</Td>
                    <Td>Jl. Aman</Td>
                    <Td>-</Td>
                    <Td>Staff TU</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Arifin Tasrif</Td>
                    <Td>2024062808</Td>
                    <Td>081234567897</Td>
                    <Td>Jl. Sultan Syarif Kasim</Td>
                    <Td>Guru Fisika</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Yasonna Hamonangan Laoly</Td>
                    <Td>2024062809</Td>
                    <Td>081234567898</Td>
                    <Td>Jl. Tribata</Td>
                    <Td>Guru Kewarganegaraan</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Mochamad Basuki Hadimoeljono</Td>
                    <Td>2024062810</Td>
                    <Td>081234567899</Td>
                    <Td>Jl. Nusantara</Td>
                    <Td>Guru Geografi</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Tri Rismaharini</Td>
                    <Td>2024062811</Td>
                    <Td>081234567890</Td>
                    <Td>Jl. Mawar</Td>
                    <Td>Guru Sosiologi</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Abdul Halim Basuta</Td>
                    <Td>2024062812</Td>
                    <Td>08123456791</Td>
                    <Td>Jl. Desa Harapan</Td>
                    <Td>Janitor</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Syarif Adi Hasan</Td>
                    <Td>2024062813</Td>
                    <Td>08123456792</Td>
                    <Td>Jl. Asrama Tribata</Td>
                    <Td>Satpam</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
                </Tr>
                <Tr>
                    <Td>Fatma Dhien Sumarmo</Td>
                    <Td>2024062814</Td>
                    <Td>08123456793</Td>
                    <Td>Jl. Jati</Td>
                    <Td>Petugas Kantin</Td>
                    <Td>-</Td>
                    <Td>Aktif</Td>
                    <Td>2024</Td>
                    <Td>-</Td>
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
