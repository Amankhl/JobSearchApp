import axios from "axios";
import React,{ createContext, useEffect, useState } from "react";

export const TrendingJobsContext = createContext()

const TrendingJobsProvider = ({children}) => {

const [dropDownClicked, setDropDownClicked] = useState(false)
const [dropDownlocation, setDropDownlocation] = useState('India')
const [trendingJobs, setTrendingJobs] = useState([])

const options = {
method: 'GET',
url: 'https://jsearch.p.rapidapi.com/search',
params: {
query: `${dropDownlocation}`,
},
headers: {
  'X-RapidAPI-Key': '6e879fa98cmsh88a03d2fedef235p1b0a32jsnca484c89f821',
'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
}
};

const fetchTrendingJobs = async()=>{
  const response = await axios.request(options)
  console.log(response.data.data)
  setTrendingJobs(response.data.data)
}
useEffect(()=>{
  fetchTrendingJobs()
},[])


const values={
    dropDownClicked,
    setDropDownClicked,
    dropDownlocation,
    setDropDownlocation,
    trendingJobs,
    fetchTrendingJobs
}

  return (
    <TrendingJobsContext.Provider value={values}>
        {children}
    </TrendingJobsContext.Provider>
  )
}

export default TrendingJobsProvider