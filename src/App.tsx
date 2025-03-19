import { useState } from 'react'
import './App.css'


import JobList from './components/Joblist/Joblist'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

function App() {

  return (
    <>
<div className="d-flex flex-column min-vh-100 fixed-top">
      <Navbar />
      <main className="container flex-grow-1 py-4">
        <JobList />
      </main>
      <Footer />
    </div>
        
    </>
  )
}

export default App
