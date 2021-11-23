import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";
import user_img from "../../img/user-img.png";

const Profile = (props)=>{
    return(
        <div>
            <CommonNavbar title="Профиль"/>
            <div className="container mt-20">
                <div className="custom-card flex-center br-11 px-15">
                    <div className="circle user-img">
                        <img src={user_img} alt=""/>
                    </div>
                    <div className="px-15">
                        <p className="driver_name text_md text_bold mb-0">Итадори Хамуро</p>
                        <p className="text_xs text_extra_grey text_red">Водитель</p>
                    </div>
                    <button className="circle btn settings_btn ml-auto"><span className="material-icons-outlined">settings</span></button>
                </div>
                <div className="custom-card br-5 py-0 px-15">
                    <button type="button" className="btn list-group-item">Отзывы<span className="material-icons">chevron_right</span></button>
                    <button type="button" className="btn list-group-item">
                        <span>Уведомления <span className="notifications_total text_blue ml-5">+1</span></span>
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        <span>Сообщения <span className="messages_total text_blue ml-5">+1</span></span>
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Мой баланс
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Банковская карта
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
                <div className="custom-card br-5 py-0 px-15">
                    <button type="button" className="btn list-group-item">О проекте<span className="material-icons">chevron_right</span></button>
                    <button type="button" className="btn list-group-item">
                        Блог
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Вопросы и ответы
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Безопасность
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Обратная связь
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Пользовательское соглашение
                        <span className="material-icons">chevron_right</span>
                    </button>
                    <button type="button" className="btn list-group-item">
                        Политика конфиденциальности
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile;