// Assignment code here
//user input var-these go with the window prompts
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
var confirmLength;

//IDK WHY I PUT THIS HERE. RETURN HERE BEFORE SUBMIT
var length = "";


//Generator functions
var generatePassword = function () {
//Get random characters 
function getLower() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  return (lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)));
}
function getUpper() {
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (upperCase.charAt(Math.floor(Math.random() * upperCase.length)));
}
function getNumber() {
  var number = '0123456789';
  return (number.charAt(Math.floor(Math.random() * number.length)));
}
function getSymbol() {
  var symbol = '!@#$%^&*()<~?:+';
  return (symbol.charAt(Math.floor(Math.random() * symbol.length)));
}
console.log(getLower());
console.log(getUpper());
console.log(getNumber());
console.log(getSymbol());
}

//this holds the password 
var password = "";


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
      //continue through promts after valid answer
      confirmLower = window.confirm("Would you like lowercase letters in your password? 'OK' for yes, 'Cancel for no");
      confirmUpper = window.confirm("Would you like uppercase letters in your password? 'OK' for yes, 'Cancel for no");
      confirmNum = window.confirm("Would you like numbers in your password? 'Ok' for yes, 'Cancel' for no");
      confirmChar = window.confirm("Would you like special characters in your password? 'OK' for yes, 'Cancel for no.");
    };
    //if all options are cancel circle back
    if (!confirmChar && !confirmLower && !confirmNum && !confirmNum && !confirmUpper){
      alert("Give me something to work with!");
    }
    //else for all 5 choices
   // else if (confirmChar && confirmLower && confirmNum && confirmNum && confirmUpper){
     // console.log(before + "password");
      //password = password.concat(getUpper)
  
    //}
  
    //else for 4 options
  
    //else for 3 options
  
  
    //else for 2 options
  
    //else for 1 option

  passwordText.value = password;
}

generatePassword();
//Button yo start propmts and write password
var generateBtn = document.querySelector("#generate");
generateBtn= document.querySelector("#generate").addEventListener("click", writePassword);
