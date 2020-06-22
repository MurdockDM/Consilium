import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const FlightInfo = props => {

    const eachFlight = props.eachFlight
    
    return (

            <Container>
                <Row>
                    <h3>{eachFlight.trip.city} Trip  {eachFlight.trip.start_date}</h3>
                </Row>
                <Row>
                    <p>Airport: {eachFlight.destination_airport}</p>
                </Row>
                <Row>
                    <p>Arrival Time: {eachFlight.arrival_time}</p>
                </Row>
                <Row>
                    <p>{eachFlight.traveler.user.first_name} {eachFlight.traveler.user.last_name}</p>
                </Row>
            </Container>
    )


}

export default FlightInfo