var firebaseConfig = {
  apiKey: "AIzaSyAk1SD6y4mR9JZ0Q1FNCWq_UV6j2lp1Ahg",
  authDomain: "to-do-app-b27ec.firebaseapp.com",
  projectId: "to-do-app-b27ec",
  storageBucket: "to-do-app-b27ec.appspot.com",
  messagingSenderId: "584263944172",
  appId: "1:584263944172:web:6c0954481456d407ade2c9",
  measurementId: "G-JQZEDYBNMM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();