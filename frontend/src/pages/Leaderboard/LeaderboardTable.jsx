import React from 'react'
import { Link } from 'react-router-dom'
import { HiBadgeCheck } from 'react-icons/hi'

const LeaderboardTable = ({ posts }) => {
  return (
    <table className='w-[350px] h-auto'>
        <thead>
            <tr>
                <th className='text-xl'>Rank</th>
                <th className='text-xl'>Post</th>
                <th className='text-xl'>Posted By</th>
                <th className='text-xl'>Vote</th>
            </tr>
        </thead>
        <tbody>
            {posts.map((post, index) => (
                <tr key={post._id} className='border-b'>
                    <td className='text-[16px] py-2 px-4 text-center'>
                        {index+1}
                    </td>
                    <td className='text-[16px] py-2 px-4 text-center'>
                        <Link to={`/posts/${post._id}`}>View Post</Link>
                        </td>
                    <td className='text-[16px] py-2 px-4 text-center'>
                        {post.createdBy.name}
                        {post.createdBy.isVerified && <HiBadgeCheck className="text-blue-700"/>}
                    </td>
                    <td className='text-[18px] font-bold py-2 px-4 text-center'>
                        {post.vote.length}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default LeaderboardTable