import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>

        <Navbar/>
       <Hero
        cname ="hero"
        HeroImg="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title ="Travel is like medicine"
        text ="Never get too busy making a living that you forget to make a life."
        url ="/"
        btnClss ="homeBtn"
        buttonTxt ="Travel Plan"
       />
       <Destination/>
       <Trip/>
       <Footer/>
    </>
  )
}
