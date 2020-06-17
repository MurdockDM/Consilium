import React, { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"

const TripHome = props => {

    const [tripAttendees, setTripAttendees] = useState([])

    const eachTrip = props.eachTravelerTrip
    
    // useEffect(() => {
    //     setTripAttendees(props.eachTravelerTrip.traveler.user)
    // })

    return(
        <Container>
            <Row>
                <h2>{eachTrip.city} Trip</h2>
            </Row>
            <Row>
                <h5>Dates: {eachTrip.start_date}  through  {eachTrip.end_date}</h5>
            </Row>
            <Row>
                <h5> </h5>
            </Row>
            <Row>
            <p>Trip attendees:</p>
            </Row>
            {eachTrip.traveler_on_trip.map((tripper, index) => {
                return(
                    <Row key={index}> 
                    <p>{tripper.user.first_name} {tripper.user.last_name}</p>
                    </Row>    
            )})
            }
            
        </Container>    
    )
}

export default TripHome;