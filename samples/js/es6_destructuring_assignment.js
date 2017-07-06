// list matching 	//POSIZIONALE ORDINE IMPORTANTE!
var [a,,b] = [1,2,3];
console.log(a,b); 	//1 3

// object matching 	//PER NOME QUINDI ORDINE NON IMPORTA!
var {age, first} = {first: "Daniele", last: "Morosinotto", age: 42 };
console.log(first,age);	//Daniele 42

var options = {
        repeat: true,
        save: false,
        colors: [ "red", "green", "blue" ]
    };
// complex matching with rename // FIELD: VAR
let { repeat, save: foo, colors: [ firstColor, secondColor ]} = options;
console.log(repeat, foo, firstColor, secondColor);      //true, false, red, green

// simple swap variable
[b,a] = [a,b];
console.log(a,b); 	//3 1

// extract value from method return (regex.match)
let [all, year, month, day] =   // m =
        /^(\d{4})-(\d\d)-(\d\d)$/
        .exec('2999-12-31');
console.log(day,month);         //MOLTO PIU' CHIARO DI console.log(m[3],m[2]);