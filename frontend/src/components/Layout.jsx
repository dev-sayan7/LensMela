import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Layout = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    return storedUser ? storedUser : null
  });


  useEffect(()=>{
    if(!user){    
      const fetchAuth = async() => {
        const response = await fetch('http://localhost:3000/api/users/auth/check',{
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        if(response.ok){
          setUser(data.user);
          sessionStorage.setItem('user', JSON.stringify(data.user));
          navigate(data.redirectTo);
        }
      }
      fetchAuth();
    }
  },[])
  

  return (
    <div className='w-screen h-screen'>
        <Navbar user={user} />
        <Outlet />
    </div>
  )
}

export default Layout