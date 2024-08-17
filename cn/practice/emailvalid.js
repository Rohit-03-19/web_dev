
const email=prompt("Please Enter your email id");

const emailLen= email.length;

const dotindex= email.indexOf(".");

const atindex = email.indexOf("@");

const lastindex = emailLen- 1;

if(emailLen<11 || 
    lastindex-dotindex  < 2 ||
    lastindex-dotindex > 3 ||
    dotindex-atindex < 3){
    console.log("Email is not valid");
    }