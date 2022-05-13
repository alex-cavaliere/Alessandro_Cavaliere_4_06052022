function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const modalBody = document.querySelector(".modal-body");
//console.log(modalBody);
const modalbg = document.querySelector(".bground");
//console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
//console.log(modalBtn);
const formData = document.querySelectorAll(".formData");
// oggetto con proprietà regex e booleano
const x = {
  hasError : false,
  emailregex : /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,4}$/,
  textregex : /^[A-z/ ]{2,20}$/ 
};

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

  // variabili
let firstname = formData[0].children[2];
let lastname = formData[1].children[2];
let email = formData[2].children[2];
  
// verifica nome e cognome

firstname.addEventListener('keyup', function(e){
  if(x.textregex.test(e.target.value)){
    console.log("ok");
    firstname.style.backgroundColor = "green";
  }else{
    console.log("error");
    firstname.style.backgroundColor = "red";
  }
})

lastname.addEventListener('keyup', function(e){
  if(x.textregex.test(e.target.value)){
    console.log("ok");
    lastname.style.backgroundColor = "green";
  }else{
    console.log("error");
    lastname.style.backgroundColor = "red";
  }
})
// funzione di controllo email
  // verifica caratteri email con regEx
email.addEventListener('keyup', function(e){
  if(x.emailregex.test(e.target.value)){
    console.log("ok");
    email.style.backgroundColor = "green";
  }else{
    console.log("error");
    email.style.backgroundColor = "red";
  }
})

  // function de validation phase de debug
function validate(){
  modalBody.addEventListener('submit', function(e){
    e.preventDefault();
  })
  if(!x.textregex.test(firstname.value)){
    document.querySelector('.first_message').innerHTML = "saisissez un prenom";
  }else{
    document.querySelector('.first_message').innerHTML = "";
  }
  if(!x.textregex.test(lastname.value)){
    document.querySelector('.last_message').innerHTML = "saisissez un nom";
  }else{
    document.querySelector('.last_message').innerHTML = "";
  }
  if(!x.emailregex.test(email.value)){
    document.querySelector('.email_message').innerHTML = "saisissez une email valide";
  }else{
    document.querySelector('.email_message').innerHTML = "";
  }
}







