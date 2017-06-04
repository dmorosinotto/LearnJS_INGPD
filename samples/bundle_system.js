System.register("mylib/math", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    //EXPORT MULTIPLI DA UN MODULO
    //FUNZIONI 
    function sum(x, y) {
        return x + y;
    }
    exports_1("sum", sum);
    var pi, sqrt;
    return {
        setters: [],
        execute: function () {
            //COSTANTI
            exports_1("pi", pi = 3.141593);
            //VARIABILI - RIFERIMENTI
            exports_1("sqrt", sqrt = Math.sqrt);
        }
    };
});
System.register("app", ["mylib/math"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var math;
    return {
        setters: [
            function (math_1) {
                math = math_1;
            }
        ],
        execute: function () {
            //IMPORT * REFERENZIA TUTTO CIO' CHE IL MODULO ESPORTA
            alert("2π = " + math.sum(math.pi, math.pi)); //6.283186
        }
    };
});
