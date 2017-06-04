//STEP-4: PROTOTYPAL MODEL COMPLETO
var AnswerPrototype = {
    constructor: function fn0(value) {
        //COSTRUTTORE usa this = contesto invocazione metodo
        //, per agganciare dinamicamente i dati all'oggetto
        this._val = value; //uso una notazione _val solo per "ricordare" 
        // che teoricamente i dati sono incapsulati, ma è TUTTO PUBBLICO!
    },
    get: function fn1() {
        return this._val;
    }
};

//ISTANZIAZIONE E' FATTA IN 2 FASI
var lifeAnswer = Object.create(AnswerPrototype); //1° CREO NUOVO OGGETTO PASSANDO IL PROTOTYPE 
// --> Eredito tutti i behaviour compreso il costructor!
lifeAnswer.constructor(42); //2° RICHIAMO IL COSTRUTTORE PER INIZIALIZZARE L'OGGETTO 
// --> E' una method invocation quindi this = oggetto appena creato!
console.log (lifeAnswer.get() );    //42

var dessertAnswer = Object.create(AnswerPrototype); //altra istanza classe base
dessertAnswer.constructor(3.14159);
console.log( dessertAnswer.get() );    //3.14159

//PROTOTYPE INHERITS (ereditarietà)
var FirmAnswerPrototype = Object.create(AnswerPrototype);
//METHOD POLIMORFISM (ridefinisco metodo)
FirmAnswerPrototype.get = function fn2() {
    //FUNCTION EXPLICIT INVOCATION (per mantenere il contesto this correto)
    return AnswerPrototype.get.call(this) + "!!";
};

//ISTANZE CLASSE EREDITATA (SFRUTTO STESSO COSTRUTTORE, PERO' HO METHOD OVERRIDATO)
//Possimo utilizzare lo stesso costruttore anche per inizializzare le istanze ereditate, 
//visto che è raggiungibile tramite la PrototypChain!
var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
console.log ( luckyAnswer.get() );    //7!!

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
console.log ( magicAnswer.get() );    //3!!