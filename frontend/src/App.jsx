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
import OrganizerForm from './pages/Auth/OrganizerForm'
import CreateContest from './pages/Contest/CreateContest'
import Contests from './pages/Contest/Contests'
import ContestPage from './pages/Contest/ContestPage'
import PostForm from './pages/Post/PostForm'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import PostDetails from './pages/Post/PostDetails'

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
        <Route path='/apply-for-organizer' element={<ProtectedRoutes><OrganizerForm /></ProtectedRoutes>} />
        <Route path='/contest/create' element={<ProtectedRoutes><CreateContest /></ProtectedRoutes>} />
        <Route path='/contests' element={<ProtectedRoutes><Contests /></ProtectedRoutes>} />
        <Route path='/contest/:contestId' element={<ProtectedRoutes><ContestPage /></ProtectedRoutes>} />
        <Route path='/contest/:contestId/post' element={<ProtectedRoutes><PostForm /></ProtectedRoutes>} />
        <Route path='/contest/:contestId/leaderboard' element={<ProtectedRoutes><Leaderboard /></ProtectedRoutes>} />
        <Route path='/posts/:postId' element={<ProtectedRoutes><PostDetails /></ProtectedRoutes>} />
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