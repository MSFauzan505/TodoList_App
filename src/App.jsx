import React from 'react'
import Sidebar from './components/Sidebar'
import  MainSection  from './components/MainSection'

const App = () => {
  return (
    <div className='flex h-screen p-2 overflow-y-hidden bg-gray-50 rounded'>
      <Sidebar />
      <MainSection/>
    </div>
  )
}

export default App