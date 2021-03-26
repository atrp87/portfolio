import NavbarCSS from "./Navbar.module.css";
import Logo from "../../assets/ap-logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle);

    return ( 
        <nav className={NavbarCSS.navbar}>
            <img src={ Logo } width="40px"alt="navbar logo"/>
            <div className="link" onClick={handleClick}>
                <Link to="/">about</Link>
                <Link to="/portfolio">portfolio</Link>
                <Link to="/contact">contact</Link>
                <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
            </div>
        </nav>
    );
}

export default Navbar;