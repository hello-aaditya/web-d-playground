// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCh_LKbmd4OD650PN9OkO5Fkql4EiIuzY4",
  authDomain: "signup-and-signin-d25c2.firebaseapp.com",
  projectId: "signup-and-signin-d25c2",
  storageBucket: "signup-and-signin-d25c2.appspot.com",
  messagingSenderId: "156350853031",
  appId: "1:156350853031:web:b510f731009dd8e5a3d082",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logoutBtn = document.querySelector("#logout-button");
onAuthStateChanged(auth, (user) => {
  if (user) {
    // document.querySelector("#preloader").style.visibility = "hidden";
    // console.log("Logged in");
  } else {
    window.location.href = "index.html";
  }
});

logoutBtn.onclick = function () {
  signOut(auth);
};

const firestore = getFirestore();

const howMany = document.querySelector("#howMany");
const whereTo = document.querySelector("#whereTo");
const arrivals = document.querySelector("#CheckIn");
const leaving = document.querySelector("#checkOut");
const submit = document.querySelector("#done-btn");
const formData = document.querySelector("#formData");
onAuthStateChanged(auth, (user) => {
  if (user) {
    formData.onsubmit = (e) => {
      e.preventDefault();
      const data = {
        howMany: howMany.value,
        whereTo: whereTo.value,
        arrivals: arrivals.value,
        leaving: leaving.value,
      };
      const db = doc(firestore, "users/" + user.email + new Date().getTime());
      setDoc(db, data).then(() => {
        alert("travel booked successfully👏👏");
        formData.reset();
      });
    };
  }
});

//
