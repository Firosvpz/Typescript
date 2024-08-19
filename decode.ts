function decodeJson<T>(jsonString:string):T{
    try {
        return JSON.parse(jsonString) as T
        
    } catch (error) {
        throw new Error("failed to parse");
    }
}

interface User {
    name:string,
    age:number
}

const jsonString='{"name":"Alice","age":22}'
const user:User=decodeJson(jsonString)
console.log(user);
