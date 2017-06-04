// Multiline strings
console.log(`Con le stringhe "normali" questo
codice NON E' valido.`);

// Interpolate variable bindings
let person = {name: 'Daniele'};
const year = 1975;
var str = `${person.name} e' nato nel ${year} 
			e ha ${new Date().getFullYear()-year} anni!`
console.log(str);


// TAGGED template string function
let message = classe`${person.name} e' della classe '${year}.`;

console.log(message);       

function classe(strTokens, ...vals) {
    let str = "";
    // run the loop only for the substitution count
    for (let i = 0; i < vals.length; i++) {
        str += strTokens[i];
      str += typeof vals[i] === 'number' ? vals[i]-1900 : vals[i];
    }
    // add the last literal e return the string
    return str + strTokens[strTokens.length - 1];
}