let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))

// when i try 
// const name = prompt('say your name');
// this line in prompt in node js repl it gives an error 
// referencerror - prompt is not defined 
// and what does this error means 
// The error message "ReferenceError: prompt is not defined" indicates that you are trying to use the prompt function in an environment where it is not available. 
// in node js environment 
