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
greet(2000, "Pippo"); //Hello Pippo         - Will greet #1 in 2 sec
greet("JS", "ES6", "rocks!"); //Hello JS ES6 rocks! - Will greet #3 in 5 sec
greet(1000); //Hello               - Will greet #0 in 1 sec
