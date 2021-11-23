import React from "react";
import CommonNavbar from "../CommonNavbar/CommonNavbar";

const Search = (props) =>{
    return(
        <div>
            <CommonNavbar title="Поиск"/>
            <div className="container">
                <form>
                <div className="text-center mb-20">
                    <button className="text_md btn show_location_btn"><span className="material-icons-outlined mr-5 text_lg">place</span>Использовать мое местоположение</button>
                </div>
                    <div className="custom-card br-5 d-flex pb-0">
                        <div className="mr-20">
                            <span className="material-icons text_amber text_13">place</span>
                            <div className="progress-bar sm-bar"></div>
                            <div className="progress-bar sm-bar"></div>
                            <div className="progress-bar sm-bar"></div>
                            <div className="progress-bar sm-bar"></div>
                            <div className="progress-bar sm-bar"></div>
                            <div className="progress-bar sm-bar"></div>
                            <div className="progress-bar sm-bar"></div>
                            <div className="progress-bar sm-bar"></div>

                            <span className="material-icons text_blue text_13">place</span>
                        </div>
                        <div className="flex-auto">
                            <div className="form-group">
                                <label htmlFor="from">Откуда
                                    <input id="from" type="text" className="form-control" placeholder="Семей"/>
                                </label>
                                <div className="hr"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="to">Куда
                                    <input id="to" type="text" className="form-control" placeholder="Алматы"/>
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6 pr-5">
                            <p className="text_sm text-center">Календарь</p>
                            <select className="form-select">
                                <option selected>Кол-во мест</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <select className="form-select">
                                <option selected>Перевозка багажа</option>
                                <option value="1">Да</option>
                                <option value="2">Нет</option>
                            </select>
                            <select className="form-select">
                                <option selected>Перевозка животных</option>
                                <option value="1">Да</option>
                                <option value="2">Нет</option>
                            </select>
                        </div>
                        <div className="col-6 pl-5">
                            <p className="text_sm text-center">Время</p>
                            <select className="form-select">
                                <option selected>Детское кресло</option>
                                <option value="1">Да</option>
                                <option value="2">Нет</option>
                            </select>
                            <select className="form-select">
                                <option selected>Курение в салоне</option>
                                <option value="1">Да</option>
                                <option value="2">Нет</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center mt-45">
                        <button className="btn text_sm text_red reset_filter_btn mb-20">Удалить все фильтры <span className="material-icons-outlined text_13 ml-10">cancel</span></button><br/>
                        <button className="custom_btn red_btn search_btn common_btn">Найти<span className="material-icons ml-10">chevron_right</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search;