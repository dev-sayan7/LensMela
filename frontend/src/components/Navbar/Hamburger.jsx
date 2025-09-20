import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';

const Hamburger = ({ user, open, setOpen }) => {

    const logout = async () => {
    
        const response = await fetch("http://localhost:3000/api/users/logout",{
          method: "GET",
          credentials: 'include'
        });
        const data = await response.json();
        if(response.ok){
          alert(data.message);
          sessionStorage.clear();
          window.location.href = '/';
        }
  }

  return (
    <div  className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='p-[10px] flex flex-col justify-center items-end'>
            <button className='mt-[20px] h-[40px] flex justify-center items-center text-xl' onClick={() => setOpen(!open)}><FaTimes /></button>
            <div className=' mb-[10px] p-[15px] w-full h-auto bg-gray-100 rounded-[10px] flex flex-col justify-center items-center'>
                <div className='w-[70px] h-[70px] rounded-[50%] flex justify-center items-center bg-green-600 text-3xl font-extrabold text-white'>{user?.name?.split(' ')[0][0] + user?.name?.split(' ')[user?.name?.split(' ').length - 1][0]}</div>
                <p className='font-bold'>{user?.name}</p>
                <p className='font-semibold text-gray-400'>{user?.username}</p>
                <div className='mt-[20px] w-full flex justify-center items-center gap-[10px] '>
                    <Link to={`/profile/${user?.username}`} className='h-[35px] flex-2 flex justify-center items-center bg-blue-500 border-2 border-blue-500 rounded-[10px] text-md font-medium text-white ' onClick={() => setOpen(!open)}>Profile</Link>
                    <button className='w-[20px] h-[35px] flex-1 flex justify-center items-center border-2 border-red-700 rounded-[10px] text-xl font-medium' onClick={logout}><MdLogout /></button>
                </div>
            </div>
            <div className='p-[15px] w-full h-auto bg-gray-100 rounded-[10px] flex flex-col justify-center items-start'>
                <Link to={'/contests'} className='font-bold' onClick={() => setOpen(!open)} >Contests</Link>
                <Link to={`/profile/${user?.username}/myContests`} className='font-bold' onClick={() => setOpen(!open)} >MyContests</Link>
            </div>
        </div>
    </div>
  )
}

export default Hamburger