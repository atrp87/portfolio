// import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return ( 
        <nav className='navbar'>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link 
                        to='/' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        about
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link 
                        to='/portfolio' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        portfolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/contact'
                        className='nav-links'
                        onClick={closeMobileMenu}>
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
