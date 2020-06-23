const url = "http://localhost:8000"

const token = sessionStorage.getItem('consilium_token')

export default {


    getRoomForAccommodation(){
        return fetch(`${url}/rooms`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    createNewRoom(Room) {
        return fetch(`${url}/rooms`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            },
            body: JSON.stringify(Room)
        })
        .then(resp => resp.json())
    },
    getIndividualRoom(id){
        return fetch(`${url}/rooms/${id}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            }
        })
        .then(resp => resp.json())
    },
    updateRoom(room) {
        return fetch(`${url}/rooms/${room.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem('consilium_token')}`
            },
            body: JSON.stringify(room)
        })
    },
}