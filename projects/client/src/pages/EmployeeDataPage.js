import React from 'react'
import { AppPageFrame } from './AppPageFrame';

export const EmployeeDataPage = () => {
    const currentPage = "datakaryawan";
    return (
        <AppPageFrame currentPage={currentPage} role="employee">

        </AppPageFrame>
    )
}
