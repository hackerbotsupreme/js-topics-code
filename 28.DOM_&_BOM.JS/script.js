window.console.log(window)
console.log(document.body)
document.body.style.background = "yellow"
// document object methods :-->
// DOM methods(20)
// purpose 
// The DOM methods allow you to traverse the document tree, manipulate element properties and attributes, create new elements, attach event listeners, and perform various operations on the document structure. The exact set of available DOM methods may vary depending on the browser and the version of JavaScript being used.
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree-like model, where each element in the document is represented as a node. The purpose of the DOM is to provide a way for programs to access and manipulate the content, structure, and style of a web document.

// The DOM serves as an intermediary between web content (HTML or XML) and JavaScript code. It allows JavaScript to dynamically interact with and modify the web page, enabling tasks such as:

// Accessing and Modifying Elements: With the DOM, you can select and manipulate individual elements or groups of elements on a web page. You can retrieve element properties, such as its content, attributes, and styles, and modify them dynamically. This allows you to update the content, apply styles, add or remove elements, and respond to user interactions.

// Event Handling: The DOM provides event handling capabilities, allowing you to respond to user actions like clicks, key presses, or form submissions. You can attach event listeners to specific elements or document-wide events and execute JavaScript code when those events occur. This enables interactivity and user-driven behavior in web applications.

// Dynamic Content Generation: The DOM allows you to create new elements and add them to the document dynamically. You can generate content on the fly based on user input, server responses, or other data sources. This is commonly used in applications where content needs to be dynamically loaded or updated without reloading the entire page.

// Manipulating CSS Styles: The DOM provides methods to access and modify CSS styles applied to elements. You can dynamically change the appearance of elements by adding, removing, or modifying CSS classes and inline styles. This enables dynamic styling and responsive design.

// Tree Traversal and Navigation: The DOM offers methods to traverse and navigate the document tree structure. You can move between parent and child elements, siblings, or find specific elements based on their tag name, class, or other attributes. This allows you to search for elements, iterate over collections of elements, or perform complex tree-based operations.

// Overall, the purpose of the DOM is to provide a powerful and standardized way to interact with and manipulate web documents using JavaScript. It forms the foundation for dynamic and interactive web development, enabling developers to create rich and responsive user experiences.

//  the Document Object Model (DOM) represents the structure of an HTML or XML document as a tree-like structure, and it provides methods to manipulate and interact with the elements of the document. The DOM methods in JavaScript allow you to access, modify, create, and delete elements and their attributes within an HTML or XML document. There are numerous DOM methods available, but here are some commonly used ones:

// 1.getElementById(id): Returns the element with the specified ID.
// // The purpose of the document.getElementById() method in JavaScript is to retrieve a reference to an HTML element on a web page based on its unique identifier (ID). It allows you to access and manipulate specific elements by their ID, enabling dynamic interaction with the document. Here are two examples of how getElementById() can be used:
// // // HTML: <p id="myParagraph">Hello, World!</p>

// // // JavaScript:
// // const paragraph = document.getElementById("myParagraph");
// // paragraph.textContent = "Welcome, OpenAI!"; // Change the text content of the paragraph

// // Changing the Content of an Element:
// // In this example, getElementById() is used to retrieve the paragraph element with the ID "myParagraph". Once obtained, the textContent property is used to change the content of the paragraph from "Hello, World!" to "Welcome, OpenAI!".

// // Applying Styles to an Element:
// // // HTML: <div id="myDiv">Some content</div>

// // // CSS: .highlighted { background-color: yellow; }

// // // JavaScript:
// // const divElement = document.getElementById("myDiv");
// // divElement.classList.add("highlighted"); // Add the "highlighted" CSS class to the element
// // // HTML: <div id="myDiv">Some content</div>

// // // CSS: .highlighted { background-color: yellow; }

// // // JavaScript:
// // const divElement = document.getElementById("myDiv");
// // divElement.classList.add("highlighted"); // Add the "highlighted" CSS class to the element
// // In this example, getElementById() is used to retrieve the div element with the ID "myDiv". The classList property is then used to add the CSS class "highlighted" to the element, which applies a yellow background color according to the defined CSS rules.

// // These examples demonstrate how getElementById() allows you to target specific elements on a web page using their unique IDs and perform various actions, such as modifying content, applying styles, attaching event listeners, or accessing other properties and methods of the element

