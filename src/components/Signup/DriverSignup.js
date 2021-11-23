import React from "react";

const Driver = (props) => {
    return(
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="car">Марка автомобиля
                        <input id="car" type="text" className="form-control" placeholder="Введите марку и модель"/>
                    </label>
                    <div className="hr"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Стаж управления автомобилем
                        <input id="experience" type="number" className="form-control" placeholder="Введите кол-во лет стажа"/>
                    </label>
                    <div className="hr"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="car_number">Гос. номер авто
                        <input id="car_number" type="number" className="form-control" placeholder="Введите номер"/>
                    </label>
                </div>
            </form>
        </div>
    )
}
export default Driver;