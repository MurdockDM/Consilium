import React, { useState } from "react"
import Row from 'react-bootstrap/Row'

const TripHome = props => {

    return(
        <Row>
            <h2>{props.eachTravelerTrip.city} Trip</h2>
        </Row>
    )
}

export default TripHome;