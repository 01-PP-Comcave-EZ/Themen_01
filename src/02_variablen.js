// Zeilen-Kommentar | Strg + #

/**
 * 
 *  Block-Kommentar
 * 
 */

/******* Variablen 01 ********/

// console.log("Hi");
// console.log(Hi);

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung | assignment
// console.log(firstName); // Ausgabe
// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log("Hi, ich bin " + firstName + " " + familyName + "!"); // --> Hi, ich bin Max Mütze!
// console.log(firstName); // Ausgabe

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/

/*
let test;
console.log("Inhalt: "+test); // Ausgabe Inhalt
console.log("Datentyp: "+typeof test); // Ausgabe Datentyp
console.log("----------------------");

test="Hi"; // string -------'Hi' alternativ zu "Hi"
console.log("Inhalt: "+test); // Ausgabe Inhalt
console.log("Datentyp: "+typeof test); // Ausgabe Datentyp
console.log("----------------------");

test=23; // number
console.log("Inhalt: "+test); // Ausgabe Inhalt
console.log("Datentyp: "+typeof test); // Ausgabe Datentyp
console.log("----------------------");

test=true; // boolean
console.log("Inhalt: "+test); // Ausgabe Inhalt
console.log("Datentyp: "+typeof test); // Ausgabe Datentyp
console.log("----------------------");
*/

/* Variablen vs. Konstanten in JS */

// Variable 
let test; // Variable : Deklaration
test="Hi"; // Wertzuweisung (Initialisierung)
test="Hello"; // Überschreiben
console.log("Inhalt: "+test); // Ausgabe

// Konstante
const test2="Hi!"; // Deklaration + Wertzuweisung gemeinsam !
test2="Huhu"; // Laufzeitfehler!! - run time error
console.log("Inhalt: "+test2);


