import React, { useEffect, useState } from "react";
import FormControl from 'react-bootstrap/FormControl'

const TripDropdownOptions = props => {

    return(
    <option value={props.eachTrip.id} >{props.eachTrip.city} Trip </option>
    )

}

export default TripDropdownOptions