// 2.getElementsByClassName(className): Returns a collection of elements with the specified class name.
        // The purpose of the document.getElementById() method in JavaScript is to retrieve a reference to an HTML element on a web page based on its unique identifier (ID). It allows you to access and manipulate specific elements by their ID, enabling dynamic interaction with the document. Here are two examples of how getElementById() can be used:

        // Changing the Content of an Element:
        // // HTML: <p id="myParagraph">Hello, World!</p>

        // // JavaScript:
        // const paragraph = document.getElementById("myParagraph");
        // paragraph.textContent = "Welcome, OpenAI!"; // Change the text content of the paragraph
        // In this example, getElementById() is used to retrieve the paragraph element with the ID "myParagraph". Once obtained, the textContent property is used to change the content of the paragraph from "Hello, World!" to "Welcome, OpenAI!".

        // Applying Styles to an Element:
        // // HTML: <div id="myDiv">Some content</div>

        // // CSS: .highlighted { background-color: yellow; }

        // // JavaScript:
        // const divElement = document.getElementById("myDiv");
        // divElement.classList.add("highlighted"); // Add the "highlighted" CSS class to the element
        // In this example, getElementById() is used to retrieve the div element with the ID "myDiv". The classList property is then used to add the CSS class "highlighted" to the element, which applies a yellow background color according to the defined CSS rules.

        // These examples demonstrate how getElementById() allows you to target specific elements on a web page using their unique IDs and perform various actions, such as modifying content, applying styles, attaching event listeners, or accessing other properties and methods of the element.
// 3.getElementsByTagName(tagName): Returns a collection of elements with the specified tag name.
        // The purpose of the document.getElementsByTagName() method in JavaScript is to retrieve a collection of HTML elements based on their tag name. It allows you to access and manipulate multiple elements with the same tag name within a document. Here are two examples of how getElementsByTagName() can be used:

        // Changing the Styles of Elements:
        // // HTML: <p>Hello</p><p>World</p>

        // // JavaScript:
        // const paragraphs = document.getElementsByTagName("p");
        // for (let i = 0; i < paragraphs.length; i++) {
        //   paragraphs[i].style.color = "blue"; // Change the text color of each paragraph
        // }
        // In this example, getElementsByTagName() is used to retrieve all the <p> elements in the document. The returned collection is then iterated over using a for loop, and the style.color property is used to change the text color of each paragraph to blue.

        // Manipulating Elements Based on Tag Name:
        // // HTML: <ul><li>Item 1</li><li>Item 2</li></ul>

        // // JavaScript:
        // const listItems = document.getElementsByTagName("li");
        // listItems[1].textContent = "Modified Item"; // Change the text content of the second list item
        // listItems[0].classList.add("highlighted"); // Add a CSS class to the first list item
        // In this example, getElementsByTagName() is used to retrieve all the <li> elements within an unordered list. The second list item's text content is modified, changing it to "Modified Item". Additionally, the classList.add() method is used on the first list item to add the CSS class "highlighted", which can be used to apply specific styles.

        // These examples demonstrate how getElementsByTagName() allows you to select multiple elements based on their tag name and perform operations or manipulations on them collectively. It's useful for scenarios where you want to target multiple elements of the same type within a document.







// 4.querySelector(selector): Returns the first element that matches the specified CSS selector.
        // The purpose of the document.querySelector() method in JavaScript is to select and retrieve the first element that matches a specified CSS selector within the document. It allows you to dynamically find and manipulate elements based on various CSS selectors. Here are two examples of how querySelector() can be used:

        // Changing the Style of an Element:
        // // HTML: <div id="myDiv">Hello</div>

        // // JavaScript:
        // const myDiv = document.querySelector("#myDiv");
        // myDiv.style.backgroundColor = "red"; // Change the background color of the div

        // In this example, querySelector() is used to select the element with the id of "myDiv". The returned element is then assigned to the myDiv variable, allowing you to access and manipulate its properties. Here, the background color of the div is changed to red using the style.backgroundColor property.

        // Event Handling:
        // // HTML: <button id="myButton">Click me</button>

        // // JavaScript:
        // const myButton = document.querySelector("#myButton");
        // myButton.addEventListener("click", () => {
        //   console.log("Button clicked!"); // Log a message when the button is clicked
        // });
        // In this example, querySelector() is used to select the button element with the id of "myButton". The addEventListener() method is then called on the selected element to attach a click event listener. When the button is clicked, the provided callback function is executed, logging a message to the console.

        // These examples demonstrate how querySelector() allows you to select elements using CSS selectors and perform operations or attach event listeners to them. It provides a flexible and powerful way to target specific elements within a document.



