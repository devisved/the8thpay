alert("Firebase Loaded!");document.body.innerHTML += "<p>Firebase Initialized Successfully!</p>";
;

// Load Firebase using CDN
const firebaseConfig = {
  apiKey: "AIzaSyCX5M7Yuz_vTbIOvnKzi_gPpTi501aeHwQ",
  authDomain: "the8thpay.firebaseapp.com",
  projectId: "the8thpay",
  storageBucket: "the8thpay.firebasestorage.app",
  messagingSenderId: "779653698648",
  appId: "1:779653698648:web:9a0198576380e6184aa62d"
};

// Wait until Firebase is loaded before initializing
document.addEventListener("DOMContentLoaded", function() {
  import("https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js").then(({ initializeApp }) => {
x    const app = initializeApp(firebaseConfig);
    console.log("Firebase Initialized:", app);
  }).catch(err => console.error("Firebase Load Error:", err));
});
x<script type="module">alert("Firebase Loaded!");
console.log(firebase);

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCX5M7Yuz_vTbIOvnKzi_gPpTi501aeHwQ",
    authDomain: "the8thpay.firebaseapp.com",
    projectId: "the8thpay",
    storageBucket: "the8thpay.firebasestorage.app",
    messagingSenderId: "779653698648",
    appId: "1:779653698648:web:9a0198576380e6184aa62d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
x
