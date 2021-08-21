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
  else{
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
}
}
//selection of variables
for (let i = 0; i < pwLength.length; i++) {
  password = password + pwLength.charAt(Math.floor(Math.random() * symbol.length))
  const element = password[i];

}

//Get random characters 
// function getLower() {
//   return (lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
// }
// function getUpper() {
//   return (upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
// }
// function getNumber() {
//   return (number.charAt(Math.floor(Math.random() * number.length)));
// }
// function getSymbol() {
//   return (symbol.charAt(Math.floor(Math.random() * symbol.length)));
// }
//  console.log(getLower());
//  console.log(getUpper());
//  console.log(getNumber());
//  console.log(getSymbol());

// function passwordParts() {


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

//selection of variables
for (let i = 0; i < pwLength.length; i++) {
  password = password + pwLength.charAt(Math.floor(Math.random() * symbol.length))
  const element = password[i];

}

generatePassword();
//Button yo start propmts and write password
var generateBtn = document.querySelector("#generate");
generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);