import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import UserData from './UserData';
import { MdLeaderboard, MdSettings, MdDelete } from "react-icons/md";
import { FaTrophy, FaBell, FaUserTie, FaBullhorn } from "react-icons/fa";
import Loading from '../../components/Loading/Loading';

const Profile = () => {

    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(()=>{

        const fetchUser = async() => {
            const response = await fetch(`http://localhost:3000/api/users/${username}`,{
                method: "GET",
                credentials: 'include'
            });
            const data = await response.json();
            setTimeout(() => {
                setUser(data.user);
            }, 2000)
        }

        fetchUser();

    }, [username]);

    if(!user){
        return <Loading />
    }

  return (
    <div className='w-full h-auto pt-[70px] pb-[10px] flex flex-col justify-start items-center'>
        <UserData user={user} />
        {user.role === 'Organizer' ? <Link to={'/contest/create'} className='mx-[10px] w-[350px] h-[40px] text-center bg-blue-500 border-2 border-blue-500 rounded-[10px] text-md font-medium text-white flex justify-center items-center ' >Create Contest + </Link> : null}
        <div className='m-[10px] pl-[20px] w-[350px] bg-gray-200 h-auto rounded-[10px] '>
            <Link to={`/profile/${username}/myContests`} className='my-[10px] w-full h-[30px] text-[16px] font-medium flex justify-start items-center gap-[10px] '><FaBullhorn className='text-xl' />My Contests</Link>
            <p className='my-[10px] w-full h-[30px] text-[16px] font-medium flex justify-start items-center gap-[10px] '><MdLeaderboard className='text-xl' />Leaderboard</p>
            <Link to={'/apply-for-organizer'} className='my-[10px] w-full h-[30px] text-[16px] font-medium flex justify-start items-center gap-[10px] '><FaUserTie className='text-xl' />Apply as Contest Organizer</Link>
            <p className='my-[10px] w-full h-[30px] text-[16px] font-medium flex justify-start items-center gap-[10px] '><FaTrophy className='text-xl' />Achievements & Badges</p>
            <p className='my-[10px] w-full h-[30px] text-[16px] font-medium flex justify-start items-center gap-[10px] '><FaBell className='text-xl' />Notifications</p>
        </div>
        <div className='m-[10px] pl-[20px] w-[350px] bg-gray-200 h-auto rounded-[10px] '>
           <p className='my-[10px] w-full h-[30px] text-[16px] font-medium flex justify-start items-center gap-[10px] '><MdSettings className='text-xl' />Settings</p>
           <p className='my-[10px] w-full h-[30px] text-[16px] font-medium flex justify-start items-center gap-[10px] '><MdDelete className='text-xl' />Delete Account</p>
        </div>
    </div>
  )
}

export default Profile