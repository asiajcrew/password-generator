// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '~', '`', '?', ',', '.', ';', ':', '"', '|']

var promptLength = window.prompt("How many characters would you like your password to be? (Please choose between 8 to 128 characters)")
var lowerCaseChoice = window.confirm("Would you like to use lowercase leters in your password?")
var upperCaseChoice = window.confirm("Would you like to use uppercase leters in your password?")
var numberChoice = window.confirm("Would you like to use numbers in your password?")
var specialCharacterChoice = window.confirm("Would you like to use special characters in your password?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);