import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenAuth from "../../hooks/TokenAuth"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import AccommodationInfo from "./AccommodationInfo"
import AccommodationManager from "../../modules/AccommodationManager"


const AccommodationsPage = (props) => {

    const [allAccommodations , setAllAccommodations] = useState([])


    const getAllAccommodations = () => {
        AccommodationManager.getAllAccommodations().then(response => {
            setAllAccommodations(response)
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
                        <Button>Add an accommodation</Button>
                    </Container>
                </Jumbotron>
            </Container>
            <Container>
                {allAccommodations.map((eachAccommodation) => (
                    <AccommodationInfo key={eachAccommodation.id} eachAccommodation={eachAccommodation} {...props} />
                ))

                }
            </Container>
        </>
    )


}

export default AccommodationsPage