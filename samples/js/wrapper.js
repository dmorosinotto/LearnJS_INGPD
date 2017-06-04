var n=3.1451, s='ciao Pippo!', b=false;

//Boolean.prototype
var flag = Boolean("true"); //ATTENZIONE "false"->true!
console.log(".valueOf()=", flag.valueOf());

//Number.prototype
console.log(".toFixed(1)=", n.toFixed(1) );
console.log(".toExponential()=", n.toExponential() );

//String.prototype
console.log(".charAt(2)=", s.charAt(2) );
console.log(".toUpperCase()=", s.toUpperCase() );
console.log(".split(' ')=", s.split(' ') );
console.log(".indexOf('p')", s.indexOf('p') );
console.log(".lastIndexOf('p')", s.lastIndexOf('p') );
console.log(".substring(5,6)", s.substring(5,6) );
console.log(".substr(5,6)", s.substr(5,6) );
console.log(".replace(/p/gi,'L')", s.replace(/p/gi, 'L') );

