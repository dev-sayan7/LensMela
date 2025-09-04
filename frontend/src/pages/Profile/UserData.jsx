import React from 'react'

const UserData = ({user}) => {
  return (
    <div className='m-[10px] p-[20px] w-[350px] h-auto border border-gray-500 rounded-[10px] '>
        <div className='flex justify-center items-center gap-[10px] '>
            <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-green-600 text-4xl font-extrabold text-white'>{user.name?.split(' ')[0][0] + user.name?.split(' ')[1][0]}</div>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-3xl/[12px] font-extrabold '>{user.name}</h1>
                <p className='mt-[10px] text-gray-500 text-md'>{user.username}</p>
            </div>
        </div>

        <div className='mt-[20px] flex justify-center items-center gap-[10px]'>
            <button className='w-full h-[40px] text-center bg-blue-500 border-2 border-blue-500 rounded-[10px] text-md font-medium text-white '>Edit Profile</button>
            <button className='w-full h-[40px] text-center border-2 border-red-700 rounded-[10px] text-md font-medium  '>Log Out</button>
        </div>
    </div>
  )
}

export default UserData