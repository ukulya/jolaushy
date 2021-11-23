import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";
import DriverSignup from "./DriverSignup";

const Signup = (props) =>{
    let isDriver = true;
    function handleDriverSignupClick(){
        isDriver = true;
    }
    function handlePassengerSignupClick(){
        isDriver = false;
    }
    return(
        <div>
            <CommonNavbar title="Регистрация"/>
            <div className="container mt-20">
                <div className="custom-card pb-20 br-16">
                    <p className="text_sm text-center mt-5 mb-20">Ваша роль в поездке</p>
                    <div className="row align-items-center text-center">
                        <div className="col-5">
                            <button className="btn active btn-toggle text-darkgrey text_reg" onClick={handleDriverSignupClick}>
                                <span className="icon-wheel d-block"></span>
                                Я водитель
                            </button>
                        </div>
                        <div className="col-2">
                            <span className="material-icons">swap_horiz</span>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-toggle text-darkgrey text_reg" onClick={handlePassengerSignupClick}>
                                <span className="icon-seat-belt d-block"></span>
                                Я пассажир
                            </button>
                        </div>
                    </div>
                </div>
                <div className="custom-card d-flex pb-0">
                    <div className="progress-block mr-20">
                        <div className="progress-bar active"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                    </div>
                    {isDriver && <DriverSignup/>}
                    {/*<form>
                        <div className="form-group">
                            <label htmlFor="car">Марка автомобиля
                                <input id="car" type="text" className="form-control" placeholder="Введите марку и модель"/>
                            </label>
                            <div className="hr"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience">Стаж управления автомобилем
                                <input id="experience" type="number" className="form-control" placeholder="Введите кол-во лет стажа"/>
                            </label>
                            <div className="hr"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="car_number">Гос. номер авто
                                <input id="car_number" type="number" className="form-control" placeholder="Введите номер"/>
                            </label>
                        </div>
                    </form>*/}
                </div>
                <div className="custom-card d-flex pb-0">
                    <div className="progress-block mr-20">
                        <div className="progress-bar active"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                    </div>
                    <form className="">
                        <div className="form-group">
                            <label htmlFor="driver_name">Ваше имя
                                <input id="driver_name" type="text" className="form-control" placeholder="Введите свое имя"/>
                            </label>
                            <div className="hr"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="birth_date">Дата рождения
                                <input id="birth_date" type="date" className="form-control" placeholder="Не указана"/>
                            </label>
                            <div className="hr"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Электронная почта
                                <input id="email" type="email" className="form-control" placeholder="Введите эл. почту"/>
                            </label>
                            <div className="hr"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="driver_phone">Телефон
                                <input id="driver_phone" type="number" className="form-control" placeholder="Введите свой номер"/>
                            </label>
                        </div>
                    </form>
                </div>
                <p className="text-center pt-20 mb-40"><button className="custom_btn btn-lg">Сохранить <span className="material-icons">chevron_right</span></button></p>
            </div>
        </div>
    )
}
export default Signup;