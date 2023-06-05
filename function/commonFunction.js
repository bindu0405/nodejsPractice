function add(num1,num2){
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1,num2){
    return num1-num2;
}

function addStrings(str1,str2){
    return str1+" "+str2;
}

exports.operatorService={
    add,
    subtract,
    addStrings
}








// var firstname=" ";
// var lastname=" ";
// const prompt=require("prompt-sync")();
// var firstname=prompt("enter the firstname:");
// var lastname=prompt("enter the lastname:");
// var fullname=" ";
// module.exports=function(firstname, lastname){

//     fullname = firstname +' '+lastname;

// }


// console.log(fullname);