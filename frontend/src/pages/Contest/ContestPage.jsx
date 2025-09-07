import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { HiBadgeCheck } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import PostPage from '../Post/PostPage';

const ContestPage = () => {

    const {contestId} = useParams();
    const [contest, setContest] = useState(null);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const sDate = new Date(contest?.startDate).getDate() + ' ' + months[new Date(contest?.startDate).getMonth()] + ', ' + new Date(contest?.startDate).getFullYear()
    const eDate = new Date(contest?.endDate).getDate() + ' ' + months[new Date(contest?.endDate).getMonth()] + ', ' + new Date(contest?.endDate).getFullYear()

    useEffect(() => {
        const fetchContestById = async() => {
            const response = await fetch(`http://localhost:3000/api/contests/${contestId}`,{
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            const data = await response.json();
            setTimeout(()=>{
                setContest(data.contest);
            }, 2000);
        }

        fetchContestById();
    },[])

    if(!contest){
        return <div className='pt-[70px] flex justify-center items-center'>Loading ...</div>
    }

  return (
    <div className='w-full h-full pt-[70px] pb-[10px] flex flex-col justify-start items-center'>
        <div className=' p-[10px] mb-[10px] w-[350px] h-auto border border-gray-400 rounded-[10px] flex flex-col justify-center items-start '>
            <h1 className='text-3xl font-bold'>{contest?.title}</h1>
            <h3 className='ml-[10px] text-md text-gray-400'>{contest?.description}</h3>
            <div className='mt-[10px] flex justify-center items-center gap-[5px] '>
                <div className='w-[20px] h-[20px] rounded-[50%] bg-green-700 text-white text-[10px] font-medium flex flex-col justify-center items-center '>{contest?.createdBy?.name.split(' ')[0][0] + contest?.createdBy?.name.split(' ')[contest?.createdBy?.name.split(' ').length - 1][0]}</div>
                <p className='text-[15px] text-gray-700 font-medium'>{contest?.createdBy?.name}</p>
                <HiBadgeCheck className='text-blue-800 text-[18px] ' />
            </div>
            <div className='flex justify-center items-center gap-[5px]'>
              <div>
                {(new Date(contest?.startDate) > Date.now()) ? <p className='flex justify-center items-center' ><GoDotFill className='text-2xl text-blue-800'/> UpComing</p>
              : (new Date(contest?.startDate) == Date.now() || new Date(contest?.endDate) >= Date.now()) ? <p className='flex justify-center items-center' ><GoDotFill className='text-2xl text-green-800'/> Ongoing</p> 
              : <p className='flex justify-center items-center' ><GoDotFill className='text-2xl text-gray-500'/> Ended</p> }
              </div> | {sDate + ' - ' + eDate}
            </div>
            <p>{contest?.participants?.length} Particiapnts</p>
        </div>

        {contest?.createdBy?.role ? <Link className='w-[350px] h-[40px] text-center bg-blue-500 border-2 border-blue-500 rounded-[10px] text-md font-medium text-white flex justify-center items-center '>Leaderboard</Link> : <Link className='w-[350px] h-[40px] text-center bg-blue-500 border-2 border-blue-500 rounded-[10px] text-md font-medium text-white flex justify-center items-center '>Post</Link>}
        <PostPage posts={contest?.posts} />
    </div>
  )
}

export default ContestPage