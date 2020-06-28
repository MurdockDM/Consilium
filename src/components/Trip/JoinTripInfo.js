import React from "react"
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import "../Home/Home.css"
import TravelerTripManager from "../../modules/TravelerTripManager"


const JoinTripInfo = props => {

    

    const eachTrip = props.eachTravelerTrip
    

    return(
        <Card className="infoCard">
            <style type="text/css">
                {`
            .btn-flat {
            background-color: #724BB7;
            color: #F7F7F7;
            }
            `}
            </style>
            <Card.Header as="h4" className="cardHeader">
                {eachTrip.city} Trip
            </Card.Header>
            <Card.Body className="cardBody">
                <Card.Text>
                    Dates: {eachTrip.start_date}  through  {eachTrip.end_date}
                </Card.Text>
                <Card.Text>
                Trip attendees:
                </Card.Text>
                {eachTrip.traveler_on_trip.map((tripper, index) => {
                    return <Card.Text key={index}>{tripper.user.first_name} {tripper.user.last_name}</Card.Text>  
                })}
                <Button variant="flat" onClick={() => props.handleJoinTrip(eachTrip.id)}>
                    Join this trip
                </Button>
            </Card.Body>
        </Card>     
    )
}

export default JoinTripInfo;