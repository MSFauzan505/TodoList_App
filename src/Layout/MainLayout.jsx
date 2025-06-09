import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MenuOutlined } from '@ant-design/icons'
import Sidebar from '../components/ui/Sidebar'

const MainLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <div className='relative h-screen overflow-hidden bg-gray-50'>
      {/* Tombol toggle sidebar di mobile */}
      <button
        className='fixed top-4 right-4 z-50 md:hidden bg-white shadow p-2 rounded'
        onClick={() => setIsMobileOpen(true)}
      >
        <MenuOutlined style={{ fontSize: '1.5rem' }} />
      </button>

      {/* Backdrop */}
      {isMobileOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40 md:hidden'
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Layout utama */}
      <div className='flex h-full'>
        <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

        <main className='flex-1 overflow-y-auto p-4 mt-10 md:mt-1 '>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
