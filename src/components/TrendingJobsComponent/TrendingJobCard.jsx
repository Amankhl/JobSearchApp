import React, { useContext } from 'react'
import { TrendingJobsContext } from './TrendingJobsProvider'

const TrendingJobCard = () => {
const {fetchTrendingJobs, trendingJobs} = useContext(TrendingJobsContext)
console.log(trendingJobs)
  return (
    <>
    {trendingJobs && trendingJobs.map && trendingJobs?.map((job,index)=>{
        return(
    <div key={index} className='flex w-full justify-center px-12 mb-10 border rounded-xl shadow-lg pb-6'>
        <div className='w-[50%]'>
            <div className='flex flex-col gap-2 shadow-md hover:shadow-xl transition-shadow p-3 rounded-l-xl'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[1.5rem] font-medium hover:text-blue-800'>{job.job_title}</h1>
                    <img className='w-20 mr-6' src={job.employer_logo} alt="" />
                </div>
                <h1 className='text-[1.5rem] font-medium'><a href={job.employer_website}>{job.employer_name}</a></h1>
                <a className='hover:text-blue-800 text-blue-950 text-md' href={job.employer_website}>{job.employer_website}</a>
                <h1 className='text-[1.1rem]'>location <span className='bg-[#F1F1F1] text-sm px-2 py-1 rounded'>{job.job_city}, {job.job_country}</span></h1>
                <h1 className='text-[1.1rem]'>Job type <span className='bg-[#F1F1F1] text-sm px-2 py-1 rounded'>{job.job_employment_type}</span></h1>
                <h1 className='text-[1.1rem]'>Remote job <span className='bg-[#F1F1F1] text-sm px-2 py-1 rounded'>{job.job_is_remote == false ? 'No' : 'Yes'}</span></h1>    
            </div>
            <div className='overflow-hidden overflow-y-scroll scrollbar-hide p-3'>
                <h1 className='text-[1.5rem] font-medium'>Description</h1>
                <p className='text-[1rem] text-[#959494]' dangerouslySetInnerHTML={{ __html: job.job_description.replace(/•/g, '<br/> •') }}></p>
            </div>
        </div>
        <div className='w-[50%] p-3 space-y-3'>
            <h1 className='text-[1.5rem] font-medium'>Full Job Details</h1>
            <h1 className='text-[1.1rem]'>Experience <span className='bg-[#F1F1F1] text-sm px-2 py-1 rounded'> {job.job_required_experience?.required_experience_in_months/12 <= 0 ? 'fresher' : job.job_required_experience?.required_experience_in_months/12}</span></h1>
            {/* <h1 className='text-[1.2rem] font-semibold'>Requirements</h1>
            <p className='text-[1rem] text-[#959494]'>{job.job_description}</p> */}
            <h1 className='text-[1.1rem]'>Benefits</h1> 
            <p></p>
            <p className='text-[1.1rem]'>Required language <span className='bg-[#F1F1F1] text-sm px-2 py-1 rounded'>{job.job_posting_language}</span></p>
            <h1 className='text-[1rem] text-[grey] mt-2'>Links to apply</h1>
            <div className='flex flex-wrap gap-2'>
                {job.apply_options?.map((option,index)=>{
                    return (
                        <button className='bg-[#000000] text-sm text-white p-2 rounded' key={index}><a href={option?.apply_link}>{option?.publisher}</a></button>
                    )
                })}
            </div>
        </div>
    </div>
    )})
        }
        </>
        )
    }

export default TrendingJobCard