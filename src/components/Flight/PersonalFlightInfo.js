import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

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
                <Button onClick={() => handleEdit(flightId)} variant="primary">
                    Edit Flight
                </Button>
                <Button onClick={() => props.handleDelete(flightId)} variant="danger">
                    Delete Flight
                </Button>
            </Container>
    )


}

export default PersonalFlightInfo