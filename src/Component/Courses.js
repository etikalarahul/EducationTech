import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'

function Courses() {
  return (
    <div>
      <Navbar />
    
      <h1 style={{marginTop: "3rem", textAlign: "center"}}>Courses</h1>
        <Cards />

        <h1 style={{marginTop: "3rem", textAlign: "center"}}>Courses</h1>
        <Cards />

        <h1 style={{marginTop: "3rem", textAlign: "center"}}>Courses</h1>
        <Cards />

      <Footer />
    </div>
  )
}

export default Courses
