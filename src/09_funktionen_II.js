

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/

// module: division a / b | test:

function div(a,b) 
{
	return a/b
}

// module: multiplication a * b |  test:

function mult(a, b) 
{
	return a*b;
}


// module: subtraction a - b |  test:

function sub(a, b) 
{
	return a-b;
}


// module: addition a + b |  test:

output(add(2,2));
output(add(2,-2));
output(add(2,0));
function add(a, b) 
{
	return a+b;
}


// module: output | test:
// output("hello");
// output(2);
output(mult(3,2));
output(mult(3,-2));
output(sub(3,0));
output(sub(0,2));
output(div(9,3));
output(div(110,11))
function output(outputData) {
	console.log(outputData);
}
  