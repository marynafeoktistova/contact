import axios from 'axios';
import { LS_KEY } from './refs.js';

const token = localStorage.getItem(LS_KEY);
axios.defaults.baseURL = 'https://connections-api.goit.global/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function registerUserService(user) {
    try{
const {data} = await axios.post('/users/signup', user);
return data;
    } catch(error){
        console.log(error.message);
    }
    
}
export async function loginUserService(user) {
    try {
        const {data} = await axios.post('/users/login', user);
        return data;
    } catch(error){
        console.log(error.message);
    }
}

export async function addContactService(contact) {
    try {
        const {data} = await axios.post('/contacts', contact);
        return data;
    } catch(error){
        console.log(error.message);
    }
}
export async function getContactsService() {
    try {
        const {data} = await axios.get('/contacts');
        return data;
    } catch(error){
        console.log(error.message);
    }
}
export async function deleteContactService(id){
    try{
        const {data} = await axios.delete(`/contacts/${id}`);
        return data;
} catch(error){
    console.log(error.message);
}
}

export async function logOutService(){
    try{
        const {data} = await axios.post('/users/logout');
        return data;
    } catch(error){
        console.log(error.message);
    }
}