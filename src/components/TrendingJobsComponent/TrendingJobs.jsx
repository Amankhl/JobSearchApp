import React, { useContext } from 'react'
import DropDownLocation from './DropDownLocation'
import { TrendingJobsContext } from './TrendingJobsProvider'
import TrendingJobCard from './TrendingJobCard'

const TrendingJobs = () => {
const {dropDownClicked, setDropDownClicked, dropDownlocation,setDropDownlocation, fetchTrendingJobs} = useContext(TrendingJobsContext)
 const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      fetchTrendingJobs()
    }
  };

  return (
    <div className=' w-full'>
       <div className='flex justify-center gap-2 items-center mt-3 relative'>
            <h1>Location</h1>
            <input onKeyDown={(e)=>onKeyDownHandler(e)} className='shadow-md text-md border rounded border-[#E5E7EB] font-medium w-[15%] bg-white px-2 py-1 text-center text-[#292929] focus:outline-none' value={dropDownlocation} onChange={(e)=>{setDropDownlocation(e.target.value)}} onClick={()=>setDropDownClicked((prev) => !prev)} />
            {dropDownClicked && 
            <DropDownLocation />
            }
       </div>
       <div className='w-full flex-1 mt-7 px-4'>
            <TrendingJobCard />
       </div>

    </div>
  )
}

export default TrendingJobs