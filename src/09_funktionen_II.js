

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Division durch 0 nicht zulässig!"
const ERROR_STR_GEN = "Irgendwas ging schief!";

// agreement : "+","-","*",":","/"
// module: calculator | tests:

output(calc(3,2,"+"));
output(calc(3,2,"-"));
output(calc(3,2,"*"));
output(calc(3,2,":"));
output(calc(3,2,"/"));
output(calc(3,0,"/"));
output(calc(3,2,"#?!"));

function calc(a,b,op) {
	switch (op) {
		case "+":
			return add(a,b);
		case "-":
			return sub(a,b);
		case "*":
			return mult(a,b);
		case ":":
		case "/":
			return div(a,b)
	
		default:
			return ERROR_STR_GEN
	}
}




// module: division a / b | test:

function div(a,b) 
{
	if (b==0) {
			return ERROR_STR_DIV; // Ausnahme
			} 		
		return a/b; // Regel
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

// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a, b) 
{
	return a+b;
}


// module: output | test:
// output("hello");
// output(2);
// output(mult(3,2));
// output(mult(3,-2));
// output(sub(3,0));
// output(sub(0,2));
// output(div(9,3));
// output(div(110,11));
// output(div(2,0));
function output(outputData) {
	console.log(outputData);
}
  