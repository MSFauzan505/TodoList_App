import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/ui/Sidebar'

const MainLayout = () => {
    return (
        <div className='flex h-screen p-2 overflow-y-hidden bg-gray-50 rounded'>
            <Sidebar />
            <div className='p-2 mx-4 w-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout