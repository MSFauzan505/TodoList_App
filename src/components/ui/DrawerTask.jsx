import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Checkbox, DatePicker, Drawer, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import useTodos from '../../hooks/useTodos';
import useMessage from '../../hooks/useMessage';
import useLists from '../../hooks/useLists';
import useSubTodo from '../../hooks/useSubTodo';

const { RangePicker } = DatePicker;

const DrawerTask = ({ open, onClose, showDrawer, data }) => {
    const [form] = Form.useForm();
    const [rangeDate, setRangeDate] = useState({})
    const { CreateNewTodo } = useTodos()
    const { showMessage, contextHolder } = useMessage()
    const { lists } = useLists()
    const {subTasks} = useSubTodo()

    

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                title: data.title,
                desc: data.desc,
                lists_id: data.lists_id,
                tags_id: data.tags_id
            });
        } else {
            form.resetFields();
        }
    }, [data, form]);


    // handle range picker
    const onRangeChange = (dates) => {
        if (dates) {
            const [start, end] = dates
            setRangeDate({
                create_at: start.toISOString(),
                end_at: end.toISOString()
            })

        } else {
            setRangeDate({})
        }
    }

    // handle submit
    const onFinish = async (values) => {
        const finalValues = {
            ...values,
            create_at: rangeDate.create_at || null,
            end_at: rangeDate.end_at || null,
            status: false
        }
        const { error } = await CreateNewTodo(finalValues)
        if (error) {
            showMessage.error('Failed add taks')
            console.log('failed add task', error)
        } else {
            showMessage.success('Success add task')
            console.log('success add task')
        }
        console.log('Form Submitted:', finalValues);
        onClose();
    };

    

    return (
        <>
            <RightOutlined
                onClick={showDrawer}
                className='flex justify-end cursor-pointer flex-3'
            />

            <Drawer
                title={<h1 className='text-4xl font-bold ml-3'>Task:</h1>}
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div className='flex w-full p-3 gap-3'>
                        <Button onClick={onClose} className='w-full' size='large'>Cancel</Button>
                        <Button onClick={() => form.submit()} type='primary' className='w-full' size='large'>
                            Submit
                        </Button>
                    </div>
                }
            >
                <Form
                    form={form}
                    layout='vertical'
                    onFinish={onFinish}
                    className='flex flex-col'
                    hideRequiredMark
                >
                    {/* Title */}
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: 'Please enter your title task' }]}
                    >
                        <Input size='large' placeholder='Title task' />
                    </Form.Item>

                    {/* Description */}
                    <Form.Item name="desc">
                        <TextArea placeholder='Description' />
                    </Form.Item>

                    {/* List */}
                    <div className='flex items-center gap-4'>
                        <h1 className='text-xl w-[100px] font-semibold'>List</h1>
                        <Form.Item name="lists_id">
                            <Select size='large' style={{ width: '200px' }} placeholder="Select a list">
                                {lists.map((list) => (
                                    <Select.Option value={list.id}>{list.title}</Select.Option>
                                ))}

                            </Select>
                        </Form.Item>
                    </div>
                    {/* Date */}
                    <Form.Item>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-xl w-[100px] font-semibold'>Due Date</h1>
                            <RangePicker size='large' onChange={onRangeChange} />
                        </div>
                    </Form.Item>

                    {/* Tags */}
                    <div className='flex items-start gap-4'>
                        <h1 className='text-xl w-[100px] font-semibold'>Tags</h1>
                        <div className='flex gap-3 flex-wrap w-72'>
                            <Form.Item name="tags_id">
                                <Select size="large" placeholder="Select tags" className='min-w-40'>
                                    <Select.Option value={1}>Tag 1</Select.Option>
                                    <Select.Option value={2}>Tag 2</Select.Option>
                                    <Select.Option value={3}>Tag 3</Select.Option>
                                    <Select.Option value={4}>Tag 4</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                    {/* Subtasks */}
                    <Form.Item label={<h1 className='text-2xl font-bold'>Subtask:</h1>}>
                        <div className='flex flex-col items-start'>
                            <Input
                                placeholder='Create a new subtask'
                                size='large'
                                className='border-b border-b-gray-200'
                                addonBefore={<PlusOutlined />}
                            />
                            {[1, 2, 3].map((i) => (
                                <Checkbox
                                    key={i}
                                    className='w-full hover:bg-gray-100'
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
                                    Task {i}
                                </Checkbox>
                            ))}
                        </div>
                    </Form.Item>
                    {/* show message */}
                    {contextHolder}
                </Form>
            </Drawer>
        </>
    );
};

export default DrawerTask;
