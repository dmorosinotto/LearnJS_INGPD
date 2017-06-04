"use strict";
function senzaThis(x) {
    console.log("Ciao " + x);
    return arguments.length;
}
senzaThis("Daniele");   //invocazione diretta --> this === UNDEFINED!
var fn = senzaThis;     //PUNTATORE ALLA FUNZIONE
var n = senzaThis();    //VALORE DI RITORNO DELLA FUNZIONE!
fn();                   //invocazione diretta --> this === UNDEFINED!!
console.log(n, fn());

console.log("\n--------------------\n");

function salutaName(x,y) { 
    console.log(this.name);  //USO THIS ATTENZIONE!!!!
    console.log("ARGS in salutaName:", x, y);
    return arguments.length;
}
/* //DECCOMMENTATE PER VEDERE LE ECCEZIONI
salutaName();   //inocazione diretta --> this=undefined --> ECCEZIONE this.name
var fn2 = salutaName;
fn2();          //inocazione diretta --> this=undefined --> ECCEZIONE this.name
*/
salutaName.call({name: "Pippo"} ,"a" ,"b"); //Invocazione ESPLICITA --> this = 1° PARAMETRO PASSATO
salutaName.apply({name: "Pluto"}, [1, 2] ); //Invocazione ESPLICITA --> this = 1° PARAMETRO + argomenti passati tramite array 
var fnConThisFISSATO = salutaName.bind({name: "Paperino"});
fnConThisFISSATO("OK","Posso fare invocazione diretta!!");

console.log("\n--------------------\n");

function doSomenthig(callback){
    for(var i=1;i<=2;i++){
        console.warn(i);
        callback(i, " <- i"); 
    }
}
var obj = {
    name: "Daniele",
    method: salutaName,
    ciao: senzaThis
}

obj.ciao("hello"); //TIPICA INVOCAZIONE DI METODO -->  this === obj
var fn3 = obj.ciao;
fn3("world"); //ATTENZIONE QUESTA E' UN INVOCAZIONE DIRETTA (this === undefined, ma tanto non lo uso ;-)
obj.method(); //METHOD INVOCATION --> this = obj --> richiamo salutaName con il this corretto!!!
obj.method("XXX");
obj.method("XXX","YYY");

doSomenthig(obj.ciao);
//DECCOMMENTATE PER VEDERE LE ECCEZIONI
//doSomenthig( obj.method ); //ERRORE perchè obj.method = catturare puntatore alla funzione --> dentro doSomething faccio callback() <-- INVOCAZIONE DIRETTA -->  this=undefined --> ERRORE!!!
//doSomenthig( obj.method.call(obj) ); //ERRORE questa è invocazione ESPLICITA fatta in questo momento --> ritorna il valore della funzione e NON il puntatore alla funzione!!!
doSomenthig( obj.method.bind(obj) ); //UTILIZZANDO INVOCAZIONE ESPLICITA, Fisso il THIS corretto per la successiva INVOCAZIONE DIRETTA callback() nel ciclo di doSomething!
