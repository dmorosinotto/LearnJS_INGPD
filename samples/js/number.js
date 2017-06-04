//"use strict"; //IN STRICT MODE NON POSSO USARE OTTALE!
console.log(0/0);   //NaN
console.log(parseInt("ciao")); //NaN
console.log(-1/0);  //-Infinity
console.log(10/0);  //Infinity

console.log(0.1+0.2 === 0.3); //FALSE
console.log(0.1+0.2); //IEEE-754 PROBLEMA RAPPRESENTAZIONE
console.log( Math.round((0.1+0.2)*1000) / 1000 ); //SCALO A INT
console.log( Math.round((0.1+0.2)*1000) / 1000 === 0.3); //TRUE

//Varie rappresentazioni: Esponenzile, Esadecimale e Ottale 
console.log(-56.789e-4);
console.log(0xFF);	//255
console.log(077); 	//63 - ERROR se use strict!
