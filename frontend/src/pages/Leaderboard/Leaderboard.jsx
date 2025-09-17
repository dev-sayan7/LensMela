import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ContestDetail from './ContestDetail';
import LeaderboardTable from './LeaderboardTable';
import Winner from './Winner';

const Leaderboard = () => {

    const {contestId} = useParams();
    const [msg, setMsg] = useState(null)
    const [winner, setWinner] = useState(null)
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
                if(data.contest || data.posts){
                    setContest(data.contest);
                    setPosts(data.posts);
                }
                if(data.winner){
                    setWinner(data.winner);
                }
                if(data.message){
                    setMsg(data.message);
                }
            }
        }

        fetchContestData();
    },[contestId])

    if(!contest && !posts && !winner && !msg){
        return <div className='pt-[70px] w-full h-auto text-center'>Loading...</div>
    }

  return (
    <div className='pt-[70px] w-full h-full flex flex-col justify-start items-center'>
        {msg ? <div className='pt-[70px] w-full h-auto text-center'>{msg}</div> : null}
        {contest || posts ? <>
            <ContestDetail contest={contest} />
            <LeaderboardTable posts={posts} />
        </> : null}
        {winner ? <Winner user={winner.createdBy} /> : null}
    </div>
  )
}

export default Leaderboard