import React from 'react'
import Notes from '../components/ui/Notes'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const StickWallPage = () => {
  return (
    <div className='flex flex-col gap-8 h-full '>
      {/* Title page */}
      <div className='flex items-center gap-10'>
        <h1 className='text-5xl font-bold'>Stick Wall</h1>
      </div>

      {/* notes */}
      <div className='p-5 border border-gray-200 rounded-xl min-h-[400px] w-full overflow-y-auto  '>
        <div className='grid grid-cols-4 gap-5 '>
          <Notes />
          <Notes />
          <Notes />
          <div className='flex justify-center items-center  p-10'>
              <Button
                styles={{width: '100%', height: '100%'}}
                size='large'
                
                className='flex justify-between items-center w-full  pr-2'
              >
                <PlusOutlined/>
                Add new note
              </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickWallPage