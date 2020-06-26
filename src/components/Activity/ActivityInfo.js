import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";


const ActivityInfo = props => {

    const eachActivity = props.eachActivity

    return (
        <Card className="infoCard">
            <Card.Header className="cardHeader">
            {eachActivity.trip.city} Trip
            </Card.Header>
            <Card.Body className="cardBody">
                <Card.Text>Name/Description: {eachActivity.name}</Card.Text>
                <Card.Text>Address: {eachActivity.address} {eachActivity.city} {eachActivity.state}</Card.Text>
                <Card.Text>Suggested By: {eachActivity.traveler.user.first_name} {eachActivity.traveler.user.last_name}</Card.Text>
            </Card.Body>
        </Card>
    )

}

export default ActivityInfo