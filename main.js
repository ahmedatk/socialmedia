
const form=document.getElementById('form');
const username=document.getElementById('username');



function validateForm(event) {
    let x = document.forms["form"]["username"].value;
    if (x != "@") {
      alert("email must be valid");
      return false;
      event.preventDefault();
    }
  }

form.addEventListener('submit',validateForm)