import React, { useEffect, useState } from "react";
import Loading from '../../components/Loading/Loading'
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";

const Feed = () => {

  const [feed, setFeed] = useState(null);
  useEffect(() => {
    const fetchFeed = async() => {
      const response = await fetch('http://localhost:3000/api/contests/new/feed', {
        method: "GET",
        credentials: 'include'
      });
      const data = await response.json();

      if(response.ok){
        setFeed(data.feed);
      }
    }

    fetchFeed();
  }, [])

  return (
    <div className="pt-[70px] w-full min-h-screen bg-gray-50">

      <div className="max-w-4xl mx-auto px-4 pb-[20px]">
        <h1 className="text-2xl font-bold text-gray-800">Your Feed</h1>
        <p className="text-gray-600 text-sm">
          Explore posts from contests you’re part of
        </p>
      </div>
      { feed?.length === 0 ? <Link to={'/contests'}> Explore Contests</Link> :
        feed?.map((f) => (
            <FeedCard key={f.contestId} posts={f.posts} contestId={f.contestId} />
          ))
      }
      
    </div>
  );
};

export default Feed;
