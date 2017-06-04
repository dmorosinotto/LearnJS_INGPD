//STEP-1: Polimorfism
var answer = {
    get: function fn1() {
        return this.val;
    },
    val: 42
};

var firmAnswer = Object.create(answer);
firmAnswer.get = function fn2() {
    return this.val + "!!";                //PROBLEMA CODICE DUPLICATO
    //return answer.get();                 //1-a:    RIUTILIZZO SBAGLIATO    -> 42!! 
    //return answer.get.call(this)+"!!";   //1-b:    RIUTILIZZO GIUSTO     -> 3.14159!!
}

console.log( answer.get() );    //42
console.log( firmAnswer.get() );//42!! 

firmAnswer.val = 3.14159;
console.log( firmAnswer.get() );//3.14159!!