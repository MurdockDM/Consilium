import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormText from 'react-bootstrap/FormText'
import FormLabel from 'react-bootstrap/FormLabel'
import FormCheck from 'react-bootstrap/FormCheck'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import AccommodationManager from '../../modules/AccommodationManager'
import TripDropdownOptions from '../Trip/TripDropdownOptions'
import TripManager from '../../modules/TripManager'
import RoomManager from "../../modules/RoomManager";




const EditAccommodation = props => {
    
    const [accommodationInfo, setAccommodationInfo] = useState({id: 0, name: "", address: "", city: "", state: "", checkin_date: "", checkout_date: "", capacity: 8, booked: false, room_id: null, trip_id: 0 })
    const [tripOptions, setTripOptions] = useState([])
    const [room, setRoom] = useState({id: 0, room_number: 0})
    const [show, setShow] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        AccommodationManager.updateAccommodation(accommodationInfo).then(() => props.history.push("/accommodations"))
    }


    const handleChange = evt => {
        const stateToChange = { ...accommodationInfo }
        stateToChange[evt.target.id] = evt.target.value
        setAccommodationInfo(stateToChange)
    }
    const handleRoomChange = evt => {
        const stateToChange = { ...room }
        stateToChange[evt.target.id] = parseInt(evt.target.value)
        setRoom(stateToChange)
    }
    const handleRangeChange = evt => {
        const stateToChange = { ...accommodationInfo }
        stateToChange[evt.target.id] = parseInt(evt.target.value)
        setAccommodationInfo(stateToChange)
    }

    const handleFocusSelect = (event) => {
        const stateToChange = { ...accommodationInfo }
        stateToChange.trip_id = parseInt(event.target.value)
        setAccommodationInfo(stateToChange)
    }

    const toggleBooked = () => {
        const stateToChange = { ...accommodationInfo }
        stateToChange.booked = !stateToChange.booked
        setAccommodationInfo(stateToChange)
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRoomBooking = () => {
        const stateToChange = {...accommodationInfo}
        RoomManager.updateRoom(room).then(() => {
            stateToChange.room_id = parseInt(room.id)
            setAccommodationInfo(stateToChange)
        }).then(handleClose())
    }


    useEffect(() => {
        TripManager.getAllTrips().then(resp => setTripOptions(resp))
        AccommodationManager.getIndividualAccommodation(props.accommodationId).then(resp => {setAccommodationInfo(resp)})
    }, [])

    useEffect(() => {
        if (accommodationInfo.id !== 0) {
        RoomManager.getIndividualRoom(accommodationInfo.room_id).then(resp => setRoom(resp))}
    },[accommodationInfo])

    return (

        <Container>
            <Jumbotron>
                <Container>
                    <h2>Create a Accommodation</h2>
                </Container>
            </Jumbotron>
            <Form onSubmit={handleSubmit} >
                <FormGroup controlId="name">
                    <FormLabel>Name of Accommodation</FormLabel>
                    <FormControl required value={accommodationInfo.name} type="text" onChange={handleChange} placeholder="Hotel, AirBNB, VRBO, etc" />
                    <FormText className='text-muted'>
                        Use the name of the accommodation or best description
                    </FormText>
                </FormGroup>

                <FormGroup controlId="address">
                    <FormLabel>Address</FormLabel>
                    <FormControl required value={accommodationInfo.address} type="text" onChange={handleChange} />
                </FormGroup>

                <FormGroup controlId="city">
                    <FormLabel>City</FormLabel>
                    <FormControl required value={accommodationInfo.city} type="text" onChange={handleChange} />
                </FormGroup>

                <FormGroup controlId="state">
                    <FormLabel>State</FormLabel>
                    <FormControl required value={accommodationInfo.state} type="text" onChange={handleChange} />
                    <FormText className='text-muted'>
                        Use the full state, province, region name.
                    </FormText>
                </FormGroup>

                <FormGroup controlId="checkin_date">
                    <FormLabel>Check in date</FormLabel>
                    <FormControl required value={accommodationInfo.checkin_date} type="date" onChange={handleChange} />
                </FormGroup>

                <FormGroup controlId="checkout_date">
                    <FormLabel>Checkout date</FormLabel>
                    <FormControl required value={accommodationInfo.checkout_date} type="date" min={accommodationInfo.checkin_date} onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <FormCheck
                        onChange={toggleBooked}
                        type='switch'
                        id='booked'
                        name='booked'
                        label='Room booked'
                        value={accommodationInfo.booked}
                    />
                </FormGroup>
                {
                    accommodationInfo.booked
                    ?<>   
                        <Button variant="outline-success" onClick={handleShow}>
                            Edit a room
                        </Button>
                        
                    </>    
                    :null
                }   
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Room number for Accommodation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup controlId="room_number">
                                <FormLabel>
                                    Room Number
                                </FormLabel>
                                <FormControl required value={room.room_number} type='text' onChange={handleRoomChange} />
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleRoomBooking}>
                            Save Room 
                        </Button>
                    </Modal.Footer>
                </Modal>
                <FormGroup controlId="capacity">
                    <FormLabel>Capacity: {accommodationInfo.capacity} </FormLabel>
                    <FormControl onChange={handleRangeChange} value={accommodationInfo.capacity} placeholder={0} min={0} max={16} type="range" />
                </FormGroup>
                <FormGroup controlId="trip_id">
                    <FormLabel>Trip</FormLabel>
                    <FormControl as="select" value={accommodationInfo.trip_id} onChange={handleFocusSelect} >
                        <option>Pick one</option>
                        {tripOptions.map((eachTrip) => (
                            <TripDropdownOptions key={eachTrip.id} value={eachTrip.id} eachTrip={eachTrip} {...props} />
                        ))}
                    </FormControl>
                    <FormText className='text-muted'>
                        This only lists trips that you are attending.
                        </FormText>
                </FormGroup>
            <Button type='submit'>Submit Accommodation</Button>
            </Form>
        </Container >
    )

}

export default EditAccommodation