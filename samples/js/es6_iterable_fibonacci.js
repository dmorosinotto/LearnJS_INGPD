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