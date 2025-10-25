import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbp76qvsgIFpC2a5Of1w4gExGj8xGN8co",
  authDomain: "loginapp-7b922.firebaseapp.com",
  projectId: "loginapp-7b922",
  storageBucket: "loginapp-7b922.appspot.com",
  messagingSenderId: "935079731349",
  appId: "1:935079731349:web:584e36d653e447acc2bb9c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").textContent = `Logged in as: ${user.email}`;
  } else {
    // Not logged in → redirect to login
    window.location.href = "index.html";
  }
});

// 🚪 Logout function
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully 👋");
      window.location.href = "index.html";
    })
    .catch((error) => alert(error.message));
});