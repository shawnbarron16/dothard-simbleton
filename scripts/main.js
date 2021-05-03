//Import the business list and join it into one string
import { businessList } from "./BusinessList.js"

//Create a reference to the active businesses article
const activeBusinesses = document.getElementById("active-businesses")

activeBusinesses.innerHTML = businessList.join(``)