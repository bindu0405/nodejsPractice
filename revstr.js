const prompt=require("prompt-sync")();
var str=prompt("enter 1st value:");
//const reverseString=str=> [...str].reverse().join('');
function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>0;i--){
        newString+=str[i];
    }
    return newString;

let str1=reverseString(str);
console.log(str1);
}