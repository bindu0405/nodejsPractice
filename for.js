let s=4;
var str=" ";
let count=1;
for(i=0; i<=4; i++){
    for(j=1; j<s-i+1; j++){
        str +=count;
        count++;
    }
    str=str+"\n";
  }
  console.log(str);
