import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormText from 'react-bootstrap/FormText'
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import FlightManager from '../../modules/FlightManager'
import TripDropdownOptions from '../Trip/TripDropdownOptions'
import TripManager from '../../modules/TripManager'
import "./CreateFlight.css"



const CreateFlight = props => {

    const [flightInfo, setFlightInfo] = useState({start_airport: "", destination_airport: "", trip_id: "", arrival_time: "" })
    const [tripOptions, setTripOptions] = useState([])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        FlightManager.createNewFlight(flightInfo).then(() => props.history.push("/flights"))
    }


    const handleChange = evt => {
        const stateToChange = {...flightInfo}
        stateToChange[evt.target.id] = evt.target.value
        setFlightInfo(stateToChange)
    }

    const handleFocusSelect = (event) => {
        const stateToChange = { ...flightInfo }
        stateToChange.trip_id = parseInt(event.target.value)
        setFlightInfo(stateToChange)
    }


    useEffect(() => {
        TripManager.getTripsJoined().then(resp => setTripOptions(resp))
    },[])

    return(
        
        <Container className="createFlightForm">
            <Jumbotron>
                <Container>
                    <h2>Create a Flight</h2>
                </Container>
            </Jumbotron>
            <Form onSubmit={handleSubmit} >
                <FormGroup controlId="start_airport">
                    <FormLabel>Departure Airport</FormLabel>
                    <FormControl required type="text" onChange={handleChange} placeholder="Example: BNA" />
                    <FormText className='text-muted'>
                        Use the 3 letter designation for the airport.
                    </FormText>
                </FormGroup>
                
                <FormGroup controlId="destination_airport">
                    <FormLabel>Destination Airport</FormLabel>
                    <FormControl required type="text" onChange={handleChange} placeholder="Destination Airport" />
                    <FormText className='text-muted'>
                        Use the 3 letter designation for the airport.
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
                </FormGroup>

                <FormGroup controlId="arrival_time">
                    <FormLabel>Arrival time</FormLabel>
                    <FormControl required type="text" placeholder="##:## am/pm" onChange={handleChange}/>
                    <FormText className='text-muted'>
                        Enter flight arrival time in this format: 7:23 pm
                    </FormText>
                </FormGroup>
                <Button type='submit'>Submit Trip</Button>
            </Form>
        </Container>
    )

}

export default CreateFlight