interface User {
    name:string,
    age:number;
    password:string | number
    address:string
}

type userWithoutOmit = Omit<User,'password'>
const user:userWithoutOmit= {
      name:'Akshay',
      age:23,
      address:'ad'
}
console.log(user);
export{}