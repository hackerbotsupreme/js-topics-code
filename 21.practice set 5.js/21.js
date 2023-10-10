// Chapter 5 Practice Set



//Practice Problem 2
//question-
// keep adding  numbers to the array in 1 untill 0 is added to the array.
// let a;
// do {
//   a = prompt("Enter a number")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a != 0);
// console.log(arr)


// Practice Problem 3




// Practice Problem 4
//Create an array of squuare of given numbers . 
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x)=>{
//   return x*x
// })
// console.log(n)
// a better one is 
// filter for numbers divisible by 10 from a given array.
// const  array = [2,3,5,6,45,46,80,50]
// let squareofall = 
//   (array.map((x)=>{
//     // return console.log(x^2) - ^ this doesnot work 
//     return console.log(x**2)
//   }))
// console.log(squareofall)


// Practice Problem 5
// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whise factorial whose factorial needs to be calculated)


// let arr = [1, 2, 3, 4, 5]
// let n = arr.reduce((x1, x2) => {
//   return x1 * x2
// })
// console.log(n)

// Sure! You can use the reduce() function to calculate the factorial of a given number. The factorial of a number n is the product of all positive integers less than or equal to n. Here's an example:
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return Array.from({ length: n }, (_, index) => index + 1).reduce((accumulator, currentValue) => accumulator * currentValue);
    }
  }
  // function factorial(n: number): number {
  //   if (n === 0 || n === 1) {
  //     return 1;
  //   } else {
  //     return n * factorial(n - 1);
  //   }
  // }
  
  // factorial(n: number): number - what does this means 

// ChatGPT
// Yes, it's correct.

// Reason with real-world application and evidence: In TypeScript, factorial(n: number): number is a function signature, also known as a function declaration or function type. It specifies that there is a function named factorial which takes one argument n of type number and returns a value of type number.

// For example, factorial(5) would mean calling this function with the argument 5 and expecting it to return a numeric result.
  let number = 5;
  let result = factorial(number);
  console.log(result);
//   In this example:

//   We define a function factorial that takes a number n as input.
//   If n is 0 or 1, the factorial is 1, so we return 1 as the base case.
//   If n is greater than 1, we create an array using Array.from() with a length of n. This array will have values from 1 to n.
//   We then use reduce() to multiply all the elements of the array together, starting from the initial value of 1 (the first value of the accumulator) and multiplying it with each element of the array.
//   Finally, we assign the result of the factorial calculation to the result variable and print it using console.log().
//   When you run this code with number set to 5, the factorial of 5 (5!) will be calculated and stored in the result variable. The value of result will be 120, which is the factorial of 5.  