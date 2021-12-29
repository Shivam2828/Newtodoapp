document.getElementById('loginform').addEventListener("submit",(event)=>{
    event.preventDefault()
})

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         location.replace("index.html")
//     }
// })

function login()
{
    const email=document.getElementById("loginEmail").value
    const passwd=document.getElementById("loginPassword").value
    firebase.auth().signInWithEmailAndPassword(email,passwd).catch((error)=>{
        document.getElementById("showuser").innerHTML=error.message
    })
}

function signUp()
{ 
    const email=document.getElementById("signUpEmail");
    const passwd=document.getElementById("signUpPass");
    firebase.auth().createUserWithEmailAndPassword(email.value, passwd.value)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    document.getElementById("showuser").innerHTML=user+" New User Added"
    // ...
  })
  .catch((error) => {
    var errorMessage = error.message;
    
    document.getElementById("showuser").innerHTML=errorMessage
    // ..
  });
}

function forgotPassword()
{
    const email=document.getElementById("loginEmail").value
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    alert("Reset Mail Sent")
    // ..
  })
  .catch((error) => {
    var errorMessage = error.message;
    document.getElementById("showuser").innerHTML=errorMessage
    // ..
  });
}