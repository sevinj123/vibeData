 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyDK49Mm5mV7GrwSZpAa6yyY9vjnFMc-jFo",
     authDomain: "vibedata-f97f1.firebaseapp.com",
     projectId: "vibedata-f97f1",
     storageBucket: "vibedata-f97f1.appspot.com",
     messagingSenderId: "25356895413",
     appId: "1:25356895413:web:8a1dd620984ffdb9c06afc"
 };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

 const db = getDatabase()

 function showPass(icon){
const input = icon.previousElementSibling;
if (input.getAttribute("type") == "password") {
 input.setAttribute("type","text");
 icon.classList.remove('fa-eye');
 icon.classList.add('fa-eye-slash');
}
else{
 input.setAttribute("type","password");
 icon.classList.add('fa-eye');
 icon.classList.remove('fa-eye-slash');
 }}

function createUser() {
 if (localStorage.getItem('user') == null) {
     localStorage.setItem('user', '[]')
 }
}

document.getElementById("register-form").addEventListener('submit', e => {
 e.preventDefault()

 const fullname = document.querySelector("#fullname");
 const email = document.querySelector("#email");
 const bthdate = document.querySelector("#bthdate");
 const password=document.querySelector("#password");
 const confirm=document.querySelector("#confirm");
 

 let hasError = false;

 if (!(email.value.includes("@")) || email.value.trim() === "") {
     email.style.border = "2px solid red";
     hasError = true;
 } else {
     email.style.border = "";
 }
 
 if (!(password.value.length >= 7) || password.value.trim() === "") {
     password.style.border = "2px solid red";
     hasError = true;
 } else {
     password.style.border = "";
 }

 if (fullname.value.trim() === "") {
     fullname.style.border = "2px solid red";
     hasError = true;
 } else {
     fullname.style.border = "";
 }

 if (!(password.value === confirm.value)) {
     password.style.border = "2px solid red";
     confirm.style.border = "2px solid red";
     hasError = true;
 } else {
     password.style.border = "";
     confirm.style.border = "";
 }

 if (hasError) {
     return false
 } 

 let users = {
     cardId: generateId(16),
     fullname: fullname.value,
     email: email.value,
     birthdate:bthdate.value,
     password: password.value,
     admin: false
 }

 set(ref(db, `Users/${users.cardId}`), users)
     .then(() => {
         createUser();

         let user = JSON.parse(localStorage.getItem('user'));
         user.push(users);
         localStorage.setItem('user', JSON.stringify(user));

         window.location.href = 'login.html'
     })
     .catch(console.error)
})

function generateId(length) {
 const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
 let nftId = '';

 for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * chars.length);
     nftId += chars.charAt(randomIndex);
 }
 return nftId;
}