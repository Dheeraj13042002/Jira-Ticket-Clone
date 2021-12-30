const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const textAreaContainer = document.querySelector(".textarea-cont");
const priorityColor = document.querySelectorAll(".priority-color");


const colors = ["lightpink", "lightblue", "lightgreen", "black"];
let activeColor = colors[colors.length-1];


let addFlag = false;


// Listener for modal coloring
priorityColor.forEach((colorElem,idx) => {
    colorElem.addEventListener("click",(e)=>{
        priorityColor.forEach((allColorEle,idx)=>{
            allColorEle.classList.remove("border");
        });
        colorElem.classList.add("border");

        activeColor = colorElem.classList[0];
    });
});

addBtn.addEventListener("click",(e)=>{
    // Display Modal
    // Generate ticket

    // addFlag = true => Display Modal
    // addFlag = false => Remove Modal

    addFlag = !addFlag;

    if(addFlag){
        modal.style.display = "flex";
    }
    else{
        modal.style.display = "none";
    }
});

modal.addEventListener("keydown",(e)=>{
    let key = e.key;

    if(key === "Shift"){
        createTicket(activeColor, textAreaContainer.value,shortid());
        modal.style.display = "none";
        textAreaContainer.value = "";
        addFlag = !addFlag;
    }
});


function createTicket(ticketColor, ticketTask, ticketId){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");

    ticketCont.innerHTML = `
        <div class="task-color ${ticketColor}"></div>
        <div class="task-id">#${ticketId}</div>
        <div class="task-content">${ticketTask}</div>
    `
    mainCont.appendChild(ticketCont);
}

