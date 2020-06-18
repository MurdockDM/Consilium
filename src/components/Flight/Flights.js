import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenAuth from "../../hooks/TokenAuth"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import FlightManager from "../../modules/FlightManager"
import FlightInfo from "./FlightInfo"

const Flights = (props) => {

    const [allFlights, setAllFlights] = useState([])
    const checkToken = sessionStorage.getItem("consilium_token")


    const getAllOfFlights = () => {
        FlightManager.getAllFlights().then(response => {
            setAllFlights(response)
        })
    }

    useEffect(() => {
        getAllOfFlights()
    },[])

    return(
        <>
            <Container>
                <Jumbotron>
                    <Container>
                        <h2>Flights by trip</h2>
                        <Button>Add a Flight</Button>
                    </Container>
                </Jumbotron>
            </Container>
            <Container>
                {allFlights.map((eachFlight) => {
                    return eachFlight.traveler.possible_friend &&  (<FlightInfo key={eachFlight.id} eachFlight={eachFlight}  />)
                })}
            </Container>
        </>    
    )


}

export default Flights