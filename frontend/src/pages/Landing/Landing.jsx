import React from 'react'
import { Link } from 'react-router-dom'
import { FaUpload, FaVoteYea } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";

const Landing = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-[70px] flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-indigo-500 to-purple-600 text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Showcase Your Photography Skills
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Join LensMela and participate in exciting contests, vote for your favorite photos, and get recognized!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/signup" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200 transition">
            Sign Up
          </Link>
          <Link to="/login" className="px-6 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition">
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-4xl px-6 py-12 flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-center mb-6">Why LensMela?</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
            <FaUpload className="w-16 h-16 mb-4" />
            <h3 className="font-semibold mb-2">Upload Photos</h3>
            <p className="text-gray-600 text-sm">Easily upload your best shots to participate in contests.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
            <FaVoteYea className="w-16 h-16 mb-4" />
            <h3 className="font-semibold mb-2">Vote & Engage</h3>
            <p className="text-gray-600 text-sm">Vote for other photographers and be part of the community.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
            <BsFillTrophyFill className="w-16 h-16 mb-4" />
            <h3 className="font-semibold mb-2">Win Contests</h3>
            <p className="text-gray-600 text-sm">Get recognized and earn rewards by winning contests.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full bg-gray-100 py-12 px-6 flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold mb-6">How it Works</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
            <span className="text-indigo-600 font-bold text-xl mb-2">1</span>
            <h3 className="font-semibold mb-1">Upload</h3>
            <p className="text-gray-600 text-sm">Submit your best photo for any contest.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
            <span className="text-indigo-600 font-bold text-xl mb-2">2</span>
            <h3 className="font-semibold mb-1">Vote</h3>
            <p className="text-gray-600 text-sm">Vote for your favorite submissions from other users.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow">
            <span className="text-indigo-600 font-bold text-xl mb-2">3</span>
            <h3 className="font-semibold mb-1">Win</h3>
            <p className="text-gray-600 text-sm">Earn recognition and rewards if your photo gets the most votes.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-12 flex flex-col items-center gap-4 bg-indigo-600 text-white text-center">
        <h3 className="text-xl font-bold">Ready to join LensMela?</h3>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link to="/signup" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200 transition">
            Sign Up
          </Link>
          <Link to="/login" className="px-6 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition">
            Login
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Landing
