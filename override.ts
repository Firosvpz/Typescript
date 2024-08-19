class Library {
    name:string
    constructor(name:string){
       this.name=name
    }
    getBook():void {
        console.log(`${this.name} book is available`);
    }
}

class User extends Library {
    user:string
    constructor(user:string,name:string){
        super(name)
       this.user=user
    }
    getBook():void {
        super.getBook()
        console.log(`${this.user} book recieved`);
    }
}
const user1 = new User('Akhil','Spantaneous')
user1.getBook()
