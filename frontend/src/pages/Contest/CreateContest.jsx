import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateContest = () => {

    const navigate = useNavigate();
    const [startDate, setStartDate] = useState({
        date: "",
        month: "",
        year: ""
    })
    const handleStartDate = (e) => {
        setStartDate({...startDate, [e.target.name]: e.target.value});
    }
    

    const [endDate, setEndDate] = useState({
        date: "",
        month: "",
        year: ""
    })
    const handleEndDate = (e) => {
        setEndDate({...endDate, [e.target.name]: e.target.value});
    }

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    let contestData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sDate = `${startDate.year}-${startDate.month}-${startDate.date}`; 
        const eDate = `${endDate.year}-${endDate.month}-${endDate.date}`;

        contestData = {
            title: formData.title,
            description: formData.description,
            startDate: sDate,
            endDate: eDate
        }

        try{
            const response = await fetch("http://localhost:3000/api/contests/create", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(contestData)
            });
            const data = await response.json();
            if(response.ok){
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
    <div className='w-full h-auto pb-[20px] pt-[70px] flex justify-center items-center'>
        <div className='w-[350px] h-auto p-[20px] flex flex-col justify-center items-center border-[0.5px] border-gray-500 rounded-[10px]'>
            <h2 className='text-3xl font-black mb-[10px]'>Create Contest</h2>
            <form className='mt-[20px] w-full flex flex-col justify-center items-start' onSubmit={handleSubmit}>
                <label htmlFor="title" className='text-md font-medium mb-[5px] ml-[10px]'>Contest Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                
                <label htmlFor="description" className='text-md font-medium mb-[5px] ml-[10px]'>Contest Description</label>
                <textarea type="text" name="description" value={formData.description} onChange={handleChange} className='mb-[10px] pt-[5px] pl-[8px] w-full h-[150px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                
                <label htmlFor="startDate" className='text-md font-medium mb-[5px] ml-[10px]'>Starting Date of Contest</label>
                <div className='w-[300px] flex justify-between items-center gap-[10px]'>
                    <select name="date" onChange={handleStartDate} value={startDate.date} className='mb-[10px] px-[8px] w-[70px] h-[40px] border-[0.5px] border-gray-400 rounded-[8px] '>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>

                    </select>
                    <select name="month" onChange={handleStartDate} value={startDate.month} className='mb-[10px] px-[8px] w-[70px] h-[40px] border-[0.5px] border-gray-400 rounded-[8px] '>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                    </select>
                    <input type="text" name='year' onChange={handleStartDate} value={startDate.year} placeholder='YYYY' className='mb-[10px] pl-[10px] w-[70px] h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                </div>
                <label htmlFor="startDate" className='text-md font-medium mb-[5px] ml-[10px]'>Ending Date of Contest</label>
                <div className='w-[300px] flex justify-between items-center gap-[10px]'>
                    <select name="date" onChange={handleEndDate} value={endDate.date} className='mb-[10px] px-[8px] w-[70px] h-[40px] border-[0.5px] border-gray-400 rounded-[8px] '>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>

                    </select>
                    <select name="month" onChange={handleEndDate} value={endDate.month} className='mb-[10px] px-[8px] w-[70px] h-[40px] border-[0.5px] border-gray-400 rounded-[8px] '>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                    </select>
                    <input type="text" name='year' onChange={handleEndDate} value={endDate.year} placeholder='YYYY' className='mb-[10px] pl-[10px] w-[70px] h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
                </div>
            
                <button type="submit" className='mt-[10px] w-full h-[40px] rounded-[8px] bg-blue-400 font-medium text-white text-md '>Create</button>

            </form>
        </div>
    </div>
  )
}

export default CreateContest