import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupVerify = () => {

    const navigate = useNavigate();

    const pendingEmail = localStorage.getItem("pendingEmail");
    let emailuser = pendingEmail.split('@')[0];
    let str = emailuser[0] + '********' + emailuser[(emailuser.length - 1)] + '@' + pendingEmail.split('@')[1];
    
    const [formData, setFormData] = useState({
        email: pendingEmail,
        OTP: ""
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:3000/api/users/signupverify",{
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if(response.ok){
                localStorage.removeItem("pendingEmail");
                localStorage.setItem("email", JSON.stringify(data.email));
                localStorage.setItem("token", JSON.stringify(data.token));

                alert(data.message);
                window.location.href = data.redirectTo;
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
            <h2 className='text-3xl font-black mb-[10px]'>Enter Your OTP</h2>
            <p className='text-center'>Your OTP was sent to your given Gmail, <b>{str}</b></p>
            <form className='mt-[20px] w-full flex flex-col justify-center items-start' onSubmit={handleSubmit}>
                <input type="text" name="OTP" value={formData.OTP} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                
                <button type="submit" className='mt-[10px] w-full h-[40px] rounded-[8px] bg-blue-400 font-medium text-white text-md '>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default SignupVerify