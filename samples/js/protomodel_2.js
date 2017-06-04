//STEP-2: Prototype+Polimorfism
var AnswerPrototype = {
	get: function fn1() {
		return this.val;
	}
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
console.log( lifeAnswer.get() );	//42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14159;
console.log( dessertAnswer.get() );	//3.14159

//PROTOTYPE INHERITS (ereditarietà)
var FirmAnswerPrototype = Object.create(AnswerPrototype);
//METHOD POLIMORFISM (ridefinisco metodo)
FirmAnswerPrototype.get = function fn2() {
	//FUNCTION EXPLICIT INVOCATION (per mantenere il contesto this correto)
	return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.val = 7;
console.log ( luckyAnswer.get() );	//7!!;

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.val = 3;
console.log ( magicAnswer.get() );	//3!!;