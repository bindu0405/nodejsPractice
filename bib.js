let sum=0;
let n=1;

//var str =prompt("nani","vani","rani","gani","mani");
const prompt=require("prompt-sync")();
var str =prompt("enter a name").split(',');
console.log(str);
//var n=parseInt(prompt("enter 1st num:"));
var i =0;
while(i < str.length){
    console.log(i,":",str[i]);
    i++;
}
// while(n<6){
// //sum+=n;
// //var number=parseInt(prompt("enter 2nd number:"));
// sum+=n+ str;
// n++;
// sum+="\n";

// }
// console.log(sum);