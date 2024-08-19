function assertNumber(value:any):asserts value is string {
    if(typeof value !== 'string'){
        throw new Error('value is not a string')
    }
}

const input:any='hello'
assertNumber(input)
console.log(input.toLocaleUpperCase());


function generalAssertion(condition:boolean,message:string):asserts condition {
    if(!condition){
        throw new Error("value is invalid");
    }
}

let val:number=-3
let result=generalAssertion(val>0,'val mus be positive ')
console.log(result);

