import promptSync from 'prompt-sync'
const promt = promptSync()
let num1:number=parseFloat(promt('enter a number :'))
let num2:number=parseFloat(promt('enter a number :'))
let sum:number=num1+num2
console.log('total :',sum);
