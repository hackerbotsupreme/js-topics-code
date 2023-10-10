// questions 
// 1. write a program using prompt function to  take input of age as a value from the user and use alert to tell him 
// if he can drive .
// 2. in questin 1 use confirm to ask the user if he wants to see the prompt again .
// 3. in the previous question use console.error to log the error if the age is entered is negative . 
// 4. write a program to change the url to google.com(redirection) if user enters a number greater than 4 ..
// 5. change the background of the page to yrllow , red or to any other clor based on user input prompt . 




// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if (number > 4) {
//   location.href = "https://google.com"
// }

let color = prompt("Enter the page background color")
document.body.style.background = color

{/* script1.js  */}
let runAgain = true;


const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}
