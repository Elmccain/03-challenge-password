// Assignment code here
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var symbol = '!@#$%^&*()<~?:+'
var length

//button function
var generateBtn = document.querySelector("#generate").addEventListener('click', generate);
function generate(){
  console.log('string')
  userprompt();
  generatePassword();
} 

function userprompt() {
  length = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8-128"));
  lowerCase = window.confirm("Would you like lowercase letters in your password? 'OK' for yes, 'Cancel for no");
  upperCase = window.confirm("Would you like uppercase letters in your password? 'OK' for yes, 'Cancel for no");
  symbol = window.confirm("Would you like special characters in your password? 'OK' for yes, 'Cancel for no.")
}

function generatePassword() {
 console.log(Math.floor(Math.random() * lowerCase.length));
 console.log(lowerCase.split("")[Math.floor(Math.random() * lowerCase.length)])
}

//Start function



//Generator functions



// Write password to the #password input
// function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword); 
