let n=4;
var str=" ";
let count=1;
for(i=0; i<=n; i++){
    for(j=1; j<n-i; j++){
        str +=count;
        count++;
    }
    str=str+"\n";
  }
  console.log(str);
