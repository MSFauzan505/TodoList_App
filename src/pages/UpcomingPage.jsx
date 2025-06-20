import TaskList from "../components/ui/TaskList"


const UpcomingPage = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-8 min-h-screen'>
      {/* header */}
      <div className='flex items-center gap-5 md:gap-10'>
        <h1 className='text-4xl md:text-5xl font-bold'>Upcoming</h1>
        <span className='border border-gray-200 p-3 rounded text-3xl md:text-5xl'>8</span>
      </div>

      {/* today */}
      <div className='flex flex-col gap-5 w-full p-5 border border-gray-200 rounded h-[300px]'>
        <h1 className='text-2xl font-bold ml-3'>Today</h1>
        <div className='flex-1 overflow-hidden'>
          <TaskList />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-4 md:gap-8'>
        {/* tomorrow */}
        <div className='flex flex-col gap-5 w-full p-5 border border-gray-200 rounded h-[400px]'>
          <h1 className='text-2xl font-bold ml-3'>Tomorrow</h1>
          <div className='flex-1 overflow-hidden'>
            <TaskList />
          </div>
        </div>

        {/* upcoming */}
        <div className='flex flex-col gap-5 w-full p-5 border border-gray-200 rounded h-[400px]'>
          <h1 className='text-2xl font-bold ml-3'>Upcoming</h1>
          <div className='flex-1 overflow-hidden'>
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingPage
