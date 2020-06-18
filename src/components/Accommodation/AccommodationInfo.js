import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const AccommodationInfo = props => {

    const eachAccommodation = props.eachAccommodation
    
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
                    <p>Dates: {eachAccommodation.check_in_date} through {eachAccommodation.checkout_date}</p>
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
            </Container>
    )


}

export default AccommodationInfo