import React from 'react'
import "./destinationstyle.css"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>What is your Destination?</h1>
        <p>Choose your destination which attracts you most</p>
          
        <DestinationData

        destclsname="first-des"
        placename="Bali,Indonesia"
        desccription="Bali is a popular Indonesian island known for its stunning beaches, lush rice terraces, vibrant arts and culture, and rich spiritual heritage. The island is famous for its picturesque landscapes, lively festivals, and a unique blend of ancient temples and modern resorts. Bali offers a diverse range of activities, from surfing and diving to exploring traditional villages and experiencing the island's dynamic nightlife. Its warm climate, friendly locals, and breathtaking scenery make it a top destination for travelers worldwide."
        firstimg="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        secondimg='https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        
        
        />

        <DestinationData
        destclsname="first-des-reverse"
        placename="Maldives"
        desccription="The Maldives is a tropical paradise located in the Indian Ocean, southwest of Sri Lanka. It's an archipelago made up of 26 atolls, comprising over 1,000 coral islands. The Maldives is renowned for its crystal-clear turquoise waters, white sandy beaches, and vibrant marine life, making it a top destination for luxury resorts, honeymooners, and scuba diving enthusiasts. The capital city, Malé, is one of the world's smallest capitals, known for its colorful buildings and bustling markets. The Maldives is also notable for its commitment to environmental sustainability, as it faces challenges from rising sea levels due to climate change."
        firstimg="https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        secondimg='https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        
        
        />


      {/* <div className='first-des'>
        <div className='first-txt'>
          <h2> Bali,Indonesia</h2>
          <p>Bali is a popular Indonesian island known for its stunning beaches, lush rice terraces, vibrant arts and culture, and rich spiritual heritage. The island is famous for its picturesque landscapes, lively festivals, and a unique blend of ancient temples and modern resorts. Bali offers a diverse range of activities, from surfing and diving to exploring traditional villages and experiencing the island's dynamic nightlife. Its warm climate, friendly locals, and breathtaking scenery make it a top destination for travelers worldwide.</p>
        </div>

        <div className='image'>
          <img 
          alt='img'
          src='https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />

          <img 
          alt='img'
          src='https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>

      </div> */}
      
    </div>
    
  )
}

export default Destination
