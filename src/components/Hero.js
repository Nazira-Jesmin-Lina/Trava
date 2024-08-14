import React from 'react'
import "./heroStyle.css"

export default function Hero(props) {
  return (
    <>
      <div className={props.cname}>
        <img alt="heroimage" 
        src={props.HeroImg}/>

      </div>

      <div className='hero-text'>
        <h1>{props.title} </h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClss}>
        {props.buttonTxt}</a>
      </div>
    </>
  )
}
