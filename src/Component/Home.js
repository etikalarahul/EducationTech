import React from 'react'
import Navbar from './Navbar'
import Crousel from './Crousel'
import Cards from './Cards'
import Categories from "./Categories"
import Footer from './Footer'
import CookieConsent from "react-cookie-consent";
import coursesdata from './data'


export default function Home() {



  return (
    <div>
      <CookieConsent buttonText="Accept Cookies">This website uses cookies to enhance the user experience.</CookieConsent>

        <Navbar/>
        <Crousel />

        <h1 style={{marginTop: "3rem", textAlign: "center"}}>Courses</h1>
        <Cards coursesdata={coursesdata} temp={0}/>

        <h1 style={{marginTop: "3rem", textAlign: "center"}}>Categories</h1>
        <Categories />

        <Footer/>
    </div>
  )
}
