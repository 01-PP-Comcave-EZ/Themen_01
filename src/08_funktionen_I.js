
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

outputNames();

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