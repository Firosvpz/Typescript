"use strict";
class Birds {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
class Crow extends Birds {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        super.speak();
        console.log(`${this.name} barks`);
    }
}
const bird = new Crow('Parrot', 'wheat');
bird.speak();
