const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {


    getAllActivities(){
        return fetch(`${url}/activities`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(resp => resp.json())
    },
    getYourActivities(){
        return fetch(`${url}/activities?youractivities`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(resp => resp.json())
    },
}