const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {


    getAllTripFlights(){
        return fetch(`${url}/tripflights`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
}