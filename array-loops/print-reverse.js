/* Write a function 'printReverse() that takes an array as an argument and prints out the elements in the array in reverse orden
(don't actually reverse the array itself) 
printReverse([1, 2, 3, 4]):
4
3
2
1*/

function printReverse(array) {
    array.forEach((element,index) => {
        return `${index}: ${element}`
    });
}

let nums = [1, 2, 3, 4]
console.log(printReverse(nums))