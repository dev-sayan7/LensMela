import React from 'react'
import { HiBadgeCheck } from 'react-icons/hi';
import { BiUpvote, BiSolidUpvote } from "react-icons/bi";

const PostCard = ({ post, setPosts }) => {

  const handleVote = async() => {
    try{
      const userId = JSON.parse(localStorage.getItem('user')).id
      const response = await fetch(`http://localhost:3000/api/posts/${post._id}/vote`,{
        method: "POST",
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      const data = await response.json();
      if(response.ok){
        setPosts(
          (prevPosts) => (prevPosts.map(p => (p._id === post._id ? {...p, vote: [...p.vote, userId]} : p )))
        )
      }
      alert(data.message);
    }
    catch(err){
      alert("FrontEnd Error");
    }
  }

  return (
    <div className='mt-[10px] p-[10px] w-[350px] h-auto overflow-hidden bg-gray-200 rounded-[10px] shadow-2xl'>
      <img src={post?.imageURL} alt={post?.caption} className='w-full object-cover rounded-[10px]' style={{aspectRatio: post?.imageMeta.aspectRatio}} />
      <div className='px-[10px] py-[10px] h-[60px] '>
        <h3 className='text-lg font-bold '>{post?.caption}</h3>
        <div className=' flex justify-start items-center gap-[5px]'>
          <div className='w-[20px] h-[20px] rounded-[50%] bg-green-700 text-white text-[10px] font-medium flex flex-col justify-center items-center '>{post?.createdBy?.name.split(' ')[0][0] + post?.createdBy?.name.split(' ')[post?.createdBy?.name.split(' ').length - 1][0]}</div>
          <p className='text-md font-medium'>{post?.createdBy.name} {post?.createdBy?.isVerified ? <HiBadgeCheck className='text-blue-800 text-2xl' /> : null }</p>
        </div>
      </div>

      <div className='px-[20px] w-full h-[50px] flex justify-between items-center'>
        <p className='text-gray-600'>{post.vote.length} Votes</p>
        {post.vote.includes(JSON.parse(localStorage.getItem("user")).id) ? <button disabled className='px-[10px] w-auto h-[40px] bg-gray-400 rounded-[20px] flex justify-between items-center gap-[10px] font-bold text-white'><BiSolidUpvote className='text-xl' /> Voted</button> : <button onClick={handleVote} className='px-[10px] w-auto h-[40px] bg-blue-400 rounded-[20px] flex justify-between items-center gap-[10px] font-bold text-white'><BiUpvote className='text-xl' /> Vote</button>}
      </div>
    </div>
  )
}

export default PostCard