// 5.querySelectorAll(selector): Returns a collection of elements that match the specified CSS selector.
        // The purpose of the document.querySelectorAll() method in JavaScript is to select and retrieve a list of elements that match a specified CSS selector within the document. It returns a NodeList object containing all the matched elements, allowing you to perform operations or iterate over them. Here are two examples of how querySelectorAll() can be used:

        // Applying Styles to Multiple Elements:
        // // HTML: <p class="highlight">Paragraph 1</p>
        // //       <p class="highlight">Paragraph 2</p>

        // // JavaScript:
        // const paragraphs = document.querySelectorAll(".highlight");
        // paragraphs.forEach((paragraph) => {
        //   paragraph.style.color = "red"; // Change the text color of each highlighted paragraph
        // });

        // In this example, querySelectorAll() is used to select all the elements with the class name "highlight". The returned NodeList object is then iterated using the forEach() method, and for each paragraph element, the text color is changed to red using the style.color property.

        // Event Delegation:
        // // HTML: <ul id="myList">
        // //         <li>Item 1</li>
        // //         <li>Item 2</li>
        // //         <li>Item 3</li>
        // //       </ul>

        // // JavaScript:
        // const myList = document.querySelector("#myList");
        // myList.addEventListener("click", (event) => {
        //   if (event.target.tagName === "LI") {
        //     event.target.classList.toggle("selected"); // Toggle the "selected" class on clicked list items
        //   }
        // });

        // In this example, querySelector() is used to select the <ul> element with the id of "myList". Then, an event listener is attached to the list, listening for click events. When a click occurs, the callback function is executed. By checking if the clicked target's tagName is "LI", we ensure that only the <li> elements within the list trigger the desired behavior. In this case, the "selected" class is toggled on the clicked list item.

        // These examples demonstrate how querySelectorAll() enables you to select multiple elements using CSS selectors and perform operations or iterate over them. It provides a convenient way to work with collections of elements in the DOM.
// 6.createElement(tagName): Creates a new element with the specified tag name.
        // The purpose of the document.createElement() method in JavaScript is to create a new HTML element dynamically. It allows you to programmatically create and manipulate elements before adding them to the DOM. Here are two examples of how createElement() can be used:

        // Creating a New Element and Appending it to the DOM:
        // // JavaScript:
        // const newParagraph = document.createElement("p"); // Create a new <p> element
        // newParagraph.textContent = "This is a new paragraph"; // Set the text content of the new paragraph
        // document.body.appendChild(newParagraph); // Append the new paragraph to the <body> element
        // In this example, createElement() is used to create a new <p> element. The textContent property is then set to assign the desired text content to the new paragraph. Finally, appendChild() is used to append the new paragraph to the <body> element, making it part of the DOM.

        // Creating a Complex Element Structure:
        // // JavaScript:
        // const newDiv = document.createElement("div"); // Create a new <div> element

        // const newHeading = document.createElement("h2"); // Create a new <h2> element
        // newHeading.textContent = "New Heading"; // Set the text content of the new heading

        // const newParagraph = document.createElement("p"); // Create a new <p> element
        // newParagraph.textContent = "This is a new paragraph"; // Set the text content of the new paragraph

        // newDiv.appendChild(newHeading); // Append the new heading to the new div
        // newDiv.appendChild(newParagraph); // Append the new paragraph to the new div

        // document.body.appendChild(newDiv); // Append the new div to the <body> element
        // In this example, createElement() is used to create a new <div> element. Inside the <div>, a new <h2> heading and a new <p> paragraph are created using createElement(). The text content of the heading and paragraph is set accordingly. Then, using appendChild(), the heading and paragraph are appended to the new <div>. Finally, the new <div> is appended to the <body> element.

        // These examples illustrate how createElement() enables you to create new elements dynamically, set their properties, and add them to the DOM as desired. It provides a powerful way to generate HTML content on the fly based on dynamic data or program logic.
