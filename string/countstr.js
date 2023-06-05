const prompt=require("prompt-sync")();
var str=prompt("enter 1st value:");
//const vowels=["a","e","i","o","u"]; /// don't use array. /// string will contains upper case and lower case.
let vowels="aeiou";
function countvowels(str){
    let count=0;
    for(let letter of str){
       // console.log(letter);
        if(vowels.indexOf(letter) > -1){
            count ++;
        }
    }
    return count;
}
console.log(countvowels(str));

