import { getBusinesses } from "./database.js"

const activeBusinesses = document.getElementById("active-businesses")

const bussinesses = getBusinesses()

export const findBusiness = (input) => {
    for(const business of bussinesses) {
        if(input === business.companyName) {
             activeBusinesses.innerHTML = /*html*/ `<section id="business" >
            <h2>${business.companyName}</h2>
            ${business.addressFullStreet} <br>
            ${business.addressCity} ${business.addressStateCode}, ${business.addressZipCode}
            </section>`
        }
    }
    header.innerHTML = "Active Businesses"
}




