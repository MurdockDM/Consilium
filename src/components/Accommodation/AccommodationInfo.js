import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";

const AccommodationInfo = props => {

    const eachAccommodation = props.eachAccommodation
    
    return (
            <Card className="infoCard">
                <Card.Header as="h4" className="cardHeader">{eachAccommodation.trip.city} Trip  {eachAccommodation.trip.start_date}</Card.Header>
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
                </Card.Body>
            </Card>
    )


}

export default AccommodationInfo