var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C"];
var lowercase = ["a", "b", "c"];
var special = ["@", "#", "$"];

// Assignment code here
var generatePassword = function() {
  var assignedNum = prompt("What length would you like your password? (Between 8 characters and no more than 128 characters)");
  if (assignedNum <= 8 || assignedNum >= 128) {
    alert ("Please revise your character count.")
  }
  var confirmNumeric = confirm("Would you like it to be numeric");
  var confirmUppercase = confirm("Would you like it to be uppercase?");
  var confirmLowercase = confirm("Would you like it to be lowercase?");
  var confirmSpecial = confirm("Would you like it to be special?");
  var possibilities = [];
  if (confirmNumeric) {
    possibilities = possibilities.concat(numeric);
  }
  if (confirmUppercase) {
    possibilities = possibilities.concat(uppercase);
  }
  if (confirmLowercase) {
    possibilities = possibilities.concat(lowercase);
  }
  if (confirmSpecial) {
    possibilities = possibilities.concat(special);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
