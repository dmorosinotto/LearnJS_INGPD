(function(global) {
  // simulate module with (IIFE) internal scoped Symbol
  var privates = new WeakMap();

  global.MyClass = function(privateData, pubData) {
    privates.set(this, privateData); //use this come KEY no problem for GC! 
    this.pub = pubData;
  }
  
  global.MyClass.prototype = {
    doStuff: function() {
      console.log(`only here can access ${privates.get(this)} ...`);
    }
  };
})(global || window || this);

var c = new MyClass("hello",123);
var d = new MyClass("world",456);
console.log(c.pub);             //123
console.log(JSON.stringify(c)); //{"pub": 123}
console.dir(d);                 //{ pub: 456 }
for (let k in c) { console.log(k , "=" , c[k]); } //pub=123 , doStuff=function...
c.doStuff();  //only here can access hello ...
d.doStuff();  //only here can access world ...
