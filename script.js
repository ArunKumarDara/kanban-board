const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector(".modal-cont");
const textAreaCont = document.querySelector(".textarea-cont");
const mainTicketCont = document.querySelector(".main-ticket-cont");
const allPriorityColor = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");

let addTaskFlag = false;
let modalPriorityColor = "black";
let removeTaskFlag = false;

const cleanUpColorSelection = () => {
  allPriorityColor.forEach((colorEle) => {
    colorEle.classList.remove("active-status-color");
  });
};

removeBtn.addEventListener("click", () => {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag === true) {
    window.alert("Delete button has been activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

addBtn.addEventListener("click", () => {
  addTaskFlag = !addTaskFlag;
  if (addTaskFlag === true) {
    cleanUpColorSelection();
    modalContainer.style.display = "flex";
  } else {
    modalContainer.style.display = "none";
  }
});

modalContainer.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    createTicket(textAreaCont.value);
    modalContainer.style.display = "none";
    textAreaCont.value = "";
    cleanUpColorSelection();
  }
});

allPriorityColor.forEach((colorEle) => {
  colorEle.addEventListener("click", (e) => {
    cleanUpColorSelection();
    modalPriorityColor = e.target.classList[0];
    colorEle.classList.add("active-status-color");
  });
});

const createTicket = (text) => {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="${modalPriorityColor} ticket-color"></div>
  <div class="ticket-id">${shortid()}</div>
  <div class="task-area">${text}</div>
  <div class="lock">
    <i class="fa-solid fa-lock"></i>
  </div>`;
  mainTicketCont.appendChild(ticketCont);
};
