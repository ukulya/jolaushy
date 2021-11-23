import React from "react";
import classes from "./Navbar.module.css";
import '../../App.css';
import logo from "../../img/logo.svg";

//const pathname = window.location.pathname;
const Navbar=(props)=>{

    return(
        <div>
            <nav className={`${classes.navbar} navbar pb-30`}>
                <div className="container">
                    {/*<img src={logo} className="logo mb-20 " alt="logo" />*/}
                    <img src={props.img} className="logo mb-20 " alt="logo" />
                    <p className="text_sm text_reg mb-40">Междугороднее такси</p>
                    <p className="text_xxl">Быстро! Выгодно! Безопасно!</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;