import axios from "axios";
import react, { createContext, useEffect, useState } from "react";

export const JobContext = createContext()

const JobProvider = ({children}) =>{

const [fetchedJobs, setFetchedJobs] = useState([])
const [selectedJob, setSelectedJob] = useState('')
const [searchedJobName, setSearchedJobName] = useState('')
const [searchedLocation, setSearchedLocation] = useState('')
const [selectedJobInfo, setSelectedJobInfo] = useState([])
const [requirements, setRequirements] = useState({qualifications: [], requiredExperience:{}})

// const [tryState, setTryState] = useState([])

const options = {
method: 'GET',
url: 'https://jsearch.p.rapidapi.com/search',
params: {
query: `${searchedJobName} ${searchedLocation}`,
},
headers: {
'X-RapidAPI-Key': '6e879fa98cmsh88a03d2fedef235p1b0a32jsnca484c89f821',
'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
}
};
const fetchData = async() =>{
	const response = await axios.request(options);
    setFetchedJobs(response.data.data) // I want to access the data array in the data object. if you mapped over response.data, it would give you error as response.data is an object. response.data.data is the array
	// console.log(response.data.data);
    // console.log(response)
}

useEffect(() => {
    if(fetchedJobs.length > 0){   // this condition is important because although this use effect is dependent on selectedJob state, it will run at the initial rendering. and selectedJobs hasn't been defined. you then access properties like job_highlights which give you error. 
        const myJob = fetchedJobs.filter((job) => job.job_id.includes(selectedJob));
        // console.log(myJob[0])
        setSelectedJobInfo(myJob[0]) // I could have also used setSelectedJobInfo(myJob) but then I would need to use .map(), here I just provide the only array left (0th index) 
        setRequirements({qualifications: myJob[0].job_highlights.Qualifications,  
        requiredExperience: myJob[0].job_required_experience.required_experience_in_months})  // but here you have clicked on the job cards after that you are accessing these values and if tried to use it before defining the value, the react would render all of component and find experience_in_months as undefined
    }
}, [selectedJob]);


const value={
    fetchData,
    setSearchedJobName,
    setSearchedLocation,
    fetchedJobs,
    setSelectedJob,
    selectedJob,
    selectedJobInfo,
    requirements
}

    return(
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    )
}
export default JobProvider