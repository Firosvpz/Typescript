"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Example {
    add(a, b) {
        return a + b;
    }
}
const example = new Example();
console.log(example.add(10, 20)); // Output: 30
console.log(example.add("Hello, ", "World!"));
