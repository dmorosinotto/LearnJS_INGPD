let obj = {};
let dict = new Map();
    
dict.set(obj, 123);
console.log( dict.get(obj) )		//123
console.log( dict.has(obj) )		//true
dict.delete(obj);	//true
console.log( dict.has(obj) );		//false

let arr = [5, 1, 5, 7, 7, 5];
let unique = [...new Set(arr)]; // [ 5, 1, 7 ]
console.log(unique);