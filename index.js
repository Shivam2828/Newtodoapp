firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        // location.replace("index.html")
    }
    else{
        document.getElementById("showuser").innerHTML="Hello "+user.email
    }
})

function logout()
{
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        document.getElementById("showuser").innerHTML="Not Logged In"
      });
}

// Add a new document in collection "cities"
// function addItem1(event)
// {
//     // alert("Working State");
//     event.preventDefault();
//     let text = document.getElementById("todo-input").value;
//     let time=document.getElementById("taskTime").value;
//     let inputHours=time.slice(0, 2);
//     let ampm = inputHours >= 12 ? 'PM' : 'AM';
//     inputHours =inputHours % 12;
//     let inputMinute=time.slice(3, 5);
//     let finalTime=inputHours+":"+inputMinute+" "+ampm
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             db.collection("todo-items").add({
//                 name:text,
//                 status: "Active",
//                 time:finalTime
//             }) 
//             .then(() => {
//                 alert("Document successfully written!");
//             })
//             .catch((error) => {
//                 alert("Error writing document: "+ error.message);
//             });
//           // ...
//         } else {
//           // User is signed out
//           // ...
//             alert("Not Send");
//         }
//       });
// }