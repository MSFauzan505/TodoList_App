
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import AuthLayout from '../Layout/AuthLayout'
import { Button, Input } from 'antd'

const LoginPage = () => {

  return (
    <AuthLayout>
      <div className='flex-1 flex justify-center items-center'>
        <div className='flex flex-col gap-5  p-3 w-[600px] min-h-64'>
          <h1 className='text-5xl font-semibold'>Sign in</h1>

          <Input
            size='large'
            placeholder='Example@gmail.com'
          />

          <Input.Password
            size='large'
            placeholder='Password'
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />

          <Button
            size='large'
            variant='solid'
            color='blue'
          >
            Sign in
          </Button>

          <div className='flex gap-3 items-center'>
            <span className='bg-gray-200 h-0.5 rounded flex-1'></span>
            <span>or</span>
            <span className='bg-gray-200 h-0.5 rounded flex-1'></span>
          </div>

          <div className='flex gap-5 justify-center '>
            <Button
            className='w-full'
              size='large'
              variant='outlined'
              color='red'
            >
              Sign in with Google
            </Button>

            <Button
            className='w-full'
              size='large'
              variant='outlined'
            >
              Sign in with GitHub
            </Button>
          </div>

          <div className='flex justify-center gap-2 items-center'>
            <span>Don't have an account?</span>
            <span className='font-semibold cursor-pointer'>Sign up</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default LoginPage