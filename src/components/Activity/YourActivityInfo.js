import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const YourActivityInfo = props => {

    const eachActivity = props.eachActivity

    return (

        <Container>
            <Row>
                <h3>{eachActivity.trip.city} Trip</h3>
            </Row>
            <Row>
                <p>Name/Description: {eachActivity.name}</p>
            </Row>
            <Row>
                <p>Address: {eachActivity.address} {eachActivity.city} {eachActivity.state}</p>
            </Row>
            <Row>
                <Button>Edit Activity</Button>
                <Button variant="danger">Delete Activity</Button>
            </Row>
        </Container>
    )

}

export default YourActivityInfo