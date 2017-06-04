class Polygon {
	constructor(height, width) { //class constructor
		this.kind = 'Polygon';
		this.height = height;
		this.width = width;
	}

	print() { //class method
		console.log(`Hi, I'm a ${this.kind}.`);
	}
}

class Rectangle extends Polygon { //class inheritance with extends
	constructor(...args) {
		super(...args); //call the parent constructor with super
		this.kind = 'Rectangle';
	}

	get area() { //calculated attribute getter
		return this.height * this.width;
	}
}


class Square extends Polygon { //class inheritance with extends
	constructor(side) {
		super(side, side); //call the parent constructor with super
		this.kind = 'Square';
	}

	set area(value) { //attribute setter
		this.height = this.width = Math.sqrt(value);
	}

	print() { //ovverride base class method
		super.print(); //reusing base logic
		console.log(" with side ", this.height);
	}
}

let r = new Rectangle(3,2);
r.print();
console.log(r.height, "x" ,r.width);
console.log("Area=",r.area);

let s = new Square(5);
s.print();
s.area = 9;
s.print();