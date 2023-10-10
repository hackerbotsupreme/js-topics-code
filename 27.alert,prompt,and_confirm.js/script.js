alert("Enter the value of a!")
let a = prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it to the page")
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}

// The alert() function is not a console method but a built-in JavaScript function that displays a dialog box with a message and an OK button. It is used to provide simple pop-up notifications or to prompt the user for input in a browser environment.
  // The prompt(), confirm(), and if...else statements are not console methods but JavaScript features commonly used in browser environments.

  // prompt(): The prompt() function displays a dialog box that prompts the user to enter input. It takes an optional message parameter and returns the text entered by the user as a string. It is useful for gathering user input or requesting information.

  // Example:
  // let name = prompt("Please enter your name:");
  // console.log("Hello, " + name + "!");

  // In this example, the prompt() function displays a dialog box with the message "Please enter your name:". The value entered by the user is stored in the name variable and then printed to the console.

  // confirm(): The confirm() function displays a dialog box with a message and OK/Cancel buttons. It is used to prompt the user for a yes or no confirmation. It returns a boolean value true if the user clicks OK and false if the user clicks Cancel.

  // Example:

  // let result = confirm("Are you sure you want to delete this item?");
  // if (result) {
  //   // Delete the item
  //   console.log("Item deleted!");
  // } else {
  //   // Cancel the deletion
  //   console.log("Deletion canceled.");
  // }
  // In this example, the confirm() function displays a dialog box with the message "Are you sure you want to delete this item?". The return value of the function is stored in the result variable, and based on the user's choice, different actions are performed using the if...else statement.

  // if...else statement: The if...else statement is a conditional statement used to perform different actions based on a condition. It evaluates a condition and executes a block of code if the condition is true. If the condition is false, an optional else block of code can be executed.

  // Example:

  // let age = prompt("Please enter your age:");
  // if (age >= 18) {
  //   console.log("You are eligible to vote.");
  // } else {
  //   console.log("You are not eligible to vote yet.");
  // }
  // In this example, the confirm() function displays a dialog box with the message "Are you sure you want to delete this item?". The return value of the function is stored in the result variable, and based on the user's choice, different actions are performed using the if...else statement.

  // if...else statement: The if...else statement is a conditional statement used to perform different actions based on a condition. It evaluates a condition and executes a block of code if the condition is true. If the condition is false, an optional else block of code can be executed.

  // Example:
  // let age = prompt("Please enter your age:");
  // if (age >= 18) {
  //   console.log("You are eligible to vote.");
  // } else {
  //   console.log("You are not eligible to vote yet.");
  // }
  // In this example, the if...else statement checks if the age entered by the user is greater than or equal to 18. If the condition is true, it prints "You are eligible to vote." Otherwise, it prints "You are not eligible to vote yet."

  // These features are commonly used to interact with the user and make decisions based on their input or confirmation. They are primarily used in browser-based JavaScript applications rather than in console-based environments.





