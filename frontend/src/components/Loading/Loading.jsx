import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[50px] h-[50px] border-[8px] border-gray-300 border-t-blue-300 rounded-[50%] animate-spin'></div>
    </div>
  )
}

export default Loading