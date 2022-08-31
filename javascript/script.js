function isPalindrome(word) {
  word = word.toLowerCase();
  let drow = "";
  for (let index = word.length - 1; index >= 0; index--) {
    drow += word[index];
  }
  return word === drow ? true : false;
}

console.log(isPalindrome(prompt("Inserisci una parola:")) ? "SONO PALINDROMA" : "NON SONO PALINDROMA")

//---------------------------PARI E DISPARI-------------------------------//
const maxNumber = 10
function validateNumber(number) {
  if (!isNaN(number) && number > 0 && number <= maxNumber) {
    return true;
  }
  return false;
}

function isEven() {
  let choice = prompt("Inserisci pari o dispari").toLocaleLowerCase();
  if (choice === "pari") return true;
  else if (choice === "dispari") {
    return false;
  }

 return isEven();
}

function getRandomNumber(dice) {
  return Math.floor(Math.random() * dice) + 1;
}

function playOddEven(number, even) {
  if (number === undefined || even === undefined || typeof even !== "boolean") {
    number = parseInt(prompt(`inserisci numero da 1 a ${maxNumber}`));
    even = isEven();
    return playOddEven(number, even);
  } else {
    if (validateNumber(number, true)) {
      let pcLaunch = getRandomNumber(maxNumber);
      let total = pcLaunch + number;
      console.log("Il pc ha tirato "+pcLaunch, "il totale è " + total);
        
      if ((total % 2 === 0 && even) || (total % 2 !== 0 && !even)) {
        return true;
        }
        else
        return false;
        
    } else {
      console.error("Invalid Number");
      return playOddEven();
    }
  }
}

console.log(playOddEven() ? "HAI VINTO" : "HAI PERSO");
