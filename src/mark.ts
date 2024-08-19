import promptSync from 'prompt-sync'
const prompt=promptSync()
const mark:number=prompt('Enter your mark :')
if(mark<50){
    console.log('failed'); 
}else{
    console.log('passed');
}