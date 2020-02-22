
function checkpass(){
var PLength = document.getElementById("Pword").value.length
if(PLength>6){
    document.getElementById("LengthChecker").innerHTML="Strong"
}else{
    document.getElementById("LengthChecker").innerHTML="Weak"
}
}

function username(){

if(document.getElementById("LoginUserName").value==""){
    document.getElementById("LoginUserName").style.backgroundColor="Red";
    document.getElementById("validation").innerHTML="Please Input UserName <br>";
    
    
}else{
    document.getElementById("LoginUserName").style.backgroundColor="Green";
    document.getElementById("validation").innerHTML="";
}
}
function passcode(){
    if(document.getElementById("Pword").value==""){
        document.getElementById("Pword").style.backgroundColor="Red";
        document.getElementById("validation").innerHTML+="Please Input Password <br>";
       
    
}else{
    document.getElementById("Pword").style.backgroundColor="Green";
    document.getElementById("validation").innerHTML+="";
        
}
}
function Cpasscode(){
    if (document.getElementById("CPword").value==""||document.getElementById("CPword").value!=document.getElementById("Pword").value){
        document.getElementById("CPword").style.backgroundColor="Red";
        document.getElementById("validation").innerHTML+="Passwords are not the same <br>";
        
    }else{
        document.getElementById("CPword").style.backgroundColor="Green";
        document.getElementById("validation").innerHTML+="";
    }
}
function validateEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById("Email").value.match(mailformat)){
    document.getElementById("Email").style.backgroundColor="Green";
    document.getElementById("validation").innerHTML+="";
}else{
    document.getElementById("Email").style.backgroundColor="Red";
    document.getElementById("validation").innerHTML+="Mail is wrong";
  
}
}


function check(){
username();
passcode();
Cpasscode();
validateEmail();

 
}