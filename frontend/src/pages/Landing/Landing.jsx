import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='w-full h-full pt-[70px]'>
      <Link to={'/contests'}>Contests</Link>
    </div>
  )
}

export default Landing