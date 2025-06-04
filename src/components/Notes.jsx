import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const Notes = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col w-full '>
                <div className='flex w-full justify-end items-center'>
                    <DeleteOutlined
                        className='py-1 px-1 cursor-pointer hover:bg-gray-200 transition-all ease-in rounded-full'
                        style={{ color: 'red' }}
                    />
                </div>

                <TextArea
                    autoSize={{ minRows: 10, maxRows: 20 }}
                    style={{ fontSize: '1.3rem' }}

                    allowClear
                />
            </div>

        </div>
    )
}

export default Notes