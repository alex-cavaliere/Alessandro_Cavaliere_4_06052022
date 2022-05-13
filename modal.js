function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// function de validation phase de debug
function validate(){
  modalBody.addEventListener('submit', function(e){
    e.preventDefault();
  })
  // procedimento per puntare all'input dell'email
  let email = formData[2].children[2];
  email.addEventListener('keyup', function(){
    console.log(email.value);
  })
}
const x = {
  hasError : false,
  regex : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
};
// DOM Elements
const modalBody = document.querySelector(".modal-body");
//console.log(modalBody);
const modalbg = document.querySelector(".bground");
//console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
//console.log(modalBtn);
const formData = document.querySelectorAll(".formData");

//console.log(formData);
const close_modal = document.querySelectorAll(".close");
//console.log(close_modal);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close_modal.forEach((close) => close.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}


