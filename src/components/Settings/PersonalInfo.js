import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";

const PersonalInfo = (props)=>{
    return(
        <div>
            <CommonNavbar title="Личные данные"/>
            <div className="container mt-20">
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
                            <label htmlFor="user_name">Ваше имя
                                <input id="user_name" type="text" className="form-control" placeholder="Введите свое имя"/>
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
                            <label htmlFor="user_phone">Телефон
                                <input id="user_phone" type="number" className="form-control" placeholder="Введите свой номер"/>
                            </label>
                        </div>
                    </form>
                </div>
                <p className="text-center pt-295 mb-40"><button className="common_btn custom_btn btn-lg save_btn">Сохранить <span className="material-icons">chevron_right</span></button></p>
            </div>
        </div>
    )
}

export default PersonalInfo;