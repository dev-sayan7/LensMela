import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem('user'))

  return (
    <nav className='p-2 w-full h-[60px] bg-white flex justify-between items-center fixed top-0 left-0 z-50'>
        <h1 className='text-2xl font-extrabold'>LensMela</h1>

        {sessionStorage.getItem("user") ? 
        // <Link to={`/profile/${user?.username}`}>
        <div className='w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-green-600 text-lg font-bold text-white' onClick={() => setOpen(!open)} >{user?.name?.split(' ')[0][0] + user?.name?.split(' ')[user?.name?.split(' ').length - 1][0]}</div> : 
        <Link to={'/signup'}><FaUserCircle className='text-2xl text-gray-700' /></Link> }
        {open ? <Hamburger user={user} open={open} setOpen={setOpen} /> : null}               
    </nav>
  )
}

export default Navbar