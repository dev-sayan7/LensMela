import React, {useState, useEffect} from 'react'
import ContestCard from './ContestCard';
import { useParams } from 'react-router-dom';

const MyContest = () => {
    
    const {username} = useParams();
    const [contestData, setContestData] = useState(null)
        useEffect(() => {
            const fetchContests = async () => {
                const response = await fetch(`http://localhost:3000/api/contests/user/${username}`,{
                    method: "GET",
                    headers:{
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
                });
                const data = await response.json();
                if(response.ok){
                    setTimeout(()=>{
                        setContestData(data.myContests);
                    }, 2000);
                }
            }
    
            fetchContests();
    
        }, [username]);

        if(!contestData){
            return <div className='pt-[70px] flex justify-center items-center'>Loading ...</div>
        }

  return (
    <div className='w-full h-auto pt-[70px] pb-[20px] flex flex-col justify-start items-center'>
        {contestData?.length === 0 ? <p>No Contest Listed Yet.</p> : contestData.map((contest) => (<ContestCard key={contest._id} contest={contest} />))}
    </div>
  )
}

export default MyContest