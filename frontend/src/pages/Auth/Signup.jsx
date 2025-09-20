import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/users/pendingsignup",{
                method: "POST",
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });
            const data = await response.json();
            if(response.ok){
                sessionStorage.setItem("pendingEmail", data.email);
                alert(data.message);
                navigate(data.redirectTo);
            }
            alert(data.message);
        }
        catch(err){
            alert("Frontend Error");
            console.log(`Error: ${err.message}`);
        }
    }

  return (
    <div className='w-full h-full pt-[70px] flex justify-center items-center'>
        <div className='w-[350px] h-auto p-[20px] flex flex-col justify-center items-center border-[0.5px] border-gray-500 rounded-[10px]'>
            <h2 className='text-3xl font-black mb-[10px]'>Signup</h2>
            <form className='mt-[20px] w-full flex flex-col justify-center items-start' onSubmit={handleSubmit}>
                <label htmlFor="name" className='text-md font-medium mb-[5px] ml-[10px]'>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                
                <label htmlFor="email" className='text-md font-medium mb-[5px] ml-[10px]'>Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                
                <label htmlFor="password" className='text-md font-medium mb-[5px] ml-[10px]'>Your Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
            
                <button type="submit" className='mt-[10px] w-full h-[40px] rounded-[8px] bg-blue-400 font-medium text-white text-md '>Submit</button>

            </form>
            <p className='mt-[20px]'>Already have an Account? <Link to='/login' className='text-blue-900'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup