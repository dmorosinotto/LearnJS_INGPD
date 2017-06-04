//arrow function => //E' LO STESSO DI function(..){return ...}
const square = x => x * x;		
const add = (a, b) => a + b;
const pi = () => 3.1415;	

var nums = [1,2,5,6,7,10], fives=[];
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this IN VERITA' E' (function(..){return ...}).bind(this)
var obj = {
  _name: "Pippo",
  _friends: ["pluto", "paperino"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " amico di " + f));
  }
}

//unit test
console.log(square(5));	//25
console.log(add(3, 4));	//7
console.log(pi());		//3.1415
console.log(fives);		//5, 10
obj.printFriends();		//Pippo amico pluto, Pippo amico paperino