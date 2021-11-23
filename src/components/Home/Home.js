import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";
import Modal from "../Modal/Modal";
import ResultTripCard from "./ResultTripCard";

const Home = (props)=>{
    return(
        <div>
            <Modal/>
            <CommonNavbar title="JOLAUSHY"/>
            <div className="container">
                <div className="search-block">
                    <form className="d-flex">
                        <button className="btn"><span className="material-icons">search</span></button>
                        <input type="text" placeholder="Найти" className="form-control text_sm"/>
                    </form>
                </div>
                <div className="result-block">
                    <div className="custom-card">
                        <div className="d-flex">
                            <div className="flex-auto">
                                <div className="flex-between text_md text_bold">
                                    <p className="progress-custom">
                                        <span className="from pr-5">Семей</span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="to pl-5">Талдыкорган</span>
                                    </p>
                                    <p className="price px-15">25 000 т.</p>
                                </div>
                                <div className="flex-between text_xs">
                                    <p className="">
                                        <span className="passenger-name text-grey pr-15">Итадори Хамуро</span>
                                        <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                    </p>
                                    <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                                        <span className="seats ml-5">3 места</span>
                                    </p>
                                </div>
                            </div>
                            <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                        </div>
                        <div className="hr"></div>
                        <p className="text-center text_xs mb-5">Комментарий</p>
                        <p className="text_sm">Поедем 3 человека, желательно утром, есть ребенок 5 лет</p>
                    </div>
                    <div className="custom-card">
                        <div className="d-flex">
                            <div className="flex-auto">
                                <div className="flex-between text_md text_bold">
                                    <p className="progress-custom">
                                        <span className="from pr-5">Нур-Султан</span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="to pl-5">Алматы</span>
                                    </p>
                                    <p className="price px-15">30 000 т.</p>
                                </div>
                                <div className="flex-between text_xs">
                                    <p className="">
                                        <span className="passenger-name text-grey pr-15">Итадори Хамуро</span>
                                        <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                    </p>
                                    <p className="text-semigrey px-15">
                                        <span className="material-icons text_sm">airline_seat_recline_normal</span>
                                        <span className="seats ml-5">салон</span>
                                    </p>
                                </div>
                            </div>
                            <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                        </div>
                        <div className="hr"></div>
                        <p className="text-center text_xs mb-5">Комментарий</p>
                        <p className="text_sm">Займем весь салон, есть багаж</p>
                    </div>
                    <div className="custom-card">
                        <div className="d-flex">
                            <div className="flex-auto">
                                <div className="flex-between text_md text_bold">
                                    <p className="progress-custom">
                                        <span className="from pr-5">Алматы</span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="to pl-5">Шымкент</span>
                                    </p>
                                    <p className="price px-15">45 000 т.</p>
                                </div>
                                <div className="flex-between text_xs">
                                    <p className="">
                                        <span className="passenger-name text-grey pr-15">Итадори Хамуро</span>
                                        <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                    </p>
                                    <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                                        <span className="seats ml-5">2 места</span>
                                    </p>
                                </div>
                            </div>
                            <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                        </div>
                        <div className="hr"></div>
                        <p className="text-center text_xs mb-5">Комментарий</p>
                        <p className="text_sm">2 человека, есть багаж</p>
                    </div>
                    <div className="custom-card">
                        <div className="d-flex">
                            <div className="flex-auto">
                                <div className="flex-between text_md text_bold">
                                    <p className="progress-custom">
                                        <span className="from pr-5">Актобе</span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="to pl-5">Семей</span>
                                    </p>
                                    <p className="price px-15">70 000 т.</p>
                                </div>
                                <div className="flex-between text_xs">
                                    <p className="">
                                        <span className="passenger-name text-grey pr-15">Итадори Хамуро</span>
                                        <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                    </p>
                                    <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                                        <span className="seats ml-5">салон</span>
                                    </p>
                                </div>
                            </div>
                            <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                        </div>
                        <div className="hr"></div>
                        <p className="text-center text_xs mb-5">Комментарий</p>
                        <p className="text_sm">Займем весь салон, есть дети</p>
                    </div>
                    <div className="custom-card">
                        <div className="d-flex">
                            <div className="flex-auto">
                                <div className="flex-between text_md text_bold">
                                    <p className="progress-custom">
                                        <span className="from pr-5">Семей</span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="to pl-5">Талдыкорган</span>
                                    </p>
                                    <p className="price px-15">25 000 т.</p>
                                </div>
                                <div className="flex-between text_xs">
                                    <p className="">
                                        <span className="passenger-name text-grey pr-15">Итадори Хамуро</span>
                                        <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                    </p>
                                    <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                                        <span className="seats ml-5">3 места</span>
                                    </p>
                                </div>
                            </div>
                            <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                        </div>
                        <div className="hr"></div>
                        <p className="text-center text_xs mb-5">Комментарий</p>
                        <p className="text_sm">Поедем 3 человека, желательно утром, есть ребенок 5 лет</p>
                    </div>
                    <div className="custom-card">
                        <div className="d-flex">
                            <div className="flex-auto">
                                <div className="flex-between text_md text_bold">
                                    <p className="progress-custom">
                                        <span className="from pr-5">Семей</span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="to pl-5">Талдыкорган</span>
                                    </p>
                                    <p className="price px-15">25 000 т.</p>
                                </div>
                                <div className="flex-between text_xs">
                                    <p className="">
                                        <span className="passenger-name text-grey pr-15">Итадори Хамуро</span>
                                        <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                    </p>
                                    <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                                        <span className="seats ml-5">3 места</span>
                                    </p>
                                </div>
                            </div>
                            <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                        </div>
                        <div className="hr"></div>
                        <p className="text-center text_xs mb-5">Комментарий</p>
                        <p className="text_sm">Поедем 3 человека, желательно утром, есть ребенок 5 лет</p>
                    </div>
                    <div className="custom-card">
                        <div className="d-flex">
                            <div className="flex-auto">
                                <div className="flex-between text_md text_bold">
                                    <p className="progress-custom">
                                        <span className="from pr-5">Семей</span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="progress-bar"></span>
                                        <span className="to pl-5">Талдыкорган</span>
                                    </p>
                                    <p className="price px-15">25 000 т.</p>
                                </div>
                                <div className="flex-between text_xs">
                                    <p className="">
                                        <span className="passenger-name text-grey pr-15">Итадори Хамуро</span>
                                        <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">(4,0)</span>
                                    </span>
                                    </p>
                                    <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                                        <span className="seats ml-5">3 места</span>
                                    </p>
                                </div>
                            </div>
                            <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
                        </div>
                        <div className="hr"></div>
                        <p className="text-center text_xs mb-5">Комментарий</p>
                        <p className="text_sm">Поедем 3 человека, желательно утром, есть ребенок 5 лет</p>
                    </div>
                    <ResultTripCard from='Семей' to='Талдыкорган' price='25 000' passenger_name='Итадори Хамуро' rating_sum='4,0' seats='3' comment='Поедем 3 человека, желательно утром, есть ребенок 5 лет'/>
                </div>
                <button className="custom_btn red_btn add_trip_btn text_sm text_reg modal_btn"><span className="material-icons">add_circle_outline</span>Создать поездку</button>
            </div>

        </div>
    )
}
export default Home;