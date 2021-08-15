document.getElementById("loginbtn").addEventListener("click", function(){

let username = document.getElementById("Username").value;
let email = document.getElementById("Email").value;
let password = document.getElementById("Password").value;

var email_check = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
document.getElementById("usernameHelp").innerText="";
document.getElementById("emailHelp").innerText="";
document.getElementById("passwordHelp").innerText="";

if(username==""){
    document.getElementById("usernameHelp").innerText="Username is required";
 }
 else if(email==""){
     document.getElementById("emailHelp").innerText="Email is required";
 }
 else if(!email.match(email_check)){
    document.getElementById("emailHelp").innerText="Email format is wrong";
 }
 else if(password==""){
     document.getElementById("passwordHelp").innerText="Password is required";
 }
else{
    alert("form submitted")
}    
});
