const {operatorService} = require("./commonFunction")

const prompt = require("prompt-sync")();
const a = prompt("enter first Number");
const b = prompt("enter secod number");
console.log(operatorService.add(a,b));