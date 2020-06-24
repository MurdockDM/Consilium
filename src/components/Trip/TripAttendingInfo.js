import React from "react"
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"



const TripAttendingInfo = props => {

    

    const eachTrip = props.eachTravelerTrip
    

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

export default TripAttendingInfo;