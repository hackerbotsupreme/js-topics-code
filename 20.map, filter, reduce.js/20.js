
let arr = [45, 23, 21]
// Array map method
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
let a = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
console.log(arr)

// i dont understand map function . teach me how its work and how to use it 

// Certainly! The map() function is a higher-order function in JavaScript that allows you to transform each element of an array and create a new array based on the transformation. It takes a callback function as an argument and applies that function to each element of the array.

// Here's a breakdown of how the map() function works and how to use it:

// Syntax: array.map(callback[, thisArg])

// array: The original array on which you want to apply the transformation.
// callback: A function to be called on each element of the array.
// thisArg (optional): A value to be used as this when executing the callback function.
// The callback function:

// It takes three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array on which map() was called.
// It returns the value that should be placed in the resulting array.
// The map() function:

// Iterates over each element of the original array.
// Calls the provided callback function for each element, passing the element, index, and array as arguments.
// Collects the return value from the callback function and adds it to a new array.
// Returns the new array containing the transformed values.
// Here's an example to illustrate how to use the map() function:

let numbers1 = [1, 2, 3, 4, 5];

let squaredNumbers = numbers1.map(element => {
  return element ** 2;
});

console.log(squaredNumbers);
// In this example:

// The numbers array contains the original numbers.
// The map() function is called on the numbers array with a callback function provided using an arrow function syntax (element => { return element ** 2; }).
// The callback function squares each element of the array using the exponentiation operator (**).
// The map() function applies the callback function to each element of the array and creates a new array, squaredNumbers, containing the squared values.
// Finally, we print the squaredNumbers array using console.log().
// The squaredNumbers array will contain the values [1, 4, 9, 16, 25], which are the squared values of the original numbers from the numbers array.

// The map() function is useful when you need to transform the elements of an array in a one-to-one mapping and create a new array with the transformed values. It provides a concise and expressive way to perform such transformations.



// Array filter method
// i dont understand filter function . teach me how its work and how to use it 

// Certainly! The filter() function in JavaScript is a higher-order function that operates on arrays. It allows you to create a new array containing only the elements that pass a certain condition or criteria. Let's dive into how it works and how to use it:

// Syntax: array.filter(callback[, thisArg])

// array: The original array from which you want to filter elements.
// callback: A function to be called on each element of the array.
// thisArg (optional): An object to be used as this when executing the callback function.
// The callback function:

// It takes three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array on which filter() was called.
// It returns a boolean value indicating whether the element should be included in the filtered array or not.
// If the callback function returns true, the element is included in the filtered array.
// If the callback function returns false, the element is excluded from the filtered array.
// The filter() function:

// Iterates over each element of the original array.
// Calls the provided callback function for each element, passing the element, index, and array as arguments.
// If the callback function returns true for an element, that element is included in the new filtered array.
// If the callback function returns false for an element, that element is excluded from the filtered array.
// Returns the new filtered array.
// Here's an example to illustrate how to use the filter() function:


let numbers2 = [1, 2, 3, 4, 5];

let evenNumbers = numbers2.filter(element => {
  return element % 2 === 0;
});

console.log(evenNumbers);
// In this example:

// The numbers array contains a list of numbers.
// The filter() function is called on the numbers array with a callback function provided using an arrow function (element => { return element % 2 === 0; }).
// The callback function checks if each element is even by using the modulo operator (%).
// If an element is even (the remainder of the division by 2 is 0), the callback function returns true, and the element is included in the evenNumbers array.
// If an element is odd (the remainder of the division by 2 is not 0), the callback function returns false, and the element is excluded from the evenNumbers array.
// Finally, we print the evenNumbers array using console.log().
// The evenNumbers array will contain the values [2, 4], which are the even numbers filtered from the original numbers array.

// The filter() function is useful when you need to extract elements from an array that meet specific conditions or criteria. It provides a concise and expressive way to perform such filtering operations.
// Returns the elements of an array that meet the condition specified in a callback function.
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
// console.log(a2, arr2)

// Array reduce method
// i dont understand reduce  function . teach me how its work and how to use it 


// Certainly! The reduce() function in JavaScript is a higher-order function that operates on arrays. It allows you to reduce an array to a single value by applying a callback function to each element of the array. Let's dive into how it works and how to use it:

// Syntax: array.reduce(callback[, initialValue])

// array: The original array that you want to reduce.
// callback: A function to be called on each element of the array.
// initialValue (optional): A value to be used as the initial accumulator in the reduction process.
// The callback function:

// It takes four arguments:
// accumulator: The accumulated value computed so far.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array on which reduce() was called.
// It returns the updated value of the accumulator.
// The reduce() function:

// Iterates over each element of the array.
// Calls the provided callback function for each element, passing the accumulator, current element, index, and array as arguments.
// The return value of the callback function becomes the new value of the accumulator.
// The accumulation process starts with the initial value provided as the second argument (initialValue), or the first element of the array if no initial value is provided.
// Returns the final accumulated value.
// Here's an example to illustrate how to use the reduce() function:
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// In this example:

// The numbers array contains a list of numbers.
// The reduce() function is called on the numbers array with a callback function provided using an arrow function ((accumulator, currentValue) => { return accumulator + currentValue; }).
// The callback function adds each element to the accumulator.
// The initial value of the accumulator is provided as 0 as the second argument to reduce().
// The callback function is applied to each element of the array, and the result is accumulated in the sum variable.
// Finally, we print the sum value using console.log().
// The sum value will be 15, which is the sum of all the numbers in the numbers array.

// The reduce() function is useful when you need to compute a single value by accumulating values from an array. It provides a powerful way to perform operations such as summing, averaging, finding maximum/minimum values, and more.



// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)

