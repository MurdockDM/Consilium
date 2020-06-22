import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TokenAuth from "../../hooks/TokenAuth"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ActivityManager from "../../modules/ActivityManager"
import ActivityInfo from "./ActivityInfo"
import YourActivityInfo from "./YourActivityInfo"

const ActivitiesPage = props => {


    const [allActivities, setAllActivities] = useState([])
    const [yourActivities, setYourActivities] = useState([])

    const getAllActivities = () => {
        ActivityManager.getAllActivities().then(resp => {
            setAllActivities(resp)
        })
    }
    const getAllYourActivities = () => {
        ActivityManager.getYourActivities().then(resp => {
            setYourActivities(resp)
        })
    }

    useEffect(() => {
        getAllActivities()
        getAllYourActivities()
    },[])

    return(
        <>
            <Container>
                <Jumbotron>
                    <Container>
                        <h2>Activities by Trip</h2>
                        <Link to="/createactivity"><Button>Add an Activity</Button></Link>
                    </Container>
                </Jumbotron>
            </Container>
            <Container>
                {allActivities.map((eachActivity) => (
                    <ActivityInfo key={eachActivity.id} eachActivity={eachActivity} {...props} />
                ))

                }
            </Container>
            <Container>
                <Row>
                    <h2>Edit or Delete your activities</h2>
                </Row>
                {yourActivities.map((eachActivity) => (
                    <YourActivityInfo key={eachActivity.id} eachActivity={eachActivity} {...props} />
                ))

                }
            </Container>
        </>

    )

}

export default ActivitiesPage