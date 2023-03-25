// All possible characters for a random password
var possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

// Function to generate a random password
function generatePassword() {

  // Asks the user how long they want their password to be
  var passwordLength = prompt("Enter the length of your password (between 8 and 128 characters):");

  // A check to see if the user entered a length between 8-128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter a password length between 8-128 characters.");
    return "";
  }
  var password = "";

  // Generates password based on password length and randomizes characters
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    var randomChar = possibleChars[randomIndex];
    password += randomChar;
  }

  // Returns the generated password
  return password;
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
