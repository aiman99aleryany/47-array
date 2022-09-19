// Given the following array:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Print the first element of the array.
// Print the last element of the array.
// Print the array length.
// Print the twentieth element of the array and explain the output.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers.length);
console.log(numbers[19]); // arrays are objects, Array indexes are stored as keys. If the index doesn't exists in the array, undefined is printed.
