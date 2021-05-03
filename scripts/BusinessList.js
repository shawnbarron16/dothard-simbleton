//Import the data
import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

//Create an array to store the strings from running for each
export let businessList = []

//Iterate through the array and return a string for each company
businesses.forEach((business) => {
    /*html*/ 
    let html = `<section id="business">
    <h2>${business.companyName}</h2>
    ${business.addressFullStreet} <br>
    ${business.addressCity} ${business.addressStateCode}, ${business.addressZipCode}`
    businessList.push(html)
})