import { CalendarOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons'
import { Checkbox, Input } from 'antd'
import DrawerTask from '../components/DrawerTask'
import TaskList from '../components/TaskList'

const TodayPage = () => {

  return (
    <div className='flex flex-col gap-8 '>
      {/* Title page */}
      <div className='flex items-center gap-10'>
        <h1 className='text-5xl font-bold'>Today</h1>
        <span className='border border-gray-200 p-3 rounded text-5xl'>12</span>
      </div>

      {/* Input Task */}
      <TaskList />
    </div>
  )
}

export default TodayPage