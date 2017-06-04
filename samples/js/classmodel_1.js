//STEP-1: CLASSICAL MODEL - USO DEL NEW
"use strict";
function Answer(value) {
    //COSTRUTTORE inizializza lo stato dell'oggetto
    //usando this = contesto invocazione new --> nuovo oggetto
    this._val = value;
    //tipicamente NON fa return di niente e il nome funzione ha 1° lettera Maiuscola!
}
//METODI agganciati al prototype del Costruttore in modo da essere condivisi tra tutte le istanze
Answer.prototype.get = function fn1() {
    return this._val; //Anche qui uso sempre il this per accedere al contesto di invocazione (method invocation)
};

//ISTANZIAZIONE FATTA SEMPRE CON IL new 
var lifeAnswer = new Answer(42);
console.log( lifeAnswer.get() );    //42

//ALTRIMENTI AVREI ERRORI NELL'UTILIZZO DEL COSTRUTTORE (this undefined, o global ANCORA PEGGIO!)
var dessertAnswer = Answer(3.14159); //ERRORE SE NON USO new - TODO AGGIUNGERE IL NEW!!
console.log( dessertAnswer.get() );  //3.14159
