"use strict";
class Answer {
    constructor(value) {
        //COSTRUTTORE inizializza lo stato dell'oggetto
        this._val = value;
    }
    //METODI 
    get() {
        return this._val; 
    }
}

//ISTANZIAZIONE FATTA SEMPRE CON IL new 
var lifeAnswer = new Answer(42);
console.log( lifeAnswer.get() );    //42

var dessertAnswer = new Answer(3.14159);
console.log( dessertAnswer.get() );  //3.14159


class FirmAnswer extends Answer {
    constructor(value, bang) {
        super(value); //COSTRUTTORE del Figlio può richiamre il Costruttore del Padre usando super()
        //e poi può aggiungere altre proprietà all'istanza
        this._bang = bang || "!!";
    }
    get() {
        //OVERRIDE DEI METODI Utilizzo super per accedere al metodo originale mantenendo il contesto this
        return super.get() + this._bang;
    }
    getMeAfter(time) {
        var callback = this.get.bind(this);
        setTimeout( callback , time||5000 );
        var that = this;
        setTimeout( () => console.log("DOPO " + time/1000 + "sec",this.get()) , time||5000 );
        setTimeout( (function(){return this.get() }).bind(this), time||5000 );
        setTimeout( function(){ that.get() }, time||5000 );
    }
}


//ISTANZIAZIONE NORMALE CON new Costruttore Figlio
var luckyAnswer = new FirmAnswer(7); 
console.log( luckyAnswer.get() );  //7!!

var magicAnswer = new FirmAnswer(3,"$$"); 
console.log( magicAnswer.get() );  //3$$

luckyAnswer.getMeAfter(5000);