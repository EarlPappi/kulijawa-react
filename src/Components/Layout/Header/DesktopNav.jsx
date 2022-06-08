
import React from "react";
import classes from './DesktopNav.module.css'

const Nav = () => {


    return (
        <React.Fragment>
            <div className={classes.desktop}>
                <nav>
                    <a href="./">Home</a>
                    <a href="./">Services</a>
                    <a href="./">Gallery</a>
                    <a href="./">Project</a>
                    <a href="./">About Us</a>
                </nav>

                <nav>
                    <a href="./" className={ classes.btn }>Contact Us</a>
                </nav>
            </div>

        </React.Fragment>
    );
}

export default Nav;