import React, { useState, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import "../Home/Home.css"



const TripAttendingInfo = props => {

    
    
    const eachTrip = props.eachTravelerTrip

    const [relatedTravelerTripInfo, setRelatedTravelerTripInfo] = useState({id: 0, trip_id: 0, created_trip: false })

    return(

            <Card className="infoCard">
                <Card.Header as="h4" className="cardHeader">{eachTrip.city} Trip</Card.Header>
                <Card.Body className="cardBody">
                    <Card.Text>Dates: {eachTrip.start_date}  through  {eachTrip.end_date}</Card.Text>
                    <Card.Text>Trip attendees:</Card.Text>
                    {eachTrip.traveler_on_trip.map((tripper, index) => {
                    return( 
                    <Card.Text key={tripper.id}>{tripper.user.first_name} {tripper.user.last_name}</Card.Text>
                    )})
                    }
                </Card.Body>
            </Card>    
    )
}

export default TripAttendingInfo;