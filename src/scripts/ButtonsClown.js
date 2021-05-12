import { RequestForm } from "./RequestForm.js"
import { Requests } from "./Requests.js"

export const ButtonsClown = () => {
    return `<h1>Buttons The Clown!</h1>
    
    <section class="RequestForm">
    ${RequestForm()}
    </section>

    <section class="clownRequests">
    <h2>Clown Requests</h2>
    ${Requests()}
    </section>
    
    `

}