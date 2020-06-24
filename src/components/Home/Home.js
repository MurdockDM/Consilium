import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenAuth from "../../hooks/TokenAuth"
import Container from 'react-bootstrap/Container'
import TripManager from "../../modules/TripManager"
import TravelerTripManager from "../../modules/TravelerTripManager"
import TripHome from "../Trip/TripHome"
import JoinTripInfo from "../Trip/JoinTripInfo"
import YourTripHome from "../Trip/YourTripHome"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


const Home = (props) => {

    const [currentTrips, setCurrentTrips] = useState([])
    const [yourTrips , setYourTrips] = useState([])
    const [travelerTripsToJoin, setTravelerTripsToJoin] = useState([])
    const [newTripJoinInfo, setNewTripJoinInfo] = useState({created_trip: false, trip_id: 0})


    const buildNewTravelerTrip = () => {
        const stateToChange = {...newTripJoinInfo}
        stateToChange.trip_id = parseInt(props.eachTravelerTrip.id)
        setNewTripJoinInfo(stateToChange)
        TravelerTripManager.createNewTravelerTripOwner()

    }

    const handleJoinTrip = (tripId) => {
        const joiningTrip = {created_trip: false, trip_id: parseInt(tripId)}
        TravelerTripManager.createNewTravelerTripOwner(joiningTrip).then(() => {
            TravelerTripManager.getYourTrips().then(resp => setYourTrips(resp))  
            TripManager.getFriendsTrips().then(resp => setTravelerTripsToJoin(resp))
        })
    }
    

    const handleDeleteTrip = (id) => {
        TravelerTripManager.deleteTrip(id).then(()=> {
            TravelerTripManager.getYourTrips().then(resp => setYourTrips(resp))
            TripManager.getTripsGeneral().then(response => setCurrentTrips(response))})
    }

    const checkToken = sessionStorage.getItem("consilium_token")

    const loadTrips = () => {
        TripManager.getTripsGeneral().then(response => setCurrentTrips(response))
        TravelerTripManager.getYourTrips().then(resp => setYourTrips(resp))  
        TripManager.getFriendsTrips().then(resp => setTravelerTripsToJoin(resp))
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
                        <Link to="/createtrip"><Button>Create Trip</Button></Link>
                    </Container>
                </Jumbotron>
                {yourTrips    
                    ?<Container>
                        <h2>Trips created by You</h2>
                        {yourTrips.map((eachTravelerTrip) => (
                            <YourTripHome key={eachTravelerTrip.id} handleDeleteTrip = {handleDeleteTrip} eachTravelerTrip={eachTravelerTrip} {...props}/>
                        ))}
                    </Container>
                    :null
                }    
                {currentTrips
                    ?<Container>
                        <h2>Join another trip</h2>
                        {travelerTripsToJoin.map((eachTravelerTrip) => (
                            <JoinTripInfo key={eachTravelerTrip.id} handleJoinTrip={handleJoinTrip} eachTravelerTrip={eachTravelerTrip} {...props}/>
                        ))}
                    </Container>
                    :null
                }    
            </>
            : <h2>Please log in to view this page</h2>
        }
        </>                
    )

}
export default Home