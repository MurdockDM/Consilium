import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormText from 'react-bootstrap/FormText'
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import "./EditTrip.css"
import TripManager from '../../modules/TripManager'
import TravelerTripManager from '../../modules/TravelerTripManager'


const EditTrip = props => {

    const [tripInfo, setTripInfo] = useState({id: 0, city: "", state: "", country: "", start_date: "", end_date: "" })
    

    const handleSubmit = (evt) => {
        evt.preventDefault()
        TripManager.updateTrip(tripInfo).then(() => props.history.push("/"))
    }

    const handleChange = evt => {
        const stateToChange = {...tripInfo}
        stateToChange[evt.target.id] = evt.target.value
        setTripInfo(stateToChange)
    }


    useEffect(() => {
        TripManager.getIndividualTrip(props.tripId).then(resp => setTripInfo(resp))
    },[])

    return(
        
        <Container className="editTripForm">
            <Jumbotron>
                <Container>
                    <h2>Edit the {tripInfo.city} Trip</h2>
                </Container>
            </Jumbotron>
            <Form onSubmit={handleSubmit} >
                <FormGroup controlId="city">
                    <FormLabel>City</FormLabel>
                    <FormControl required type="text" value={tripInfo.city} onChange={handleChange} placeholder="Destination City" />
                    <FormText className='text-muted'>
                        It's best to pick the starting point for the trip if it is not the only one.
                    </FormText>
                </FormGroup>
                
                <FormGroup controlId="state">
                    <FormLabel>State/Province/Region</FormLabel>
                    <FormControl required type="text" value={tripInfo.state} onChange={handleChange} placeholder="Destination State" />
                    <FormText className='text-muted'>
                        State where the city above is located.
                    </FormText>
                </FormGroup>
                
                <FormGroup controlId="country">
                    <FormLabel>Country</FormLabel>
                    <FormControl required value={tripInfo.country} type="text" onChange={handleChange} placeholder="Destination Country" />
                </FormGroup>

                <FormGroup controlId="start_date">
                    <FormLabel>Start Date of Trip</FormLabel>
                    <FormControl required value={tripInfo.start_date} type="date" onChange={handleChange}/>
                    <FormText className='text-muted'>
                        Choose a start date for the trip.
                    </FormText>
                </FormGroup>
                
                <FormGroup controlId="end_date">
                    <FormLabel>End Date of Trip</FormLabel>
                    <FormControl required value={tripInfo.end_date} type="date" onChange={handleChange}/>
                    <FormText className='text-muted'>
                        Choose an end date for the trip.
                    </FormText>
                </FormGroup>
                <Button type='submit'>Submit Trip</Button>
            </Form>
        </Container>
    )

}

export default EditTrip