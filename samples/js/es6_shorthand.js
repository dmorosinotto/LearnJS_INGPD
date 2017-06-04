var first = 'Jane';
var last = 'Doe';

var obj = { 
//property shorthand
  first, 
  last,  //E' LO STESSO DI  obj = { first: first, last: last }
//method definition
  myMethod(a, b) {
    return a+b;
  },	//E' LO STESSO DI  myMethod: function(a,b) { return a+b; }
//computed (dynamic) property names
  [(()=>'f'+'o'+'o')()]: "bar", //E' LO STESSO DI  obj["foo"] = "bar"
  [4 + 2]() {   //E' LO STESSO DI  obj["6"] = function(){
        		return "hello from 6!";        	        	
        	}
};

for(var k in obj) {
  console.log(k, '=', obj[k])
}
console.log(obj.foo, obj["6"](), obj.myMethod(1,2));