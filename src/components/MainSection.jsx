import { CalendarOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Checkbox, Input } from 'antd'
import React from 'react'

const MainSection = () => {
  return (
    <div className='flex flex-col gap-8 p-2 mx-4 mt-4 w-full'>
      {/* Title page */}
      <div className='flex items-center gap-10'>
        <h1 className='text-5xl font-bold'>Today</h1>
        <span className='border border-gray-200 p-3 rounded text-5xl'>12</span>
      </div>

      {/* Input Task */}
      <div className='flex flex-col gap-2'>
        <Input
          placeholder='Add a task'
          size='large'
          variant='outlined'
          addonBefore={<PlusOutlined />}
        />
      {/* Tasks */}
        <div className='flex flex-col border-b hover:bg-gray-100 transition-all border-gray-200 py-3 px-2'>
          <div className='flex justify-between w-full'>
            <Checkbox className='h-full w-full'
              style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              Task 1
            </Checkbox>
            <RightOutlined />
          </div>

          <div className='flex gap-5 ml-10'>
            <span className='flex items-center text-sm gap-2'>
              <CalendarOutlined />
              12-12-2024
            </span>
            <span className='flex items-center text-sm gap-2'>
              <span className='bg-gray-200 rounded text-sm px-2 py-0.5'>3</span>
              <span>Subtasks</span>
            </span>
            <span className='flex items-center text-sm gap-2'>
              <span className='bg-red-400 rounded text-sm px-2 py-2'></span>
              <span>Personal</span>
            </span>
          </div>
        </div>

         <div className='flex flex-col border-b hover:bg-gray-100 transition-all border-gray-200 py-3 px-2'>
          <div className='flex justify-between w-full'>
            <Checkbox className='h-full w-full'
              style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              Task 2
            </Checkbox>
            <RightOutlined />
          </div>

          <div className='flex gap-5 ml-10'>
            <span className='flex items-center text-sm gap-2'>
              <CalendarOutlined />
              12-3-2025
            </span>
            <span className='flex items-center text-sm gap-2'>
              <span className='bg-gray-200 rounded text-sm px-2 py-0.5'>8</span>
              <span>Subtasks</span>
            </span>
            <span className='flex items-center text-sm gap-2'>
              <span className='bg-yellow-400 rounded text-sm px-2 py-2'></span>
              <span>Work</span>
            </span>
          </div>
        </div>

         <div className='flex flex-col border-b hover:bg-gray-100 transition-all border-gray-200 py-3 px-2'>
          <div className='flex justify-between w-full'>
            <Checkbox className='h-full w-full'
              style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              Task 3
            </Checkbox>
            <RightOutlined />
          </div>

          <div className='flex gap-5 ml-10'>
            <span className='flex items-center text-sm gap-2'>
              <CalendarOutlined />
              12-12-2024
            </span>
            <span className='flex items-center text-sm gap-2'>
              <span className='bg-gray-200 rounded text-sm px-2 py-0.5'>3</span>
              <span>Subtasks</span>
            </span>
            <span className='flex items-center text-sm gap-2'>
              <span className='bg-green-400 rounded text-sm px-2 py-2'></span>
              <span>Family</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainSection