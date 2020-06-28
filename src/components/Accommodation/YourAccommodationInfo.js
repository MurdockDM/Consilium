import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";

const YourAccommodationInfo = props => {

    const [accommodationIdentifier, setAccommodationIdentifier] = useState(0)
    const eachAccommodation = props.eachAccommodation

    const handleEdit = (id) => {
        props.history.push(`/${id}/editaccommodation`)
    }

    useEffect(() => {
        setAccommodationIdentifier(eachAccommodation.id)
    },[])
    
    return (
            <Card className="infoCard">
                <style type="text/css">
                {`
            .btn-flat {
                background-color: #724BB7;
                color: #F7F7F7;
                margin-right: 0.5rem}
            `}
            </style>
                <Card.Header as="h4" className="cardHeader">
                {eachAccommodation.trip.city} Trip  {eachAccommodation.trip.start_date}
                </Card.Header>
                <Card.Body className="cardBody">
                    <Card.Text>Name: {eachAccommodation.name}</Card.Text>
                    <Card.Text>Address: {eachAccommodation.address} {eachAccommodation.city} {eachAccommodation.state}</Card.Text>
                    <Card.Text>Dates: {eachAccommodation.checkin_date} through {eachAccommodation.checkout_date}</Card.Text>
                {
                    eachAccommodation.booked === true
                    ?<Card.Text>Stay is booked</Card.Text>
                    :<Card.Text>Not booked!</Card.Text>
                }
                {
                    eachAccommodation.room
                    ?<Card.Text>Room: {eachAccommodation.room.room_number}</Card.Text>
                    :<Card.Text>No room or unit information</Card.Text>
                }
                <Button variant="flat" onClick={() => handleEdit(accommodationIdentifier)}>Edit Activity</Button>
                <Button onClick={() => props.handleDelete(eachAccommodation.id)} variant="danger">Delete Activity</Button>
                </Card.Body>
            </Card>
    )


}

export default YourAccommodationInfo