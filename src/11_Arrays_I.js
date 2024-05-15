
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

// let arr;
// // arr = new Array(); // Konstruktor
// arr = [];
// arr = [2,11,7,5,23,56,77] // Array mit Elementen

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); // Index 0 (1. Pos. im Array)
// output(arr[arr.length-1]); // Letzte Pos.


/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4,word5,word6) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 word5 + GAP +
//                 word6 +
//                 PUNCT;

//     return str;
// }




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";
    for (let i=0; i < arr.length; i++) 
    {
        if (i==arr.length-1) 
        {
            str += arr[i] + PUNCT; // Ausnahme
        } else
        {
            str += arr[i] + GAP  // Regel
        }
    } 
    return str;   
}

/***  */

/********* Überlegungen - Transponierung **********/
 
/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */
 
// let a = 0; // Anfangswert
// for (let i=0; i < 5; i++) {
//     a=a+1;
//     output("Inhalt von a: "+a);
// }

/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

let a = ""; // Anfangswert - leerer String
for (let i=0; i < 5; i++) {
    a=a+"Test";
    output("Inhalt von a: "+a);
}






/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

// for (let i = 0; i < 10; i++) // i = Schleifenindex // ++ Inkrement (untere Grenze --> obere Grenze)
// {
//     output("index: "+i);  
// }

// Dekrement (obere Grenze --> untere Grenze)

// for (let i = 10; i > 0; i--)
//     {
//         output("index: "+i);  
//     }

// Inkrement (var. Schrittweite)
// 

/* 02b. For-Schleife für Array-Index (Iteration)*/

// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];

// for (let i = 0; i < arr.length; i++) 
//     {
//         output("intern: "+i);
//         output("extern: "+arr[i]); // Mapping
//     }

