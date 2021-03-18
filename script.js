// // Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var special = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]

  var charPool = [];

  var valid = false;


  var passLength = prompt("Please enter the number of characters you want for you new password.  It must be between 8 and 128 characters long.");

  if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128){
    valid = true
  }
  else{
    alert("You did not enter a number between 8 and 128, please press OK and restart")
  }

  if (valid === true){
    var confirmNumbers = confirm("Would you like your password to contain numbers?");
    var confirmUpper = confirm("Would you like your password to contain Uppercase letters?");
    var confirmLower = confirm("Would you like your password to contain lowercase letters?");
    var confirmSpecial = confirm("Would you like your password to contain special characters?");
    var counter = 0;

    if (confirmNumbers === true){
      var charPool = charPool.concat(numbers);
      counter++
    }

    if (confirmUpper === true){
      var charPool = charPool.concat(upper);
      counter++
    }

    if (confirmLower === true){
      var charPool = charPool.concat(lower);
      counter++
    }

    if (confirmSpecial === true){
      var charPool = charPool.concat(special);
      counter++
    }

  if (counter != 0){

    var passwordLength = parseInt(passLength);

    var poolLength = charPool.length;

    var randomIndex = [];


    for (var i = 0; i < passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * poolLength)
      randomIndex.push(randomNumber);

    }
    
    var randomLength = randomIndex.length;

    var randomPassword = '';

    for (var i = 0; i < randomLength; i++){
      var x = randomIndex[i];
      var y = charPool[x];

      randomPassword += y;
    }
  }
  else{
      alert("You must select at least one character type for your password")
    
      }
    }
  
  return randomPassword
  }

  







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
