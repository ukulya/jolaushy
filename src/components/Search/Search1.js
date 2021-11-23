import React from "react";
//import React,{useState} from "react";
//import {View, Button, Platform} from 'react-native';
import CommonNavbar from "../CommonNavbar/CommonNavbar";
//import DateTimePicker from '@react-native-community/datetimepicker';

const Search1 = () =>{
    /*const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };*/
    return(
        <div>
            <CommonNavbar/>
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
                    <div className="row">
                        <div className="col-6">
                           {/* <View>
                                <View>
                                    <Button onPress={showDatepicker} title="Show date picker!" />
                                </View>
                                <View>
                                    <Button onPress={showTimepicker} title="Show time picker!" />
                                </View>
                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}
                            </View>*/}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search1;