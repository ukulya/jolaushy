import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";

const Account = (props)=>{
    return(
        <div>
            <CommonNavbar title="Настройки"/>
            <div className="container mt-20">
                <div className="custom-card br-5 py-0 px-15">
                    <button type="button" className="btn list-group-item">Личные данные<span className="material-icons">chevron_right</span></button>
                    <button type="button" className="btn list-group-item">
                        Уведомления
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Сменить роль
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Ваш автомобиль
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Оцените приложение
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Управление аккаунтом
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Выход
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Account;