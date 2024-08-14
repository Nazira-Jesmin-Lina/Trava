import React from 'react'
import "./SignUpformStyle.css"
import { useNavigate } from 'react-router-dom'

export default function SignUpform() {



const navigate = useNavigate(); // Initialize the navigate function

const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form validation and submission logic here

    // Navigate to the home page
    navigate('/');
}
  return (
    <div className='signUp'>
      <div className='image-sec'>
        <img alt='img'
        src='https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
      </div>

      <div className='form-container' >
      <h1>Don't Have an Account?</h1>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' />
        <input placeholder='Email' />
        <input placeholder='Password' type='password'  />
        <input placeholder='Confirm Password' type='password'  />
        <button type='Submit'>Register</button>
      </form>
    </div>
    </div>
  )
}
