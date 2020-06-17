import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenAuth from "../../hooks/TokenAuth"
import Container from 'react-bootstrap/Container'
import TripManager from "../../modules/TripManager"
import TravelerTripManager from "../../modules/TravelerTripManager"
import TripHome from "../Trip/TripHome"
import YourTripHome from "../Trip/YourTripHome"
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home = (props) => {

    const [currentTrips, setCurrentTrips] = useState([])
    const [yourTrips , setYourTrips] = useState([])

    const loadTrips = () => {
        TripManager.getAllTrips().then(response => setCurrentTrips(response))
        TravelerTripManager.getYourTrips().then(resp => setYourTrips(resp))  
    }

    useEffect(() => {
        loadTrips()
    },[])

    return (
        <>
            <Jumbotron>
                <Container>
                    <h1>Consilium</h1>
                    <p>Plan out your next trip</p>
                </Container>
            </Jumbotron>
            <Container>
                <h2>Your Trips</h2>
                {yourTrips.map((eachTravelerTrip) => (
                    <YourTripHome key={eachTravelerTrip.id} eachTravelerTrip={eachTravelerTrip} {...props}/>
                ))}
            </Container>
            <Container>
                <h2>All Trips</h2>
                {currentTrips.map((eachTravelerTrip) => (
                    <TripHome key={eachTravelerTrip.id} eachTravelerTrip={eachTravelerTrip} {...props}/>
                ))}
            </Container>
        </>

    )

}
export default Home