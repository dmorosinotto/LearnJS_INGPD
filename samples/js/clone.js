function deepClone(obj) {
    var ret;
    if (obj==null || typeof obj!="object") { 
        //gestisco null|undefined + tipi primitivi:boolean|string|number + function
        ret = obj;  //copiando direttamente il valore (byval) + (byref per le function, non ha senso ricrearle!)
    } else { //gestisco tutti gli oggetti (compresi gli Array e altri special case) 
        ret = Array.isArray(obj) ? [] : {};    //creando un oggetto o un array vuoto
        for(var key in obj) {                  //ciclando le singole proprietà / indici array
            ret[key] = deepClone(obj[key]);    //DEEPCLONE: copiandole tramite clone in ricorsione (TUTTI I LIVELLI!)
        }
    }
    return ret;
}

function cloneTrick(obj) {
    return JSON.parse(JSON.stringify(obj)); //ATTENZIONE PERDO I METODI ED ERRORE SE CIRCULAR-REF
}



//UNIT-TEST
var obj = {
    b: true,
    n: 7,
    s: "pluto",
    a: [8,9],
    f: function hello() { console.log("world") },
    o: { x: 1, y:false, z: null }
}

//ASSERT
var t=obj;
var k=deepClone(t);
console.log("T=", t);
console.log("K=", k);
console.log("IS SAME REF? ===", t===k);
console.log("ARE EQUAL? t=?=k", eq(t,k));
console.log("JSON=", cloneTrick(obj)); //ATTENZIONE: MANCA f!!

//HELPER PER TESTARE UGUAGLIANZA DI TUTTI I MEMBRI
function eq(a,b) {
    if (a===b) return true; //uguaglianza per tipi base + function + null|undefined
    if (typeof a=="object" && typeof b=="object") {
        if (Array.isArray(a) && Array.isArray(b) && a.length!=b.length) return false;
        for(var k in a) {
            if (!eq(a[k],b[k])) return false;
        }
        return true;
    }
    return false;
}