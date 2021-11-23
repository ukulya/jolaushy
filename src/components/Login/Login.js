import React from "react";
import logo from '../../img/logo-blue.svg';
import gl from '../../img/google.svg';
import fb from '../../img/fb.svg';
import ig from '../../img/ig.svg';
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login=(props)=>{
    return(
        <div>
            <Navbar img={logo}/>
            <div className="container">
                <p className="text_xxl text-center mb-30 mt-30">Авторизация</p>
                <div className="custom-card d-flex pb-0">
                    <div className="progress-block mr-20">
                        <div className="progress-bar active"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="phone">Номер телефона или почта
                            <input id="phone" type="text" className="form-control" placeholder="Введите номер телефона или почту"/>
                            </label>
                            <div className="hr"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль
                            <input id="password" type="password" className="form-control" placeholder="Введите пароль"/>
                            </label>
                        </div>
                    </form>
                </div>
                <p className="text-center mt-10 mb-30"><button className="text_sm text_blue btn">Забыли пароль?</button></p>
                <p className="text-center">
                    {/*<button className="custom_btn btn-md justify-content-center mr-20">Регистрация</button>*/}
                    <NavLink to="signup" className="custom_btn btn-md justify-content-center mr-20">Регистрация</NavLink>
                    <button className="custom_btn btn-md">Войти<span className="material-icons">chevron_right</span></button>
                </p>
                <p className="flex-center mt-40"><span className="hr"></span><span className="px-5 text-grey text_sm">Войти через</span><span className="hr"></span></p>
                <ul className="list-inline">
                    <li><NavLink to="/gl"><img src={gl} alt=""/>google</NavLink></li>
                    <li><NavLink to="/fb"><img src={fb} alt=""/>facebook</NavLink></li>
                    <li><NavLink to="/ig"><img src={ig} alt=""/>instagram</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Login;