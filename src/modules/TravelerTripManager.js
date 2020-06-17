const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {

    getAllTrips() {
        return fetch(`${url}/travelertrips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(resp => resp.json())
    },
    getYourTrips() {
        return fetch(`${url}/travelertrips?yourtrips`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(resp => resp.json())
    },
    deleteTrip(id) {
        return fetch(`${url}/trips/${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${token}`
        }})

    }
}