import promptSync from 'prompt-sync'
const prompt=promptSync()
let p=parseFloat(prompt('enter a principle amount :'))
let r=parseFloat(prompt('enter a interest rate :'))
let n=parseFloat(prompt('enter number of years :'))
const SI = (p*r*n)/100
console.log('Simple interest =',SI);
