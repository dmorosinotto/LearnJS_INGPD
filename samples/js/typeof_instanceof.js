var Test = {
	u: undefined,
	n: null,              //typeof = object !!!
	num: 123,
	bol: true,
	str: "hello",
	dat: new Date(),      //typeof = object!!!
	arr: [1,2,3,4,5],     //typeof = object!!!
	reg: /d+(\.)?\d*/gi,  //typeof = object!!!
	fun: function(x) { return x; },	//function!!!
	obj: { a: 'world', b: 678.9 },
  cls: new MyClass('world',678.9) //object!!! 
};

function MyClass(a,b) {
  this.a = a;
  this.b = b;
}


//VERIFICA TUTTI POSSIBILI typeof xxx --> RITORNA UNA STRINGA!!!
for(k in Test) {
	console.log (" typeof " + k + " === '" + typeof Test[k] + "'"); //serve solo per i primitives
}
//VERIFICA xxx instanceof TTTT --> RITORNA UN BOOLEANO!!!
console.log( Test.dat instanceof Date);			//true
console.log( Test.arr instanceof Array);		//true
console.log( Test.fun instanceof Function);	//true
console.log( Test.obj instanceof Object);		//true
console.log( Test.cls instanceof Object);		//true
console.log( Test.cls instanceof MyClass);	//true
//NON HA SENSO TESTARE instanceof sui tipi Wrapper... (dovrei fare il new ma così creerei una nuova istanza!)
console.warn( Test.num instanceof Number);	//false
console.warn( Test.bol instanceof Boolean);	//false
console.warn( Test.str instanceof String);	//false
console.error( Number(Test.num) instanceof Number);		//false
console.error( Boolean(Test.bol) instanceof Boolean);	//false
console.error( String(Test.str) instanceof String);		//false