// Assignment code here--I have stopped
//variables--previous strings split into arrays. 
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!@#$%^&*()<~?:+';
//store answers
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
var confirmLength;
//holders for password and password length
var password = "";
var pwLength = "";

//Generator functions
var generatePassword = function () {
password = "";
pwLength = "";
var confirmLength = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8-128"));
  //if statement to insure proper length  
  if (!confirmLength) {
    window.alert("Enter a number between 8-128");
    return generatePassword();
  }
  else if (confirmLength < 8 || confirmLength > 128) {
    window.alert("Number must be betweern 8-128");
    return generatePassword();
  }
  else{
 //continue through promts after valid answer
 confirmLower = window.confirm("Would you like lowercase letters in your password? 'OK' for yes, 'Cancel for no");
 if (confirmLower) {
  console.log(getLower());
  password = password + getLower();
  console.log(pwLength);
}
 confirmUpper = window.confirm("Would you like uppercase letters in your password? 'OK' for yes, 'Cancel for no");
 if (confirmUpper) {
  console.log(getUpper());
  password = password + getUpper();
  console.log(pwLength);
}
 confirmNum = window.confirm("Would you like numbers in your password? 'Ok' for yes, 'Cancel' for no");
 if (confirmNum) {
  console.log(getNumber());
  password = password + getNumber();
  console.log(pwLength);
}
 confirmChar = window.confirm("Would you like special characters in your password? 'OK' for yes, 'Cancel for no.");
 if (confirmChar) {
  console.log(getSymbol());
  password = password + getSymbol();
  console.log(pwLength);
}  
}

}

//Get random characters 
function getLower() {
  return (lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
}
function getUpper() {
  return (upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
}
function getNumber() {
  return (number.charAt(Math.floor(Math.random() * number.length)));
}
function getSymbol() {
  return (symbol.charAt(Math.floor(Math.random() * symbol.length)));
}
//  console.log(getLower());
//  console.log(getUpper());
//  console.log(getNumber());
//  console.log(getSymbol());

// function passwordParts() {


//   //office hours
//   if (confirmLower) {
//     console.log(getLower());
//     password = password + getLower();
//     console.log(pwLength);
//   }
//   if (confirmUpper) {
//     console.log(getUpper());
//   }
//   if (confirmNum) {
//     console.log(getNumber());
//   }
//   if (confirmChar) {
//     console.log(getSymbol());
//   }
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //ask for input
  var confirmLength = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8-128"));
  //if statement to insure proper length  
  if (!confirmLength) {
    window.alert("Enter a number between 8-128");
    return generatePassword();
  }
  else if (confirmLength < 8 || confirmLength > 128) {
    window.alert("Number must be betweern 8-128");
    return generatePassword();
  }
  else {
    passwordParts();
  }
};
//if all options are cancel circle back
if (!confirmChar && !confirmLower && !confirmNum && !confirmUpper) {
  alert("Give me something to work with!");
}
//else for all 4 choices
// else if (confirmChar && confirmLower && confirmNum && confirmUpper){
// console.log(before + "password");
//password = password.concat(getUpper)

//}

//else for 3 options

//else for 2 options


//else for 1 options

//else for 1 option
// if (confirmNum) {
//   //console.log(getNumber());
//   password.push(getNumber());
//   console.log(password);

// }

//this holds the password 
// var password = "";
// passwordText.value = password;
//}
//selection of variables
for (let i = 0; i < pwLength.length; i++) {
  password = password + pwLength.charAt(Math.floor(Math.random() * symbol.length))
  const element = password[i];

}

generatePassword();
//Button yo start propmts and write password
var generateBtn = document.querySelector("#generate");
generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);