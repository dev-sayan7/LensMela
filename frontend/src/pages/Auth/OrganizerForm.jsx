import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OrganizerForm = () => {
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: ""
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response  = await fetch("http://localhost:3000/api/users/applyAsOrganizer", {
                method: "POST",
                headers:{
                    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });
            const data = await response.json();
            if(response.ok){
                alert(data.message);
                navigate(-1);
            }
            alert(data.message);
        }
        catch(err){
            alert('Frontend Error');
            console.log(`Error: ${err.message}`);
        }
    }

  return (
    <div className='w-full h-full pt-[70px] flex justify-center items-center'>
        <div className='w-[350px] h-auto p-[20px] flex flex-col justify-center items-center border-[0.5px] border-gray-500 rounded-[10px]'>
            <h2 className='text-3xl font-black mb-[10px]'>Apply for Organizer</h2>
            <p className='text-center'>Become an Organizer and organize versatile contests and programs</p>
            <form className='mt-[20px] w-full flex flex-col justify-center items-start' onSubmit={handleSubmit}>
                <input type="text" name="email" value={formData.email} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                
                <button type="submit" className='mt-[10px] w-full h-[40px] rounded-[8px] bg-blue-400 font-medium text-white text-md '>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default OrganizerForm