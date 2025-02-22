import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { registerUserService, loginUserService } from "./js/api.js";
import { LS_KEY } from './js/refs.js';

const token = localStorage.getItem(LS_KEY);
if(token){
    location.replace("/contacts.html")
}
const loginForm = document.querySelector(".login-form");
const registerBtn = document.querySelector(".sign-up-btn");


async function registerUser(event) {
    event.preventDefault();
    const { email, password, name} = event.currentTarget.elements;
     const response = await registerUserService({
        email: email.value,
        password: password.value,
        name: name.value
    })
    localStorage.setItem('token', response.token);
    location.replace("/contacts.html")
}

function openModal() {
instanceRegister.show();
const registerForm = document.querySelector(".register-form");
registerForm.addEventListener("submit", registerUser)
}

const instanceRegister = basicLightbox.create(
    document.querySelector('#register')
  );

  registerBtn.addEventListener("click", openModal)

  //login
    const loginBtn = document.querySelector(".login-btn");
    function openLoginModal() {
        instanceLogin.show();
        const loginForm = document.querySelector(".login-form");
        loginForm.addEventListener("submit", loginUser)
    }
    const instanceLogin = basicLightbox.create(
        document.querySelector('#login')
      );
    async function loginUser(event) {
        event.preventDefault();
        const { email, password } = event.currentTarget.elements;
        const response = await loginUserService({
            email: email.value,
            password: password.value
        })
        localStorage.setItem('token', response.token);
        location.replace("/contacts.html")
    }
    loginBtn.addEventListener("click", openLoginModal)