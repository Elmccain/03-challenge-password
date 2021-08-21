// Assignment code here
//user input var-these go with the window prompts
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
var confirmLength;

//This is where the password will be stored as it is created
var password = "";
//var values
//lowerCase string
function randomLow() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  console.log(Math.floor(Math.random() * lowerCase.length));  
};

//upperCase string
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// number string 
var number = '0123456789';
//symbol string
var symbol = '!@#$%^&*()<~?:+';
//This is where th input will be stored I think...
var length = "";

//Generator functions
var generatePassword = function () {
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
}


generatePassword();
randomLow();
//button function to start promts 
var generateBtn = document.querySelector("#generate").addEventListener('click', generate);
