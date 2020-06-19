import React, { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const YourTripHome = (props) => {
    
    const [tripId, setTripId ] = useState(props.eachTravelerTrip.trip_id)


    return (
        <>
            <Row>
                <h2>{props.eachTravelerTrip.trip.city} Trip</h2>
            </Row>
            <Row>
                <Button variant="primary">Edit Trip</Button>
                <Button onClick={() => props.handleDeleteTrip(tripId)} variant="danger">Delete Trip</Button>
            </Row>    
        </>
    )
}

export default YourTripHome;