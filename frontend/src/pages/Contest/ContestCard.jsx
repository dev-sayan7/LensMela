import React from 'react'
import { Link } from 'react-router-dom'
import { HiBadgeCheck } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

const ContestCard = ({contest}) => {
    
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const sDate = new Date(contest?.startDate).getDate() + ' ' + months[new Date(contest?.startDate).getMonth()] + ', ' + new Date(contest?.startDate).getFullYear()
  const eDate = new Date(contest?.endDate).getDate() + ' ' + months[new Date(contest?.endDate).getMonth()] + ', ' + new Date(contest?.endDate).getFullYear()

  return (
    <div className=' p-[10px] mb-[10px] w-[350px] h-auto border border-gray-400 rounded-[10px] flex flex-col justify-center items-start '>
        <h1 className='text-3xl font-bold'>{contest?.title}</h1>
        <div className='mt-[10px] flex justify-center items-center gap-[5px] '>
            <div className='w-[20px] h-[20px] rounded-[50%] bg-green-700 text-white text-[10px] font-medium flex flex-col justify-center items-center '>{contest?.createdBy.name?.split(' ')[0][0] + contest?.createdBy.name?.split(' ')[contest.createdBy.name?.split(' ').length - 1][0]}</div>
            <p className='text-[15px] text-gray-700 font-medium'>{contest?.createdBy.name}</p>
            <HiBadgeCheck className='text-blue-800 text-[18px] ' />
        </div>
        <div className='flex justify-center items-center gap-[5px]'>
          <div>
            {(new Date(contest?.startDate) > Date.now()) ? <p className='flex justify-center items-center' ><GoDotFill className='text-2xl text-blue-800'/> UpComing</p>
          : (new Date(contest?.startDate) == Date.now() || new Date(contest?.endDate) >= Date.now()) ? <p className='flex justify-center items-center' ><GoDotFill className='text-2xl text-green-800'/> Ongoing</p> 
          : <p className='flex justify-center items-center' ><GoDotFill className='text-2xl text-gray-500'/> Ended</p> }
          </div> | {sDate + ' - ' + eDate}
        </div>
        <p>{contest.participants?.length} Participants</p>

        <Link to={`/contest/${contest._id}`} className='mt-[8px] w-full h-[40px] rounded-[8px] bg-blue-400 font-bold text-white flex justify-center items-center '>View More {'->'}</Link>
    </div>

  )
}

export default ContestCard