import React from 'react'
import {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import './fonts/stylesheet.css';
import './icomoon/style.css';
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import TripDetails from "./components/TripDetails/TripDetails";
import CreateTrip from "./components/CreateTrip/CreateTrip";
import MyTrips from "./components/MyTrips/MyTrips";
import TripDetails1 from "./components/TripDetails/TripDetails1";
import Search from "./components/Search/Search";
import Search1 from "./components/Search/Search1";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import PersonalInfo from "./components/Settings/PersonalInfo";
import Notifications from "./components/Settings/Notifications";
import Messages from "./components/Messages/Messages";
import Chat from "./components/Messages/Chat";
import Profile1 from "./components/Profile/Profile1";
import Passengers from "./components/Passengers/Passengers";
import Reviews from "./components/Reviews/Reviews";
import MakeReview from "./components/Reviews/MakeReview";
import Balance from "./components/Balance/Balance";
let routes = (
    <Switch>
            <Route exact path="/">
                    <Welcome />
            </Route>
    </Switch>
);
const App=(props)=>{
  return (
      <div>
          <Route path='/welcome' render={()=><Welcome/>}/>
          <Route path='/login' render={()=><Login/>}/>
          <Route path='/signup' render={()=><Signup/>}/>
          <Route path='/home' render={()=><Home/>}/>
          <Route path='/tripdetails' render={()=><TripDetails/>}/>
          <Route path='/tripdetails1' render={()=><TripDetails1/>}/>
          <Route path='/createtrip' render={()=><CreateTrip/>}/>
          <Route path='/mytrips' render={()=><MyTrips/>}/>
          <Route path='/search' render={()=><Search/>}/>
          <Route path='/search1' render={()=><Search1/>}/>
          <Route path='/profile' render={()=><Profile/>}/>
          <Route path='/profile1' render={()=><Profile1/>}/>
          <Route path='/settings' render={()=><Settings/>}/>
          <Route path='/personal-info' render={()=><PersonalInfo/>}/>
          <Route path='/notifications' render={()=><Notifications/>}/>
          <Route path='/messages' render={()=><Messages/>}/>
          <Route path='/chat' render={()=><Chat/>}/>
          <Route path='/passengers' render={()=><Passengers/>}/>
          <Route path='/reviews' render={()=><Reviews/>}/>
          <Route path='/make-review' render={()=><MakeReview/>}/>
          <Route path='/balance' render={()=><Balance/>}/>
      </div>
  )
}

export default App;