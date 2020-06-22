const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {


    getAllActivities(){
        return fetch(`${url}/activities`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    getYourActivities(){
        return fetch(`${url}/activities?youractivities`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    createNewActivity(Activity) {
        return fetch(`${url}/activities`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(Activity)
        })
        .then(resp => resp.json())
    }
}