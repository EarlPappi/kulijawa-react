import classes from './MobileNav.module.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileNav({ toggleIcon, toggleMenu }) {

    

    return (
        <React.Fragment>
            <div className={classes.mobileNav}>
                <FontAwesomeIcon icon={toggleIcon} className={`${classes.mobile} ${classes.fontIcon}`} onClick={toggleMenu} />
            </div>
            
        </React.Fragment>
    )
}

export default MobileNav