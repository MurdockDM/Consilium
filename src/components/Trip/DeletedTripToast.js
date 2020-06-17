import React, { useEffect, useState } from "react";
import Toast from 'react-bootstrap/Toast'



const DeletedTripToast = props => {



    return (
        <Toast style={{
            position: 'absolute',
            top: 0,
            right: 0,
        }}>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto"></strong>
            </Toast.Header>
            <Toast.Body>Your trip has been deleted</Toast.Body>
        </Toast>
    )
}

export default DeletedTripToast