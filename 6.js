let newArr = [1,1,1,1,1,1,1,1,1,1];
let counter = 0
for(i=0; i <(newArr.length)+1; i++){
    if (newArr[i] === newArr[i+1]){
        counter++;
    }else{
        continue;
    }
}
if (counter === newArr.length){
    console.log(true);
} else {
    console.log(false);
}