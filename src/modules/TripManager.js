const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {

    getAllTrips() {
        return fetch(`${url}/trips?friendstrips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    getTripsNotOn() {
        return fetch(`${url}/trips?notyourtrips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    getTripsJoined() {
        return fetch(`${url}/trips?onlyyourtrips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    getTripsGeneral() {
        return fetch(`${url}/trips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    createNewTrip(Trip) {
        return fetch(`${url}/trips`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            },
            body: JSON.stringify(Trip)
        })
        .then(resp => resp.json())
    }
}