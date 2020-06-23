import React from "react";


const TripDropdownOptions = props => {

    return(
    <option value={props.eachTrip.id} >{props.eachTrip.city} Trip </option>
    )

}

export default TripDropdownOptions