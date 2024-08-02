import React, { useContext } from 'react'
import { location, search } from '../assets/assets'
import SearchResultsHolder from './SearchResultsHolder'
import { JobContext } from '../context/JobProvider'

const Home = () => {
    const {fetchData,setSearchedJobName,setSearchedLocation} = useContext(JobContext)
  return (
    <div className='w-[100%] h-[88%] mb-6'>
        {/* view post height - navbar height = 88% (remaining height)*/}
        <div className='flex h-[100%] items-center flex-col'>
            {/* Search */}
              <div className='md:w-[60%] max-md:w-[95%] md:h-[4rem] max-md:h-[3rem] border rounded-xl relative flex items-center mt-8 shadow-xl'>
                <div className='w-[45%] h-[100%] relative flex items-center'>
                      <img src={search} className='md:w-5 max-md:w-4 absolute  left-3' alt="" />
                      <input className='md:pl-10 max-md:pl-9 focus:outline-none w-[100%] h-[100%] rounded-l-xl  md:text-[1.1rem] sm:text-[1rem] max-sm:text-[0.9rem]' type="text" placeholder='Job title, or keywords'  onChange={(e)=>setSearchedJobName(e.target.value)}/>
                </div>
                <div className='w-[42%] h-[100%] relative flex items-center'>
                      <img src={location} className='md:w-5 max-md:w-4 absolute  left-3' alt="" />
                      <input className='md:pl-10 max-md:pl-9 border border-l-[#E5E7EB] focus:outline-none w-[100%] h-[100%] border-transparent  md:text-[1.1rem] sm:text-[1rem] max-sm:text-[0.9rem]' type="text" placeholder='City, state, or country'  onChange={(e)=>setSearchedLocation(e.target.value)}  />
                </div>
                  <button onClick={fetchData} className='absolute right-2 md:text-[1.1rem] sm:text-[1rem] max-sm:text-[0.9rem] md:h-[80%] border border-black bg-black text-white rounded-xl md:py-2 md:px-4 max-md:h-9 max-md:px-2'>Find jobs</button>
            </div>
            <SearchResultsHolder />
        </div>
    </div>
  )
}

export default Home