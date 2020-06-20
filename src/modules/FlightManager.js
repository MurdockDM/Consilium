const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {


    getAllFlights(){
        return fetch(`${url}/flights`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(resp => resp.json())
    },
    createNewFlight(Flight) {
        return fetch(`${url}/flights`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(Flight)
        })
        .then(resp => resp.json())
    }
}