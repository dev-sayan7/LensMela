import React from 'react'

const PostPage = ({ posts }) => {

  return (
    <div className='pt-[20px] px-[10px] w-[350px] '>
        {posts.length == 0 ? "No post yet." : "Hello"}
    </div>
  )
}

export default PostPage