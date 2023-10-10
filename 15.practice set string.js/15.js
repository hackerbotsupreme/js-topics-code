// Chapter 4 - Practice Set
// Problem 1
// what will following print in javascript .
// console.log("Har\".length)
let str = "Har\""
console.log(str.length)

// Problem 2
// explore the includes,startswith & endswith function of a string . 
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Problem 3
// write a program to convert a given string to lowercase.
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Problem 4
// Extract the amount out of this string .
//  " pplease give Rs 1000"
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// Problem 5
// try to cahnge fourth charecter of a given string were you able to do it ?
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable
var sentene ="Hello, World!2323" ;

console.log(sentene);
console.log(sentene[3]);
sentene[3].replace("m");
console.log(sentene[3]);
console.log(sentene);
 // friend is not changed, because string is immutable