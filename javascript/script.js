

function isPalindrome(word) {
    word = word.toLowerCase();
    let drow = "";
    for (let index =word.length-1 ; index >= 0 ; index--) {
        drow += word[index]        
    }   
    
   return (word === drow) ? true  : false;
}

console.log(isPalindrome(prompt("Inserisci una parola:")) ? "SONO PALINDROMA" : "NON SONO PALINDROMA")



