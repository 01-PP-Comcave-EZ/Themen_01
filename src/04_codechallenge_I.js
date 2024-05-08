
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let number1=prompt("Erster Summand?: ");
let number2=prompt("Zweiter Summand?: ");
let summe=Number(number1)+Number(number2);
console.log("Die Summe der Zahlen ist: "+ summe);

// Done.