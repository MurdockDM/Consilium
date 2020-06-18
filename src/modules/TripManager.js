const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {

    getAllTrips() {
        return fetch(`${url}/trips?friendstrips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(resp => resp.json())
    },
    getTripsGeneral() {
        return fetch(`${url}/trips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(resp => resp.json())
    },
}