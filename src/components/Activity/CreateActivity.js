import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormText from 'react-bootstrap/FormText'
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import TripDropdownOptions from '../Trip/TripDropdownOptions'
import ActivityManager from "../../modules/ActivityManager"
import TripManager from "../../modules/TripManager"
import "./CreateActivity.css"


const CreateActivity = (props) => {

    const [activityInfo, setActivityInfo] = useState({name: "", address: "", city:"", state:"", trip_id: 0})
    const [tripOptions, setTripOptions] = useState([])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        ActivityManager.createNewActivity(activityInfo).then(() => props.history.push("/activities"))
    }

    const handleFocusSelect = (event) => {
        const stateToChange = { ...activityInfo }
        stateToChange.trip_id = parseInt(event.target.value)
        setActivityInfo(stateToChange)
    }

    const handleChange = evt => {
        const stateToChange = { ...activityInfo }
        stateToChange[evt.target.id] = evt.target.value
        setActivityInfo(stateToChange)
    }
    
    useEffect(() => {
        TripManager.getTripsJoined().then(resp => setTripOptions(resp))
    },[])

    return(
    <Container className="createActivityForm">
        <Jumbotron>
            <Container>
                <h2>Create an Activity</h2>
            </Container>
        </Jumbotron>
        <Container>
            <Form onSubmit={handleSubmit} >
            <FormGroup controlId="name">
                    <FormLabel>Name or Description</FormLabel>
                    <FormControl required type="text" onChange={handleChange} />
                    <FormText className='text-muted'>
                        Use a name or description that best describes the activity
                    </FormText>
                </FormGroup>

                <FormGroup controlId="address">
                    <FormLabel>Address</FormLabel>
                    <FormControl required type="text" onChange={handleChange} />
                </FormGroup>

                <FormGroup controlId="city">
                    <FormLabel>City</FormLabel>
                    <FormControl required type="text" onChange={handleChange} />
                </FormGroup>

                <FormGroup controlId="state">
                    <FormLabel>State</FormLabel>
                    <FormControl required type="text" onChange={handleChange} />
                    <FormText className='text-muted'>
                        Use the full state, province, region name.
                    </FormText>
                </FormGroup>

                <FormGroup controlId="trip_id">
                    <FormLabel>Trip</FormLabel>
                    <FormControl as="select" onChange={handleFocusSelect} >
                        <option>Pick one</option>
                        {tripOptions.map((eachTrip) => (
                            <TripDropdownOptions key={eachTrip.id} value={eachTrip.id} eachTrip={eachTrip} {...props} />
                        ))}
                    </FormControl>    
                    <FormText>
                        This only displays trips that you are currently marked as attending.
                    </FormText>
                </FormGroup>
            <Button type='submit'>Submit Trip</Button>
            </Form>
        </Container>

    </Container>
    )
}

export default CreateActivity