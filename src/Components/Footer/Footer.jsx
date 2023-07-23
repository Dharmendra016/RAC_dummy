import React from 'react'
import {BsFacebook , BsInstagram} from 'react-icons/bs'
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='first-part'>
            <p>Team RAC</p>
            <p>IOE Thapathali Campus,</p>
            <p>Kathmandu, Nepal</p>
        </div>

        <div className='mid-part'>
            <a href="#">Contact Us</a>
            <a href="#">About</a>
            <a href="#">Join us</a>

        </div>

        <div className='last-part'>
            <button><BsFacebook fontSize="1.75rem"/></button>
            <button><BsInstagram fontSize="1.75rem"/></button>
        </div>
    </div>
    <p className='footer-para'>Copyright © 2023 RAC(Robotics) . All Rights Reserved</p>

    </>
  )
}

export default Footer
