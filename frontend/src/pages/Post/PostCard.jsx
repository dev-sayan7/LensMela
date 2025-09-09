import React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

const PostCard = ({ post }) => {
  return (
    <div className=' w-[350px] h-auto overflow-hidden bg-gray-200 rounded-[10px]'>
      <img src={post?.imageURL} alt="post.caption" className='w-full h-[400px] object-cover rounded-[10px]' />
      <div className='px-[10px] py-[10px] h-[80px] '>
        <h3 className='text-lg font-bold '>{post?.caption}</h3>
        <div className=' flex justify-start items-center gap-[5px]'>
          <div className='w-[20px] h-[20px] rounded-[50%] bg-green-700 text-white text-[10px] font-medium flex flex-col justify-center items-center '>{post?.createdBy?.name.split(' ')[0][0] + post?.createdBy?.name.split(' ')[post?.createdBy?.name.split(' ').length - 1][0]}</div>
          <p className='text-md font-medium'>{post?.createdBy.name} {post?.createdBy?.isVerified ? <HiBadgeCheck className='text-blue-800 text-2xl' /> : null }</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard