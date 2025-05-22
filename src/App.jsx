import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import TodayPage from './pages/TodayPage'
import UpcomingPage from './pages/UpcomingPage'
import CalenderPage from './pages/CalenderPage'
import StickWallPage from './pages/StickWallPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TodayPage />} />
          <Route path="upcoming" element={<UpcomingPage />} />
          <Route path="calender" element={<CalenderPage />} />
          <Route path="stickwall" element={<StickWallPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
