import { Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { AppPageFrame } from './AppPageFrame'

export const DataSiswaPage = () => {
  var currentPage = "datasiswa";
  return (
    <AppPageFrame currentPage={currentPage} role="employee">
      <Text as={"b"} fontSize={"3xl"}>Data Siswa</Text>
      <TableContainer height={"100%"} width={"100%"}>
        <Table colorScheme={"black"} variant='simple'>
          <TableCaption>Data telah ditampilkan semua</TableCaption>
          <Thead>
            <Tr>
              <Th>Nama Siswa</Th>
              <Th>NISN</Th>
              <Th>Tempat Lahir</Th>
              <Th>Tanggal Lahir</Th>
              <Th>Alamat</Th>
              <Th>Tahun Masuk</Th>
              <Th>Status</Th>
              <Th>No. Telpon</Th>
              <Th>Nama Orang tua / Wali</Th>
              <Th>Pekerjaan Orang tua / Wali</Th>
              <Th>Status Orang tua / Wali</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Betrand Peto Putra Onsu</Td>
              <Td>2024062707</Td>
              <Td>Manggarai</Td>
              <Td>14/03/2005</Td>
              <Td>Jl. Asrama Tribata</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567893</Td>
              <Td>Ruben Samuel Onsu</Td>
              <Td>Selebritis</Td>
              <Td>Wali</Td>
            </Tr>
            <Tr>
              <Td>Chairani Kalla</Td>
              <Td>2024062712</Td>
              <Td>Ujung Pandang</Td>
              <Td>16/10/1980</Td>
              <Td>Jl. Sultan Syarif Kasim</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567911</Td>
              <Td>Jusuf Kalla</Td>
              <Td>Pegawai Swasta</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Catherine Jonan</Td>
              <Td>2024062715</Td>
              <Td>Bandung</Td>
              <Td>05/02/2001</Td>
              <Td>Jl. Siak</Td>
              <Td>2019</Td>
              <Td>Lulus</Td>
              <Td>081234567913</Td>
              <Td>Ignasius Djonan</Td>
              <Td>Pegawai Swasta</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Emmeril Kahn Mumtadz</Td>
              <Td>2024062714</Td>
              <Td>Bandung</Td>
              <Td>23/07/1998</Td>
              <Td>Jl. Lingkar</Td>
              <Td>2022</Td>
              <Td>Tidak Aktif</Td>
              <Td>081234567913</Td>
              <Td>Mochamad Ridwan Kamil</Td>
              <Td>Politikus</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Gusti Raden Ajeng Nurastuti Wijareni</Td>
              <Td>2024062711</Td>
              <Td>Yogyakarta</Td>
              <Td>18/09/1986</Td>
              <Td>Jl. Desa Harapan</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567910</Td>
              <Td>Sri Sultan Hamengkubuwono X</Td>
              <Td>Gubernur</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Izzat Assegaf</Td>
              <Td>2024062704</Td>
              <Td>Ujung Pandang</Td>
              <Td>09/02/2001</Td>
              <Td>Jl. Mawar</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567894</Td>
              <Td>Najwa Shihab</Td>
              <Td>Presenter</Td>
              <Td>Ibu Kandung</Td>
            </Tr>
            <Tr>
              <Td>Kaesang Pangarep</Td>
              <Td>2024062701</Td>
              <Td>Surakarta</Td>
              <Td>25/12/1994</Td>
              <Td>Jl. Aman</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567890</Td>
              <Td>Joko Widodo</Td>
              <Td>Presiden</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Kevin Apriliano Sumaatmadja</Td>
              <Td>2024062702</Td>
              <Td>Jakarta</Td>
              <Td>07/04/1990</Td>
              <Td>Jl. Rangau</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567891</Td>
              <Td>Addie MS</Td>
              <Td>Musisi</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Muhammad Alif Fakhri</Td>
              <Td>2024062705</Td>
              <Td>Tasikmalaya</Td>
              <Td>25/12/1997</Td>
              <Td>Jl. Hangtuah</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567895</Td>
              <Td>Nicke Widyawati</Td>
              <Td>Pegawai Negeri</Td>
              <Td>Ibu Kandung</Td>
            </Tr>
            <Tr>
              <Td>Muhammad Zikri Bintani</Td>
              <Td>2024062713</Td>
              <Td>Bukittinggi</Td>
              <Td>23/05/1996</Td>
              <Td>Jl. Jati</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567912</Td>
              <Td>Syamsuar</Td>
              <Td>Gubernur</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Muhammad Zinedine Alam Ganjar</Td>
              <Td>2024062703</Td>
              <Td>Karanganyar</Td>
              <Td>14/12/2001</Td>
              <Td>Jl. Bathin Betuah</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567894</Td>
              <Td>Ganjar Pranowo</Td>
              <Td>Politikus</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Putri Indahsari Tanjung Jatikusumo</Td>
              <Td>2024062706</Td>
              <Td>Jakarta</Td>
              <Td>22/09/1996</Td>
              <Td>Jl. Jend. Sudirman</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567897</Td>
              <Td>Chairul Tanjung</Td>
              <Td>Wiraswasta</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Rafathar Malik Ahmad</Td>
              <Td>2024062709</Td>
              <Td>Jakarta</Td>
              <Td>15/08/2015</Td>
              <Td>Jl. Kayangan</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567898</Td>
              <Td>Raffi Farid Ahmad</Td>
              <Td>Selebritis</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Rayyanza Malik Ahmad</Td>
              <Td>2024062710</Td>
              <Td>Jakarta Pusat</Td>
              <Td>26/11/2021</Td>
              <Td>Jl. Nusantara</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567899</Td>
              <Td>Raffi Farid Ahmad</Td>
              <Td>Selebritis</Td>
              <Td>Ayah Kandung</Td>
            </Tr>
            <Tr>
              <Td>Solara Franklin Makarim</Td>
              <Td>2024062713</Td>
              <Td>Jakarta Pusat</Td>
              <Td>06/07/2020</Td>
              <Td>Jl. Pipa Air Bersih</Td>
              <Td>2024</Td>
              <Td>Aktif</Td>
              <Td>081234567912</Td>
              <Td>Nadiem Makarim</Td>
              <Td>Guru</Td>
              <Td>Ayah Kandung</Td>
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
