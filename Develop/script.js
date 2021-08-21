// Assignment code
//variables
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
//container for the array(?) that will hold choices
var pwLength = "";

//Generator functions -- Office hours helped me cut out all of the if statements I was planning to write
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
  else 
 //continue through promts after valid answer
 confirmLower = window.confirm("Would you like lowercase letters in your password? 'OK' for yes, 'Cancel for no");
 if (confirmLower) {
pwLength = pwLength + lowerCase
}
 confirmUpper = window.confirm("Would you like uppercase letters in your password? 'OK' for yes, 'Cancel for no");
 if (confirmUpper) {
pwLength = pwLength + upperCase;
}
 confirmNum = window.confirm("Would you like numbers in your password? 'Ok' for yes, 'Cancel' for no");
 if (confirmNum) {
pwLength = pwLength + number;
}
 confirmChar = window.confirm("Would you like special characters in your password? 'OK' for yes, 'Cancel for no.");
 if (confirmChar) {
pwLength = pwLength + symbol;
}  
//if all false circle back
if (!confirmChar && !confirmLower && !confirmNum && !confirmUpper) {
  alert("Give me something to work with!");
  return generatePassword();
}
console.log(pwLength);
for (let i = 0; i < confirmLength; i++) {
  var password = password + pwLength.charAt(Math.floor(Math.random() * symbol.length))
  console.log(password);
}
};

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
 //var passwordText = document.querySelector("#password");
  //selection of variables - loop
}

generatePassword();
//Button yo start propmts and write password
var generateBtn = document.querySelector("#generate");
generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);