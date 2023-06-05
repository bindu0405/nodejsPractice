var fact=5;
console.log("hi");

function calfact(num){
     if(num == 1){
        return 1;
     }

     return num * calfact(num-1);

    }
console.log(calfact(5));
