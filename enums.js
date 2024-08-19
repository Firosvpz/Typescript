"use strict";
var Numeric;
(function (Numeric) {
    Numeric[Numeric["a"] = 1] = "a";
    Numeric[Numeric["b"] = 2] = "b";
    Numeric[Numeric["c"] = 3] = "c";
})(Numeric || (Numeric = {}));
console.log(Numeric.c);
var Stringly;
(function (Stringly) {
    Stringly["a"] = "hello";
    Stringly["b"] = "hy";
})(Stringly || (Stringly = {}));
console.log(Stringly.a);
let b = Stringly.b;
console.log(b);
