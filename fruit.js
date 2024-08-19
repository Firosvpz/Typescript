"use strict";
class FruitStore {
    constructor() {
        this.stock = {};
    }
    addFruit(name, quantity) {
        if (this.stock[name]) {
            this.stock[name] += quantity;
            console.log(`${name} stock increased by ${quantity}. New stock: ${this.stock[name]}`);
        }
        else {
            this.stock[name] = quantity;
            console.log(`${name} added to the store with stock: ${quantity}`);
        }
    }
    getStock() {
        return this.stock;
    }
}
const fruit = new FruitStore();
fruit.addFruit('apple', 10);
fruit.addFruit('grape', 5);
fruit.addFruit('pomegranate', 7);
console.log(fruit.getStock());
