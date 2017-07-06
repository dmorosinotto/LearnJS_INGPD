let arr = ['foo', 'bar', 'baz']; //Gli Array (e le Stringhe) sono ITERABLE!

//Il ciclo FOR OF usa [Symbol.iterator] internamente!
for (let item of arr) {
  console.log(item);
}

console.log("Pseudo implementazione di for of");
//Uso esplicito dell' ITERETOR object
let it = arr[Symbol.iterator]();
for(let curr=it.next(); !curr.done; curr = it.next() ) {
  //consuma curr.value
  console.log(curr.value);
}