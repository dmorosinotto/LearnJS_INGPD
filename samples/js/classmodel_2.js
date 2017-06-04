"use strict";
//STEP-3: CLASSICAL MODEL COMPLETO
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

var dessertAnswer = new Answer(3.14159); //TODO AGGIUNGERE IL NEW
console.log( dessertAnswer.get() );  //3.14159


function FirmAnswer(value,bang) {
    //COSTRUTTORE del Figlio deve richiamare il Costruttore del Padre per inizializzare i dati
    Answer.call(this,value); //passandogli il contesto this --> direct invocation
    //Eventualmente dopo può aggiungo altre inizializzazioni o proprietà this.prop = xxx;
    //In questo modo tutte le proprietà (dati) sono agganciati direttamente all'oggetto Figlio (NON sfrutta Property-Chain)
    this._bang = bang || "!!";
}
//COSTRUISCO PROPERTY-CHAIN impostando Prototype del Figlio punta al Padre.prototype (per rendere accessibili i metodi Padre)
FirmAnswer.prototype = Object.create(Answer.prototype);
//Mantengo il puntamento del prototype.constructor alla funzione Costruttore del Figlio
FirmAnswer.prototype.constructor = FirmAnswer; 

//OVERRIDE DEI METODI Utilizzo richiamo (direct invocation) passando il this in modo corretto
FirmAnswer.prototype.get = function fn2(){
    return Answer.prototype.get.call(this) + this._bang; //per riutilizzare il codice del Padre.
};

//ISTANZIAZIONE NORMALE CON new Costruttore Figlio
var luckyAnswer = new FirmAnswer(7); 
console.log( luckyAnswer.get() );  //7!!

var magicAnswer = new FirmAnswer(3,"$$"); 
console.log( magicAnswer.get() );  //3$$