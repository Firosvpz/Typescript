"use strict";
function assertNumber(value) {
    if (typeof value !== 'string') {
        throw new Error('value is not a string');
    }
}
const input = 'hello';
assertNumber(input);
console.log(input.toLocaleUpperCase());
function generalAssertion(condition, message) {
    if (!condition) {
        throw new Error("value is invalid");
    }
}
let val = -3;
let result = generalAssertion(val > 0, 'val mus be positive ');
console.log(result);
