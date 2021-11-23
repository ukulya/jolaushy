import React from "react";

const DestinationModal = () =>{
    function toggleModal(){
        document.getElementById('destinationModal').classList.toggle('active');
    }
    return(
        <div id="destinationModal" className="modal">
            <div className="container">
                <div className="text-right mt-35 mb-125">
                    <button onClick={toggleModal} className="btn modal_btn"><span className="material-icons-outlined">cancel</span></button>
                </div>
                <p className="text_25 text-center mb-80">Пункты посадки <br/>и высадки</p>
                <form>
                    <div className="custom-card br-5 d-flex pb-0 mb-0">
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
                    <div className="text-center mb-70">
                        <button className="text_md btn show_location_btn"><span className="material-icons-outlined mr-5 text_lg">place</span>Использовать мое местоположение</button>
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

export default DestinationModal;