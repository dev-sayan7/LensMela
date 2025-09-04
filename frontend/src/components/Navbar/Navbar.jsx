import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav className='p-[8px] w-full h-[60px] bg-white flex justify-between items-center fixed top-0 left-0 z-50'>
        <h1 className='text-2xl font-extrabold'>LensMela</h1>
        {localStorage.getItem("user") ? <Link to={`/profile/${user.username}`}>{user.name.split(' ')[0]}</Link> : <Link to={'/signup'}>Register</Link> }
    </nav>
  )
}

export default Navbar