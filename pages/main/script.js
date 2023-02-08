const exit = document.querySelector("header img");
const trashes = document.querySelectorAll("main div button");
const modalButtons = document.querySelectorAll("#modal-create button, #modal-delete button");
const addButton = document.querySelector("button")
const modalAdd = document.querySelector("#modal-create");
const modalDelete = document.querySelector("#modal-delete");
const addInputs = document.querySelectorAll("input")


const modalAddBtn = modalButtons[0];
const modalClearBtn = modalButtons[1];
const modalDeleteBtn = modalButtons[2];
const modalCancelBtn = modalButtons[3];


document.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.matches("main div button img")) {
        modalDelete.classList.toggle("active");
    } 
})

exit.onclick = () => {
    window.location.assign("../login/index.html")
}

addButton.onclick = () => {
    modalAdd.classList.toggle("active");
}
modalAddBtn.onclick = () => {
    modalAdd.classList.toggle("active");
}
modalClearBtn.onclick = () => {
    for (input of addInputs) {
        input.value = "";
    }

}
modalDeleteBtn.onclick = (event) => {
    console.log(event)
    modalDelete.classList.toggle("active");
}
modalCancelBtn.onclick = () => {
    modalDelete.classList.toggle("active");
}



/* offsetParent */