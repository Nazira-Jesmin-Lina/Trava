import React from 'react'

export default function TripData(props) {
  return (
    <div className='t-card'>
     
     <div className='t-image'>

        <img
        alt='img'
        src={props.image}
        />
     </div>

     <h4>{props.placename}</h4>

    <p>{props.text}</p>
    </div>
  )
}
