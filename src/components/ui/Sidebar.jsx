import {
  CalendarOutlined,
  DoubleRightOutlined,
  LogoutOutlined,
  MenuOutlined,
  PaperClipOutlined,
  PlusOutlined,
  SearchOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from '../../services/auth'

const Sidebar = ({ isMobileOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const navigate = useNavigate()

  // handle signout
  const handleSignOut = async () => {
    const { error } = await signOut()
    if (error) {
      console.log('signout failed', error)
    } else {
      console.log('signout success')
      navigate('/login')
    }
  }

  const sidebarContent = (
    <div
      className={`h-full flex flex-col justify-between p-4 bg-gray-100 transition-all duration-300 ${
        isCollapsed ? 'w-[80px]' : 'w-[300px]'
      }`}
    >
      <div className='flex flex-col gap-4'>
        {/* Header */}
        <div className='flex justify-between items-center'>
          {!isCollapsed && <h1 className='text-2xl font-bold'>Menu</h1>}
          <MenuOutlined
            className='cursor-pointer'
            style={{ fontSize: '1.5rem' }}
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>

        {/* Search */}
        {!isCollapsed && (
          <Input
            placeholder='Search'
            size='large'
            variant='outlined'
            addonBefore={<SearchOutlined />}
          />
        )}

        {/* Tasks */}
        {!isCollapsed && (
          <div className='flex flex-col gap-2'>
            <h1 className='text-lg font-semibold'>Tasks</h1>

            <NavLink to='/upcoming'>
              <Button
                type='text'
                icon={<DoubleRightOutlined />}
                className='flex justify-between items-center w-full pr-2'
              >
                <span className='flex-1 text-left'>Upcoming</span>
                <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
              </Button>
            </NavLink>

            <NavLink to='/'>
              <Button
                type='text'
                icon={<UnorderedListOutlined />}
                className='flex justify-between items-center w-full pr-2'
              >
                <span className='flex-1 text-left'>Today</span>
                <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
              </Button>
            </NavLink>

            <NavLink to='/calender'>
              <Button
                type='text'
                icon={<CalendarOutlined />}
                className='flex justify-between items-center w-full pr-2'
              >
                <span className='flex-1 text-left'>Calendar</span>
                <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
              </Button>
            </NavLink>

            <NavLink to='/stickwall'>
              <Button
                type='text'
                icon={<PaperClipOutlined />}
                className='flex justify-between items-center w-full pr-2'
              >
                <span className='flex-1 text-left'>Sticky Wall</span>
                <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
              </Button>
            </NavLink>

            <hr className='my-2 border-gray-300' />

            {/* Lists */}
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-semibold'>Lists</h1>
              {['Personal', 'Work', 'Family'].map((list, i) => (
                <Button
                  key={list}
                  type='text'
                  icon={
                    <div
                      className={`w-4 h-4 rounded ${
                        i === 0
                          ? 'bg-red-400'
                          : i === 1
                          ? 'bg-yellow-400'
                          : 'bg-green-400'
                      }`}
                    ></div>
                  }
                  className='flex justify-between items-center w-full pr-2'
                >
                  <span className='flex-1 text-left'>{list}</span>
                  <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                </Button>
              ))}

              <Input
                placeholder='Create a new list'
                size='large'
                variant='borderless'
                addonBefore={<PlusOutlined />}
              />
            </div>

            <hr className='my-2 border-gray-300' />

            {/* Tags */}
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg font-semibold'>Tags</h1>
              <div className='flex flex-wrap gap-2'>
                {['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'].map((tag) => (
                  <Button key={tag} color='blue'>
                    {tag}
                  </Button>
                ))}
                <Button icon={<PlusOutlined />}>Add Tag</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom */}
      {!isCollapsed && (
        <div className='flex flex-col gap-3'>
          <Button
            type='text'
            icon={<SettingOutlined />}
            className='flex justify-between items-center w-full pr-2'
          >
            <span className='flex-1 text-left'>Setting</span>
          </Button>

          <Button
            type='text'
            icon={<LogoutOutlined />}
            className='flex justify-between items-center w-full pr-2'
            onClick={handleSignOut}
          >
            <span className='flex-1 text-left'>Sign out</span>
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Sidebar mobile (overlay) */}
      <div
        className={`fixed z-50 top-0 left-0 h-full transform transition-transform duration-300 md:hidden ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>

      {/* Sidebar desktop */}
      <div className='hidden md:block h-full'>{sidebarContent}</div>
    </>
  )
}

export default Sidebar
