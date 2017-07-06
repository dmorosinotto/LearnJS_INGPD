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