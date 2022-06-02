function editNav() {
  let x = document.getElementById("myTopnav");
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
const formData = document.querySelectorAll(".formData");
const confirmMessage = document.querySelector(".message-confirm");
const close_modal = document.querySelectorAll(".close");
const terms = document.getElementById('checkbox1');


// object avec RegEx pour texte e-mail
const x = {
  emailregex : /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,4}$/,
  textregex : /^[A-z ]{2,20}$/, 
  legaldate: '2004-12-31'
};


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
  modalbg_2.style.display = "none";
}

// confirmation du form
function launchConfirm(){
  modalbg_2.style.display = "block";
  confirmMessage.innerHTML = "Merci pour votre inscription";
  modalbg.style.display = "none";
}

  // variables
let firstname = document.getElementById('first');
let lastname = document.getElementById('last');
let email = document.getElementById('email');
let date = document.getElementById('birthdate');
let quantity = document.getElementById('quantity');

// function de validation du form.
function validate(){
  modalbg.addEventListener('submit', function(e){
    e.preventDefault();
    // je definis une variable pour chaque champs en passant la function 'check()' comme valeur avec des differentes parametres
    let firstname = check('first', 0, 'text', '.first_message', 'saisissez un prenom valide');
    let lastname = check('last', 1, 'text', '.last_message', 'saisissez un nom valide');
    let email = check('email', 2, 'email', '.email_message', 'saisissez un e-mail valide');
    let date = check('birthdate', 3, 'date', '.date_message', 'vous deviez avoir 18 ans pour parteciper');
    let quantity = check('quantity', 4, 'number', '.quantity_message', 'saisissez un numero');
    let location = check('location', 5, 'radio', '.location_message', 'saisissez une Ville');
    let termes = check('checkbox1', 6, 'checkbox', '.terms_message', 'accepter les termes et conditions');
  })
}

// function de controle du form.
function check(elementName, i, type, messageClass, message){
  const elements = document.getElementsByName(elementName);
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
    }else if (type === "date"){
      element.min = '1940-12-31';
      if(element.value > x.legaldate || element.value === ""){
        formData[i].dataset.errorVisible = true;
        document.querySelector(messageClass).innerHTML = message;
        return false;
      }
    }else if (type === "number"){
      if(element.value === ""){
        formData[i].dataset.errorVisible = true;
        document.querySelector(messageClass).innerHTML = message;
        return false;
      }
    }else if (type === "radio"){
      let checked;
      for (const radio of elements){
        if (radio.checked){
          checked = radio.checked;
          break;
        }
      }
      if(!checked){
        formData[i].dataset.errorVisible = true;
        document.querySelector(messageClass).innerHTML = message;
        return false;
      }else if(terms.checked && checked && x.textregex.test(firstname.value) && x.textregex.test(lastname.value) && x.emailregex.test(email.value) && date.value < x.legaldate && quantity.value !== ""){
        formData[i].dataset.errorVisible = false;
        document.querySelector(messageClass).innerHTML = "";
        launchConfirm();
        return true;
      }
    }
    formData[i].dataset.errorVisible = false;
    document.querySelector(messageClass).innerHTML = "";
    return true;
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






