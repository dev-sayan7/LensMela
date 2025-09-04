import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

import Layout from './components/Layout'
import Landing from './pages/Landing/Landing'
import Signup from './pages/Auth/Signup'
import SignupVerify from './pages/Auth/SignupVerify'
import Login from './pages/Auth/Login'
import LoginVerify from './pages/Auth/LoginVerify'
import Username from './pages/Auth/Username'
import Feed from './pages/Feed/Feed'
import Profile from './pages/Profile/Profile'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup/verify' element={<SignupVerify />} />
        <Route path='/username' element={<Username />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/verify' element={<LoginVerify />} />
        <Route path='/feed' element={<ProtectedRoutes><Feed /></ProtectedRoutes>} />
        <Route path='/profile/:username' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  )
}

export default App