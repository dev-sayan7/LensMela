import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {BiUpvote, BiSolidUpvote} from 'react-icons/bi'
import Loading from '../../components/Loading/Loading'

const PostDetails = () => {

    const navigate = useNavigate();
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(()=>{
        const fetchPost = async() => {
            const response = await fetch(`http://localhost:3000/api/posts/${postId}`,{
                method: "GET",
                credentials: 'include'
            });
            const data = await response.json();

            if(response.ok){
                setTimeout(()=>{
                    setPost(data.post);
                }, 2000)
            }
            if(response.status == 404){
                navigate('/404')
            }
        }

        fetchPost();

    }, [postId]);

    const handleVote = async() => {
    try{
      const userId = JSON.parse(sessionStorage.getItem('user')).id
      const response = await fetch(`http://localhost:3000/api/posts/${post._id}/vote`,{
        method: "POST",
        credentials: 'include'
      });
      const data = await response.json();
      if(response.ok){
        setPost(
          (prevPosts) => (prevPosts.map(p => (p._id === post._id ? {...p, vote: [...p.vote, userId]} : p )))
        )
      }
      alert(data.message);
    }
    catch(err){
      alert("FrontEnd Error");
    }
  }

    if(!post){
        return <Loading />
    }
  return (
      <div className='pt-[70px] w-full h-auto flex flex-col justify-center items-center '>
        <div className=' p-[10px] w-[350px] h-auto overflow-hidden bg-gray-200 rounded-[10px] shadow-2xl'>
            <img src={post?.imageURL} alt={post?.caption} className='w-full h-auto object-cover rounded-[10px]' style={{aspectRatio: post?.imageMeta.aspectRatio}} />
            <div className='px-[10px] py-[10px] h-[60px] '>
              <h3 className='text-lg font-bold '>{post?.caption}</h3>
              <div className=' flex justify-start items-center gap-[5px]'>
                <div className='w-[20px] h-[20px] rounded-[50%] bg-green-700 text-white text-[10px] font-medium flex flex-col justify-center items-center '>{post?.createdBy?.name.split(' ')[0][0] + post?.createdBy?.name.split(' ')[post?.createdBy?.name.split(' ').length - 1][0]}</div>
                <p className='text-md font-medium'>{post?.createdBy.name} {post?.createdBy?.isVerified ? <HiBadgeCheck className='text-blue-800 text-2xl' /> : null }</p>
              </div>
            </div>
    
            <div className='px-[20px] w-full h-[50px] flex justify-between items-center'>
              <p className='text-gray-600'>{post?.vote.length} Votes</p>
              {JSON.parse(sessionStorage.getItem('user')).role !== 'Organizer' ? 
                    (post.vote.includes(JSON.parse(sessionStorage.getItem("user")).id) ? 
                        <button disabled className='px-[10px] w-auto h-[40px] bg-gray-400 rounded-[20px] flex justify-between items-center gap-[10px] font-bold text-white'><BiSolidUpvote className='text-xl' /> Voted</button>
                        : <button onClick={handleVote} className='px-[10px] w-auto h-[40px] bg-blue-400 rounded-[20px] flex justify-between items-center gap-[10px] font-bold text-white'><BiUpvote className='text-xl' /> Vote</button>) 
                    : null}
            </div>
        </div>
      </div>
    )
}

export default PostDetails