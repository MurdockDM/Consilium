import { Route, } from "react-router-dom"
import React from "react"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./Home/Home"
import Flights from "./Flight/Flights"
import ActivitiesPage from "./Activity/ActivitiesPage"
import CreateTripForm from "./Trip/CreateTripForm"
import CreateFlight from "./Flight/CreateFlight"
import CreateAccommodation from "./Accommodation/CreateAccommodation"
import AccommodationsPage from "./Accommodation/AccommodationsPage"
import CreateActivity from "./Activity/CreateActivity"
import TokenAuth from "../hooks/TokenAuth"


const ApplicationViews = () => {

    return(
        <>
            <Route exact path="/" render={props => {
                return <Home isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/flights" render={props => {
                return <Flights isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/accommodations" render={props => {
                return <AccommodationsPage isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/activities" render={props => {
                return <ActivitiesPage isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/createtrip" render={props => {
                return <CreateTripForm isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/createflight" render={props => {
                return <CreateFlight isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/createaccommodation" render={props => {
                return <CreateAccommodation isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/createactivity" render={props => {
                return <CreateActivity isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/login" render={props => {
                return <Login isAuthenticated={TokenAuth.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/register" render={props => {
                return <Register {...props} />
            }}
            />    
        </>

    )

}

export default ApplicationViews