import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import AuthLayout from '../Layout/AuthLayout'
import { Button, Input, Form } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../services/auth'
import useMessage from '../hooks/useMessage'

const RegisterPage = () => {
  const navigate = useNavigate() 
  const {showMessage, contextHolder} = useMessage()

  const onFinish = async (values) => {
    const {username, email, password} = values
    
    const {data , error} = await signUp(email, password ,username)

    if(error){
      showMessage.error('Sign up failed')
      console.log('signup failed' , error)
    }else{
      showMessage.success('Sign up success')
      setTimeout(()=>{
        navigate('/login')
      }, 1000)
      console.log('signup success', data)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <AuthLayout>
      <div className='flex-1 flex justify-center items-center'>
        <div className='flex flex-col gap-5 py-3 min-h-64'>
          <h1 className='text-5xl font-semibold'>Sign up</h1>

          <Form
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input size='large' placeholder='diddy joe' />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input
                size='large'
                placeholder='example@gmail'/>
            </Form.Item>

            <Form.Item
                label="password"
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                size='large'
                placeholder='Password'
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              {contextHolder}
              <Button type='primary' htmlType='submit' size='large' block>
                Sign up
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
            <span>have an account?</span>
            <Link to='/login' className='font-semibold cursor-pointer'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default RegisterPage
