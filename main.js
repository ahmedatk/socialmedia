

// function validateForm(event) {
//     let x = document.forms["myForm"]["username"].value;
//     if (x != "@") {
//       alert("email must be valid");
//       return false;
//       event.preventDefault();
//     }
//   }

// form.addEventListener('submit',validateForm)

function logSubmit(event) {
  let x = document.forms["myForm"]["username"].value;
  if (x != "@") {
    alert("email must be valid");
    return false;
  event.preventDefault();
}}

const form = document.getElementById("myForm");
const log = document.getElementById("username");
form.addEventListener("submit", logSubmit);