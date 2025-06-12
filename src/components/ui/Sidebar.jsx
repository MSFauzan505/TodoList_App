import {
    CalendarOutlined,
    DeleteOutlined,
    DoubleRightOutlined,
    LogoutOutlined,
    MehOutlined,
    MenuOutlined,
    PaperClipOutlined,
    PlusOutlined,
    SearchOutlined,
    SettingOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons'
import { Button, ColorPicker, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getCurrentUser, signOut } from '../../services/authService'
import useLists from '../../hooks/useLists'
import useMessage from '../../hooks/useMessage'

const Sidebar = ({ isMobileOpen }) => {
    const [isCollapsed] = useState(false)
    const { showMessage, contextHolder } = useMessage()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [color, setColor] = useState('#4ad483')
    const [newList, setNewList] = useState('')
    const { lists, createNewList, removeList } = useLists()

    // handle create new list
    const handleCreateList = async (newList) => {
        const finalValues = {
            title: newList || null,
            color: color || null
        }
        const { error } = await createNewList(finalValues)
        if (error) {
            showMessage.error('Failed added list')
            console.log(error)
        } else {
            showMessage.success('Success added list')
        }
        setNewList('')
        setColor('#4ad483')

    }

    // handle delete list
    const handleDeleteList = async (id)=>{ 
        const {error} = await removeList(id)
        if(error){
            showMessage.error('Failed deleted list')
            console.log(error)
        }else{
            showMessage.success('Success deleted list')
        }

    }

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

    // get username from current session
    useEffect(() => {
        const fetchUsername = async () => {
            const { username, error } = await getCurrentUser()

            if (error) {
                console.log('fetch username failed', error)
                return
            }

            if (username) {
                setUsername(username)
            }
        }
        fetchUsername()
    }, [])


    const sidebarContent = (
        <div
            className={`h-full flex flex-col justify-between p-4 bg-gray-100 transition-all duration-300 ${isCollapsed ? 'w-[80px]' : 'w-[300px]'
                }`}
        >
            <div className='flex flex-col gap-2 md:gap-4'>
                {/* Header */}
                <div className='flex justify-between items-center'>
                    {!isCollapsed && <h1 className='text-2xl font-bold'>Menu</h1>}

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

                        <hr className='md:my-2 border-gray-300' />

                        {/* Lists */}
                        {/* show message */}
                        {contextHolder}
                        <div className='flex flex-col md:gap-2'>
                            <h1 className='text-lg font-semibold'>Lists</h1>
                            {lists.length > 0 ? lists.map((list, i) => (
                                list?.id ? (<Button
                                    key={i}
                                    value={list.id}
                                    type='text'
                                    icon={
                                        <div className={`w-4 h-4 rounded`}
                                            style={{ backgroundColor: `${list.color}` }}
                                        ></div>
                                    }
                                    className='flex justify-between items-center w-full pr-2'
                                >
                                    <span className='flex-1 text-left'>{list.title}</span>
                                    <DeleteOutlined
                                        className='cursor-pointer'
                                        onClick={()=> handleDeleteList(list.id)}
                                    />
                                </Button>) : null
                            )) : <span className='flex-1 text-left'>No list yet</span>}

                            <Input
                                placeholder='Create a new list'
                                size='large'
                                variant='borderless'
                                value={newList}
                                onChange={(e) => setNewList(e.target.value)}
                                addonBefore={
                                    <ColorPicker
                                        value={color}
                                        onChange={(value) => {
                                            const hexColor = value.toHexString()
                                            setColor(hexColor)
                                        }}
                                        size='small'
                                        defaultValue="#1677ff" />}
                                addonAfter={
                                    <PlusOutlined
                                        className='cursor-pointer'
                                        onClick={() => handleCreateList(newList)}
                                    />}
                            />
                        </div>

                        <hr className='md:my-2 border-gray-300' />

                        {/* Tags */}
                        <div className='flex flex-col gap-1 md:gap-2'>
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
                <div className='flex flex-col gap-1 md:gap-3'>
                    <span className='flex gap-2 pl-3 mb-1'>
                        <MehOutlined
                            style={{ fontSize: '1.5rem' }}
                        />
                        <h1 className='text-sm md:text-lg'>{username}</h1>
                    </span>
                    <span className='h-[1px] w-full bg-gray-300'></span>
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
                className={`fixed z-50 top-0 left-0 h-full transform transition-transform duration-300 md:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'
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
