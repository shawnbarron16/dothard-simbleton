import { getBusinesses } from "./database.js"

const businessList = getBusinesses()

const agentsHTML = document.getElementById("active-businesses")

export let agentList = []

//Display just the purchasing agents
    export const showAgetns = () => {
    businessList.map(business => {
        let html =  /*html*/ `<section id="business">
        <h3>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h3>
        <h4>${business.companyName}</h4>
        ${business.phoneWork}
        </section>`
        agentList.push(html)
    } )
    agentsHTML.innerHTML = agentList.join(``)
    header.innerHTML = "Active Agents"
    agentList = []
}