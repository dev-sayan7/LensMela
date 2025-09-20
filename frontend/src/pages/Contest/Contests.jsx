import React from 'react'
import { useState, useEffect } from 'react'
import ContestCard from './ContestCard'
import Loading from '../../components/Loading/Loading'

const Contests = () => {

    const [contestData, setContestData] = useState(null)
    useEffect(() => {
        const fetchContests = async () => {
            const response = await fetch("http://localhost:3000/api/contests",{
                method: "GET",
                credentials: 'include'
            });
            const data = await response.json();
            if(response.ok){
                setTimeout(()=>{
                    setContestData(data.contests);
                }, 2000);
            }
        }

        fetchContests();

    }, []);

    if(!contestData){
        return <Loading />
    }

  return (
    <div className='w-full h-auto pt-[70px] pb-[20px] flex flex-col justify-start items-center'>
        {contestData.length === 0 ? <p>No Contest Listed Yet.</p> : contestData.map((contest) => (<ContestCard key={contest._id} contest={contest} />))}
    </div>
  )
}

export default Contests