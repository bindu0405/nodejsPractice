//swapping of two numbers using call by value
//swapping of two numbers using call by reference[&,&]
function swap($x, $y){
    $temp= $x;
    $x=$y;
    $y=$temp;
    console.log(`the value of x is:`,$x);
     console.log(`the value of y is:${$y}`);
}
$a=10;
$b=20;
swap($a, $b);
console.log(`the value of a is: ${$a}`);
console.log(`the value of b is: ${$b}`);

