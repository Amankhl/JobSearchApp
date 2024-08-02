import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TrendingJobs from './components/TrendingJobsComponent/TrendingJobs'
import Footer from './components/Footer'
import JobProvider from './context/JobProvider'
import TrendingJobsProvider from './components/TrendingJobsComponent/TrendingJobsProvider'

const App = () => {
  return (
    <JobProvider>
      <TrendingJobsProvider>
    <div className='max-w-[100vw] h-[100svh]'>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/trendingjobs' element={<TrendingJobs />}/>

      
      </Routes>
      <Footer />
      </Router>
    </div>
      </TrendingJobsProvider>
    </JobProvider>
  )
}

export default App