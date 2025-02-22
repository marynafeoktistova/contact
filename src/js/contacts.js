import { markupContact } from "./markup";
import { addContactService, getContactsService, deleteContactService, logOutService } from "./api";

import { LS_KEY } from './refs';

const token = localStorage.getItem(LS_KEY);
if(!token){
    location.replace("/")
} else{
    reloadPage();
}

const contactForm = document.querySelector(".contact-form");
const contactList = document.querySelector(".contacts-list");
const logOutBtn = document.querySelector(".log-out-btn");

contactForm.addEventListener("submit", addContact);
async function addContact(event){
    event.preventDefault();
    const {name, number} = event.currentTarget.elements;
    const contact = {
        name: name.value,
        number: number.value
    }
    const response = await addContactService(contact);
    contactForm.reset();
contactList.insertAdjacentHTML('beforeend', markupContact(response));
}
 contactList.addEventListener("click", deleteContact);
 async function deleteContact(event){
if(event.target.nodeName !== "BUTTON"){
    return;
 }
 await deleteContactService(event.target.parentNode.id);
event.target.parentNode.remove();
 }
async function reloadPage(){
const response = await getContactsService();
if(response.length !== 0){
    contactList.innerHTML = response.map(contact => markupContact(contact)).join('');
}
}

async function logOut(){
    await logOutService();
    localStorage.removeItem(LS_KEY);
    location.replace("/");
}
logOutBtn.addEventListener("click", logOut);