import { ButtonsClown } from "./ButtonsClown.js"
import { fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests().then(
        () => {

            mainContainer.innerHTML = ButtonsClown()
        }
    )
}



render()