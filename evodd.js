
const prompt=require("prompt-sync")();
let a=prompt("enter a number:");
if(a%2==0){
    console.log("given num is an even");
}
else{
    console.log("given num is an odd");
}