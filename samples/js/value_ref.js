//PRIMITIVE TYPES - passaggio x valore (copia)
function unchange(n) {
   n = 123;
   console.log("n=" + n);
}
var num1=3.14159;
var num2=num1;
num2=42;
console.log(num1);    //3.14159
console.log(num2);    //42
unchange(num1);       //123
console.log(num1);    //3.14159

//OBJECTS passaggio x referenza (side-effect)
function change(o) {
    o.a = 123;        //side-effect passaggio parametro per referenza!
    console.log(o.a);
}
var obj1 = { a: 1 };
var obj2 = obj1; 
console.log(obj1.a);    //1
obj2.a = 2;             //side-effect assegnazione!
console.log(obj2.a);    //2
console.log(obj1.a);    //2 
change(obj2);           //123
console.log(obj1.a);    //123
console.log(obj2.a);    //123