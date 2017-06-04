var globalVar1 = 100;    // Varibile Globale dichiarata normalmente

global.globalVar2 = 200; // Variabile Globale assegnazione esplicita!

function nonStrictFunc(){
/*"use strict";    // ECMAScript 5: exception thrown */
  globalVar3 = 300;  // ATTENTIONE: MANCA VAR !!!
  var local = "abc"; // Varibile locale alla funzione
  deeperFunc(local); // Esegue funzione (HOISTING OK)
  console.log("INSIDE FUNC", local, globalVar3);

  function deeperFunc(par) {
      var local; //SHADOWING delle variabili =abc?? 
      console.log("IN DEEP FUNC", guess, par, local);
      var guess = "my value is?"; //HOISING var NON inizializzazione!
  }
}
nonStrictFunc(); //Esegue funzione -> GLOBAL POLLUTION se non uso var!

console.log( globalVar1 ); //100
console.log( globalVar2 ); //200
console.log( globalVar3 ); //300 fuori dalle FUNC -> Global Pollution