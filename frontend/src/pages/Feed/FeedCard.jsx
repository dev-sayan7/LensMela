import React from 'react'
import { Link } from 'react-router-dom'

const FeedCard = ({ posts, contestId }) => {
  return (
    <div className='flex flex-col justify-start items-center'>
        {posts.map((post) => (
        <div key={post.postId} className="w-[350px] h-auto bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.imageURL} alt={post.caption} className="w-full object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{post.caption}</h2>
              {/* <p className="text-sm text-gray-500 mb-2">By {post.author}</p> */}
              <div className="flex justify-between items-center">
                <p className="text-gray-700 font-medium">
                  {post.vote.length} Votes
                </p>
                <Link to={`/posts/${post.postId}`} className="text-blue-500 hover:underline text-sm font-medium">View Details</Link>
              </div>
            </div>
          </div>  

    ))}
    </div>

  )
}

export default FeedCard