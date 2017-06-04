function f(b) {
    //console.log(x); //ERRORE TDZ let/const non subisce Hoisting
  
    if (b) { 
    //block scope let 
      let y = "e' truthy";
      console.log(b,y);
    }
    //console.log(y); //ERRORE y OUT OF SCOPE
    
    //block scope const = readonly
    const x = 1;
    
    if (!b) {
        // OK block scope INTERNO posso ridefinire x
        let x = 0;
        console.log(b,x);
    }
    
    //x = 3; //ERRORE CONST x READONLY
    console.log(x);
}

f(true);
f(false);