function validateForm(){
  username=document.myForm.username;
  password=document.myForm.password;
  if(username.value==""){
    username.style.border="solid 3px red";
    document.getElementById("uninv").style.visibility="visible";
    return false;
  }
  
  else if(password.value.length<=7){
    password.style.border="solid 3px red";
    document.getElementById("passinv").style.visibility="visible";
    return false;
  }
  else{
    return true;
  }
}

function validatereg(){

}queueMicrotask
let verify=document.getElementById("verify");
verify.addEventListener('click', function(event) {
  event.preventDefault();
  email=document.reg.email;
  if(email.value==""){
    email.style.border="solid 3px red";
    document.getElementById("eminv").style.visibility="visible";
    return false;  
  }


  else {
     true;
    document.getElementById("verify").style.visibility="hidden";
    document.getElementById("eminv").style.visibility="hidden";
    document.getElementById("otp").style.visibility="visible";
    document.getElementById("submit").style.visibility="visible";
    0
  }
});