// 7.createTextNode(text): Creates a new text node with the specified text.
        // The purpose of the document.createTextNode() method in JavaScript is to create a new text node containing the specified text. It is commonly used in conjunction with other DOM manipulation methods to add textual content to elements. Here are two examples of how createTextNode() can be used:

        // Adding Text Content to an Element:
        // // JavaScript:
        // const paragraph = document.createElement("p"); // Create a new <p> element

        // const textNode = document.createTextNode("This is some text"); // Create a new text node
        // paragraph.appendChild(textNode); // Append the text node to the paragraph element

        // document.body.appendChild(paragraph); // Append the paragraph to the <body> element

        // In this example, createTextNode() is used to create a new text node with the content "This is some text". The text node is then appended to a newly created <p> element using appendChild(). Finally, the paragraph element is appended to the <body> element, making the text visible in the DOM.

        // Modifying Existing Text Content:
        // // JavaScript:
        // const heading = document.getElementById("myHeading"); // Get an existing element by its ID
        // const existingText = heading.firstChild; // Get the existing text node of the element

        // const newText = "Updated Heading"; // New text content

        // const newTextNode = document.createTextNode(newText); // Create a new text node with the updated text
        // heading.replaceChild(newTextNode, existingText); // Replace the existing text node with the new one

        // In this example, createTextNode() is used indirectly. It starts by selecting an existing element with the getElementById() method. Then, the first child node of that element, which is the existing text node, is retrieved using firstChild. A new text node is created with the updated text using createTextNode(). Finally, replaceChild() is used to replace the existing text node with the new text node, effectively updating the text content of the element.

        // These examples demonstrate how createTextNode() allows you to create text nodes containing specific content and manipulate existing text nodes within the DOM. It provides a way to add or modify textual content dynamically, giving you more control over the presentation and behavior of your web page.
// 8.appendChild(node): Appends a node as the last child of a parent node.
        // The purpose of the document.appendChild() method in JavaScript is to append a node as the last child of a specified parent node. It is commonly used to add newly created elements or existing nodes to the DOM. Here are two examples of how appendChild() can be used:

        // Adding a New Element to an Existing Parent:
        // // JavaScript:
        // const parentElement = document.getElementById("parent"); // Get the parent element

        // const newElement = document.createElement("div"); // Create a new <div> element

        // parentElement.appendChild(newElement); // Append the new element as the last child of the parent
        // In this example, createElement() is used to create a new <div> element. The getElementById() method is then used to retrieve an existing parent element by its ID. Finally, appendChild() is called on the parent element, with the new element as the argument, to append the new element as the last child of the parent.

        // Moving an Existing Element to a New Parent:
        // // JavaScript:
        // const parentElement = document.getElementById("newParent"); // Get the new parent element
        // const existingElement = document.getElementById("existingElement"); // Get the existing element

        // parentElement.appendChild(existingElement); // Append the existing element to the new parent
        // In this example, getElementById() is used to retrieve an existing element by its ID. Another parent element is also retrieved using the same method. Then, appendChild() is called on the new parent element, with the existing element as the argument, to append the existing element as the last child of the new parent. This effectively moves the element from its original parent to the new parent.

        // These examples demonstrate how appendChild() allows you to add or move elements within the DOM structure. It provides a way to manipulate the hierarchy of elements and build complex document structures dynamically.
// 9.removeChild(node): Removes a child node from its parent.

    // The purpose of the document.removeChild() method in JavaScript is to remove a specified child node from its parent node. It is commonly used to remove existing elements or nodes from the DOM. Here are two examples of how removeChild() can be used:

    // Removing an Element by Reference:
    // // JavaScript:
    // const parentElement = document.getElementById("parent"); // Get the parent element
    // const childElement = document.getElementById("child"); // Get the child element to be removed

    // parentElement.removeChild(childElement); // Remove the child element from its parent

    // In this example, getElementById() is used to retrieve the parent element and the child element to be removed. Then, removeChild() is called on the parent element, with the child element as the argument, to remove the child element from its parent.

    // Removing the First Child of an Element:
    // // JavaScript:
    // const parentElement = document.getElementById("parent"); // Get the parent element

    // const firstChild = parentElement.firstChild; // Get the first child element
    // parentElement.removeChild(firstChild); // Remove the first child element from its parent
    // In this example, getElementById() is used to retrieve the parent element. The firstChild property is used to get the first child element of the parent. Finally, removeChild() is called on the parent element, with the first child element as the argument, to remove the first child element from its parent.

    // These examples demonstrate how removeChild() allows you to selectively remove elements or nodes from the DOM. It provides a way to dynamically modify the structure of the document by removing specific elements as needed.
