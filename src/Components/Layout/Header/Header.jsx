import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import classes from './Header.module.css'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    const [toggleIcon, setToggleIcon] = useState(faBars);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setToggleIcon(toggleIcon === faBars ? faXmark : faBars);
        setShowMenu(!showMenu);
    }
    
    return (
        <React.Fragment>
            <div className={classes.headerWrap}>
                <h1>KULIJAWA</h1>

                <DesktopNav/>
                <MobileNav toggleIcon={ toggleIcon } toggleMenu={toggleMenu}/>    
            </div>

            
            { showMenu && <nav className={`${classes.mobile} ${classes.nav}`}>
                    <a href="./">Home</a>
                    <a href="./">Services</a>
                    <a href="./">Gallery</a>
                    <a href="./">Project</a>
                    <a href="./">About Us</a>
                    <a href="./">Contact Us</a>
                </nav> }
            
        </React.Fragment>
    );
}

export default Header;