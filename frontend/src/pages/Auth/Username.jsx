import React, { useState } from 'react'

const Username = () => {

    const [formData, setFormData] = useState({
        email: JSON.parse(localStorage.getItem("email")),
        username: ""
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/users/setusername", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if(response.ok){
                localStorage.removeItem("email");
                localStorage.setItem("user", JSON.stringify(data.user));
                
                alert(data.message);
                window.location.href = data.redirectTo;
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
            <h2 className='text-3xl font-black mb-[10px]'>Set an Unique Username for You</h2>
            <form className='mt-[20px] w-full flex flex-col justify-center items-start' onSubmit={handleSubmit}>

                <label htmlFor="email" className='text-md font-medium mb-[5px] ml-[10px]'>Create Your Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                
                <button type="submit" className='mt-[10px] w-full h-[40px] rounded-[8px] bg-blue-400 font-medium text-white text-md '>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Username