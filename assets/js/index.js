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
const row = document.querySelector('#what-image .row')
console.log(row);
import { getDatabase, get, set, remove, update, ref, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
const db = getDatabase();
getAll()
function getAll() {
    get(ref(db, "Images/"))
        .then(data => {
            const datas = data.val()
            for (const key in datas) {
                const imageDatas = datas[key];
                console.log(imageDatas);
                row.innerHTML +=`
                <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card mt-5"> 
                    <img src="${imageDatas.Picture}" class="card-img-top card-img-topp" alt="...">
                    <div class="card-body">
                    <h5 class="card-title text-center">${imageDatas.Datetype}</h5>
                    <p class="card-text text-center">${imageDatas.Commit}</p>
                    </div>
                </div>
                </div>
            `
            }
            
        })
}