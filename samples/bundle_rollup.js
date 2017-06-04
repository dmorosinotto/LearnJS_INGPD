(function () {
'use strict';

//EXPORT MULTIPLI DA UN MODULO
//FUNZIONI 

//COSTANTI
const pi = 3.141593;
//VARIABILI - RIFERIMENTI

var _exp$1 = function(x) {
//EXPORT DEFAULT SI USA SE IL FILE CONTIENE UNA SOLA FUNZIONALITA'
    return Math.exp(x);
};

//EXPORT * RIESPORTA TUTTO IL CONTENUTO DI UN MODULO
//IMPORT CON NOME DI UN DEFAULT
//ESPORTO ALTRE VARIABILI
const e = _exp$1(1);
var exp = _exp$1;

//IMPORT PUNTUALE DI ALCUNE FUNZIONI + ATTRAVERSA DEPENENCY TREE (pi->mathplusplus->math)
alert("e^π = " + exp(pi));                     //23.1407006

}());
