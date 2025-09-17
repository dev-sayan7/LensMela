import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";


const Winner = ({user, post}) => {
  return (
    <div className='m-[10px] py-[20px] px-[8px] w-[350px] h-auto border border-gray-500 rounded-[10px] '>

      
      <div className='flex justify-start items-center gap-[10px] '>
            <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-green-600 text-4xl font-extrabold text-white'>{user.name?.split(' ')[0][0] + user.name?.split(' ')[user.name?.split(' ').length - 1][0]}</div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[22px] h-[5px] font-extrabold flex justify-center items-center gap-[5px]'>{user.name} {user.isVerified ? <HiBadgeCheck className='text-blue-800 text-2xl ' /> : null}</h1>
                <p className='mt-[10px] text-gray-500 text-md'>{user.username}</p>
                {user.role === 'Organizer' ? <p>Contest Organizer</p> : null}
            </div>
      </div>
    </div>
  )
}

export default Winner