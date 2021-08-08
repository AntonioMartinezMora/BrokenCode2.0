import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
// Components
import Searchbar from './Searchbar';
import Pagetop from './Pagetop';
// Style
import '../style/app.css'; 
import '../style/Navbar.css'; 

const Navbar = () => {
    const location = useLocation()

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="https://media.publit.io/file/w_640/SiteResources/BC_logo.png" alt="BrokeCode" />
                </Link>
            </div>
            {location.pathname === '/' ?<Searchbar /> : <Pagetop />}
            
        </nav>
    )
}

export default Navbar