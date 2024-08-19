"use strict";
class Dog {
    constructor(name, breed, owner) {
        this.name = name;
        this.breed = breed;
        this.owner = owner;
    }
    speak() {
        console.log(`${this.name} from ${this.breed} own by ${this.owner}`);
    }
}
const dog = new Dog('alexa', 'africa', 'prince');
dog.speak();
