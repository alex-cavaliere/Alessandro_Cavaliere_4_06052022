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
const modalbg = document.querySelector(".bground");
const modalbg_2 = document.querySelector('#bground-2');
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const confirmMessage = document.querySelector(".message-confirm");
//console.log(formData);
const close_modal = document.querySelectorAll(".close");
//console.log(close_modal);


// object avec RegEx
const x = {
  emailregex : /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,4}$/,
  textregex : /^[A-z ]{2,20}$/ 
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
close_modal.forEach((close) => close.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function launchConfirm(){
  modalbg_2.style.display = "block";
  confirmMessage.innerHTML = "Merci d'avoir reservé.";
  modalbg.style.display = "none";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
  modalbg_2.style.display = "none";
}

  // variables
let firstname = formData[0].children[2];
let lastname = formData[1].children[2];
let email = formData[2].children[2];
let date = formData[3].children[2];
let terms = formData[6].children[1].previousElementSibling;
  
// verifica nome e cognome

firstname.addEventListener('keyup', function(e){
  if(x.textregex.test(e.target.value)){
    firstname.style.backgroundColor = "green";
    hasError = false;
  }else{
    firstname.style.backgroundColor = "red";
    hasError = true;
  }
})

lastname.addEventListener('keyup', function(e){
  if(x.textregex.test(e.target.value)){
    lastname.style.backgroundColor = "green";
    hasError = false;
  }else{
    lastname.style.backgroundColor = "red";
    hasError = true;
  }
})
// function de controle email
  // verification des characters avec un email regEx 
email.addEventListener('keyup', function(e){
  if(x.emailregex.test(e.target.value)){
    email.style.backgroundColor = "green";
    hasError = false;
  }else{
    email.style.backgroundColor = "red";
    hasError = true;
  }
})
  // function de validation phase de debug
function validate(){
  modalbg.addEventListener('submit', function(e){
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
  if(terms.checked === false){
    document.querySelector('.terms_message').innerHTML = "accepter les termes et conditions";
    hasError = true;
  }else{
    document.querySelector('.terms_message').innerHTML = "";
    hasError = false;
    launchConfirm();
  }
}







