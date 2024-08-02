import React, { useContext } from 'react'
import { countries } from "./Countries";
import { TrendingJobsContext } from './TrendingJobsProvider';


const DropDownLocation = () => {
    const {dropDownClicked, setDropDownClicked, dropDownlocation, setDropDownlocation, fetchTrendingJobs} = useContext(TrendingJobsContext) 

  return (
    <div className='w-[15.05%] absolute top-[100%] left-[44.74%] shadow-xl text-md border h-[10rem] rounded border-[#E5E7EB] font-medium bg-white px-2 text-center text-[#292929] overflow-hidden overflow-y-scroll scrollbar-hide'>
                <ul>
                {countries.map((country,index)=>{
                    return (<li key={index} className='py-1 border-b-2 hover:shadow-md cursor-pointer' onClick={()=>{setDropDownlocation(country);  setDropDownClicked(false); fetchTrendingJobs()}}>{country}</li>)
                })}
                </ul>
    </div>
  )
}

export default DropDownLocation