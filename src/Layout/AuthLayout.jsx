import login_image from '../assets/login_image.jpg'


const AuthLayout = ({ children }) => {
  return (
    <div className='flex sm:flex-col xl:flex-row justify-center p-5 gap-10 items-center h-screen'>
      <div className="flex-1 hidden xl:flex justify-center items-center rounded-2xl overflow-hidden bg-gray-200 h-full">
        <img
          src={login_image}
          alt="login_image"
          className="w-full h-full object-cover"
        />
      </div>

      {children}
    </div>
  )
}

export default AuthLayout