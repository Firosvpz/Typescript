interface Fruitstock {
    [fruitName:string]:number
}

class FruitStore{
     private stock:Fruitstock
     constructor(){
        this.stock={}
     }
     addFruit(name:string,quantity:number):void{
        if(this.stock[name]){
            this.stock[name]+=quantity
            console.log(`${name} stock increased by ${quantity}. New stock: ${this.stock[name]}`);
        } 
        else{
            this.stock[name]=quantity
            console.log(`${name} added to the store with stock: ${quantity}`);
        }
     }
     getStock():Fruitstock {
        return this.stock
     }
}
const fruit = new FruitStore()
fruit.addFruit('apple',10)
fruit.addFruit('grape',5)
fruit.addFruit('pomegranate',7)
console.log(fruit.getStock());

