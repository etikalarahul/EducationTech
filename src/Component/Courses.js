import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'
import coursesdata from './data'

function Courses() {
  return (
    <div>
      <Navbar />
    
      <h1 style={{marginTop: "3rem", textAlign: "center"}}>Courses</h1>
        <Cards coursesdata={coursesdata} temp={0}/>

        {/* <h1 style={{marginTop: "3rem", textAlign: "center"}}>Courses</h1> */}
        <Cards coursesdata={coursesdata} temp={3}/>

      <Footer />
    </div>
  )
}

export default Courses
