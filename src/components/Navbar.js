import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menuitem } from './Menuitem'
import "./navbarStyle.css"
import Logo from "../assets/logo.jpg"

export class Navbar extends Component {

  state ={clicked : false}
  handleclick = () =>{
    this.setState({clicked : !this.state.clicked})
  }


 
  buttonhandleclick = () =>{
    this.props.history.push('/signup')
  }

  render() {
    return (
     
    <nav className='navBar'>
        <img alt='img'
        src={Logo}/>
        
        
        <div className='menu-icons' onClick={this.handleclick}>
            <i className={this.state.clicked?
                "fa-solid fa-circle-xmark" :"fa-solid fa-bars"
            }>
                
            </i>
        </div>
        <ul className={this.state.clicked ? 
            "navbaritem active": "navbaritem"
        }>
        

            {Menuitem.map((item,index)=>{
                return(
                    <li key = {index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                        </Link>
                    </li>
                )


            }
            
            )}

            
            
        </ul>
    </nav>
      
    )
  }
}

export default Navbar
