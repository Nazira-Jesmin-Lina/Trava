import React from 'react'
import "./destinationstyle.css"

export default function DestinationData(props) {
  return (
    <div className={props.destclsname}>
        <div className='first-txt'>
          <h2> {props.placename}</h2>
          <p>{props.desccription}</p>
        </div>

        <div className='image'>
          <img 
          alt='img'
          src={props.firstimg}
          />

          <img 
          alt='img'
          src={props.secondimg}
          />
        </div>

      </div>
      
  
  )
}
