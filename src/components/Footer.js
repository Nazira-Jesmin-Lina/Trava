import React from 'react'
import "./footerstyle.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div >
            <h1>Trava</h1>
            <p>Find your destination</p>
        </div>
        <div>
            <a href='./'>
            <i class="fa-brands fa-facebook"></i>
            </a>

            <a href='./'>
            <i class="fa-brands fa-github"></i>
            </a>

            <a href='./'>
            <i class="fa-solid fa-envelope"></i>
            </a>

            <a href='./'>
            <i class="fa-brands fa-linkedin"></i>
            </a>
              
        
        </div>
      </div>

      <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href='./'>changeLog</a>
            <a href='./'>Status</a>
            <a href='./'>Result</a>
            <a href='./'>All version</a>
        </div>

        <div>
            <h4>Community</h4>
            <a href='./'>Github</a>
            <a href='./'>Issues</a>
            <a href='./'>project</a>
            <a href='./'>twitter</a>
        </div>

        <div>
            <h4>Help</h4>
            <a href='./'>Support</a>
            <a href='./'>Troubleshooting</a>
            <a href='./'>Contact</a>
            <a href='./'>All version</a>
        </div>

        <div>
            <h4>Project</h4>
            <a href='./'>changeLog</a>
            <a href='./'>Status</a>
            <a href='./'>Result</a>
            <a href='./'>All version</a>
        </div>

      </div>
    </div>
  )
}

export default Footer
