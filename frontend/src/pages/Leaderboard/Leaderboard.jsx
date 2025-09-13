import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ContestDetail from './ContestDetail';
import LeaderboardTable from './LeaderboardTable';

const Leaderboard = () => {

    const {contestId} = useParams();
    const [contest, setContest] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(()=>{
        const fetchContestData = async() => {
            const response = await fetch(`http://localhost:3000/api/contests/${contestId}/leaderboard`,{
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            });
            const data = await response.json();

            if(response.ok){
                setTimeout(()=>{
                    setContest(data.contest);
                    setPosts(data.posts)
                },2000)
            }
        }

        fetchContestData();
    },[contestId])

    if(!contest || !posts){
        return <div className='pt-[70px] w-full h-auto text-center'>Loading...</div>
    }

  return (
    <div className='pt-[70px] w-full h-full flex flex-col justify-start items-center'>
        <ContestDetail contest={contest} />
        <LeaderboardTable posts={posts} />
    </div>
  )
}

export default Leaderboard