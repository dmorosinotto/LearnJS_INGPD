function greet(first: number|string = 1000, ...who: string[]) {
    let after: number;     	
    if (typeof first !== "number") {        
		[after, who] = [5000, [first, ...who]];	
    } else {
        after = first;
    }    
	let names = who.join(' ');
	const printH1 = () => document.body.innerHTML+=`<h1>Hello ${names}</h1>`;
	setTimeout(printH1, after);	
	console.log(`Will greet #${who.length} in ${after/1000} sec`);
}
greet();
greet(2000,"Pippo");            //Hello Pippo         - Will greet #1 in 2 sec
greet("JS", "ES6", "rocks!");   //Hello JS ES6 rocks! - Will greet #3 in 5 sec
greet(1000);                    //Hello               - Will greet #0 in 1 sec