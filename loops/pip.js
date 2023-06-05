let sum=0;
let n=0;
do{
    const prompt=require("prompt-sync")();
    number=prompt("enter a name:");
    console.log(typeof number);
    console.log(typeof sum);
    sum = sum + number;
    console.log(sum);
    n++;
}while(n<5)
console.log(`total sum is ${sum}`);
//console.log(sum);
