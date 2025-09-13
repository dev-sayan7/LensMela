import React from 'react'
import PostCard from './PostCard';

const PostPage = ({ posts, setPosts }) => {

  return (
    <div className='mt-[10px] w-[350px] '>
      <h1 className='text-3xl font-bold mb-[10px] '>Posts</h1>
      {posts.length === 0 ? "No post yet." : (posts.map((post) => (<PostCard key={post._id} post={post} setPosts={setPosts} />)))}
    </div>
  )
}

export default PostPage