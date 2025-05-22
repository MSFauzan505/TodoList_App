import { CalendarOutlined, DoubleRightOutlined, LogoutOutlined, MenuOutlined, PaperClipOutlined, PlusOutlined, SearchOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useState } from 'react'

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className={`h-full flex flex-col justify-between ${isCollapsed ? 'bg-gray-50' : ' bg-gray-100'} p-4 rounded-2xl transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[350px]'}`}>
            <div className='flex flex-col gap-4'>
                {/* Menu */}
                <div className='flex justify-between'>
                    {!isCollapsed && <h1 className='text-2xl font-bold'>Menu</h1>}
                    <MenuOutlined
                        className='cursor-pointer'
                        style={{ fontSize: '1.5rem' }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    />
                </div>
                {/* search */}
                {!isCollapsed && (
                    <Input placeholder='Search' size='large' variant='outlined' addonBefore={<SearchOutlined />} />
                )}

                {/* Task */}
                {!isCollapsed && (
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-lg font-semibold'>Tasks</h1>
                        <Button
                            type='text'
                            icon={<DoubleRightOutlined />}
                            className='flex justify-between items-center w-full pr-2'
                        >
                            <span className='flex-1 text-left'>Upcoming</span>
                            <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                        </Button>

                        <Button
                            type='text'
                            icon={<UnorderedListOutlined />}
                            className='flex justify-between items-center w-full pr-2'
                        >
                            <span className='flex-1 text-left'>Today</span>
                            <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                        </Button>
                        <Button
                            type='text'
                            icon={<CalendarOutlined />}
                            className='flex justify-between items-center w-full pr-2'
                        >
                            <span className='flex-1 text-left'>Calender</span>
                            <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                        </Button>
                        <Button
                            type='text'
                            icon={<PaperClipOutlined />}
                            className='flex justify-between items-center w-full pr-2'
                        >
                            <span className='flex-1 text-left'>Sticky Wall</span>
                            <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                        </Button>

                        <div className='py-2'>
                            <hr className='text-gray-300' />
                        </div>

                        {/* List */}
                        <div className='flex flex-col gap-2 '>
                            <h1 className='text-lg font-semibold'>Lists</h1>
                            <Button
                                type='text'
                                icon={<div className='bg-red-400 w-4 h-4 rounded'></div>}
                                className='flex justify-between items-center w-full pr-2'
                            >
                                <span className='flex-1 text-left'>Personal</span>
                                <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                            </Button>

                            <Button
                                type='text'
                                icon={<div className='bg-yellow-400 w-4 h-4 rounded'></div>}
                                className='flex justify-between items-center w-full pr-2'
                            >
                                <span className='flex-1 text-left'>Work</span>
                                <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                            </Button>

                            <Button
                                type='text'
                                icon={<div className='bg-green-400 w-4 h-4 rounded'></div>}
                                className='flex justify-between items-center w-full pr-2'
                            >
                                <span className='flex-1 text-left'>Family</span>
                                <span className='bg-gray-50 rounded text-sm px-2 py-0.5'>12</span>
                            </Button>

                            <Input placeholder='Create a new list' size='large' variant='borderless' addonBefore={<PlusOutlined />} />

                            <div className='py-2'>
                                <hr className='text-gray-300' />
                            </div>
                            {/* Tags */}
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold'>Tags</h1>
                                <div className='flex flex-wrap gap-2'>
                                    <Button color='purple' variant='solid'>Tag 1</Button>
                                    <Button color='yellow' variant='solid'>Tag 2</Button>
                                    <Button color='pink' variant='solid'>Tag 3</Button>
                                    <Button color='blue' variant='solid'>Tag 4</Button>
                                    <Button variant='outlined' icon={<PlusOutlined />}>Add Tag</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

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
                    >
                        <span className='flex-1 text-left'>Sign out</span>

                    </Button>
                </div>
            )}

        </div>
    )
}

export default Sidebar