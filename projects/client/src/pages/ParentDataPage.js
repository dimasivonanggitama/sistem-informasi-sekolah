import React from 'react'
import { AppPageFrame } from './AppPageFrame'
import { Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

export const ParentDataPage = () => {
  var currentPage = "dataorangtua";
  return (
    <AppPageFrame currentPage={currentPage} role="employee">
      <Text as={"b"} fontSize={"3xl"}>Data Orang Tua / Wali</Text>
      <TableContainer height={"100%"} width={"100%"}>
        <Table colorScheme={"black"} variant='simple'>
          <TableCaption>Semua data telah ditampilkan</TableCaption>
          <Thead>
            <Tr>
              <Th>Nama Orang tua / Wali</Th>
              <Th>Pekerjaan Orang tua / Wali</Th>
              <Th>Status Orang tua / Wali</Th>
              <Th>Alamat Orang tua / Wali</Th>
              <Th>No. Telpon Orang tua / Wali</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Addie MS</Td>
              <Td>Musisi</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567891</Td>
              <Td>Jl. Rangau</Td>
            </Tr>
            <Tr>
              <Td>Chairul Tanjung</Td>
              <Td>Wiraswasta</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567897</Td>
              <Td>Jl. Jend. Sudirman</Td>
            </Tr>
            <Tr>
              <Td>Ganjar Pranowo</Td>
              <Td>Politikus</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567894</Td>
              <Td>Jl. Bathin Betuah</Td>
            </Tr>
            <Tr>
              <Td>Ignasius Djonan</Td>
              <Td>Pegawai Swasta</Td>
              <Td>Ayah Kandung</Td>
              <Td>Jl. Siak</Td>
              <Td>081234567913</Td>
            </Tr>
            <Tr>
              <Td>Joko Widodo</Td>
              <Td>Presiden</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567890</Td>
              <Td>Jl. Aman</Td>
            </Tr>
            <Tr>
              <Td>Jusuf Kalla</Td>
              <Td>Pegawai Swasta</Td>
              <Td>Ayah Kandung</Td>
              <Td>Jl. Sultan Syarif Kasim</Td>
              <Td>081234567911</Td>
            </Tr>
            <Tr>
              <Td>Mochamad Ridwan Kamil</Td>
              <Td>Politikus</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567913</Td>
              <Td>Jl. Lingkar</Td>
            </Tr>
            <Tr>
              <Td>Nadiem Makarim</Td>
              <Td>Guru</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567912</Td>
              <Td>Jl. Pipa Air Bersih</Td>
            </Tr>
            <Tr>
              <Td>Najwa Shihab</Td>
              <Td>Presenter</Td>
              <Td>Ibu Kandung</Td>
              <Td>081234567894</Td>
              <Td>Jl. Mawar</Td>
            </Tr>
            <Tr>
              <Td>Sri Sultan Hamengkubuwono X</Td>
              <Td>Gubernur</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567910</Td>
              <Td>Jl. Desa Harapan</Td>
            </Tr>
            <Tr>
              <Td>Nicke Widyawati</Td>
              <Td>Pegawai Negeri</Td>
              <Td>Ibu Kandung</Td>
              <Td>081234567895</Td>
              <Td>Jl. Hangtuah</Td>
            </Tr>
            <Tr>
              <Td>Raffi Farid Ahmad</Td>
              <Td>Selebritis</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567898</Td>
              <Td>Jl. Kayangan</Td>
            </Tr>
            <Tr>
              <Td>Ruben Samuel Onsu</Td>
              <Td>Selebritis</Td>
              <Td>Wali</Td>
              <Td>Jl. Asrama Tribata</Td>
              <Td>081234567893</Td>
            </Tr>
            <Tr>
              <Td>Syamsuar</Td>
              <Td>Gubernur</Td>
              <Td>Ayah Kandung</Td>
              <Td>081234567912</Td>
              <Td>Jl. Jati</Td>
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
