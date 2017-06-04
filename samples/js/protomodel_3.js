//STEP-3: Constructor
var AnswerPrototype = {
    constructor: function fn0(value) {
        //COSTRUTTORE usa this = contesto invocazione metodo
        //, per agganciare dinamicamente i dati all'oggetto
        this._val = value; //uso una notazione _val solo per "ricordare" 
        // che teoricamente i dati sono incapsulati, ma è TUTTO PUBBLICO!
    },
    get: function fn1() {
        console.log( this._val );
    }
};

//ISTANZIAZIONE E' FATTA IN 2 FASI
var lifeAnswer = Object.create(AnswerPrototype); //1° CREO NUOVO OGGETTO PASSANDO IL PROTOTYPE 
// --> Eredito tutti i behaviour compreso il costructor!
lifeAnswer.constructor(42); //2° RICHIAMO IL COSTRUTTORE PER INIZIALIZZARE L'OGGETTO 
// --> E' una method invocation quindi this = oggetto appena creato!
lifeAnswer.get();    //42

//creo e inizializzo un'altra istanza
var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14159);
dessertAnswer.get();    //3.14159


/*
showObj('obj1', lifeAnswer);
showObj('obj2', dessertAnswer);

function showObj(prefix, obj) {
    function _showJSONfn(key,value) {
        return (typeof value === 'function') ? value.toString() : value;
    }
    function _showProto(obj) {
        return Object.getPrototypeOf(obj)
    }
    console.log(prefix, ' = ', JSON.stringify(obj, _showJSONfn, 3) , '\n _proto_ = ', _showProto(obj) );
}
*/