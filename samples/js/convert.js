/* CONVERSIONE TRA TIPI */
var b,n,s;
var str="077";
var exp = 123;

//Conversione a BOOLEANO
b = Boolean(exp);    //Esplicita
console.log(b, typeof b);
b = !!str;           //Implicita (!! doppia negazione)
console.log(b, typeof b);

//Conversione a NUMERICO
n = Number(exp);  //Esplicita
console.log(n, typeof n);
n = +str;         //Implicita (+ usato come segno)
console.log(n, typeof n);

//Utilizzando di metodi espliciti da stringa a numero
n = parseInt(str, 10); //ricordarsi la BASE!
console.log(n, typeof n);
n = Number.parseFloat(str);
console.log(n, typeof n);

//Conversiona a STRINGA
s = String(exp); //Esplicita
console.log(s, typeof s);
s = ""+exp;      //Implicita (+ usato come concatenazione)
console.log(s, typeof s);
var s = "1";
console.log("s+2=", s+2); //"12"
console.log("+s+2=",+s+2); //3