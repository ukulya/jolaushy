import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";
import user_img from "../../img/user-img.png";
import city from "../../img/cityscape.svg";

const TripDetails =(props)=>{
    return(
        <div>
            <CommonNavbar title="Подробности поездки"/>
            <div className="container mt-20 trip-details-block">
                <div className="custom-card flex-center br-11">
                    <div className="circle user-img">
                        <img src={user_img} alt=""/>
                    </div>
                    <p className="driver_name text_md text_bold px-15 mb-0">Итадори Хамуро</p>
                    <button className="circle btn settings_btn ml-auto"><span className="material-icons-outlined">settings</span></button>
                </div>
                <div className="custom-card text_sm text-center">
                    <p>Пункты посадки и высадки</p>
                    <div className="flex-center-end pt-10 pb-5">
                        <div className="">
                            <img src={city} alt="" className="mb-15"/>
                            <p className="from">Шымкент</p>
                        </div>
                        <div className="progress-custom my-10">
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                        </div>
                        <div className="">
                            <img src={city} alt="" className="mb-15"/>
                            <p className="from">Алматы</p>
                        </div>
                    </div>
                    <button className="btn text_sm text_blue show_map_btn">
                        <span className="material-icons mr-5 text_lg">place</span>Промежуточные пункты
                    </button>
                </div>
                <div className="custom-card text_sm text-center br-16">
                    <p>Опции</p>
                    <div className="row options-block">
                        <div className="col-4">
                            <span className="material-icons">map</span>
                            <p className="text-light-grey text_light text_xs">Расстояние</p>
                            <p className="distance">1 000,2 км</p>
                            <div className="hr"></div>
                        </div>
                        <div className="col-4">
                            <span className="material-icons-outlined">picture_in_picture</span>
                            <p className="text-light-grey text_light text_xs">Дата и время</p>
                            <p className="date">12.09.2021  |  15:00</p>
                            <div className="hr"></div>
                        </div>
                        <div className="col-4">
                            <span className="material-icons">attach_money</span>
                            <p className="text-light-grey text_light text_xs">Стоимость</p>
                            <p className="price">42 000 т.</p>
                            <div className="hr"></div>
                        </div>
                        <div className="col-4">
                            <span className="material-icons">watch_later</span>
                            <p className="text-light-grey text_light text_xs">Длительность</p>
                            <p className="duration">17 ч 8 мин.</p>
                            <div className="hr"></div>
                        </div>
                        <div className="col-4">
                            <span className="material-icons">airline_seat_recline_normal</span>
                            <p className="text-light-grey text_light text_xs">Места на заднем</p>
                            <p className="seats">3</p>
                            <div className="hr"></div>
                        </div>
                        <div className="col-4">
                            <span className="material-icons">work_outline</span>
                            <p className="text-light-grey text_light text_xs">Багаж</p>
                            <p className="baggage">Да</p>
                            <div className="hr"></div>
                        </div>
                        <div className="col-4">
                            <span className="material-icons">child_care</span>
                            <p className="text-light-grey text_light text_xs">Детское автокресло</p>
                            <p className="child_seat text_red">Нет</p>
                        </div>
                        <div className="col-4">
                            <span className="material-icons">pets</span>
                            <p className="text-light-grey text_light text_xs">Животные</p>
                            <p className="pets">Да</p>
                        </div>
                        <div className="col-4">
                            <span className="material-icons">smoking_rooms</span>
                            <p className="text-light-grey text_light text_xs">Перекур</p>
                            <p className="smoke_break">На остановках</p>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <p className="text-left mt-10 d-flex disclaimer"><span className="material-icons-outlined">error_outline</span>
                        <span className="text-light-grey text_light text_xxs">Информация о расстоянии и длительности поездки основаны на данных
                        из сервисов Google</span></p>
                </div>
                <div className="custom-card">
                    <p className="text_sm text-center mb-20">Комментарий</p>
                    <p className="text_md">Поедем 3 человека, желательно утром, есть ребенок 5 лет</p>
                </div>
                <div className="text-center">
                    <button className="btn report_btn text_red text_semi text_md"><span className="material-icons mr-15">report</span>ПОЖАЛОВАТЬСЯ</button>
                    <button className="custom_btn justify-content-center invite_btn text_semi">Пригласить в поездку</button>
                </div>
            </div>
        </div>
    )
}
export default TripDetails;