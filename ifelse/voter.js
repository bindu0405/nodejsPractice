
const prompt=require("prompt-sync")(); 
let a=prompt("enter the age:");
let b=prompt("enter the gender:");
if( a >=21 && b =='male'){
    console.log("you are eliglible to apply"+b);
}
else if(a >=18 && b == 'female'){
    console.log("you are eligible to apply"+b);
}
else{
    console.log("you are not eligible");
}