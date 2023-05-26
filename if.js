const time=new Date().getHours();

let greetings="hii";
console.log(time);
if(time<10){
    greetings="gud morning";
}
else if(time<15){
    greetings="gud today";
}
else{
      greetings="gud evening";
}
console.log(greetings);