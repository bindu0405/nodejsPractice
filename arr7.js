const prompt=require("prompt-sync")();
const a=parseInt(prompt("enter a num:"));
let arr=[];
for(i=1;i<=a;i++){
const b=prompt("enter a name:");
arr.push(b);
}
for(let i=0;i<arr.length;i++){
    console.log(i+1,":",arr[i]);
}
//console.log(arr);