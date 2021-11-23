import React from "react";

const SeatsModal = () =>{
    function toggleModal(){
        document.getElementById('seatsModal').classList.toggle('active');
    }
    return(
        <div id="seatsModal" className="modal">
            <div className="container">
                <div className="text-right mt-35 mb-125">
                    <button onClick={toggleModal} className="btn modal_btn"><span className="material-icons-outlined">cancel</span></button>
                </div>
                <p className="text_25 text-center mb-60">Забронируйте <br/>количество мест</p>
                <form>
                    <div className="row text-center">
                        <div className="col-6 pr-5">
                            <div className="form-group">
                                <input type="radio" className="btn-check" name="seats" id="one-seat" checked/>
                                <label className="btn custom-card text_md text_semi" htmlFor="one-seat">
                                    <span className="material-icons">airline_seat_recline_normal</span><br/>
                                    1 место
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="radio" className="btn-check" name="seats" id="three-seat"/>
                                <label className="btn custom-card text_md text_semi" htmlFor="three-seat">
                                    <span className="material-icons">airline_seat_recline_normal</span>
                                    <span className="material-icons">airline_seat_recline_normal</span>
                                    <span className="material-icons">airline_seat_recline_normal</span><br/>
                                    3 места
                                </label>
                            </div>
                        </div>
                        <div className="col-6 pl-5">
                            <div className="form-group">
                                <input type="radio" className="btn-check" name="seats" id="two-seat"/>
                                <label className="btn custom-card text_md text_semi" htmlFor="two-seat">
                                    <span className="material-icons">airline_seat_recline_normal</span>
                                    <span className="material-icons">airline_seat_recline_normal</span><br/>
                                    2 места
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="radio" className="btn-check" name="seats" id="four-seat" disabled/>
                                <label className="btn custom-card text_md text_semi" htmlFor="four-seat">
                                    <span className="material-icons">airline_seat_recline_normal</span>
                                    <span className="material-icons">airline_seat_recline_normal</span>
                                    <span className="material-icons">airline_seat_recline_normal</span>
                                    <span className="material-icons">airline_seat_recline_normal</span><br/>
                                    4 места
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="custom-card d-flex pb-0">
                        <div className="progress-block mr-20">
                            <div className="progress-bar bg-white"></div>
                        </div>
                        <div className="form-group flex-auto">
                            <label htmlFor="seats" className="text_white">Введите число занимаемых мест
                                <input id="seats" type="text" className="form-control" placeholder="Введите число занимаемых мест"/>
                            </label>
                        </div>
                    </div>
                    <div className="flex-between pt-30">
                        <button className="btn return_btn text_semi text_md"><span className="material-icons mr-15">chevron_left</span>Вернуться</button>
                        <button className="custom_btn continue_btn text_semi common_btn">Продолжить <span className="material-icons">chevron_right</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SeatsModal;