/*
TRICKS: sfrutto Short-circuit negli operatori booleani:
- var x = obj || def;   se il primo termine è truthy lo ritorna direttamente, 
                        altrimenti restituisce il secondo (DEFAULT)
- obj && obj.method();  se primo termine è falsy lo ritorna immediatamente, 
                        altrimenti valuta il secondo (GUARD)
*/

function show(obj) {  
  console.log( obj && obj.a || 5 ); //DEFAULT
  obj && obj.f && obj.f(); //GUARD
}

show( undefined ); //DEFAULT + GUARD --> 5 non esegue f
show( {a: 456 } ); //GUARD     --> 456 non esegue f
show( {f: function() { console.log("default a");} } ); //DEFAULT  --> 5 default a
show( { a: 123, f: function() { console.log("entrambi ok");} } ); //123 entrambi ok
