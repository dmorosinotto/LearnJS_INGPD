// Object Literal
var myObject = {
    a: 1,
    b: 2,
    c: 3,
};

//GETTER
console.log(myObject.a); 
console.log(myObject["A"]); //undefined //JS E' CASE SENSITIVE!

//SETTER
myObject.a = 123;
myObject["b"] = false; //cambio tipo

reflectionPrint(myObject); //REFLECTION: elenca tutti i membri con for(k in obj) 

//ADD
myObject.x = 'nuova proprieta';
if ("x" in myObject) { console.log("ok aggiunta"); } //REFLECTION: test esistenza membro con if ("exp" in obj) //NOTA: controlla su tutta Prototype-chain

//DELETE
myObject["c"] = undefined; //sbianca
if (myObject.hasOwnProperty("c")) { console.log("esiste ancora"); } //REFLECTION: Controllo solo membri diretti
reflectionPrint(myObject); 

delete myObject.c; //elimina completamente
if (!myObject.hasOwnProperty("c")) { console.log("ora non piu!"); }
console.log(JSON.stringify(myObject)); //modo alternativo di stampare l'oggetto

function reflectionPrint(obj) {	
    for (var k in obj) { //NOTA: percorre anche Property-chain
        console.log(k + " = " + obj[k]);      
    }
}

