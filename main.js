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
  email=document.reg.email;
  if(email.value!="@"){
    email.style.border="solid 3px red";
    document.getElementById("eminv").style.visibility="visible";
    return false;
  } 
  else{
    document.getElementById("otp").style.visibility="visible";

    true;

  }

}