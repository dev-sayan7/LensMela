import React from 'react'
import { HiBadgeCheck } from 'react-icons/hi';

const ContestDetail = ({ contest }) => {
  return (
    <div className=' p-[10px] mb-[10px] w-[350px] h-auto border border-gray-400 rounded-[10px] flex flex-col justify-center items-start '>
        <h1 className='text-3xl font-bold'>{contest?.title}</h1>
            <div className='mt-[10px] flex justify-center items-center gap-[5px] '>
                <div className='w-[20px] h-[20px] rounded-[50%] bg-green-700 text-white text-[10px] font-medium flex flex-col justify-center items-center '>{contest?.createdBy?.name.split(' ')[0][0] + contest?.createdBy?.name.split(' ')[contest?.createdBy?.name.split(' ').length - 1][0]}</div>
                <p className='text-[15px] text-gray-700 font-medium'>{contest?.createdBy?.name}</p>
                <HiBadgeCheck className='text-blue-800 text-[18px] ' />
            </div>
        <p>{contest?.participants?.length} Particiapnts</p>
    </div>
  )
}

export default ContestDetail