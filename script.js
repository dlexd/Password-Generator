// All possible characters used by the generator
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

// Function to generate a random password
function generatePassword() {

  // Asks the user how long they want their password to be
  var passwordLength = prompt("Enter the length of your password (between 8 and 128 characters):");

  // A check to see if the user entered a length between 8-128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter a password length between 8-128 characters.");
    return "";
  }

  // Asks the user if they want to include specific characters in their password
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSymbols = confirm("Include symbols?");

  // Check to include specific characters based on user selection
  var charSet = "";
  if (includeLowercase) {
    charSet += lowerCase;
  }
  if (includeUppercase) {
    charSet += upperCase;
  }
  if (includeNumbers) {
    charSet += numbers;
  }
  if (includeSymbols) {
    charSet += symbols;
  }
  var password = "";

  // Generates password based on password length and randomizes characters
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    var randomChar = charSet[randomIndex];
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
