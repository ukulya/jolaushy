import React from "react";

const DateModal = () =>{
    function toggleModal(){
        document.getElementById('dateModal').classList.toggle('active');
    }
    return(
        <div id="dateModal" className="modal">
            <div className="container">
                <div className="text-right mt-35 mb-125">
                    <button  onClick={toggleModal} className="btn modal_btn"><span className="material-icons-outlined">cancel</span></button>
                </div>
                <p className="text_25 text-center mb-60">Дата и время <br/>поездки</p>
                <form>
                    <div className="row">
                        <div className="col-6 pr-5">
                            <p className="text_md text-center">Календарь</p>
                        </div>
                        <div className="col-6 pl-5">
                            <p className="text_md text-center">Время</p>
                        </div>
                    </div>
                    <div className="flex-between">
                        <button className="btn return_btn text_semi text_md"><span className="material-icons mr-15">chevron_left</span>Вернуться</button>
                        <button className="custom_btn continue_btn text_semi common_btn">Продолжить <span className="material-icons">chevron_right</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DateModal;