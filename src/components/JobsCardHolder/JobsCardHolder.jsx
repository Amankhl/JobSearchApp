import React, { useContext } from 'react'
import JobCards from './JobCards'
import { JobContext } from '../../context/JobProvider'

const JobsCardHolder = () => {
  const {fetchedJobs} = useContext(JobContext)

  return (
    <div className='flex flex-col gap-4 w-[100%] md:px-3 pb-3 h-[100%] overflow-y-scroll scrollbar-hide'>
      { fetchedJobs && fetchedJobs.map &&
      fetchedJobs.map((job,index)=>{
        return (
        <JobCards key={index} job = {job}/>
        )})}
    </div>
  )
}

export default JobsCardHolder