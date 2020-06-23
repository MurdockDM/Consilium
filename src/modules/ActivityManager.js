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
    getIndividualActivity(id){
        return fetch(`${url}/activities/${id}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    updateActivity(Activity) {
        return fetch(`${url}/activities/${Activity.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            },
            body: JSON.stringify(Activity)
        })
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
    },
    deleteActivity(id) {
        return fetch(`${url}/activities/${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
        }})

    },
}