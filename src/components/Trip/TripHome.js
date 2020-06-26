import React from "react"
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'


const TripHome = props => {

    

    const eachTrip = props.eachTravelerTrip
    
    

    return(
        <Container>
            <Card>
                <Card.Header as="h4">
                {eachTrip.city} Trip
                </Card.Header>
            </Card>
            <Row>
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