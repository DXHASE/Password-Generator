// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var upperCase =['A','B','C','D','E','F','G','H','I','J','K'];
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
var specialCharacters =['!','@','#','$','%','^','&','*','(',')','_'];
var numberCharacters=['1','2','3','4','5','6','7','8','9','0'];


var characterSet=[];

function generatePassword(){
  console.log("Hey you clicked the button.");
  // Prompt the user for the password criteria
  var passwordLength = prompt("How many characters would you like? Select a number 8-128.");

  var parseLength= parseInt(passwordLength);
  console.log(passwordLength , parseLength);
// Password length 8 < 128
  if(parseLength < 8 || parseLength > 128 || parseLength == NaN){
    window.alert("That input was not valid, the password will now be set to 8 characters.");
    parseLength = 8;
  }
// uppercase , lowercase and special characters
  var promptUppercase= window.confirm("Would you like to include uppercase letters?");
  if(promptUppercase){
    characterSet = characterSet.concat(upperCase);
    console.log(characterSet);
  }
  var promptLowercase= window.confirm("Would you like to include lowercase letters?");
  if(promptLowercase){
    characterSet = characterSet.concat(lowerCase);
    console.log(characterSet);
  }
  var promptSpecial=window.confirm("Would you like to include special characters?");
  if(promptSpecial){
    characterSet = characterSet.concat(specialCharacters);
    console.log(characterSet);
  }

  var promptNumber= window.confirm("Would you like to include numbers?");
  if(promptNumber){
    characterSet = characterSet.concat(numberCharacters);
    console.log(characterSet);
  }

  // Make sure that the values meet the criteria

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



