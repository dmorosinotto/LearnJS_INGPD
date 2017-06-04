//rest parameter
function sum(first = 0,...nums) {
  	//nums E' SEMPRE UN ARRAY (eventualmente vuoto [])
    //MAI PIU' Array.prototype.splice.call(arguments,0)
  	return nums.reduce( (res, n) => res+n , first );
}

console.log(sum(1,2,3,4,5));	//15
console.log(sum(6));			//6
console.log(sum());				//0

var arr = [5,-1,-4,8,2];
//spread operator
console.log(sum(...arr)); 	//FUNCTION CALL
let [five, ...altri] = arr; //DESTRUCTURING Array
console.log(five);	  		//5 
console.log(altri);	  		//-1,-4,8,2
let [...letters]="ciao";	//DESTRUCTURING Iterators
console.log(letters);		//'c','i','a','o'