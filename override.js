"use strict";
class Library {
    constructor(name) {
        this.name = name;
    }
    getBook() {
        console.log(`${this.name} book is available`);
    }
}
class User extends Library {
    constructor(user, name) {
        super(name);
        this.user = user;
    }
    getBook() {
        super.getBook();
        console.log(`${this.user} book recieved`);
    }
}
const user1 = new User('Akhil', 'Spantaneous');
user1.getBook();
