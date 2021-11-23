import React from "react";
//import classes from "*.module.css";
import logo from '../../img/logo.svg';
import Navbar from "../Navbar/Navbar";
import car from "../../img/car_arrow.png"
import {NavLink} from "react-router-dom";


const Welcome =(props)=>{

    return(
        <div>
            <Navbar img={logo}/>
            <div className="text-center overflow-hidden">
                <img src={car} alt="" className="mt-n95 mb-25"/>
                <p><NavLink to="/login" className="custom_btn red_btn btn-lg">Поехали <span className="material-icons">chevron_right</span></NavLink></p>
                {/*<p><button className="custom_btn red_btn btn-lg">Поехали <span className="material-icons">chevron_right</span></button></p>*/}
            </div>
        </div>
    )
}

export default Welcome;