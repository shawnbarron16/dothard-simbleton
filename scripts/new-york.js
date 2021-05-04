import { getBusinesses } from "./database.js"

const activeBusinesses = document.getElementById("active-businesses")

const businesses = getBusinesses()

//Create an array to store the new york companies in
const newYorkBusinesses = []


//Rerender html to display new york companies
export const renderNewYork = () => {
    const filteredBusinesses = businesses.filter(business => business.addressStateCode === "NY")
    filteredBusinesses.forEach((business) => {
        let html /*html*/ = `<section id="business" >
        <h2>${business.companyName}</h2>
        ${business.addressFullStreet} <br>
        ${business.addressCity} ${business.addressStateCode}, ${business.addressZipCode}
        </section>`
        newYorkBusinesses.push(html)
    })
    header.outerHTML = `<h1 id="header">New York Businesses</h1>`
    activeBusinesses.innerHTML = newYorkBusinesses.join(``)
}