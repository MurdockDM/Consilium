import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import AccommodationInfo from "./AccommodationInfo"
import YourAccommodationInfo from "./YourAccommodationInfo"
import AccommodationManager from "../../modules/AccommodationManager"



const AccommodationsPage = (props) => {

    const [allAccommodations , setAllAccommodations] = useState([])
    const [yourAccommodations, setYourAccommodations] = useState([])


    const getAllAccommodations = () => {
        AccommodationManager.getAllAccommodations().then(response => {
            setAllAccommodations(response)
        })
        AccommodationManager.getYourAccommodations().then(resp => {
            setYourAccommodations(resp)
        })
    }

    useEffect(() => {
        getAllAccommodations()
    },[])

    return (

        <>
            <Container>
                <Jumbotron>
                    <Container>
                        <h2>Accommodations by Trip</h2>
                        <Link to="/createaccommodation"><Button>Add an accommodation</Button></Link>
                    </Container>
                </Jumbotron>
            </Container>
            <Container>
                <Container>
                    {allAccommodations.map((eachAccommodation) => (
                        <AccommodationInfo key={eachAccommodation.id} eachAccommodation={eachAccommodation} {...props} />
                    ))
                    }
                </Container>
                <Container>
                <h3>Your Accommodations</h3>
                {yourAccommodations.map((eachAccommodation) => (
                    <YourAccommodationInfo key={eachAccommodation.id} eachAccommodation={eachAccommodation} {...props} />
                ))
                }
                </Container>
            </Container>    
        </>
    )


}

export default AccommodationsPage