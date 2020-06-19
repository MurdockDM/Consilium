import { Route, } from "react-router-dom"
import React from "react"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./Home/Home"
import Flights from "./Flight/Flights"
import ActivitiesPage from "./Activity/ActivitiesPage"
import AccommodationsPage from "./Accommodation/AccommodationsPage"
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