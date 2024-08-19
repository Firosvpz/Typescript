let value:any='this is a str'
let strlength:number= (value as string).length
console.log(strlength);

let someValue : string | null = 'hello! world'
console.log(someValue!.length);
export{}