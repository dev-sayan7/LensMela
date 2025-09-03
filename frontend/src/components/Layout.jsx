import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Layout = () => {
  return (
    <div className='w-screen h-screen'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout