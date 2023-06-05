
function evenodd(num){
    if(num%2==0){
        console.log("num is the even number.");
    }
    else{
        console.log("num is the odd number.");
    }
    return '\n';
}
function loop(num){
   console.log(num,"----------in loop---------------")
    for(let i=0;i<=num;i++){
        

        if(i==num||i%2==0){
            
            console.log(i);
            
        }
    }
        
    
    return '\n';
}
function div(num){
    if(num%2==0){
        console.log("num is divisible by 2");
    }
    else{
        console.log("num is not divisible by 2");
    }
    return '\n';
}
exports.kavali={
    evenodd,
    loop,
    div
}
