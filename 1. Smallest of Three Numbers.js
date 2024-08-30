function smallestOfThreeNumbers(num1, num2, num3){
let arr = [num1, num2, num3].sort((a,b)=>a-b);
    console.log(arr.shift());
}
smallestOfThreeNumbers(2,5,3);
