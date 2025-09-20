import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ErrPage403 = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full pt-[70px] flex flex-col justify-center items-center'>
      <h1 className="font-black text-8xl text-black">4 0 3</h1>
      <p>Unauthorized Access</p>
      <p>You are not Allowed to Access This Site.</p>
      <div className='mt-[20px] w-[350px] flex justify-center items-center gap-[10px]'>
            <Link className='w-full h-[40px] flex justify-center items-center bg-blue-500 border-2 border-blue-500 rounded-[10px] text-md font-medium text-white ' onClick={()=>{navigate(-1)}}>Feed</Link>
        </div>
    </div>
  )
}

export default ErrPage403