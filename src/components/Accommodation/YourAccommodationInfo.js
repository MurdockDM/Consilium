import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

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

            <Container>
                <Row>
                    <h3>{eachAccommodation.trip.city} Trip  {eachAccommodation.trip.start_date}</h3>
                </Row>
                <Row>
                    <p>Name: {eachAccommodation.name}</p>
                </Row>
                <Row>
                    <p>Address: {eachAccommodation.address} {eachAccommodation.city} {eachAccommodation.state}</p>
                </Row>
                <Row>
                    <p>Dates: {eachAccommodation.checkin_date} through {eachAccommodation.checkout_date}</p>
                </Row>
                <Row>
                    {
                        eachAccommodation.booked === true
                        ?<p>Stay is booked</p>
                        :<p>Not booked!</p>
                    }
                </Row>
                <Row>
                    {
                        eachAccommodation.room
                        ?<p>Room: {eachAccommodation.room.room_number}</p>
                        :<p>No room or unit information</p>
                    }
                </Row>
                <Row>
                    <Button onClick={() => handleEdit(accommodationIdentifier)}>Edit Activity</Button>
                    <Button variant="danger">Delete Activity</Button>
                </Row>
            </Container>
    )


}

export default YourAccommodationInfo