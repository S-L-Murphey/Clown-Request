import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    

    let html = "<ul>"

    const listRequests = requests.map(
        request => {
            const newDate = request.date.split("-");
            const myDate = new Date(newDate[0], newDate[1] - 1, newDate[2]);
            const clownDate = myDate.toDateString()
            return `<li>${request.address}------${clownDate} 
            <button class="request__delete" id="request--${request.id}">
            Deny</button>
            </li>`
        }
    )
    html += listRequests.join("")
    html += "</ul>"

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("request--")){
        const [, requestId] = clickEvent.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

