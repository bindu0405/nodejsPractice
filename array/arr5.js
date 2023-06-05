const prompt=require("prompt-sync")();

let n = parseInt(prompt("enter a number:"));
let arr=[];
for(let i=0;i<n;i++){
    var value =prompt("enter a name:");
     arr.push(value); // arr[i] = value;
}
console.log(arr);
// var  [a]=prompt("enter a number:");
// var  [b]=prompt("enter a name:");
// a.length[3];
// b.length[3];
// const myarr=[[n],[value]];
 //const newarr=myarr.flat();

 //console.log(newarr);