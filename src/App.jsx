import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import TodayPage from './pages/TodayPage'
import UpcomingPage from './pages/UpcomingPage'
import CalenderPage from './pages/CalenderPage'
import StickWallPage from './pages/StickWallPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
              <LoginPage />
          } />

          <Route
          path='/register'
          element={
              <RegisterPage />
          } />

        <Route path="/" element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }>
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
