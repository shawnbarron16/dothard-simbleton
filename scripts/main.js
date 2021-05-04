//Import the business list and join it into one string
import { businessList } from "./BusinessList.js"
import { renderNewYork } from "./new-york.js"
import { renderManufacturing } from "./manufacutring.js"

//Create a references to the articles/buttons in the html
const activeBusinesses = document.getElementById("active-businesses")
const newYorkButton = document.getElementById("new-york-button")
const manufacturingButton = document.getElementById("manufacturing-button")
const homeButton = document.getElementById("home-button")

//Set initial html to a list of all companies
const renderHTML = () => {activeBusinesses.innerHTML = businessList.join(``)}
renderHTML()

//Add event listeners
homeButton.addEventListener(
    "click",
    (evt) => {
        renderHTML()
    }
)

newYorkButton.addEventListener(
    "click",
    (evt) => {
        renderNewYork()
    }
)

manufacturingButton.addEventListener(
    "click",
    (evt) => {
        renderManufacturing()
    }
)