// 10.getAttribute(name): Retrieves the value of an attribute on an element.

        // The document.getAttribute() method is not directly available on the document object in JavaScript. Instead, it is typically used on individual elements to retrieve the value of a specific attribute. Here are two examples of how getAttribute() can be used on elements:

        // Getting the value of an attribute:
        // // HTML:
        // // <img id="myImage" src="image.jpg" alt="My Image">

        // // JavaScript:
        // const imageElement = document.getElementById("myImage"); // Get the image element
        // const srcValue = imageElement.getAttribute("src"); // Get the value of the 'src' attribute

        // console.log(srcValue); // Output: "image.jpg"

        // In this example, getElementById() is used to retrieve the image element with the ID "myImage". Then, getAttribute() is called on the image element, with the attribute name "src" as the argument, to retrieve the value of the "src" attribute. The value is then logged to the console.

        // Checking for the presence of an attribute:
        // // HTML:
        // // <a id="myLink" href="https://www.example.com">Example Link</a>

        // // JavaScript:
        // const linkElement = document.getElementById("myLink"); // Get the link element
        // const hasTargetAttribute = linkElement.hasAttribute("target"); // Check if the 'target' attribute exists

        // console.log(hasTargetAttribute); // Output: false

        // In this example, getElementById() is used to retrieve the link element with the ID "myLink". The hasAttribute() method is called on the link element, with the attribute name "target" as the argument, to check if the "target" attribute exists on the element. The result (true or false) is then logged to the console.

        // These examples demonstrate how getAttribute() and hasAttribute() can be used to access and check for the presence of specific attributes on HTML elements. They provide a way to retrieve attribute values or determine if certain attributes are present on elements in the document.
// 11.setAttribute(name, value): Sets the value of an attribute on an element.
        // The document.setAttribute() method is not directly available on the document object in JavaScript. Instead, it is typically used on individual elements to set or modify the value of a specific attribute. Here are two examples of how setAttribute() can be used on elements:

        // Setting the value of an attribute:
        // // HTML:
        // // <img id="myImage" src="image.jpg" alt="My Image">

        // // JavaScript:
        // const imageElement = document.getElementById("myImage"); // Get the image element
        // imageElement.setAttribute("src", "newimage.jpg"); // Set the value of the 'src' attribute

        // console.log(imageElement.getAttribute("src")); // Output: "newimage.jpg"
        // In this example, getElementById() is used to retrieve the image element with the ID "myImage". Then, setAttribute() is called on the image element, with the attribute name "src" as the first argument and the new value "newimage.jpg" as the second argument, to set the value of the "src" attribute to "newimage.jpg". The updated value is then retrieved using getAttribute() and logged to the console.

        // Adding a new attribute:
        // // HTML:
        // // <a id="myLink" href="https://www.example.com">Example Link</a>

        // // JavaScript:
        // const linkElement = document.getElementById("myLink"); // Get the link element
        // linkElement.setAttribute("target", "_blank"); // Add a new 'target' attribute

        // console.log(linkElement.getAttribute("target")); // Output: "_blank"

        // In this example, getElementById() is used to retrieve the link element with the ID "myLink". setAttribute() is called on the link element, with the attribute name "target" as the first argument and the value "_blank" as the second argument, to add a new "target" attribute with the value "_blank". The newly added attribute is then retrieved using getAttribute() and logged to the console.

        // These examples demonstrate how setAttribute() can be used to set the value of existing attributes or add new attributes to HTML elements. It provides a way to modify the attributes of elements dynamically in the document.
// 12.classList.add(className): Adds a class to an element's class list.
        // The classList.add() method is used to add one or more CSS classes to an element's class attribute. It allows you to dynamically modify the classes of an element. Here are two examples of how classList.add() can be used:

        // Adding a single class:
        // // HTML:
        // // <div id="myDiv" class="box"></div>

        // // JavaScript:
        // const divElement = document.getElementById("myDiv"); // Get the div element
        // divElement.classList.add("highlight"); // Add the "highlight" class

        // console.log(divElement.classList); // Output: ["box", "highlight"]

        // In this example, getElementById() is used to retrieve the div element with the ID "myDiv". classList.add() is called on the div element, with the class name "highlight" as the argument, to add the "highlight" class to the element. The updated class list is then logged to the console.

        // Adding multiple classes:
        // // HTML:
        // // <button id="myButton">Click me</button>

        // // JavaScript:
        // const buttonElement = document.getElementById("myButton"); // Get the button element
        // buttonElement.classList.add("btn", "btn-primary"); // Add multiple classes

        // console.log(buttonElement.classList); // Output: ["btn", "btn-primary"]

        // In this example, getElementById() is used to retrieve the button element with the ID "myButton". classList.add() is called on the button element with two class names, "btn" and "btn-primary", as arguments. This adds both classes to the button element's class list. The updated class list is then logged to the console.

        // These examples illustrate how classList.add() can be used to add one or more CSS classes to an element. It is commonly used in JavaScript to dynamically modify the styling or behavior of elements based on certain conditions or events.
