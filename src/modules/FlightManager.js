const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {


    getAllFlights(){
        return fetch(`${url}/flights`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    getIndividualFlight(id){
        return fetch(`${url}/flights/${id}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
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
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            },
            body: JSON.stringify(Flight)
        })
        .then(resp => resp.json())
    },
    updateFlight(Flight) {
        return fetch(`${url}/flights/${Flight.id}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            },
            body: JSON.stringify(Flight)
        })
        .then(resp => resp.json())
    }
}