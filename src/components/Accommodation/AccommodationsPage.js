import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import AccommodationInfo from "./AccommodationInfo"
import YourAccommodationInfo from "./YourAccommodationInfo"
import AccommodationManager from "../../modules/AccommodationManager"
import "./AccommodationsPage.css"



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

    const handleDelete = (id) => {
        AccommodationManager.deleteAccommodation(id).then(() => {
            AccommodationManager.getYourAccommodations().then(resp => {
                setYourAccommodations(resp)
            })
        })
    } 

    useEffect(() => {
        getAllAccommodations()
    },[])

    return (

        <Container fluid className="allAccommodation">
            <Container fluid>
                <Jumbotron className="accommodationJumbo">
                    <Container>
                        <h2 className="accommodationJumboHeader">Accommodations by Trip</h2>
                        <Link to="/createaccommodation"><Button>Add an accommodation</Button></Link>
                    </Container>
                </Jumbotron>
            </Container>
            <Container className="everyAccommodationBox">
                <Container className="accommodationCardContainer">
                    <h4>All Accommodations</h4>
                    {allAccommodations.map((eachAccommodation) => (
                        <AccommodationInfo key={eachAccommodation.id} eachAccommodation={eachAccommodation} {...props} />
                    ))
                    }
                </Container>
                <Container className="accommodationCardContainer">
                    <h4>Your created Accommodations</h4>
                    {yourAccommodations.map((eachAccommodation) => (
                        <YourAccommodationInfo key={eachAccommodation.id} handleDelete={handleDelete} eachAccommodation={eachAccommodation} {...props} />
                    ))
                    }
                </Container>
            </Container>    
        </Container>
    )


}

export default AccommodationsPage