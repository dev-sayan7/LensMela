import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HiBadgeCheck } from "react-icons/hi";

const UserData = ({user}) => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className='m-[10px] py-[20px] px-[8px] w-[350px] h-auto border border-gray-500 rounded-[10px] '>
        <div className='flex justify-start items-center gap-[10px] '>
            <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-green-600 text-4xl font-extrabold text-white'>{user.name?.split(' ')[0][0] + user.name?.split(' ')[1][0]}</div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[22px]/[8px] font-extrabold flex justify-center items-center gap-[5px]'>{user.name} {user.isVerified ? <HiBadgeCheck className='text-blue-800 text-2xl ' /> : null}</h1>
                <p className='mt-[10px] text-gray-500 text-md'>{user.username}</p>
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