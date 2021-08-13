// Assignment code here

//button function
var generateBtn = document.querySelector("#generate").addEventListener('click', generate);
function generate(){
  var enter = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8-128"));
}
//Start function
//function generatePassword() {
  //Get user input
 // enter = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8-128"));
//}



//We use this later according to the video
//Generator functions
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
}



// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword); 
