"use strict";
function myMethod() {
	console.log( this.val );
}

var object1 = {
	get: myMethod,
	val: 42
}

var object2 = {
	get: myMethod,
	val: 3.14159
}

//THIS - METHOD INVOCATION
object1.get();	//42
object2.get();	//3.14159

//ERRORE - this = undefined!
//myMethod();
//var m = object1.get;
//m();