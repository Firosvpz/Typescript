interface Animal {
    name:string;
    speak():void
}

interface Birds{
    breed:string;
    owner:string
}

class Dog implements Animal,Birds{
    name: string;
    breed: string; 
    owner: string;
    constructor(name:string,breed:string,owner:string){
        this.name=name
        this.breed=breed
        this.owner=owner
    }
    speak(): void {
        console.log(`${this.name} from ${this.breed} own by ${this.owner}`);
        
    }

}

const dog = new Dog('alexa','africa','prince')
dog.speak()