import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus quaerat recusandae exercitationem dolorum, fuga commodi in laboriosam vitae, nam nostrum, suscipit voluptatibus sunt illo delectus sequi tempora harum ipsa?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>845938458</li>
                    <li>Contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copy-rigths'>Copyrigths 2024 @ tomato.com - All rigths revserved</p>
    </div>
  )
}

export default Footer