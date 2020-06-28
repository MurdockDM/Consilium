import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import "./Flights.css"

const FlightInfo = props => {

    const eachFlight = props.eachFlight
    
    return (
            <Card className="infoCard">
                <Card.Header as="h4" className="cardHeader">
                    {eachFlight.trip.city} Trip  {eachFlight.trip.start_date}
                </Card.Header>
                <Card.Body className="cardBody">
                    <Card.Text>Arrival Airport: {eachFlight.destination_airport}</Card.Text>
                    <Card.Text>Arrival Time: {eachFlight.arrival_time}</Card.Text>
                    <Card.Text>{eachFlight.traveler.user.first_name} {eachFlight.traveler.user.last_name}</Card.Text>
                </Card.Body>
            </Card>
    )


}

export default FlightInfo