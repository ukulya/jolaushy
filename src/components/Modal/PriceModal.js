import React from "react";

const PriceModal = () =>{
    function toggleModal(){
        document.getElementById('modal').classList.toggle('active');
    }
    return(
        <div id="priceModal" className="modal">
            <div className="container">
                <div className="text-right mt-35 mb-125">
                    <button onClick={toggleModal} className="btn modal_btn"><span className="material-icons-outlined">cancel</span></button>
                </div>
                <p className="text_25 text-center mb-80">Укажите сумму поездки</p>
                <form>
                    <div className="custom-card d-flex pb-0">
                        <div className="progress-block mr-20">
                            <div className="progress-bar bg-white"></div>
                        </div>
                        <div className="form-group flex-auto">
                            <label htmlFor="price" className="text_white">Введите сумму поездки
                                <input id="price" type="text" className="form-control" placeholder="Введите сумму поездки"/>
                            </label>
                        </div>
                    </div>
                    <div className="flex-between pt-60">
                        <button className="btn return_btn text_semi text_md"><span className="material-icons mr-15">chevron_left</span>Вернуться</button>
                        <button className="custom_btn continue_btn text_semi common_btn">Продолжить <span className="material-icons">chevron_right</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PriceModal;