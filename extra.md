---
theme : "white"
highlightTheme: "Monokai"
---

# EXTRA: ITERATORS & GENERATORS

--

### Symbol

- Sono una nuova primitiva di Javascript che permette di avere un valore univoco!
```javascript
var _secretKey = new Symbol("secret"); 	//name is optional
```	
- Può essere usata in qualsiasi oggetto come "key" (nome di una proprietà) al posto delle stringhe
- Ci sono alcune costanti usate internamente da JS: **Symbol.iterator**

--

### Iterables

- Sono oggetti che espongono un metodo di nome **Symbol.iterator** e che ritorna un oggetto Iterator
```typescript
interface Iterable {
	[Symbol.iterator]: () => Iterator
}
```

--

### Iterator objects
- E' un oggetto che espone un singolo metodo **next()** che ogni volta che viene chiamato ritorna oggetti con due proprietà:
	- **value**: che rappresenta il valore corrente
	- **done**: di tipo booleano per indicare con true quando sono stati esauiriti tutti i valori

```typescript
interface Iterator {
  next(): IteratorResult;
}

interface IteratorResult {
  done: boolean;
  value: any;
}
```

--

### ESEMPIO ITERABLE: Fibonacci
```javascript
let fibonacci = {
  whois: "Questo e' un oggetto che rispetta l'interfaccia ITERABLE",
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {    //Questo e' l'ITERETOR
      next() {  //Ogni volta che chiamo next() ho un nuovo valore
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      }
    };
  }
};

for(let n of fibonacci) { //Consumo l'interfaccia ITERABLE con FOR OF!
    console.log(n);
    if (n>1000) break; //Ferma la sequenza altrimenti sarebbe INFINITA!
}
```
[<code>samples/js/es6_iterable_fibonacci.js</code>](samples/js/es6_iterable_fibonacci.js)

--

### for of

Gli Iterator possono essere usati direttamente, ma nella maggior parte dei casi l'interfaccia viene consumata usando il nuovo ciclo **for** *(let item* **of** *Iterable) {...}*  

<small>[<code>samples/js/es6_for_of.js</code>](samples/js/es6_for_of.js)</small>
```javascript
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
```

--

## Generators

- Sono *"pausable function"* che utilizzano **yield** per semplificare l'implementazione di Iterators e molto altro... (ndr: observable & co-routine) 

- Implementano questa interfaccia:

```typescript
interface Generator extends Iterator {
    next(passIntoValue?: any): IteratorResult;
    throw(insideException: any);
}
```

--

#### ESEMPIO UTILIZZO: Range
```javascript
// Generator function* che implementa Range indice da..a
function* range(to, from=0) {
    if (to<from) [from,to] = [to,from];
    for(let i=from; i<=to; i++) {
        console.info("inside range")
        yield i;
    }
}

for(let x of range(10)) {
    console.log("in for loop", x);
}
```
<small>[<code>samples/js/es6_generetor_range.js</code>](samples/js/es6_generetor_range.js)</small>

---

# EXTRA: TRANSPILERS

--

## [TypeScript](https://github.com/Microsoft/TypeScript/wiki/Roadmap#18) (1.8+) is ES6

> E' un superset tipizzato di Javascript (ndr: tutte le features di ES6 + ES2016/2017 + :annotations). 


```typescript
//greet.ts è esattamente il codice ES6 + type annotation (che sono opzionali)
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
```

--

La tipizzazione abilita tutta una serie di Tools che consento di avere **intellisence** + **type-check** e **type inference**, ma i tipi e le annotazioni sparicono quando si compila usando **tsc** per ottenere i file javascript da usare nel browser.


```javascript
//CODICE GENERATO DA  tsc greet.ts  --out greet.js  --target ES5  
function greet(first) {
    if (first === void 0) { first = 1000; }
    var who = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        who[_i - 1] = arguments[_i];
    }
    var after;
    if (typeof first !== "number") {
        _a = [5000, [first].concat(who)], after = _a[0], who = _a[1];
    }
    else {
        after = first;
    }
    var names = who.join(' ');
    var printH1 = function () { return document.body.innerHTML += "<h1>Hello " + names + "</h1>"; };
    setTimeout(printH1, after);
    console.log("Will greet #" + who.length + " in " + after / 1000 + " sec");
    var _a;
}
```

--

## Transpile e try new feature [Babel.io](https://babeljs.io)

<iframe src="https://babeljs.io/repl" width="800" height="600"></iframe>
