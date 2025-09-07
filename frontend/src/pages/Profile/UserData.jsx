import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";

const UserData = ({user}) => {

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  const name = user.name;
  
  return (
    <div className='m-[10px] py-[20px] px-[8px] w-[350px] h-auto border border-gray-500 rounded-[10px] '>
        <div className='flex justify-center items-center gap-[10px] '>
            <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-green-600 text-4xl font-extrabold text-white'>{user.name?.split(' ')[0][0] + user.name?.split(' ')[user.name?.split(' ').length - 1][0]}</div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[22px] h-[5px] font-extrabold flex justify-center items-center gap-[5px]'>{user.name} {user.isVerified ? <HiBadgeCheck className='text-blue-800 text-2xl ' /> : null}</h1>
                <p className='mt-[10px] text-gray-500 text-md'>{user.username}</p>
                {user.role === 'Organizer' ? <p>Contest Organizer</p> : null}
            </div>
        </div>

        <div className='mt-[20px] flex justify-center items-center gap-[10px]'>
            <button className='w-full h-[40px] text-center bg-blue-500 border-2 border-blue-500 rounded-[10px] text-md font-medium text-white '>Edit Profile</button>
            <button className='w-full h-[40px] text-center border-2 border-red-700 rounded-[10px] text-md font-medium ' onClick={logout}>Log Out</button>
        </div>
    </div>
  )
}

export default UserData