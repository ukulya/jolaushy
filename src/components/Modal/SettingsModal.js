import React from "react";

const SettingsModal = () =>{
    function toggleModal(){
        document.getElementById('settingsModal').classList.toggle('active');
    }
    return(
        <div id="settingsModal" className="modal">
            <div className="container">
                <div className="text-right mt-35 mb-125">
                    <button onClick={toggleModal} className="btn modal_btn"><span className="material-icons-outlined">cancel</span></button>
                </div>
                <p className="text_25 text-center mb-55">Укажите дополнительные настройки</p>
                <form>
                    <div className="row">
                        <div className="col-6 pr-5">
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
                    <textarea className="form-control custom-card comment" rows="3" placeholder="Напишите комментарии к поездке"></textarea>
                    <div className="flex-between pt-60">
                        <button className="btn return_btn text_semi text_md"><span className="material-icons mr-15">chevron_left</span>Вернуться</button>
                        <button className="custom_btn continue_btn text_semi common_btn">Продолжить <span className="material-icons">chevron_right</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SettingsModal;