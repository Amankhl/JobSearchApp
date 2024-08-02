import React, { useContext } from 'react'
import {dots} from '../../assets/assets'
import { JobContext } from '../../context/JobProvider'

const JobCards = ({job}) => {
  const {setSelectedJob} = useContext(JobContext)

  const summarizeText =(text)=> {
    const words = text.split(' ');
    if (words.length > 50) {
        return words.slice(0, 50).join(' ') + ' ...';
    }
    return text;
}

  return (
    <>
    <div onClick={()=>setSelectedJob(job.job_id)} className='border-2 rounded-2xl p-3 shadow-md cursor-pointer'>
        <div className='flex justify-between items-center'>
        <h1 className='text-[1.6rem] font-medium'>{job.job_title}</h1>
        <img className='w-5 h-5' src={dots} alt="" />
        </div>
        <h1 className='text-[1rem]'>{job.employer_name}</h1>
        <h1>{job.job_city}, {job.job_state}, {job.job_country} </h1>
        <p className='text-[grey] text-[14px] mt-3'>{summarizeText(job.job_description)}</p>
    </div>
    </>
  )
}

export default JobCards