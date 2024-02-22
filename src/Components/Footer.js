import React from 'react'
import "../footer.css";
const Footer = () => {
  return (
    
            <div className='footer_wrapper'>

                <div className='footer_'>
                    <ul>
                     <li><span>Quick Links</span></li>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Why Wasruk?</li>
                    <li>How we work?</li>
                    <p>@Copyright 2021 by WasRuk.com</p>

                    </ul>
                </div>

                <div className='footer_'>
                    <ul>
                        <li></li>
                        <li>Request Pickup</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className='footer_'>
                    <ul>
                        <li><span>Waste</span></li>
                        <li>Organic waste</li>
                        <li>Inorganic waste</li>
                        <li>E waste</li>
                    </ul>
                    
                </div>

                <div className='footer_'>
                    
                    <ul>
                        <li><span>Newsletter</span></li>
                        <li><input type="text" placeholder='Email address' /> </li>
                        <li><button>Subscribe</button></li>
                    </ul>

                </div>
            </div>

  ) 
}

export default Footer