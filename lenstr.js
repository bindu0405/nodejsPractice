const prompt=require("prompt-sync")();
var str1=prompt("enter a value:");
var str2=prompt("enter a value:");
var a=str1.length;
var b=str2.length;
console.log(str1.length,str2.length);
if(str1==str2){
    console.log("true");
}
else{
 
    console.log("false");
}