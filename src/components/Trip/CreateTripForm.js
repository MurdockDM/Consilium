import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormText from 'react-bootstrap/FormText'
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import TripManager from '../../modules/TripManager'
import TravelerTripManager from '../../modules/TravelerTripManager'


const CreateTripForm = props => {

    const [tripInfo, setTripInfo] = useState({city: "", state: "", country: "", start_date: "", end_date: "" })
    // const [ownerTravelerTrip, setOwnerTravelerTrip] = useState({created_trip: true, trip_id: 0})

    const handleSubmit = (evt) => {
        evt.preventDefault()
        TripManager.createNewTrip(tripInfo).then(resp => {
            const ownerTravelerTrip = {created_trip: true, trip_id: parseInt(resp.id)}
            return TravelerTripManager.createNewTravelerTripOwner(ownerTravelerTrip)
        }).then(() => props.history.push("/"))
    }

    // const setTravelerTripInfo = () => {
    //     const stateToChange = {...ownerTravelerTrip}
    //     stateToChange.trip_id = createdId.id
    // }

    const handleChange = evt => {
        const stateToChange = {...tripInfo}
        stateToChange[evt.target.id] = evt.target.value
        setTripInfo(stateToChange)
    }

    // useEffect(() => {
    //     if (createdId.id !== 0) {
    //     setTravelerTripInfo()}
    // },[createdId])

    // useEffect(() => {
        
    //         TravelerTripManager.createNewTravelerTripOwner(ownerTravelerTrip)
    // },[ownerTravelerTrip])

    return(
        
        <Container>
            <Jumbotron>
                <Container>
                    <h2>Create a Trip</h2>
                </Container>
            </Jumbotron>
            <Form onSubmit={handleSubmit} >
                <FormGroup controlId="city">
                    <FormLabel>City</FormLabel>
                    <FormControl required type="text" onChange={handleChange} placeholder="Destination City" />
                    <FormText className='text-muted'>
                        It's best to pick the starting point for the trip if it is not the only one.
                    </FormText>
                </FormGroup>
                
                <FormGroup controlId="state">
                    <FormLabel>State/Province/Region</FormLabel>
                    <FormControl required type="text" onChange={handleChange} placeholder="Destination State" />
                    <FormText className='text-muted'>
                        State where the city above is located.
                    </FormText>
                </FormGroup>
                
                <FormGroup controlId="country">
                    <FormLabel>Country</FormLabel>
                    <FormControl required type="text" onChange={handleChange} placeholder="Destination Country" />
                </FormGroup>

                <FormGroup controlId="start_date">
                    <FormLabel>Start Date of Trip</FormLabel>
                    <FormControl required type="date" onChange={handleChange}/>
                    <FormText className='text-muted'>
                        Choose a start date for the trip.
                    </FormText>
                </FormGroup>
                
                <FormGroup controlId="end_date">
                    <FormLabel>End Date of Trip</FormLabel>
                    <FormControl required type="date" onChange={handleChange}/>
                    <FormText className='text-muted'>
                        Choose an end date for the trip.
                    </FormText>
                </FormGroup>
                <Button type='submit'>Submit Trip</Button>
            </Form>
        </Container>
    )

}

export default CreateTripForm