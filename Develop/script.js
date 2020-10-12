// Arrays
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", " ", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"];

var getRandomChar = function(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomValue = arr [randomIndex]
  return randomValue;
}

// Assignment code here
var generatePassword = function() {
  var assignedNum = prompt("What length would you like your password? (Anywhere between 8 characters and no more than 128 characters)");
  if (assignedNum <= 8 || assignedNum >= 128) {
    alert ("Please pick a valid character count.")
  }
  if (isNaN(assignedNum) === true) {
    alert("Value entered must be numberic.");
    return;
  }
  var confirmNumeric = confirm("Would you like the password to include numbers?");
  var confirmUppercase = confirm("Would you like the password to include uppercase letters?");
  var confirmLowercase = confirm("Would you like the password to include lowercase letters?");
  var confirmSpecial = confirm("Would you like the password to include special characters?");
  // Emtpy array with concatenated possibilities
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
  console.log(possibilities);
// This will join getRandomChar and possibilities together so it can be used in the password input below
var result = [];
for (let i = 0; i < assignedNum; i++) {
var randomChar = getRandomChar(possibilities);
result.push(randomChar)
console.log(result);
}
return result.join("")
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
