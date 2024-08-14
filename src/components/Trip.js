import React from 'react'
import "./tripstyle.css"
import TripData from './TripData'

export default function Trip() {
  return (
    <div className='trip'>

      <h1>Recent Trip</h1>
      <p>You can dicover unique destination using google map </p>

      <div className='trip-card'>
      <TripData
        image='https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        placename='Japan'
        text="Once visa matters are settled, booking a flight to major international airports such as Narita (NRT) near Tokyo, 
        Haneda (HND) in Tokyo, or Kansai (KIX) near Osaka is the next step, with numerous airlines offering both direct and connecting 
        flights through hubs like Singapore, Hong Kong, or Seoul. Planning your itinerary is crucial."

      
      />

      <TripData
        image='https://images.unsplash.com/photo-1555217851-6141535bd771?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        placename='Singapore'
        text="Once visa matters are settled, booking a flight to major international airports such as Narita (NRT) near Tokyo, 
        Haneda (HND) in Tokyo, or Kansai (KIX) near Osaka is the next step, with numerous airlines offering both direct and connecting 
        flights through hubs like Singapore, Hong Kong, or Seoul. Planning your itinerary is crucial, with popular destinations including 
        Tokyo, Kyoto, Osaka, Hiroshima, and Hokkaido."

      
      />

      <TripData
        image="https://images.unsplash.com/photo-1482685945432-29a7abf2f466?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        placename='Holland park,UK'
        text="Once visa matters are settled, booking a flight to major international airports such as Narita (NRT) near Tokyo, 
        Haneda (HND) in Tokyo, or Kansai (KIX) near Osaka is the next step, with numerous airlines offering both direct and connecting 
        flights through hubs like Singapore, Hong Kong, or Seoul. "

      
      />

      </div>
      
    
      


    </div>
  )
}
