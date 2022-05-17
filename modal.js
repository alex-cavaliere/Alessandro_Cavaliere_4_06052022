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
  // inserire le variabili all'interno della funzione validate(). poi definire una funzione itinerante di check con i regex di testo e email.
/*let firstname = formData[0].children[2];
let lastname = formData[1].children[2];
let email = formData[2].children[2];
let terms = formData[6].children[1].previousElementSibling;
let date = document.querySelector('#birthday');*/


// verifica nome e cognome

/*firstname.addEventListener('keyup', function(e){
  if(x.textregex.test(e.target.value)){
    //firstname.style.backgroundColor = "green";
    formData[0].dataset.errorVisible = false;
  }else{
    //firstname.style.backgroundColor = "red"
    formData[0].dataset.errorVisible = true;
  }
})

lastname.addEventListener('keyup', function(e){
  if(x.textregex.test(e.target.value)){
    //lastname.style.backgroundColor = "green";
    formData[1].dataset.errorVisible = false;
  }else{
    //lastname.style.backgroundColor = "red";
    formData[1].dataset.errorVisible = true;
  }
})
// function de controle email
  // verification des characters avec un email regEx 
email.addEventListener('keyup', function(e){
  if(x.emailregex.test(e.target.value)){
    //email.style.backgroundColor = "green";
    formData[2].dataset.errorVisible = false;
  }else{
    //email.style.backgroundColor = "red";
    formData[2].dataset.errorVisible = true;
  }
})*/
  // function de validation phase de debug
function validate(){
  modalbg.addEventListener('submit', function(e){
    e.preventDefault();
    let firstname = check('#first', 0, 'text', '.first_message', 'saisissez un prenom valide');
    let lastname = check('#last', 1, 'text', '.last_message', 'saisissez un nom valide');
    let email = check('#email', 2, 'email', '.email_message', 'saisissez un e-mail valide');
    let location = check('location', 5, 'radio', '.location_message', 'saisissez une Ville');
    console.log(location);
    //let location = check(5, 'radio', '.location_message', 'saisissez une ville');
  })
}

function check(elementName, i, type, messageClass, message){
  let element = document.querySelector(elementName);
  if (type === "text"){
    if(x.textregex.test(element.value)){
      formData[i].dataset.errorVisible = false;
      return document.querySelector(messageClass).innerHTML = "";
    }else{
      formData[i].dataset.errorVisible = true;
      return document.querySelector(messageClass).innerHTML = message;
    } 
  }
  if (type === "email"){
    if(x.emailregex.test(element.value)){
      formData[i].dataset.errorVisible = false;
      return document.querySelector(messageClass).innerHTML = "";
    }else{
      formData[i].dataset.errorVisible = true;
      return document.querySelector(messageClass).innerHTML = message;
    } 
  }
  // sistemare questa condizione 
  if(type === "radio"){
    let elements = document.getElementsByName('location');
    let selected;
      for (let element of elements){
        if(element.checked){
          selected = element.value;
        }
        if(selected != "undefined"){
          document.querySelector(messageClass).innerHTML = "";
          return selected;
        }else{
          return document.querySelector(messageClass).innerHTML = message;
        }
      }
    }
  /*if (type === "radio"){
    let element2 = document.getElementsByName(elementName);
    for (let z = 0; z < element2.length; z++) {
      let select = element2[z];
      if (select){
        return document.querySelector(messageClass).innerHTML = "";
        break;
      }else{
        formData[i].dataset.errorVisible = true;
        return document.querySelector(messageClass).innerHTML = message;
      }
    }
  }*/
}

/*if(!x.textregex.test(lastname.value)){
  document.querySelector('.last_message').innerHTML = "saisissez un nom";
}else{
  document.querySelector('.last_message').innerHTML = "";
}
if(!x.emailregex.test(email.value)){
  document.querySelector('.email_message').innerHTML = "saisissez une email valide";
}else{
  document.querySelector('.email_message').innerHTML = "";
}
if(terms.checked === false || !x.textregex.test(firstname.value) || !x.textregex.test(lastname.value) || !x.emailregex.test(email.value)){
  document.querySelector('.terms_message').innerHTML = "verifier les champs de saisie";
}else{
  document.querySelector('.terms_message').innerHTML = "";
  launchConfirm();
}
if(terms.checked === false){
  document.querySelector('.terms_message').innerHTML = "accepter les termes et conditions";
  formData[6].dataset.errorVisible = true;
}*/








