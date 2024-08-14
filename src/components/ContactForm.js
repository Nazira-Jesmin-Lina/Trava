import React from 'react'
import "./ContactformStyle.css"

export default function ContactForm() {
  return (
    <div className='form-container'>
      <h1>Send Message to us!</h1>
      <form>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='Subject'/>
        <textarea placeholder='Message' rows="4"></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}
