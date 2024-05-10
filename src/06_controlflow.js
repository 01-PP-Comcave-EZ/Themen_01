// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 36;
const ageMark = 35;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (false) // fake it!
// if(isJohnOlder) // Verweis auf ein Testergebnis
// if(ageJohn > ageMark)
// { // codeblock
//     console.log("John ist älter!");   
// }

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

// if (true) // fake it!
// if (false)
// if (isJohnOlder) // Verweis auf ein Testergebnis
// if(ageJohn >ageMark) //Test
// { // Ja-Zweig
//     console.log("John ist älter!");
// } 
// else 
// { //Alternativ-Zweig
//     console.log("John ist jünger!");
// }

/************  Ternäre (ternary) Schreibweise ************/
console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder) //Test
// { // Ja-Zweig
//     console.log("John ist älter!");
// } 
// else if (isJohnEqual) 
// { // Alternativ-Zweig 1...n
//     console.log("John ist gleich alt!");
// }
// else 
// { // gemeinsame Alternative
//     console.log("John ist jünger!");
// }



