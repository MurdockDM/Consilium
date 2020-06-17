import React, { useState } from "react"
import Row from 'react-bootstrap/Row'

const YourTripHome = props => {

    return(
        <Row>
            <h2>{props.eachTravelerTrip.trip.city} Trip</h2>
        </Row>
    )
}

export default YourTripHome;