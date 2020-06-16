import { Route, } from "react-router-dom"
import React from "react"
import Login from "./auth/Login"
import Register from "./auth/Register"
import TokenAuth from "../hooks/TokenAuth"

const ApplicationViews = () => {

    return(
        <>
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