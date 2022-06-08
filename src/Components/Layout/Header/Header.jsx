import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import classes from './Header.module.css'
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <MobileNav toggleIcon={ toggleIcon } toggleMenu={toggleMenu} className={ classes.stayUp }/>    
            </div>

            
            { showMenu && <nav className={`${classes.mobile} ${classes.mobileNav}`}>
                    <a href="./">HOME</a>
                    <a href="./">SERVICES</a>
                    <a href="./">GALLERY</a>
                    <a href="./">PROJECT</a>
                    <a href="./">ABOUT US</a>
                    <a href="./">CONTACT US</a>
                </nav> }
            
        </React.Fragment>
    );
}

export default Header;