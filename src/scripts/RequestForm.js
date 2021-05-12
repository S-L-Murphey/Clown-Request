import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        //getting what the user types into our fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendance = document.querySelector("input[name='partyAttendance']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userDuration = document.querySelector("input[name='partyDuration']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            attendance: userAttendance,
            address: userAddress,
            duration: userDuration,
            date: userDate,
        }
        sendRequest(dataToSendToAPI)
    }
})


export const RequestForm = () => {
    let html = `
    <div class="field">
    <label class="label" for="parentName">Parent Name</label>
    <input type="text" name="parentName" class="input" />
</div>
<div class="field">
    <label class="label" for="childName">Child Name</label>
    <input type="text" name="childName" class="input" />
</div>
<div class="field">
    <label class="label" for="partyAttendance">Number Attending the Party</label>
    <input type="number" name="partyAttendance" class="input" />
</div>
<div class="field">
    <label class="label" for="partyAddress">Event Address</label>
    <input type="text" name="partyAddress" class="input" />
</div>
<div class="field">
    <label class="label" for="partyDuration">Number of Clown Hours</label>
    <input type="number" name="partyDuration" class="input" />
</div>
<div class="field">
    <label class="label" for="serviceDate">Date needed</label>
    <input type="date" name="serviceDate" class="input" />
</div>

<button class="button" id="submitRequest">Submit Request</button>


    `

    return html
}