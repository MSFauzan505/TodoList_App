import { PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const DrawerTask = ({ open, onClose, showDrawer }) => {
    return (
        <>
            <RightOutlined
                onClick={showDrawer}
                className='flex justify-end cursor-pointer flex-3'
            />
            {/* drawer ant */}
            <Drawer
                title={<h1 className='text-4xl font-bold ml-3'>Task:</h1>}
                width={720}
                onClose={onClose}
                open={open}
                style={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                footer={
                    <div className='flex w-full p-3 gap-3'>
                        <Button onClick={onClose} variant='outlined' color='danger' className='w-full' size='large'>Cancel</Button>
                        <Button onClick={onClose} type='primary' className='w-full' size='large'>
                            Submit
                        </Button>
                    </div>
                }
            >
                <Form layout='vertical' className='flex flex-col' hideRequiredMark>
                    {/* title task */}
                    <div className='flex flex-col '>
                        <Form.Item
                            name={'Title'}
                            rules={[{ required: true, message: 'Please enter your title task' }]}
                        >
                            <Input size='large' placeholder='Title task' />
                        </Form.Item>
                    </div>
                    {/* description */}
                    <div className='flex flex-col '>
                        <Form.Item
                            name={'Description'}
                            rules={[{ required: false }]}
                        >
                            <TextArea placeholder='Description' />
                        </Form.Item>
                    </div>
                    {/* list */}
                    <div className='flex flex-col '>
                        <Form.Item
                            name={'Date'}
                            rules={[{ required: false }]}
                        >
                            <div className='flex items-center gap-4'>
                                <h1 className='text-xl w-[100px] font-semibold'>List</h1>
                                <Select size='large' style={{ width: '200px' }} placeholder="Select a list">
                                    <Select.Option value='Personal'>Personal</Select.Option>
                                    <Select.Option value='Work'>Work</Select.Option>
                                    <Select.Option value='Family'>Family</Select.Option>
                                </Select>
                            </div>
                        </Form.Item>
                    </div>
                    {/* date */}
                    <div className='flex flex-col'>
                        <Form.Item
                            name={'Date'}
                            rules={[{ required: false }]}
                        >
                            <div className='flex items-center gap-4'>
                                <h1 className='text-xl w-[100px] font-semibold'>Due Date</h1>
                                <DatePicker.RangePicker
                                    size='large'

                                />
                            </div>
                        </Form.Item>
                    </div>
                    {/* tags */}
                    <div className='flex flex-col '>
                        <Form.Item
                            name={'Date'}
                            rules={[{ required: false }]}
                        >
                            <div className='flex items-start gap-4'>
                                <h1 className='text-xl w-[100px] font-semibold'>Tags</h1>
                                <div className='flex gap-3 flex-wrap w-72'>
                                    <Button size='large' color='purple' variant='solid'>Tag 1</Button>
                                    <Button size='large' color='yellow' variant='solid'>Tag 2</Button>
                                    <Button size='large' color='pink' variant='solid'>Tag 3</Button>
                                    <Button size='large' color='blue' variant='solid'>Tag 4</Button>
                                    <Button size='large' variant='outlined' icon={<PlusOutlined />}>Add tag</Button>
                                </div>
                            </div>
                        </Form.Item>
                    </div>

                    {/* subtask */}
                    <div className='flex flex-col '>
                        <Form.Item
                            name={'Date'}
                            label={<h1 className='text-2xl font-bold'>Subtask:</h1>}
                            rules={[{ required: false }]}
                        >
                            <div className='flex flex-col items-start'>
                                <Input
                                    placeholder='Create a new subtask'
                                    size='large'
                                    className='border-b border-b-gray-200'
                                    variant='borderless'
                                    addonBefore={<PlusOutlined />}
                                />

                                <Checkbox
                                    className='w-full hover:bg-gray-100 '
                                    style={{
                                        fontSize: '1.1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.5rem',
                                        padding: '.6rem',
                                        borderRadius: '8px',
                                        transition: 'all .2s ease-in-out'
                                    }}
                                >
                                    Task 1
                                </Checkbox>

                                <Checkbox
                                    className='w-full hover:bg-gray-100 '
                                    style={{
                                        fontSize: '1.1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.5rem',
                                        padding: '.6rem',
                                        borderRadius: '8px',
                                        transition: 'all .2s ease-in-out'
                                    }}
                                >
                                    Task 1
                                </Checkbox>

                                <Checkbox
                                    className='w-full hover:bg-gray-100 '
                                    style={{
                                        fontSize: '1.1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '.5rem',
                                        padding: '.6rem',
                                        borderRadius: '8px',
                                        transition: 'all .2s ease-in-out'
                                    }}
                                >
                                    Task 1
                                </Checkbox>
                            </div>
                        </Form.Item>
                    </div>

                </Form>

            </Drawer>
        </>
    )
}

export default DrawerTask