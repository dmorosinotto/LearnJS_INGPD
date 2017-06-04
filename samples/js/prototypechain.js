var parent = {
	get: function fn() {
		return this.val;
	},
	val: 42
};

var child = Object.create(parent);
child.val = 3.14159;

var grandchild = Object.create(child);

//STEP-1
console.log( parent.get() ); //42
console.warn( 'get' in parent ); //TRUE
console.warn( parent.hasOwnProperty('val') ); //TRUE

/*//STEP-2
console.log( child.get() ); //3.14159
console.warn( child.hasOwnProperty('val') ); //TRUE
console.warn ( 'get' in child ); //TRUE
console.error( child.hasOwnProperty('get') ); //FALSE
*/

/*//STEP-3
console.log( grandchild.get() ); //3.14159
console.warn ( 'get' in grandchild ); //TRUE
console.warn ( 'val' in grandchild ); //TRUE
console.error ( grandchild.hasOwnProperty('get') ); //FALSE
console.error ( grandchild.hasOwnProperty('val') ); //FALSE
*/
