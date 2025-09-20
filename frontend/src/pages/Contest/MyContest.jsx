import React, {useState, useEffect} from 'react'
import ContestCard from './ContestCard';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const MyContest = () => {
    
    const {username} = useParams();
    const [contestData, setContestData] = useState(null);
    const [err, setErr] = useState(null);
        useEffect(() => {
            const fetchContests = async () => {
                const response = await fetch(`http://localhost:3000/api/contests/user/${username}`,{
                    method: "GET",
                    credentials: "include",
                });
                const data = await response.json();
                if(response.ok){
                    setTimeout(()=>{
                        setContestData(data.myContests);
                    }, 2000);
                }
                if(!response.ok){
                    setTimeout(() => {
                        setErr(data.message)
                    })
                }
            }
    
            fetchContests();
    
        }, [username]);

        if(!contestData && !err){
            return <Loading />
        }

  return (
    <div className='w-full h-auto pt-[70px] pb-[20px] flex flex-col justify-start items-center'>
        {err ? <p>{err}</p> : 
        contestData?.length === 0 ? <p>No Contest Listed Yet.</p> : contestData.map((contest) => (<ContestCard key={contest._id} contest={contest} />))}
    </div>
  )
}

export default MyContest