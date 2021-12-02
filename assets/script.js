// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '~', '`', '?', ',', '.', ';', ':', '"', '|']
var masterListArray = [];
var inputArray = [];

function generatePassword() {

var promptLength = window.prompt("How many characters would you like your password to be? (Please choose between 8 to 128 characters)")
  // if prompt length is less than 8 or higher than 128 then alert user
  if (promptLength < 8 || promptLength > 128) {
    window.alert("Password must be between 8 to 128 characters")
    generatePassword();
  }
// pick character from master list of arrays
var lowerCaseChoice = window.confirm("Would you like to use lowercase leters in your password?")
  if (lowerCaseChoice === true) {
    masterListArray = masterListArray.concat(lowerCaseArray)
  }
var upperCaseChoice = window.confirm("Would you like to use uppercase leters in your password?")
  if (upperCaseChoice === true) {
    masterListArray = masterListArray.concat(upperCaseArray)
  }
var numberChoice = window.confirm("Would you like to use numbers in your password?")
  if (numberChoice === true) {
    masterListArray = masterListArray.concat(numberArray)
  }
var specialCharacterChoice = window.confirm("Would you like to use special characters in your password?")
  if (specialCharacterChoice === true) {
    masterListArray = masterListArray.concat(specialCharacterArray)
  }
return inputArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);