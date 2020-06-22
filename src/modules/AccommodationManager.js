const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {
    getAllAccommodations(){
        return fetch(`${url}/accommodations`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    createNewAccommodation(Accommodation) {
        return fetch(`${url}/accommodations`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            },
            body: JSON.stringify(Accommodation)
        })
        .then(resp => resp.json())
    }
}