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
  import { getDatabase, set, get, ref } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

  const db = getDatabase()

  document.getElementById('btn-login').addEventListener('click', loginBtn)

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
}
}
function loginBtn() {
const email = document.querySelector(".email");
const password = document.querySelector(".password");

if (!(email.value.includes("@")) || email.value.trim() === "") {
     email.style.border="2px solid red";
} else {
  email.style.border = "";
}

if (!(password.value.length >= 7) || password.value.trim() === "") {
  password.style.border="2px solid red";
} else {
  password.style.border = "";
}

createUser();
const isAdmin=(password.value==="1234567890" && email.value==="sevinj@proton.me");

const localStorageUsers = JSON.parse(localStorage.getItem('user'));
const result = localStorageUsers.find(u => u.email == email.value && u.password == password.value);
if (result != undefined) {
  document.cardId = `cardId=${result.cardId}`;
  document.admin = `admin=${result.admin}`;
  document.cookie = `name=${result.name}`;
  document.cookie = `surname=${result.surname}`;
}

if(isAdmin){
  window.location.href="admin-panel/admin-panel/admin-panel/index.html"
}
else{
  window.location.href="index.html"
}
get(ref(db, 'Users/'))
  .then(data => { 
      const users = data.val()
      document.cookie = `cardId=''`;
      document.cookie = `fullname=''`;
      document.cookie = `email=''`;
      document.cookie = `birthdate=''`;
      document.cookie = `password=''`;
      document.cookie = `admin=''`;


      for (const user in users) { 
          const userData = users[user];

          if (userData.email == email.value && userData.password == password.value) {
              document.cookie = `cardId=${userData.cardId}`;
              document.cookie = `fullname=${userData.fullname}`;
              document.cookie = `email=${userData.email}`;
              document.cookie = `birthdate=${userData.birthdate}`;
              document.cookie = `password=${userData.password}`;
              document.cookie = `admin=${userData.admin}`;
              break;
          }
      }
  })
  .catch(console.error)
}      
function createUser() {
if (localStorage.getItem('user') == null) {
  localStorage.setItem('user', '[]')
}}