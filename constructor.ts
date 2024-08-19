class Birds{
    name:string
    constructor(name:string){
         this.name=name
    }
    speak():void{
      console.log(`${this.name} makes a sound`);
    }
}

class Crow extends Birds {
    breed:string
    constructor(name:string,breed:string){
            super(name)
            this.breed=breed
    }
    speak(): void {
         super.speak()
        console.log(`${this.name} barks`);
        
    }
}

const bird=new Crow('Parrot','wheat')
bird.speak()