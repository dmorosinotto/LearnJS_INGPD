---
theme : "white"
highlightTheme: "Monokai"
---

#EXTRA: ITERATORS & GENERATORS

--

###Symbol

- Sono una nuova primitiva di Javascript che permette di avere un valore univoco!
```javascript
var _secretKey = new Symbol("secret"); 	//name is optional
```	
- Può essere usata in qualsiasi oggetto come "key" (nome di una proprietà) al posto delle stringhe
- Ci sono alcune costanti usate internamente da JS: **Symbol.iterator**

###Iterables

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
  whois: "Questo è un oggetto che rispetta l'interfaccia ITERABLE",
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {    //Questo è l'ITERETOR
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
[<code>js/samples/iterable_range_fibonacci.js</code>](js/samples/iterable_range_fibonacci.js)

--

###for of

Gli Iterator possono essere usati direttamente, ma nella maggior parte dei casi l'interfaccia viene consumata usando il nuovo ciclo **for** *(let item* **of** *Iterable) {...}*  

<small>[<code>js/samples/for_of.js</code>](js/samples/for_of.js)</small>
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

##Generators

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
    console.log("inside for", x);
}
```
<small>[<code>js/samples/generetor_range.js</code>](js/samples/generetor_range.js)</small>

---

#MODULE LOADER & BUNDLER

--

##ES6 "native module" in [SAFARI](js/samples/native_in_safari.html)

```html
<body>
Supporto per <b>ES6 Module</b> nativo per Safari 10.1 e sotto flag per Chrome (60+), Firefox (54+) e Edge (15+) 
per <a href="https://blog.hospodarets.com/native-ecmascript-modules-the-first-overview#browsers-support">maggiori info</a>

<!--il server deve ritornare il file con mimetype="application/ecmascript" -->
<scrpt type="module">
  import greet from './es6_greet.js';
  greet(2000,"Pippo");            //Hello Pippo         - Will greet #1 in 2 sec
  greet("JS", "ES6", "rocks!");   //Hello JS ES6 rocks! - Will greet #3 in 5 sec
  greet(1000);                    //Hello               - Will greet #0 in 1 sec
</scrpt>
```

<small>[<code>js/samples/es6_greet.js</code>](js/samples/es6_greet.js)</small>
```javascript
export default function greet(after = 1000, ...who) {
	if (typeof after !== "number") 
		[after, who] = [5000, [after, ...who]];	
	let names = who.join(' ');
	const printH1 = () => document.body.innerHTML+=`<h1>Hello ${names}</h1>`;
	setTimeout(printH1, after);	
	console.log(`Will greet #${who.length} in ${after/1000} sec`);
}
```

##[TypeScript](https://github.com/Microsoft/TypeScript/wiki/Roadmap#18) (1.8+) is ES6

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

Per compilare il codice [TypeScript](http://www.typescriptlang.org/) in JS è necessario:

```console
npm  install  typescript -g
tsc  greet.ts  --out greet.js  --target ES5
```

Nel file HTML si incluse semplicemente il file Javascript:

```html
<script type="text/javascript" src="greet.js" />
```

--

##Transpile e try new feature [Babel.io](https://babeljs.io)

<iframe src="https://babeljs.io/repl" width="800" height="600"></iframe>

---

## Suggerimenti Librerie
- [Moment.js](http://momentjs.com/) o [date-fns.js](https://date-fns.org) libreria per manipolazione Date
- [Underscore](http://underscorejs.org/) o [Lo-dash](http://lodash.com/) funzioni di utilità sugli Array alla LINQ
- [JQuery](http://api.jquery.com/) accesso/modifica DOM cross-browser
- [AngularJS](http://www.youtube.com/watch?v=i9MHigUZKEM) framework MVVM per SPA

--

##Riferimenti:


- [Articolo](https://github.com/lukehoban/es6features) riassuntivo su ES6 features + [EBook](https://leanpub.com/understandinges6/read/)
- [Serie](http://www.2ality.com/2014/08/es6-today.html) approfondimenti su ES6 by @rauschma
- [Ebook](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond) You Don't Know Javascript: ES6 & Beyond" by @getify
- Dettagli su [Promise](http://www.2ality.com/2014/10/es6-promises-api.html),[Iterables](http://www.2ality.com/2015/02/es6-iteration.html), [Generators](http://davidwalsh.name/es6-generators) + [in depth](http://www.2ality.com/2015/03/es6-generators.html)
- Video sul futuro [ES6/7](https://youtu.be/DqMFX91ToLw) 	e  [Async/Await](https://youtu.be/hbuLw4sauCw) by @jhusain
- Dettaglio nuove features [ES2016/ES2017](http://exploringjs.com/es2016-es2017/)

--

## Riferimenti
- Articolo sui [MixIn / MixInto](http://lostechies.com/derickbailey/2012/10/07/javascript-mixins-beyond-simple-object-extension/) in Javascript
- Uso di [ES6 class + Mixin](https://www.sitepoint.com/patterns-object-inheritance-javascript-es2015/) con interface + ereditarietà multipla
- Deep dive [ES6 class](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/
)
- Possibile implementazione [Object.implement]( https://gist.github.com/dmorosinotto/47d833457b1fbe643355c5b3c9a5c14c
) al posto di instanceof

--

## Riferimenti2
- Articolo su [Modular Javascript](http://addyosmani.com/writing-modular-js/) AMD & CommonJS
- 10 min Intro [module formats, loaders, bundlers](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
- Serie di Ebook online ["You Don't Know Javascript"](https://github.com/getify/You-Dont-Know-JS)
- Ebook online con raccolta di [Javascript Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript)
- [Data Structure](https://github.com/thejameskyle/itsy-bitsy-data-structures/blob/master/itsy-bitsy-data-structures.js) implementate in Javascript 
					
--

## Riferimenti1
- [Object Playground](http://www.objectplayground.com/) sito eccezionale per capire il Prototype e OOP
- Douglas Crockford autore Javascript GOOD PARTS [Video1](http://www.youtube.com/watch?v=RO1Wnu-xKoY) [Video2](http://www.youtube.com/watch?v=ya4UHuXNygM)
- Spiegazione dell'[Hositing](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html) delle variabili e funzioni in Javascript
- Spiegazione del [this](https://thenewcircle.com/s/post/1564/context_or_the_this_keyword_in_javascript_tutorial) (contesto invocazione) in Javascript 
- Alcuni [Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) implementati in Javascript

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) Documentazione online di tutti gli oggetti/metodi Built-in
- Screencast introduttivo su Javacript by [Jianrong Yu](http://yujianrong.github.io/JavascriptTraining/#/)
- Tutorial sui concetti di Javascript by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [Google](https://google.github.io/styleguide/jsguide.html) Guida Javascript coding-style
- Corso Javascript Basics [Microsoft Virtual Accademy](http://www.microsoftvirtualacademy.com/training-courses/javascript-fundamentals-for-absolute-beginners#?fbid=KahxTDg_Ba4)
