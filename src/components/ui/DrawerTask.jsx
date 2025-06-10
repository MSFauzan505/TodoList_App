import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Checkbox, DatePicker, Drawer, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';


const { RangePicker } = DatePicker;

const DrawerTask = ({ open, onClose, showDrawer}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form Submitted:', values);
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
                    <Form.Item name="description">
                        <TextArea placeholder='Description' />
                    </Form.Item>

                    {/* List */}
                    <Form.Item name="list">
                        <div className='flex items-center gap-4'>
                            <h1 className='text-xl w-[100px] font-semibold'>List</h1>
                            <Select size='large' style={{ width: '200px' }} placeholder="Select a list">
                                <Select.Option value='Personal'>Personal</Select.Option>
                                <Select.Option value='Work'>Work</Select.Option>
                                <Select.Option value='Family'>Family</Select.Option>
                            </Select>
                        </div>
                    </Form.Item>

                    {/* Date */}
                    <Form.Item name="date">
                        <div className='flex items-center gap-4'>
                            <h1 className='text-xl w-[100px] font-semibold'>Due Date</h1>
                            <RangePicker size='large' />
                        </div>
                    </Form.Item>

                    {/* Tags */}
                    <Form.Item name="tags">
                        <div className='flex items-start gap-4'>
                            <h1 className='text-xl w-[100px] font-semibold'>Tags</h1>
                            <div className='flex gap-3 flex-wrap w-72'>
                                <Button size='large'>Tag 1</Button>
                                <Button size='large'>Tag 2</Button>
                                <Button size='large'>Tag 3</Button>
                                <Button size='large'>Tag 4</Button>
                                <Button size='large' icon={<PlusOutlined />}>Add tag</Button>
                            </div>
                        </div>
                    </Form.Item>

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
                </Form>
            </Drawer>
        </>
    );
};

export default DrawerTask;
