import React from 'react'
import { Link } from 'react-router-dom'
// Style
import '../style/app.css'; 
import '../style/Footer.css'; 

const Footer = () => {

    return (
        <div className='footer'>
            <div className="footer__info">
                <h5>
                    &copy;2021 BrokenCode
                </h5>
                <p>brokencode.co is a website where you can download the source code for the videos featured on our <a href="https://www.youtube.com/c/BrokenCode" target="_blank">Youtube Channel</a>.</p>
            </div>
            <div className="footer__links">
                <a 
                    href="https://www.youtube.com/c/BrokenCode" 
                    target="_blank"
                    className="footer__link"
                >Youtube</a>
                <Link to="/terms" className='footer__link'>
                    Terms
                </Link>
            </div>
        </div>
    )
}

export default Footer