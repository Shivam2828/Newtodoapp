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

function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
        console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc)=>{
            items.push({
                id: doc.id,
                ...doc.data()
            })
        })
        generateItems(items);
    })
}


function generateItems(items){
    
    let itemsHTML="";
    items.forEach((item)=> {
     console.log(item);
        itemsHTML += `
           <div class="todo-item">
                <div class="check">
                    <div data-id="${item.id}" class="check-mark ${item.status == "completed" ? "checked": ""}">
                        <img src="icon-check.svg" alt="">
                    </div>
                </div>
                <div class ="todo-text ${item.status == "completed" ? "checked": ""}">
                    ${item.text}
                </div>
                <div class ="todo-text-time ${item.status == "completed" ? "checked": ""}">
                    ${item.time}
                </div>
            </div>
        ` 
    })
    document.querySelector(".todo-items").innerHTML = itemsHTML;
    createEventListeners();
}

function createEventListeners(){

    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
    todoCheckMarks.forEach((checkMark)=> {
        checkMark.addEventListener("click", function(){
            markCompleted(checkMark.dataset.id);

        })
    })
}

function markCompleted(id){
    // console.log(id);
    // form a database
    let item = db.collection("todo-items").doc(id);
    item.get().then(function(doc){
        if(doc.exists){
            // console.log("Here is the doc", doc.data());
             let status = doc.data().status;
             if(status == "active"){
                 item.update({
                    status : "completed" 
                })
             }else if(status == "completed"){
                item.update({
                    status : "active"
                 })
             }
        }
    })
    
}

// function myTime()
// {
//     var addTime=document.getElementById('taskTime').valueAsDate;
//     alert(addTime);
    // getTime(addTime)
    // const d=new Date();
    // let hour=d.getHours();
    // let minut=d.getMinutes();
    // let ampm = hour >= 12 ? 'PM' : 'AM';
    // let final=hour+":"+minut+" "+ampm
    // getTime(final);

// }

// function getTime(time)
// {
//     // alert(time);
//     let inputHours=time.slice(0, 2);
//     let ampm = inputHours >= 12 ? 'PM' : 'AM';
//     inputHours =inputHours % 12;
//     let inputMinute=time.slice(3, 5);
//     // alert(inputMinute);
//     if(ampm=='AM')
//     {
//         if(inputMinute>=0 && inputMinute<=9)
//         {
//             // inputMinute="0"+inputMinute
//             // let hour="0"+inputHours
//             // alert(hour+":"+inputMinute+" "+ampm);
//             alert(inputMinute);
//         }
//         else
//         {
//             let hour="0"+inputHours
//             alert(hour+":"+inputMinute+" "+ampm);
//         }
//     }
//     else
//     {
//         if(inputMinute>=0 && inputMinute<=9)
//         {
//             inputMinute="0"+inputMinute
//             let hour="0"+inputHours
//             alert(hour+":"+inputMinute+" "+ampm);
//         }
//         else
//         {
//             let hour="0"+inputHours
//             alert(hour+":"+inputMinute+" "+ampm);
//         }
//     }
// }
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
getItems();