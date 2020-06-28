import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ActivityManager from "../../modules/ActivityManager"
import ActivityInfo from "./ActivityInfo"
import YourActivityInfo from "./YourActivityInfo"
import "./ActivitiesPage.css"

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

    const handleDelete = (id) => {
        ActivityManager.deleteActivity(id).then(() => {
            ActivityManager.getYourActivities().then(resp => {
                setYourActivities(resp)
            })
            ActivityManager.getAllActivities().then(resp => {
                setAllActivities(resp)
            })
        })
    }

    useEffect(() => {
        getAllActivities()
        getAllYourActivities()
    },[])

    return(
        <Container fluid className="allActivity">
            <style type="text/css">
                {`
            .btn-flat {
            background-color: #724BB7;
            color: #F7F7F7;
            }
            `}
            </style>
            <Container fluid>
                <Jumbotron className="activityJumbo">
                    <Container>
                        <h2 className="activityJumboHeader">Activities by Trip</h2>
                        <Link to="/createactivity"><Button variant="flat">Add an Activity</Button></Link>
                    </Container>
                </Jumbotron>
            </Container>
            <Container className="everyActivityBox">
                <Container className="activityCardContainer">
                    <h4>All Activities</h4>
                    {allActivities.map((eachActivity) => (
                        <ActivityInfo key={eachActivity.id} eachActivity={eachActivity} {...props} />
                    ))

                    }
                </Container>
                <Container className="activityCardContainer">
                    <h4>Your created Activities</h4>
                    {yourActivities.map((eachActivity) => (
                        <YourActivityInfo key={eachActivity.id} handleDelete={handleDelete} eachActivity={eachActivity} {...props} />
                    ))

                    }
                </Container>
            </Container>    
        </Container>

    )

}

export default ActivitiesPage