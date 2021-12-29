
function addUser()
{
    const userEmail=document.getElementById('signUpEmail').value
    const userPass=document.getElementById('signUpPass').value                                               
    const auth = getAuth().createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });   
}
function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let time=document.getElementById("taskTime").value;
    let inputHours=time.slice(0, 2);
    let ampm = inputHours >= 12 ? 'PM' : 'AM';
    inputHours =inputHours % 12;
    let inputMinute=time.slice(3, 5);
    let finalTime=inputHours+":"+inputMinute+" "+ampm
    db.collection("todo-items").add({

        text: text.value,
        status: "active",
        time:finalTime
    })
    text.value ="";   
}

function checkPass()
{
    let pass1=document.getElementById('signUpPassword').value;
    let pass2=document.getElementById('signUpConfirmPassword').value;
    let submit=document.getElementById('signUpBtn');
    if(pass1===pass2)
    {
        submit.removeAttribute("disabled");
    }
    else
    {
        submit.setAttribute("disabled","disabled");
    }
}