// 13.classList.remove(className): Removes a class from an element's class list.
        // The classList.add() method is used to add one or more CSS classes to an element's class attribute. It allows you to dynamically modify the classes of an element. Here are two examples of how classList.add() can be used:

        // Adding a single class:
        // // HTML:
        // // <div id="myDiv" class="box"></div>

        // // JavaScript:
        // const divElement = document.getElementById("myDiv"); // Get the div element
        // divElement.classList.add("highlight"); // Add the "highlight" class

        // console.log(divElement.classList); // Output: ["box", "highlight"]

        // In this example, getElementById() is used to retrieve the div element with the ID "myDiv". classList.add() is called on the div element, with the class name "highlight" as the argument, to add the "highlight" class to the element. The updated class list is then logged to the console.

        // Adding multiple classes:
        // // HTML:
        // // <button id="myButton">Click me</button>

        // // JavaScript:
        // const buttonElement = document.getElementById("myButton"); // Get the button element
        // buttonElement.classList.add("btn", "btn-primary"); // Add multiple classes

        // console.log(buttonElement.classList); // Output: ["btn", "btn-primary"]
        // In this example, getElementById() is used to retrieve the button element with the ID "myButton". classList.add() is called on the button element with two class names, "btn" and "btn-primary", as arguments. This adds both classes to the button element's class list. The updated class list is then logged to the console.

        // These examples illustrate how classList.add() can be used to add one or more CSS classes to an element. It is commonly used in JavaScript to dynamically modify the styling or behavior of elements based on certain conditions or events.
// 14.classList.contains(className): Checks if an element has a specific class.
        // The classList.contains() method is used to check if an element has a specific CSS class in its class attribute. It returns a Boolean value indicating whether the class is present or not. Here are two examples of how classList.contains() can be used:

        // Checking for a single class:
        // // HTML:
        // // <div id="myDiv" class="box highlight"></div>

        // // JavaScript:
        // const divElement = document.getElementById("myDiv"); // Get the div element
        // const hasHighlightClass = divElement.classList.contains("highlight"); // Check if it has "highlight" class

        // console.log(hasHighlightClass); // Output: true

        // In this example, getElementById() is used to retrieve the div element with the ID "myDiv". classList.contains() is called on the div element with the class name "highlight" as the argument. It checks if the div element has the "highlight" class and assigns the result to the hasHighlightClass variable. The variable is then logged to the console, which will output true because the div element has the "highlight" class.

        // Checking for multiple classes:
        // // HTML:
        // // <button id="myButton" class="btn btn-primary">Click me</button>

        // // JavaScript:
        // const buttonElement = document.getElementById("myButton"); // Get the button element
        // const hasBtnClass = buttonElement.classList.contains("btn"); // Check if it has "btn" class
        // const hasPrimaryClass = buttonElement.classList.contains("btn-primary"); // Check if it has "btn-primary" class

        // console.log(hasBtnClass); // Output: true
        // console.log(hasPrimaryClass); // Output: true

        // In this example, getElementById() is used to retrieve the button element with the ID "myButton". Two separate classList.contains() calls are made to check if the button element has the "btn" class and the "btn-primary" class. The results are assigned to the hasBtnClass and hasPrimaryClass variables, respectively. Both variables are logged to the console, and both will output true because the button element has both classes.

        // These examples illustrate how classList.contains() can be used to determine if an element has a specific CSS class. It is commonly used in JavaScript to conditionally apply styles or execute certain logic based on the presence or absence of specific classes on elements.
