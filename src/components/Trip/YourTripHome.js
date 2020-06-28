import React, { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import "../Home/Home.css"

const YourTripHome = (props) => {
    
    const [tripId, setTripId ] = useState(0)

    const handleEdit = (id) => {
        props.history.push(`/${id}/edittrip`)
    }

    useEffect(() => {
        setTripId(props.eachTravelerTrip.trip_id)
    },[])
    return (
            <Card className="infoCard">
                <style type="text/css">
                {`
                .btn-flat {
                background-color: #724BB7;
                color: #F7F7F7;
                margin-right: 0.5rem
                }

                .btn-delete {
                    background-color: D64545;
                    color: #F7F7F7;
                }
                `}
                </style>
                <Card.Header as="h4" className="cardHeader">{props.eachTravelerTrip.trip.city} Trip</Card.Header>
                <Card.Body className="cardBody">
                    <Card.Text>{props.eachTravelerTrip.trip.start_date} through {props.eachTravelerTrip.trip.end_date}</Card.Text>
                <Button variant="flat" size="md" onClick={() => handleEdit(props.eachTravelerTrip.trip_id)} >Edit Trip</Button>
                <Button variant="danger" size="md" onClick={() => props.handleDeleteTrip(tripId)}>Delete Trip</Button>
                </Card.Body>
            </Card> 
    )
}

export default YourTripHome;