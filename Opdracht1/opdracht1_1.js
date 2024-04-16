'use strict'

let myReversedName = "drahciRelttiL";
let myActualName = reverseString(myReversedName);
console.log(myActualName);

function reverseString(input){
    let reversed = "";
    for (let index = input.length -1; index >= 0; index--) {
        reversed = reversed + input[index];
    }
    return reversed;
}