// 15.classList.toggle(className): Toggles the presence of a class on an element.
        // The classList.toggle() method is used to toggle the presence of a CSS class on an element. If the class is already present, it will be removed; if it's not present, it will be added. It returns a Boolean value indicating whether the class was added (true) or removed (false). Here are two examples of how classList.toggle() can be used:

        // Toggling a class on a button:
        // // HTML:
        // // <button id="myButton" class="btn">Click me</button>

        // // JavaScript:
        // const buttonElement = document.getElementById("myButton"); // Get the button element
        // buttonElement.addEventListener("click", function() {
        //   buttonElement.classList.toggle("active"); // Toggle the "active" class
        // });

        // In this example, getElementById() is used to retrieve the button element with the ID "myButton". An event listener is added to the button that listens for a "click" event. When the button is clicked, the classList.toggle() method is called to toggle the presence of the "active" class on the button. If the class is already present, it will be removed; if it's not present, it will be added.

        // Toggling a class on a menu:
        // // HTML:
        // // <nav id="myNav" class="menu">
        // //   <button id="toggleButton">Toggle Menu</button>
        // //   <ul class="menu-items">
        // //     <li>Home</li>
        // //     <li>About</li>
        // //     <li>Contact</li>
        // //   </ul>
        // // </nav>

        // // JavaScript:
        // const toggleButton = document.getElementById("toggleButton"); // Get the toggle button element
        // const menuItems = document.querySelector(".menu-items"); // Get the menu items element

        // toggleButton.addEventListener("click", function() {
        //   menuItems.classList.toggle("show"); // Toggle the "show" class on the menu items
        // });

        // In this example, the toggle button and the menu items are selected using getElementById() and querySelector(), respectively. An event listener is added to the toggle button that listens for a "click" event. When the toggle button is clicked, the classList.toggle() method is called on the menu items element to toggle the presence of the "show" class. This can be used to show or hide the menu items by toggling the class.

        // These examples demonstrate how classList.toggle() can be used to dynamically add or remove a CSS class based on user interactions or specific conditions. It is commonly used in JavaScript to implement toggle functionality, such as showing or hiding elements or changing their appearance.
// 16.addEventListener(event, listener): Attaches an event listener to an element.
        // The addEventListener() method is used to attach an event listener to an element, which allows you to listen for specific events and execute a function when the event occurs. Here are two examples of how addEventListener() can be used:

        // Click event on a button:
        // // HTML:
        // // <button id="myButton">Click me</button>

        // // JavaScript:
        // const buttonElement = document.getElementById("myButton"); // Get the button element
        // buttonElement.addEventListener("click", function() {
        //   console.log("Button clicked!"); // Function executed when the button is clicked
        // });

        // In this example, getElementById() is used to retrieve the button element with the ID "myButton". The addEventListener() method is then called on the button element to attach a "click" event listener. When the button is clicked, the provided function is executed, which logs a message to the console.

        // Keydown event on the document:
        // // JavaScript:
        // document.addEventListener("keydown", function(event) {
        //     console.log("Key pressed:", event.key); // Function executed when a key is pressed
        //   });
        //   In this example, the addEventListener() method is called on the document object to attach a "keydown" event listener. The provided function is executed whenever a key is pressed. The event object passed as an argument to the function contains information about the key event, such as the key property which represents the key that was pressed. The function logs a message to the console, including the pressed key.

        // These examples illustrate how addEventListener() can be used to listen for and respond to various events, such as clicks, key presses, mouse movements, form submissions, and more. It is a fundamental method for event handling in JavaScript, allowing you to add interactivity and behavior to your web pages.
// 17.removeEventListener(event, listener): Removes an event listener from an element.
        // The removeEventListener() method is used to remove an event listener that was previously attached to an element using the addEventListener() method. This allows you to stop listening for specific events on an element. Here are two examples of how removeEventListener() can be used:

        // Click event on a button:
        // // HTML:
        // // <button id="myButton">Click me</button>

        // // JavaScript:
        // const buttonElement = document.getElementById("myButton"); // Get the button element

        // // Function to be executed when the button is clicked
        // function handleClick() {
        //   console.log("Button clicked!");
        // }

        // buttonElement.addEventListener("click", handleClick); // Attach the event listener

        // // Later in the code, when you want to remove the event listener
        // buttonElement.removeEventListener("click", handleClick); // Remove the event listener

        // In this example, an event listener is attached to a button element using the addEventListener() method. The event listener calls the handleClick() function when the button is clicked, logging a message to the console. Later in the code, the removeEventListener() method is used to remove the event listener, so the function will no longer be executed when the button is clicked.

        // Keydown event on the document:
        // // JavaScript:
        // function handleKeyDown(event) {
        //     console.log("Key pressed:", event.key);
        //   }
        
        //   document.addEventListener("keydown", handleKeyDown); // Attach the event listener
        
        //   // Later in the code, when you want to remove the event listener
        //   document.removeEventListener("keydown", handleKeyDown); // Remove the event listener

        //   In this example, an event listener is attached to the document object to listen for keydown events. The handleKeyDown() function is called when a key is pressed, logging the pressed key to the console. The removeEventListener() method is used to remove the event listener, so the function will no longer be executed when a key is pressed.

        // These examples demonstrate how removeEventListener() can be used to detach event listeners from elements, allowing you to control the event handling behavior of your web page and clean up event listeners when they are no longer needed.
