//Selecting Elements 
const countBtn=document.querySelector(".notification-count");
const unreadBtn=document.querySelector(".notification__unread");
const newNotification=document.querySelectorAll(".new-message");
const notifcationData=document.querySelectorAll(".notification__data");
const newDot=document.querySelectorAll(".dot");
const newMessage=document.querySelectorAll(".new-message");

let count=3;

//Event Listeners
unreadBtn.addEventListener("click",()=>{
    countBtn.innerHTML= 0;
    notifcationData.forEach((data)=>{
        data.classList.remove("active");
    });
    newDot.forEach((data)=>{
        data.style.display="none";
    })
    
});

function changeNum() {

    if (countBtn.innerHTML > 0) {
        countBtn.innerHTML = 
        countBtn.innerHTML - 1;    } 
    else {
        countBtn.innerHTML = 0;
}
}

function bgChange(b) {
    document.getElementById(b).style.backgroundColor = "white";
}
function displayChange(c) {
    document.querySelector(c).style.display = "none";
}
for (newNotify of newNotification) {
    let dataID = newNotify.id;
    newNotify.addEventListener("click", () => {
        bgChange(dataID);
        displayChange("#" + dataID + " div p span.dot");
        changeNum();
    }, { once: true })
}