const {symbol} =require('./lol.js');
const prompt=require("prompt-sync")();
var a=prompt("enter firstname:");
var b=prompt("enter lastname:");
var c=prompt("enter the age:");
var d=prompt("enter the gender:");
console.log(symbol.addstrings(a,b));
console.log(symbol.sence(c,d));