// 18.style.property: Gets or sets the value of a CSS property on an element's style.
        // The style.property method is used to access or modify the CSS properties of an element's style object. It allows you to dynamically change the styling of an element directly through JavaScript. Here are two examples of how style.property can be used:

        // Changing the background color of an element:
        // // HTML:
        // // <div id="myDiv">Hello, World!</div>

        // // JavaScript:
        // const divElement = document.getElementById("myDiv"); // Get the div element

        // divElement.style.backgroundColor = "blue"; // Set the background color to blue

        // In this example, the style.backgroundColor property is used to set the background color of a div element to blue. The style object represents the inline CSS styles of the element, and by accessing the backgroundColor property, you can modify it dynamically.

        // Modifying the font size of a paragraph:
        // // HTML:
        // // <p id="myParagraph">This is a paragraph.</p>

        // // JavaScript:
        // const paragraphElement = document.getElementById("myParagraph"); // Get the paragraph element

        // paragraphElement.style.fontSize = "20px"; // Set the font size to 20 pixels

        // In this example, the style.fontSize property is used to modify the font size of a p element. By setting the fontSize property to "20px", the font size of the paragraph is changed to 20 pixels.

        // These examples demonstrate how you can use style.property to access or modify specific CSS properties of an element's style object. It provides a way to dynamically manipulate the appearance of elements on a web page using JavaScript.
// 19.innerHTML: Gets or sets the HTML content within an element.

        // I apologize for the repetition. Here are two additional examples of how the innerHTML property can be used:

        // Modifying a paragraph element:
        // // HTML:
        // // <p id="myParagraph">This is a paragraph.</p>

        // // JavaScript:
        // const paragraphElement = document.getElementById("myParagraph"); // Get the paragraph element

        // paragraphElement.innerHTML = "This is a modified paragraph."; // Update the content


        // In this example, the innerHTML property is used to modify the content of a paragraph element. The existing text "This is a paragraph." is replaced with the new content "This is a modified paragraph.". This allows you to dynamically update the text or HTML markup within an element.

        // Embedding HTML content within a div:
        // // HTML:
        // // <div id="myDiv"></div>

        // // JavaScript:
        // const divElement = document.getElementById("myDiv"); // Get the div element

        // const htmlContent = "<h1>Title</h1><p>Some content.</p>"; // HTML content

        // divElement.innerHTML = htmlContent; // Set the HTML content


        // In this example, the innerHTML property is used to embed HTML content within a div element. The htmlContent variable contains the desired HTML markup, including a heading and a paragraph. By assigning htmlContent to the innerHTML property, the div element is updated to display the specified HTML content.

        // The innerHTML property is a powerful tool for manipulating the HTML content of an element. It allows you to easily modify existing content or insert new content dynamically. However, it's important to use it with caution, especially when dealing with user-generated or untrusted content, to prevent security risks such as cross-site scripting (XSS) attacks.
// 20.parentNode: Returns the parent node of an element.
        // The parentNode property in JavaScript is used to access the parent node of an element in the DOM (Document Object Model). Here are two examples of how the parentNode property can be used:

        // Traversing the DOM:
        // // HTML:
        // // <div>
        // //   <p id="myParagraph">This is a paragraph.</p>
        // // </div>

        // // JavaScript:
        // const paragraphElement = document.getElementById("myParagraph"); // Get the paragraph element

        // const parentElement = paragraphElement.parentNode; // Get the parent element

        // console.log(parentElement); // Output: <div>

        // In this example, the parentNode property is used to access the parent element of the paragraph (<p>) element. The parentElement variable stores the reference to the parent <div> element. This allows you to traverse up the DOM hierarchy and access the parent node of an element.

        // Removing an element from the DOM:
        // // HTML:
        // // <div id="container">
        // //   <p>This is a paragraph.</p>
        // // </div>

        // // JavaScript:
        // const containerElement = document.getElementById("container"); // Get the container element
        // const paragraphElement = document.querySelector("#container p"); // Get the paragraph element

        // containerElement.removeChild(paragraphElement.parentNode); // Remove the paragraph element and its parent

        // In this example, the parentNode property is used in conjunction with the removeChild() method to remove an element and its parent from the DOM. The paragraphElement.parentNode references the parent node of the paragraph element (<p>), which is the container element (<div>). By calling removeChild() on the container element and passing the parent node as the argument, both the paragraph element and its parent are removed from the DOM.

        // The parentNode property provides a convenient way to access and manipulate the parent node of an element in the DOM. It allows you to perform actions such as traversing the DOM hierarchy, accessing parent elements, or removing elements and their parents from the DOM structure.

