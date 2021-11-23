import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";
import user_img_sm from "../../img/user-img-sm.png";
import user_img_big from "../../img/user-img-big.png";
import city from "../../img/cityscape.svg";

const TripDetails1 =(props)=>{
    function toggleModal(){
        document.getElementById('modal').classList.toggle('active');
    }
    return(
        <div>
            <CommonNavbar title="Подробности поездки"/>
            <div className="container mt-20 trip-details-block">
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
                    <button className="btn text_sm text_blue show_map_btn"><span className="material-icons">place</span>Промежуточные пункты</button>
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
                <div className="custom-card br-16">
                    <p className="text_sm text-center mb-20">Комментарий</p>
                    <p className="text_md">Пьющих не беру. <br/>
                        Беру посылки.</p>
                </div>
                <div className="custom-card br-16">
                    <p className="text_sm text-center mb-20">Авто</p>
                    <div className="flex-center">
                        <div className="car-icon circle flex-center"><span className="material-icons-outlined">directions_car</span></div>
                        <div className="pl-20">
                            <p className="text_md car mb-10">Chevrolet Impala 67</p>
                            <p className="text_xs mb-0"><span className="br-50 color_elem color_black"></span><span className="color_text text-semigrey">Черный</span></p>
                        </div>
                    </div>
                </div>
                <div className="custom-card br-16">
                    <p className="text_sm text-center mb-20">Водитель</p>
                    <div className="flex-center">
                        <div className="user-img-big br-50">
                            <img src={user_img_big} alt=""/>
                        </div>
                        <div className="px-15">
                            <p className="driver_name text_17 text_bold mb-10">Итадори Хамуро</p>
                            <p className="text_xs mb-0 text-semigrey total_trips">240 поездок</p>
                        </div>
                        <button className="circle btn settings_btn ml-auto"><span className="material-icons">more_vert</span></button>
                    </div>
                </div>
                <div className="custom-card br-16">
                    <p className="text_sm text-center mb-20">Пассажиры</p>
                    <div className="flex-center">
                        <div className="car-icon circle flex-center"><span className="material-icons-outlined">account_circle</span></div>
                        <div className="circle overflow-hidden user-img-sm mx-15">
                            <img src={user_img_sm} alt=""/>
                        </div>
                        <button className="circle btn settings_btn ml-auto"><span className="material-icons">more_vert</span></button>
                    </div>
                    <p className="text-semigrey text_xxs text_reg mt-10 mb-5">Список пассажиров на всем маршруте. Некоторые из них могут присоединится в промежуточных пунктах</p>
                </div>
                <p className="text-semigrey text_xxs text_reg flex-between"><span>Оставьте отзыв и рейтинг</span>Для безопасности во время поездки</p>
                <div className="flex-between">
                    <button className="btn report_btn text_red text_semi text_md"><span className="material-icons mr-15">report</span>ПОЖАЛОВАТЬСЯ</button>
                    <button className="btn share_btn text_blue text_semi text_md"><span className="material-icons mr-15">share</span>ПОДЕЛИТЬСЯ</button>
                </div>
                <button className="custom_btn justify-content-center invite_btn text_semi">Забронировать</button>
            </div>
        </div>
    )
}
export default TripDetails1;