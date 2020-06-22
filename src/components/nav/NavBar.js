import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import TokenAuth from "../../hooks/TokenAuth"

const NavBar = props => {
    const { isAuthenticated, logout } = TokenAuth()
    
    return (
        <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                {
                    isAuthenticated()
                    ?<li className="nav-item">
                        <Link className="nav-link" to="/flights">Flights</Link>
                    </li>
                    :null
                }    
                {   
                    isAuthenticated()   
                    ?<li className="nav-item">
                        <Link className="nav-link" to="/accommodations">Accommodations</Link>
                    </li>
                    :null
                }
                {   
                    isAuthenticated()   
                    ?<li className="nav-item">
                        <Link className="nav-link" to="/activities">Activities</Link>
                    </li>
                    :null
                }
                {
                    isAuthenticated() ?
                        <li className="nav-item">
                            <button className="nav-link fakeLink"
                                onClick={() => {
                                    logout()
                                    props.history.push({
                                        pathname: "/"
                                    })
                                }
                                }
                            >Logout</button>
                        </li> :
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        </>
                }
                
            </ul>
        </nav>
    )
}

export default NavBar
