import React from "react";

const ResultTripCard = (props) => {
    return(
        <div className="custom-card">
            <div className="d-flex">
                <div className="flex-auto">
                    <div className="flex-between text_md text_bold">
                        <p className="progress-custom">
                            <span className="from pr-5">{props.from}</span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="progress-bar"></span>
                            <span className="to pl-5">{props.to}</span>
                        </p>
                        <p className="price px-15">{props.price} т.</p>
                    </div>
                    <div className="flex-between text_xs">
                        <p className="">
                            <span className="passenger-name text-grey pr-15">{props.passenger_name}</span>
                            <span className="rating-block">
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_border</span>
                                        <span className="rating-sum ml-5 text_blue text_semi">({props.rating_sum})</span>
                                    </span>
                        </p>
                        <p className="text-semigrey px-15"><span className="material-icons text_sm">airline_seat_recline_normal</span>
                            <span className="seats ml-5">{props.seats} места</span>
                        </p>
                    </div>
                </div>
                <button className="circle flex-center btn call_btn"><span className="material-icons">call</span></button>
            </div>
            <div className="hr"></div>
            <p className="text-center text_xs mb-5">Комментарий</p>
            <p className="text_sm comment">{props.comment}</p>
        </div>
    )
}
export default ResultTripCard;