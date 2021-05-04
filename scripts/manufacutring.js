import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

const activeBusinesses = document.getElementById("active-businesses")

//Create an array to store the html of the manufacturing companies in
const manufacturingBusinesses = []

//Rerender html to display manufacturing companies
export const renderManufacturing = () => {
    const filteredBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")
    filteredBusinesses.forEach((business) => {
    let html /*html*/ = `<section id="business" >
    <h2>${business.companyName}</h2>
    ${business.addressFullStreet} <br>
    ${business.addressCity} ${business.addressStateCode}, ${business.addressZipCode}
    </section>`
    manufacturingBusinesses.push(html)
    })
    header.outerHTML = `<h1 id="header">Manufacturing Businesses</h1>` 
    activeBusinesses.innerHTML = manufacturingBusinesses.join(``)
}