let n=5;
let str="";
for(i=1;i<=n;i++){
    for(j=n;j>i;j--){
        str+=" ";
    }
    for(k=0;k<i*2-1;k++){
        str+="*";
    }
    str+="\n";
}
for(i=1;i<=n-1;i++){
    for(j=0;j<i;j++){
      str+=" ";
    }
    for(k=(n-i)*2-1;k>0;k--){
      str+="*";  
    }
    str+="\n";
}


console.log(str);