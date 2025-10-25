// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ✅ Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbp76qvsgIFpC2a5Of1w4gExGj8xGN8co",
  authDomain: "loginapp-7b922.firebaseapp.com",
  projectId: "loginapp-7b922",
  storageBucket: "loginapp-7b922.appspot.com",
  messagingSenderId: "935079731349",
  appId: "1:935079731349:web:584e36d653e447acc2bb9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form elements
const form = document.getElementById("loginForm");
const formTitle = document.getElementById("formTitle");
const actionBtn = document.getElementById("actionBtn");
const toggleForm = document.getElementById("toggleForm");

let isLogin = true; // Track form state (login or signup)

// 🔁 Toggle between Login and Signup
toggleForm.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Login 👋" : "Create Account ✨";
  actionBtn.textContent = isLogin ? "Login" : "Sign Up";
  toggleForm.textContent = isLogin ? "Sign up" : "Login";
});

// 🧠 Handle login or signup form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isLogin) {
    // 🔐 Login user
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful 🎉");
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  } else {
    // 🆕 Sign up new user
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Account created successfully 🎉");
        window.location.href = "dashboard.html";
      })
      .catch((error) => alert(error.message));
  }
});

// ✅ Keep user logged in even after refreshing or reopening the app
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If already logged in and still on index.html → redirect to dashboard
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
      window.location.href = "dashboard.html";
    }
  } else {
    console.log("No user is signed in yet.");
  }
});