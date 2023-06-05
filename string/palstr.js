const prompt=require("prompt-sync")();
var str=prompt("enter 1st value:");


 function reverseString(str){
        let newString="";
        for(let i=str.length-1;i>=0;i--){
            newString+=str[i];
        }
        return newString;
}
    

   let str1 = reverseString(str);
    if(str1==str){
        console.log("it is palandrome.");
    }
    else{
        console.log("it is not palandrome.");
    }

