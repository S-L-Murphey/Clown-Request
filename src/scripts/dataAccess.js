import { render } from "./main.js"


const applicationState = {
    requests: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (clownRequests) => {
            applicationState.requests = clownRequests
        }
    )
}

export const getRequests = () => {
    return [...applicationState.requests]
}

/*When the user is typing in our fields, they are changing the state of 
the app, but it is transient state until they hit the submit button. The 
following function takes the transient state and converts it to 
permanent state by storing it in the database.json file. */

export const sendRequest = (userClownRequest) => {
    const fetchOptions = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userClownRequest)
    }
    return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

//Function that can send a DELETE request to the API.

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, {method:"DELETE"})
    .then(
        () =>{
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}