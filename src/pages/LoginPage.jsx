import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import AuthLayout from '../Layout/AuthLayout'
import { Button, Input, Form } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../services/auth'

const LoginPage = () => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    const { email, password } = values

    const { error, data } = await signIn(email, password)

    if (error) {
      console.log('signin failed', error)
    } else {
      navigate('/')
      console.log('signin success', data)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <AuthLayout>
      <div className='flex-1 flex justify-center items-center'>
        <div className='flex flex-col gap-5 p-3 w-[600px] min-h-64'>
          <h1 className='text-5xl font-semibold'>Sign in</h1>

          <Form
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input size='large' placeholder='example@gmail.com' />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                size='large'
                placeholder='Password'
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' size='large' block>
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <div className='flex gap-3 items-center'>
            <span className='bg-gray-200 h-0.5 rounded flex-1'></span>
            <span>or</span>
            <span className='bg-gray-200 h-0.5 rounded flex-1'></span>
          </div>

          <div className='flex gap-5 justify-center'>
            <Button size='large' block danger>
              Sign in with Google
            </Button>
            <Button size='large' block>
              Sign in with GitHub
            </Button>
          </div>

          <div className='flex justify-center gap-2 items-center'>
            <span>Don't have an account?</span>
            <Link to='/register' className='font-semibold cursor-pointer'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
