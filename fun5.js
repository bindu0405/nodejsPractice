function tower(n,sourcepole,destinationpole,auxilarypole){
    if(0==n)
    return;
        tower(n-1,sourcepole, auxilarypole, destinationpole);
    console.log("move the disk"+n+"from"+n+soucepole+n+"to"+n+destinationpole+'\n');
    tower(n-1,auxilarypole, destinationpole, sourcepole);
}
tower(3, 's', 'd', 'a');