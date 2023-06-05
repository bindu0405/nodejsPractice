//progrram for a simple operator
let result;
const prompt=require("prompt-sync")();
//take the input operator
const operator=prompt('enter operator(+,-*,/,%):');
//take the input operands
const num1=prompt("enter first number:");
const num2=prompt("enter second number:");
switch (operator)
{
case '+':
    result=num1+num2;
    console.log(`${num1}+${num2}=${result}`);
    break;
case '-':
    result=num1-num2;
    console.log(`${num1}-${num2}=${result}`);
    break;
case '*':
    result=num1*num2;
    console.log(`${num1}*${num2}=${result}`);
    break;
case '/':
    result=num1/num2;
    console.log(`${num1}/${num2}=${result}`);
    break;
case '%':
    result=num1%num2;
    console.log(`${num1}%${num2}=${result}`);
    break;
}