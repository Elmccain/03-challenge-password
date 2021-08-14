// Assignment code here
//user input var-these go with the window prompts
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;

//var values 
//This is where the password will be stored as it is created
var password = '';
//lowerCase string
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
//upperCase string
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// number string 
var number = '0123456789';
//symbol string
var symbol = '!@#$%^&*()<~?:+';
//This is where th input will be stored I think...
var length ="";

//Start function
//button function to start promts 
var generateBtn = document.querySelector("#generate").addEventListener('click', generate);
//generates the password
function generate(){
  console.log('string')
  userprompt();
  generatePassword();
} 


//Generator functions
function userprompt() {
  length = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8-128"));
   // if (condition) {
      
    //}
  ConfimLower = window.confirm("Would you like lowercase letters in your password? 'OK' for yes, 'Cancel for no");
  confirmUpper = window.confirm("Would you like uppercase letters in your password? 'OK' for yes, 'Cancel for no");
  confirmNum = window.confirm("Would you like numbers in your password? 'Ok' for yes, 'Cancel' for no");
  confirmChar = window.confirm("Would you like special characters in your password? 'OK' for yes, 'Cancel for no.");
}

function generatePassword() {
  if (userPrompt.confirmLower) {
    lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
  }
  //if userprompt.lowerCase
console.log(lowerCase);
  console.log(Math.floor(Math.random() * lowerCase.length));
 console.log(lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)))

}


// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword); 
