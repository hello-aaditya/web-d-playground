// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyAyKqcaklHPW3QZWPU6jznq_DL1FeoMzBw",
  authDomain: "travellwebapplication.firebaseapp.com",
  projectId: "travellwebapplication",
  storageBucket: "travellwebapplication.firebasestorage.app",
  messagingSenderId: "279782437248",
  appId: "1:279782437248:web:91edde2cc424b760ea1165",
  measurementId: "G-9QC5JETF21"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// *********************toast Objects***************************/
const toast_container = document.querySelector("body > div.toast_container");
const toast = document.querySelector("#toast_text");

// taking ides from html(Register)
const reg_email = document.getElementById("register_email");
const reg_pass = document.getElementById("register_password");
const singUp = document.getElementById("signUp");

//**************signup*******************/
singUp.addEventListener("click", (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, reg_email.value, reg_pass.value)
    .then((userCredential) => {
      console.log(userCredential);

      toast.style.background =
        "linear-gradient(to bottom, #46fb73 0%, #ace656 100%)";
      toast.innerHTML = "Register Successfully";
      toast_container.style.visibility = "visible";
      setTimeout(() => {
        toast_container.style.visibility = "hidden";
      }, 3000);
      window.location.href = "web.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);

      toast_container.style.visibility = "visible";
      toast.style.background =
        "linear-gradient(to bottom, #fa3232 0%, #e66056e8 100%)";
      setTimeout(() => {
        toast_container.style.visibility = "hidden";
      }, 3000);

      if (errorCode == "auth/invalid-email") {
        toast.innerHTML = "Enter your EMAIL and PASSWORD!";
      } else if (errorCode == "auth/internal-error") {
        toast.innerHTML = "Enter your PASSWORD!";
      } else if (errorCode == "auth/network-request-failed") {
        toast.innerHTML = "Please check your INTERNET Connection!";
      } else if (errorCode == "auth/email-already-in-use") {
        toast.innerHTML = "you are Already REGISTERED!";
      }
    });
});
//******************************************* */

// taking ides from html(login)
const login_emial = document.getElementById("login_email");
const login_pass = document.getElementById("login_password");
const login = document.getElementById("login_btn");
const loder = document.getElementById("preloader");
//*********************signIn********************* */
login.addEventListener("click", (event) => {
  signInWithEmailAndPassword(auth, login_emial.value, login_pass.value)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      console.log(userCredential);
      console.log("bingo");
      window.location.href = "web.html";
      toast.innerHTML = "login sucessfully";
      toast.style.background =
        "linear-gradient(to bottom, #46fb73 0%, #ace656 100%)";
      toast_container.style.visibility = "visible";

      setTimeout(() => {
        toast_container.style.visibility = "hidden";
      }, 3000);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      toast_container.style.visibility = "visible";
      toast.style.background =
        "linear-gradient(to bottom, #fa3232 0%, #e66056e8 100%)";
      setTimeout(() => {
        toast_container.style.visibility = "hidden";
      }, 3000);
      if (errorCode == "auth/user-not-found") {
        toast.innerHTML = "User NOT FOUND!";
      } else if (errorCode == "auth/invalid-email") {
        toast.innerHTML = "Envalid EMAIL!";
      } else if (errorCode == "auth/wrong-password") {
        toast.innerHTML = "Wrong PASSWORD!";
      } else if (errorCode == "auth/internal-error") {
        toast.innerHTML = "fill all the REQUIRED Fields! ";
      } else if (errorCode == "auth/network-request-failed") {
        toast.innerHTML = "Plese check your INTERNET connection!";
      } else {
        toast.innerHTML = "something went WRONG!";
      }
      console.log(errorCode);
      console.log(errorMessage);
    });
});
//************************************************* */

// jupmp page

const reg_btn = document.getElementById("register_button");
const log_btn = document.getElementById("login_link");
const loginDiv = document.getElementById("login_div");
const regDiv = document.getElementById("registration_div");
var bool = true;

function toggle() {
  if (bool) {
    loginDiv.style.display = "none";
    regDiv.style.display = "block";
    bool = false;
  } else {
    loginDiv.style.display = "block";
    regDiv.style.display = "none";
    bool = true;
  }
}

reg_btn.addEventListener("click", toggle);
log_btn.addEventListener("click", toggle);

function clickFun(element) {
  const pages = document.querySelectorAll(".pages");
  pages.forEach(function (page) {
    page.classList.remove("active");
  });
  console.log(element.dataset.active);
  const sect = document
    .getElementById(element.dataset.activePage)
    .classList.add("active");
}
