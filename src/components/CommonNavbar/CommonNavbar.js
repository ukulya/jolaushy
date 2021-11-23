import React from "react";

const CommonNavbar =(props)=>{
    return(
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <button className="btn"><span className="material-icons">arrow_back</span></button>
                            <button className="btn hidden"><span className="material-icons">menu</span></button>
                            <button className="btn hidden"><span className="material-icons">close</span></button>
                        </div>
                        <div className="col-8 text-center">
                            {/*<p className="text_xxl">Регистрация</p>*/}
                            <p className="text_xxl">{props.title}</p>
                        </div>
                        <div className="col-2 pl-10 hidden">
                            <button className="btn"><span className="material-icons">notification_important</span></button>
                            <button className="btn "><span className="material-icons">forum</span></button>
                        </div>
                    </div>
                </div>
                <div className="hidden">
                    <div className="bg-black flex-center">
                        <button className="btn circle bg-white"><span className="material-icons text_black">account_balance_wallet</span></button>
                        <div className="px-15">
                            <p className="text_xs text_extra_grey mb-5">Мой баланс</p>
                            <p className="balance text_md mb-0">500 т</p>
                        </div>
                        <button className="btn circle ml-auto bg-dark"><span className="material-icons">more_vert</span></button>
                    </div>
                    <div className="custom-card list-group">
                        <button type="button" className="btn list-group-item">
                            <span><span className="material-icons">add_circle_outline</span>Главная</span>
                            <span className="material-icons">chevron_right</span>
                        </button>
                        <button type="button" className="btn list-group-item">
                            <span><span className="material-icons">add_circle_outline</span>Создать поездку</span>
                            <span className="material-icons">chevron_right</span>
                        </button>
                        <button type="button" className="btn list-group-item">
                            <span><span className="material-icons">restore</span>Мои поездки</span>
                            <span className="material-icons">chevron_right</span>
                        </button>
                        <button type="button" className="btn list-group-item">
                            <span><span className="material-icons">search</span>Поиск</span>
                            <span className="material-icons">chevron_right</span>
                        </button>
                        <button type="button" className="btn list-group-item">
                            <span><span className="material-icons-outlined">account_circle</span>Профиль</span>
                            <span className="material-icons">chevron_right</span>
                        </button>
                        <button type="button" className="btn list-group-item">
                            <span><span className="material-icons-outlined">settings</span>Настройки</span>
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                    <div className="text-center pt-10 pb-20 text_md">
                        <button className="custom_btn text_reg text_md signup_btn">Стать пассажиром <span className="icon-seat-belt"></span></button>
                        <p className="mt-25">Пользовательское соглашение</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default CommonNavbar;