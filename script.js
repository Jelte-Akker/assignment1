'use strict'

function reverseString(str) {
    let result = '';
    let last_index = str.length - 1; 
    for (let i = last_index; i >= 0; i--) {
        result = result.concat(str[i]);
      }
    return result;
}

let myReversedName = "drahciRelttiL";
let myActualName = reverseString(myReversedName);
console.log(myActualName);