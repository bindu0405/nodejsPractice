let sum=0;
//let temp=number;
const prompt=require("prompt-sync")();
const number=prompt("enter a number:");
let temp=parseInt(number);
while(temp>0){
    let reminder=temp%10;
    sum += reminder*reminder*reminder;
    temp=temp/10;
    
}
if(sum==parseInt(number)){
    console.log(`${number} is an armstrong`);
}
else{
    console.log(`${number} is not an armstrong`);
}
