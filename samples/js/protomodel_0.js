//STEP-0: Prototype = Behaviour
var AnswerPrototype = {
	get: function fn1() {
		console.log( this.val );
	}
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42;
lifeAnswer.get();	//42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 3.14159
dessertAnswer.get();	//3.14159