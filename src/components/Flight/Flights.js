import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import FlightManager from "../../modules/FlightManager"
import FlightInfo from "./FlightInfo"
import PersonalFlightInfo from "./PersonalFlightInfo"
import "./Flights.css"

const Flights = (props) => {

    const [allFlights, setAllFlights] = useState([])
    const [personalFlights, setPersonalFlights] = useState([])
    const checkToken = sessionStorage.getItem("consilium_token")


    const getAllOfFlights = () => {
        FlightManager.getAllFlights().then(response => {
            setAllFlights(response)
        FlightManager.getYourFlights().then(resp => {
            setPersonalFlights(resp)
        })
        })
    }

    const handleDelete = (id) => {
        FlightManager.deleteFlight(id).then(() => {
            FlightManager.getYourFlights().then(resp => {
                setPersonalFlights(resp)
        })
    })}
    

    useEffect(() => {
        getAllOfFlights()
    },[])

    return(
        <Container fluid className="allFlight">
            <style type="text/css">
                {`
            .btn-flat {
            background-color: #724BB7;
            color: #F7F7F7;
            }
            `}
            </style>
            <Container fluid>
                <Jumbotron className="flightJumbo">
                    <Container>
                        <h2 className="flightJumboHeader">Flights by trip</h2>
                        <Link to="/createflight"><Button variant="flat">Add a Flight</Button></Link>
                    </Container>
                </Jumbotron>
            </Container>
            <Container className="everyFlightBox">    
                <Container className="flightCardContainer">
                    <h4>All Flights</h4>
                    {allFlights.map((eachFlight) => {
                        return eachFlight.traveler.possible_friend &&  (<FlightInfo key={eachFlight.id} eachFlight={eachFlight} {...props} />)
                    })}
                </Container>
                <Container className="flightCardContainer">
                    <h4>Personal Flights</h4>
                    {personalFlights.map((eachFlight) => (
                        <PersonalFlightInfo key={eachFlight.id} handleDelete={handleDelete} eachFlight={eachFlight} {...props} />
                    ))}
                </Container>
            </Container>    
        </Container>    
    )


}

export default Flights