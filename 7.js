arr = [1,2,3,"filter", null, 6,0,8,"!"];
let countEven = 0;
let countOdd = 0;
for (i = 0; i < arr.length; i++){
    if (typeof arr[i] == "number") {
        if (arr[i] === 0) {
            console.log(arr[i]);
        }else if (arr[i] % 2 === 0){
            countEven++;
        }else if(arr[i] % 2 !==0){
            countOdd++;
        }
    }
}
console.log(`Четные: ${countEven}, Нечентные: ${countOdd}`);