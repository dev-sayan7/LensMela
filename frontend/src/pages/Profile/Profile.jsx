import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import UserData from './UserData';

const Profile = () => {

    const { username } = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{

        const fetchUser = async() => {
            const response = await fetch(`http://localhost:3000/api/users/${username}`,{
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            });
            const data = await response.json();
            if(response.ok){
                setUser(data.user);
            }
        }

        fetchUser();

    }, [username]);

  return (
    <div className='w-full h-full pt-[70px] flex flex-col justify-start items-center'>
        <UserData user={user} />
    </div>
  )
}

export default Profile