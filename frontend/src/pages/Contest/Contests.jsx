import React from 'react'
import { useState, useEffect } from 'react'
import ContestCard from './ContestCard'

const Contests = () => {

    const [contestData, setContestData] = useState([])
    useEffect(() => {
        const fetchContests = async () => {
            const response = await fetch("http://localhost:3000/api/contests",{
                method: "GET",
                headers:{
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            const data = await response.json();
            if(response.ok){
                setContestData(data.contests);
            }
        }

        fetchContests();

    }, []);


  return (
    <div className='w-full h-auto pt-[70px] pb-[20px] flex flex-col justify-start items-center'>
        {contestData.map((contest) => (<ContestCard key={contest._id} contest={contest} />))}
    </div>
  )
}

export default Contests