let a="hello";
function reverseString(str){
    return str.split("").reverse().join("");
}
var s=reverseString(a);
console.log(s,a);