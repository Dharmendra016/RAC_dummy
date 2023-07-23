import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav-logo'>
            <Link to="/">
                <img src="./RAC-logo.png" alt="RAC logo" />
            </Link>
        </div>

        <div className='nav-items'>
            <div className='underline'>
                <Link to="/" className="item">
                    Home
                </Link>
            </div>

            <div className='underline'>    
                <Link to="/about" className="item">
                    About
                </Link>
            </div>

            <div className='underline'>
                <Link to="/Gallery"className="item" >
                    Gallery
                </Link>
            </div>

            <div className='underline'>
                <Link to="/Resources" className="item">
                    Resources
                </Link>
                </div>
        </div>

        <div className='join-btn'>
                <Link to = "#" className='btn'>
                    Join
                </Link>
        </div>
        

    </div>
  )
}

export default Navbar
