import React, { useContext } from 'react'
import JobsCardHolder from './JobsCardHolder/JobsCardHolder'
import { JobContext } from '../context/JobProvider'

const SearchResultsHolder = () => {
    const {selectedJobInfo,requirements} = useContext(JobContext)    // if you try to access Qualifications using this -> const requirements = selectedJobInfo.job_highlights.Qualifications , it will throw error because Qualifications and job hightlights are not defined yet and you are accessing them before even clicking on the job cards
  return (
    <div className='h-[80.5%] w-[100%] mt-8'>
        <div className='w-full h-[100%] md:px-[10%] flex gap-4 justify-center'>

            <div className='w-[40%]'>
                <JobsCardHolder />
            </div>
    {/* ***************** */}
        {selectedJobInfo == undefined ? 'NO JOB' :
         <div className='w-[40%] h-[100%] border rounded-t-xl'>
                <div className='border rounded-t-xl h-[40%] w-[100%] p-3 pt-7 space-y-1 shadow-md'>
                    <h1 className='text-[140%] font-medium'>{selectedJobInfo.job_title}</h1>   {/* if haven't selected any card yet. selectedJobInfo = empty array, so job_title will be undefined. no result will be displayed */}
                    <h1 className='text-[1.3rem] text-[#1c1a1a]'>{selectedJobInfo.employer_name}</h1>
                    <h1 className='text-[#3e3d3dcb]'>{selectedJobInfo.job_city} {selectedJobInfo.job_country}</h1>
                    <button className='mt-5 text-[1.2rem] border border-black bg-black text-white px-4 py-[0.5rem] rounded-xl'><a href={selectedJobInfo.job_apply_link}>Apply now</a></button>
                </div>
                <div className='overflow-hidden h-[59.9%] flex flex-col items-start overflow-y-scroll p-3'>
                    <h1 className='text-xl font-medium mb-3'>Job details</h1>
                    <h1 className='text-sm font-medium flex items-center gap-2'>Job Type  <span className='text-[rgb(129,127,127)] text-sm font-normal px-1 rounded border bg-[rgb(241,241,241)]'>{selectedJobInfo.job_employment_type}</span> </h1>
                    {selectedJobInfo.job_occupational_categories == null ? '' : 
                     <h1 className='text-[rgb(129,127,127)] mt-2 text-sm font-normal p-1 rounded border bg-[rgb(241,241,241)]'>{selectedJobInfo.job_occupational_categories}</h1>
                    }
                    <h1 className='text-sm font-medium mt-3 flex items-center gap-2'>Remote Job-  <span className='text-[rgb(129,127,127)] text-sm font-normal px-1 rounded border bg-[rgb(241,241,241)]'>{selectedJobInfo.job_is_remote === false ? 'No' : 'Yes'}</span> </h1>
                    <div className='w-full border my-2'></div>
                    <h1 className='text-xl font-medium mb-3'>Requirements</h1>
                    {
                        selectedJobInfo?.job_highlights?.Qualifications == null ?                // if haven't selected any card yet. here selectedJobInfo = empty array, so job_highlights will be undefined. now accessing the property job_description of an undefined will give you an error.
                        (
                            <p className='text-[grey]'>{selectedJobInfo.job_description}</p>
                        ) :
                    <p className='text-[grey]'>{requirements.qualifications?.map((points, index)=>{
                        return (<li key={index}>{points}</li>)
                    })}</p>
                }
                    {/* <h1 className='text-xl font-medium mb-3'>Experience - {requirements.requiredExperience/12 === 0 ? 'fresher' : requirements.requiredExperience/12 + ' years'}</h1> */}
                    <h1 className='text-lg font-medium mt-3  flex items-center gap-2'>Experience -  <span className='text-[rgb(129,127,127)] text-sm font-normal px-1 rounded border bg-[rgb(241,241,241)]'>{selectedJobInfo.job_required_experience?.required_experience_in_months /12 === 0 ? 'fresher' : selectedJobInfo.job_required_experience?.required_experience_in_months/12 + ' years'}</span> </h1>  {/* or you can use this code as it just the same as the checks before using the property in the same way we checked in JobProvider using if condition and then provided the required experience to the array. you cannot do it without '?.' as react would render the page and find experience_in_months as undefined*/}
                     <h1 className='text-lg font-medium mt-3'>Job Benefits</h1>
                     {selectedJobInfo.job_benefits?.map((point, index)=>{
                        return(
                            <p className='text-[grey]' key={index}><li>{point.split('_').slice(0).join(' ')}</li></p>
                        )
                     })}
                </div>
            </div>
}
        </div>
    </div>
  )
}

export default SearchResultsHolder