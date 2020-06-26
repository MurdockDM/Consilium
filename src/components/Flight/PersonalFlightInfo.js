import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";

const PersonalFlightInfo = props => {

    const eachFlight = props.eachFlight

    const [flightId, setFlightId] = useState(0)

    const handleEdit = (id) => {
        props.history.push(`/${id}/editflight`)
    }

    useEffect(() => {
        setFlightId(props.eachFlight.id)
    },[])
    
    return (
            <Card className="infoCard">
                <Card.Header as="h4" className="cardHeader">
                    {eachFlight.trip.city} Trip  {eachFlight.trip.start_date}
                </Card.Header>
                <Card.Body>
                    <Card.Text>Airport: {eachFlight.destination_airport}</Card.Text>
                    <Card.Text>Arrival Time: {eachFlight.arrival_time}</Card.Text>
                <Button onClick={() => handleEdit(flightId)} variant="primary">
                    Edit Flight
                </Button>
                <Button onClick={() => props.handleDelete(flightId)} variant="danger">
                    Delete Flight
                </Button>
                </Card.Body>
            </Card>
    )


}

export default PersonalFlightInfo