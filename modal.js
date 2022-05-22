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
const formBtn = document.querySelectorAll('btn-submit');
// form HtML collection in array
const form = document.getElementsByName('reserve');
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
let firstname = formData[0].children[2];
let lastname = formData[1].children[2];
let email = formData[2].children[2];
let date = document.querySelector('#birthday');



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
// function de validation du form.
function validate(){
  modalbg.addEventListener('submit', function(e){
    e.preventDefault();
    let firstname = check('first', 0, 'text', '.first_message', 'saisissez un prenom valide');
    let lastname = check('last', 1, 'text', '.last_message', 'saisissez un nom valide');
    let email = check('email', 2, 'email', '.email_message', 'saisissez un e-mail valide');
    let location = check('location', 5, 'radio', '.location_message', 'saisissez une Ville');
    let termes = check('checkbox1', 6, 'checkbox', '.terms_message', 'accepter les termes et conditions');
  })
}

// function de controle du form.
function check(elementName, i, type, messageClass, message){
  //const text = document.querySelector(elementName);
  const elements = document.getElementsByName(elementName);
  const terms = document.getElementById(elementName);
  for(const element of elements){
    if (type === "text" ){
      if(!x.textregex.test(element.value)){
        formData[i].dataset.errorVisible = true;
        document.querySelector(messageClass).innerHTML = message;
        return false;
      }
    }else if (type === "email"){
      if(!x.emailregex.test(element.value)){
        formData[i].dataset.errorVisible = true;
        document.querySelector(messageClass).innerHTML = message;
        return false;
      } 
    }else if (type === "radio"){
      let checked;
      for (const radio of elements){
        //console.log(elements);
        if (radio.checked){
          checked = radio.checked;
          //console.log(checked);
          break;
        }
      }
      if(!checked){
        formData[i].dataset.errorVisible = true;
        document.querySelector(messageClass).innerHTML = message;
        return false;
      }
    }
    formData[i].dataset.errorVisible = false;
    document.querySelector(messageClass).innerHTML = "";
    return true;
    // sistemare questo forEach.. fors siamon sulla strada giusta. fare un forEach a tutti gli elementi e creare delle condizioni di errore.
  }
  if(terms.checked === false || !x.textregex.test(firstname.value) || !x.textregex.test(lastname.value) || !x.emailregex.test(email.value)){
    document.querySelector('.terms_message').innerHTML = "verifier les champs de saisie";
  }else{
    document.querySelector('.terms_message').innerHTML = "";
    launchConfirm();
  }
  if (type === "checkbox"){
    if(terms.checked){
      formData[i].dataset.errorVisible = false;
      document.querySelector(messageClass).innerHTML = "";
      return true;
    }else{
      formData[i].dataset.errorVisible = true;
      document.querySelector(messageClass).innerHTML = message;
      return false;       
    }
  }
}
/*function checkValidation(){
  try {
    requiredFields();
    requiredTerms();
    formData[i].dataset.errorVisible = false;
    document.getElementsByClassName('terms_message').innerHTML = "";
  } catch (error) {
    formData[i].dataset.errorVisible = true;
    document.getElementsByClassName('terms_message').innerHTML = message;
  }
}*/
/*function requiredFields(){
  text.forEach(element => {
    let error = false;
    console.log(element);
    if(!x.textregex.test(element.value)){
      error = true;
    }
    if(!x.emailregex.test(element.value)){
      error = true;
    }
    console.log(error);
    if(!error){
      return launchConfirm();
    }
  });
}*/
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








