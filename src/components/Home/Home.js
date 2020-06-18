import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenAuth from "../../hooks/TokenAuth"
import Container from 'react-bootstrap/Container'
import TripManager from "../../modules/TripManager"
import TravelerTripManager from "../../modules/TravelerTripManager"
import TripHome from "../Trip/TripHome"
import YourTripHome from "../Trip/YourTripHome"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import DeletedTripToast from "../Trip/DeletedTripToast"
import Alert from 'react-bootstrap/Alert'

const Home = (props) => {

    const [currentTrips, setCurrentTrips] = useState([])
    const [yourTrips , setYourTrips] = useState([])

    const handleDeleteTrip = (id) => {
        TravelerTripManager.deleteTrip(id).then(resp => {TravelerTripManager.getYourTrips().then(resp => setYourTrips(resp))})
    }

    const checkToken = sessionStorage.getItem("consilium_token")

    const loadTrips = () => {
        TripManager.getTripsGeneral().then(response => setCurrentTrips(response))
        TravelerTripManager.getYourTrips().then(resp => setYourTrips(resp))  
    }

    useEffect(() => {
        loadTrips()
    },[])

    
    return (
        <>
        {
            checkToken
            ?<>
                <Jumbotron>
                    <Container>
                        <h1>Consilium</h1>
                        <p>Plan out your next trip</p>
                        <Button>Create Trip</Button>
                    </Container>
                </Jumbotron>
                <Container>
                    <h2>Your Trips</h2>
                    {yourTrips.map((eachTravelerTrip) => (
                        <YourTripHome key={eachTravelerTrip.id} handleDeleteTrip = {handleDeleteTrip} eachTravelerTrip={eachTravelerTrip} {...props}/>
                    ))}
                </Container>
                <Container>
                    <h2>All Trips</h2>
                    {currentTrips.map((eachTravelerTrip) => (
                        <TripHome key={eachTravelerTrip.id} eachTravelerTrip={eachTravelerTrip} {...props}/>
                    ))}
                </Container>
            </>
            : <h2>Please log in to view this page</h2>
        }
        </>                
    )

}
export default Home