'use strict';


function even(numbers) {
    const newArray = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            newArray.push(number);
        }
    }

    return newArray;
}
const array = [2,7,4,1,3,5,6,7,8,9,10];
const arrayModified =even(array);

console.log('Original array:', array);
console.log('Modified array:', arrayModified);
