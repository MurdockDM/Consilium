import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";

const YourActivityInfo = props => {

    const [activityIdentifier, setActivityIdentifier] = useState(0)
    const eachActivity = props.eachActivity

    const handleEdit = (id) => {
        props.history.push(`/${id}/editactivity`)
    }

    useEffect(() => {
        setActivityIdentifier(props.eachActivity.id)
    })

    return (
        <Card className="infoCard">
            <Card.Header className="cardHeader">
            {eachActivity.trip.city} Trip
            </Card.Header>
            <Card.Body className="cardBody">
                <Card.Text>Name/Description: {eachActivity.name}</Card.Text>
                <Card.Text>Address: {eachActivity.address} {eachActivity.city} {eachActivity.state}</Card.Text>
            <Button onClick={() => handleEdit(activityIdentifier)}>Edit Activity</Button>
            <Button onClick={() => props.handleDelete(eachActivity.id)} variant="danger">Delete Activity</Button>
            </Card.Body>
        </Card>
    )

}

export default YourActivityInfo