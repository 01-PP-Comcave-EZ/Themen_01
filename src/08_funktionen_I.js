
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsrumpf | calle(r)
// test();

// Funktionsdeklaration | calle(e)
// Funktionsdeklaration
// function test() 
// {
//     console.log("Hallo, Ich!");   
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// outputNames();

function outputNames() 
{
    // interne Variable | What happens in VEGAS ...
    let firstName="Nele";

    console.log("Hallo, "+firstName+"!");
   
    // console.log("Hallo, Ich!"); 
    // console.log("Hallo, Nele!");
    // console.log("Hallo, Du!");
}

// console.log(firstName); // Fehler: scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// outputNames2("Ich"); // Argument --> Daten für Parameter
// outputNames2("Jan");

// function outputNames2(firstName) // Parameter
// {
//     console.log("Hallo, "+firstName+"!");
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// outputNames3("Maxine","Mützerich");

const prompt = require('prompt-sync')({sigint: true});
outputNames3(prompt("Vorname?: "),prompt("Nachname?: "));

function outputNames3(firstName, familyName) 
{
    console.log("Hallo, "+firstName+" "+familyName+"!");
} 

