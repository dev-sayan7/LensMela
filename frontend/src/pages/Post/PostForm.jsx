import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const PostForm = () => {

    const {contestId} = useParams();
    const [postData, setPostData] = useState({
        caption: "",
        image: "",
    });

    const handleChange = (e) => {
        if(e.target.type === 'file'){
            setPostData({...postData, [e.target.name]: e.target.files[0]});
        }
        else{
            setPostData({...postData, [e.target.name]: e.target.value});
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("caption", postData.caption);
        if(postData.image){
            formData.append("image", postData.image);
        }

        try{
            const response = await fetch(`http://localhost:3000/api/contests/${contestId}/createpost`,{
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                },
                body: formData
            });
            const data = await response.json();
        }
        catch(err){
            alert("Frontend Error");
            console.log(`Error: ${err.message}`);
        }
    }

  return (
    <div className='w-full h-full pt-[70px] flex justify-center items-center'>
        <div className='w-[350px] h-auto p-[20px] flex flex-col justify-center items-center border-[0.5px] border-gray-500 rounded-[10px]'>
            <h2 className='text-3xl font-black mb-[10px]'>Post Your Image</h2>
            <form className='mt-[20px] w-full flex flex-col justify-center items-start' onSubmit={handleSubmit} encType="multipart/form-data" >

                <label htmlFor="caption" className='text-md font-medium mb-[5px] ml-[10px]'>Your Caption</label>
                <input type="text" name="caption" value={postData.caption} onChange={handleChange} className='mb-[10px] pl-[10px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />

                <label htmlFor="image" className='text-md font-medium mb-[5px] ml-[10px]'>Your Image</label>
                <input type="file" name="image" onChange={handleChange} className='mb-[10px] pl-[10px] pt-[5px] w-full h-[40px] border-[0.5px] border-gray-400 rounded-[8px] ' />
            

                <button type="submit" className='mt-[10px] w-full h-[40px] rounded-[8px] bg-blue-400 font-medium text-white text-md '>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default PostForm