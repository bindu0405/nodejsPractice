const {kavali}=require("./sem");
const prompt=require("prompt-sync")();
var a=prompt("enter first number:");
console.log(kavali.evenodd(a));
console.log(kavali.loop(a));
console.log(kavali.div(a));