let name = "Harry"
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4))
// console.log(name.slice(2))
// console.log(name.replace("Har", "Per"))
// let friend = "Naman"
// console.log(name.concat(" is a friend of ", friend, " Ok"))
// let friend2 = "      Meena        "
// console.log(friend2)
// console.log(friend2.trim())
let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]= "o" // This is not possible 
console.log(fr)
// QuickQuiz: Use a for loop to print a string
// myNameing methods
// most commonly used  29 string methods
// string methods
// length()
// slice ()
// split ()
// indexof ()
// lastindexof()
// concat ()
// includes ()
// toUppercase ()
// toLowercase ()
// charat ()
// search()
// replace ()
// substring ()
// trim ()
// trimRight()
// trimleft()
// startswith()
// endswith ()
// match ()
// matchAll()
// padstart()
// padend ()
// substring ()
// sup()
// toString()
// valueOf()
// small()
// link()
// fontsize()
// fontcolor()
// anchor()


// all practical use-cases with examples in short of all string methods  -->
// length()-> One practical real case where the length property of JavaScript is commonly used is for validating the length of user input in forms or text fields. For example, consider a registration form where you want to ensure that the user's password meets a certain length requirement. You can use the length property to check the length of the entered password and provide feedback to the user if it doesn't meet the specified criteria.
// slice ()-> One practical real case where the slice method of JavaScript is commonly used is for extracting a portion of a string or an array based on specific criteria. For example, consider a blog platform where you want to display a preview of a blog post on the homepage. You can use the slice method to extract a certain number of characters or words from the blog post content to create a concise preview.
// split ()-> One practical real case where the split() function in JavaScript is commonly used is for parsing and manipulating strings. The split() function allows you to split a string into an array of substrings based on a specified delimiter. For example, let's say you have a string that represents a list of names separated by commas.If you want to extract each individual name from the string, you can use the split() function with the comma (",") as the delimiter.After executing this code, the nameArray variable will contain an array of strings:
// indexof ()->One practical real case where the indexOf() function in JavaScript is commonly used is for searching and locating substrings within a larger string. For instance, let's say you have a text document and you want to check if a specific word or phrase appears within that document. You can use the indexOf() function to search for the occurrence of that word or phrase.In this case, the indexOf() function is used to find the index position of the first occurrence of the search term "JavaScript" within the documentText string. If the search term is found, the function returns the index position; otherwise, it returns -1.
// lastindexof()->One practical real case where the lastIndexOf() function in JavaScript is commonly used is for searching and locating the last occurrence of a substring within a larger string.
        // Let's consider a scenario where you have a text document with multiple occurrences of a specific word or phrase, and you want to find the index position of the last occurrence.In this case, the lastIndexOf() function is used to find the index position of the last occurrence of the search term "JavaScript" within the documentText string. If the search term is found, the function returns the index position; otherwise, it returns -1.
// includes ()->One practical real case where the includes() function in JavaScript is commonly used is for checking the presence of a specific value within an array or string.Let's say you have an array of numbers representing the grades of students, and you want to determine if a particular grade is present in the array:In this example, the includes() function is used to check if the value searchGrade (90) is present in the grades array. If the value is found, the function returns true; otherwise, it returns false.
// toUppercase ()->
// toLowercase ()->
// charat ()->
// search()->
// replace ()->
// substring ()->
// trim ()->
// trimRight()->
// trimleft()->
// startswith()->
// endswith ()->
// match ()->One practical real case where the match() function in JavaScript is commonly used is for extracting specific patterns or substrings from a string using regular expressions.Regular expressions provide a powerful way to search for and manipulate text patterns in strings. The match() function allows you to extract substrings that match a specified regular expression pattern. In this case, the match() function is used to search for the pattern "quick.*fox" within the sentence string. The pattern consists of the word "quick" followed by any characters (.*) and then the word "fox". The match() function returns an array of substrings that match the pattern.

// matchAll()->One practical real case where the matchAll() function in JavaScript is commonly used is for iterating over multiple matches of a regular expression within a string and extracting detailed information from each match. Let's say you have a string that contains multiple instances of a specific pattern, and you want to extract information from each occurrence. The matchAll() function allows you to do that by returning an iterator object that yields all the matches.
// padstart()->One practical real case where the padStart() function in JavaScript is commonly used is for formatting strings with a specific length and padding characters at the beginning.For example, let's say you have a time value represented as a string in the format "HH:MM" (hours and minutes), and you want to ensure that the string always has a length of 5 characters by padding leading zeros if necessary.In this case, the padStart() function is used to ensure that the time string is always 5 characters long. The first argument specifies the desired length, which is 5 in this example. The second argument is the padding character, which is "0" to pad with leading zeros.

// padend ()->One practical real case where the need for padding at the end of a string arises is when formatting text in a table or aligning columns of data. Let's consider a situation where you have a list of product names and corresponding prices, and you want to display them in a formatted table-like structure. In this example, we have an array of products with their names and prices. We want to display them in a table-like format, where the product names are left-aligned and padded with spaces to make them equal in length, followed by the prices. By using the repeat() function, we can create a string with a specific number of spaces (in this case, 15 - product.name.length). This string is then concatenated with the product name and price to create the desired formatted text.
    // This technique of using string concatenation and padding with spaces can be useful when you need to align and format text in a table or columnar structure. While there is no built-in padEnd() function in JavaScript, you can achieve similar results by combining string manipulation methods and padding techniques.
// substring ()-> One practical real case where the substring() function in JavaScript is commonly used is for extracting a portion of a string based on its starting and ending positions. Let's say you have a long string representing a paragraph of text, and you want to extract a specific sentence or a substring within that paragraph. The substring() function is often used in various scenarios, such as extracting parts of a longer text, manipulating and processing substrings, or implementing text-based algorithms. It allows you to work with specific portions of a string, which can be beneficial for tasks like text analysis, data extraction, or generating summaries.
// sup()->
// toString()->
// valueOf()->One practical real case where the valueOf() function in JavaScript is commonly used is for converting custom objects or data types into their primitive values.When you use JavaScript's built-in data types, such as numbers or strings, the primitive value is readily available. However, when you're working with custom objects or implementing your own data types, the valueOf() function allows you to define how these objects should be converted into their primitive counterparts.
// Let's consider an example where you have a custom object representing a Date, and you want to convert it into a primitive value representing the timestamp in milliseconds:
//The valueOf() function can also be used with other custom objects or data types that you define. By implementing the valueOf() method for your objects, you can control how they are converted into primitive values, allowing you to customize the behavior based on your specific requirements
// small()->
// link()->
// fontsize()->
// fontcolor()->
// anchor()->

//1. length()--this whole is a method and , length--this is a function 
    // console.log(myName.length);// and the main thing is we 
    // always hsve to give  function not a method after myName
    // One practical real case where the length property of JavaScript is commonly used is for validating the length of user input in forms or text fields. For example, consider a registration form where you want to ensure that the user's password meets a certain length requirement. You can use the length property to check the length of the entered password and provide feedback to the user if it doesn't meet the specified criteria.

    // Here's an example:

    // javascript
    // const passwordInput = document.getElementById('password');

    // passwordInput.addEventListener('input', () => {
    //   const password = passwordInput.value;
    //   if (password.length < 8) {                                                                                //1.here 'length' is a function not method
    //     document.getElementById('password-error').textContent = 'Password should be at least 8 characters long';// Password is too short, show an error message
    //   } else {
    //     document.getElementById('password-error').textContent = '';// Password is valid, clear the error message
    //   }
    // });
//2. slice ()
    // One practical real case where the slice method of JavaScript is commonly used is for extracting a portion of a string or an array based on specific criteria. For example, consider a blog platform where you want to display a preview of a blog post on the homepage. You can use the slice method to extract a certain number of characters or words from the blog post content to create a concise preview.

    // Here's an example:

    // javascript
    // Copy code
    // const blogPost = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    // const preview = blogPost.slice(0, 50) + "...";

    // console.log(preview);
    // In this case, the slice method is used to extract the first 50 characters of the blogPost string. The preview variable contains the extracted portion along with an ellipsis to indicate that there is more content. This preview can then be displayed on the homepage.
// -----------------------
    // const sliced1 = myName.slice(7); // Extracts from index 7 until the end
    // console.log(sliced1); // Output: "World!"

    // const sliced2 = myName.slice(0, 5); // Extracts from index 0 to index 5 (exclusive)
    // console.log(sliced2); // Output: "Hello"

    // const sliced3 = myName.slice(-6); // Extracts the last 6 characters
    // console.log(sliced3); // Output: "World!"

    // const sliced4 = myName.slice(7, -1); // Extracts from index 7 to the second-to-last character (exclusive)
    // console.log(sliced4); // Output: "World"
//3. split ()
    // One practical real case where the split() function in JavaScript is commonly used is for parsing and manipulating strings. The split() function allows you to split a string into an array of substrings based on a specified delimiter. For example, let's say you have a string that represents a list of names separated by commas.If you want to extract each individual name from the string, you can use the split() function with the comma (",") as the delimiter.After executing this code, the nameArray variable will contain an array of strings:
    // var names = "John, Jane, Mark, Sarah";
    // var nameArray = names.split(",");
    // ["John", "Jane", "Mark", "Sarah"]
// ----------------------
    // const parts1 = myName.split(","); // Splits the myNameing at the comma
    // console.log(parts1); // Output: ["Hello", " World!"]
    // const parts2 = myName.split(" "); // Splits the myNameing at the space
    // console.log(parts2); // Output: ["Hello,", "World!"]

    // const parts3 = myName.split(""); // Splits the myNameing into individual characters
    // console.log(parts3); // Output: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
//4. indexof ()
        // state me one good  practical real  case where  indexof  of js are used 
        // One practical real case where the indexOf() function in JavaScript is commonly used is for searching and locating substrings within a larger string. For instance, let's say you have a text document and you want to check if a specific word or phrase appears within that document. You can use the indexOf() function to search for the occurrence of that word or phrase.In this case, the indexOf() function is used to find the index position of the first occurrence of the search term "JavaScript" within the documentText string. If the search term is found, the function returns the index position; otherwise, it returns -1.
        // Here's an example:
        // javascript
        // Copy code
        // var documentText = "JavaScript is a popular programming language used for web development.";
        // var searchTerm = "JavaScript";
        // var searchIndex = documentText.indexOf(searchTerm);
        // In this case, the indexOf() function is used to find the index position of the first occurrence of the search term "JavaScript" within the documentText string. If the search term is found, the function returns the index position; otherwise, it returns -1.
// -------------------------------
    // const myName = "Hello, World!";
    // const index1 = myName.indexOf("World"); // Searches for the value "World"
    // console.log(index1); // Output: 7

    // const index2 = myName.indexOf("Earth"); // Searches for the value "Earth" (not found)
    // console.log(index2); // Output: -1
// 5.lastindexof()
        // One practical real case where the lastIndexOf() function in JavaScript is commonly used is for searching and locating the last occurrence of a substring within a larger string.
        // Let's consider a scenario where you have a text document with multiple occurrences of a specific word or phrase, and you want to find the index position of the last occurrence.In this case, the lastIndexOf() function is used to find the index position of the last occurrence of the search term "JavaScript" within the documentText string. If the search term is found, the function returns the index position; otherwise, it returns -1.
        // Here's an example:
        // javascript
        // Copy code
        // var documentText = "JavaScript is a popular programming language used for web development. JavaScript is versatile and widely adopted.";
        // var searchTerm = "JavaScript";
        // var lastIndex = documentText.lastIndexOf(searchTerm);
        // In this case, the lastIndexOf() function is used to find the index position of the last occurrence of the search term "JavaScript" within the documentText string. If the search term is found, the function returns the index position; otherwise, it returns -1.
// ----------------------------
    // const myName = "Hello, World!";
    // const lastIndex1 = myName.lastIndexOf("o"); // Searches for the last occurrence of "o"
    // console.log(lastIndex1); // Output: 8

    // const lastIndex2 = myName.lastIndexOf("Earth"); // Searches for "Earth" (not found)
    // console.log(lastIndex2); // Output: -1
// 6. concat ()
    // const myName1 = "Hello";
    // const myName2 = "World";
    // const myName3 = ", how are you?";
    // const concatenated = myName1.concat(", ", myName2, myName3);
    // console.log(concatenated); // Output: "Hello, World, how are you?"
// 7.includes ()
    // One practical real case where the includes() function in JavaScript is commonly used is for checking the presence of a specific value within an array or string.Let's say you have an array of numbers representing the grades of students, and you want to determine if a particular grade is present in the array:In this example, the includes() function is used to check if the value searchGrade (90) is present in the grades array. If the value is found, the function returns true; otherwise, it returns false.

    // var grades = [85, 90, 75, 92, 80];
    // var searchGrade = 90;
    // var isGradePresent = grades.includes(searchGrade);
    // In this example, the includes() function is used to check if the value searchGrade (90) is present in the grades array. If the value is found, the function returns true; otherwise, it returns false.
// ------------------------
    // const includes1 = myName.includes("World"); // Checks if "World" is present
    // console.log(includes1); // Output: true

    // const includes2 = myName.includes("Earth"); // Checks if "Earth" is present
    // console.log(includes2); // Output: false
//8. toUppercase ()
    // const uppercase = myName.toUpperCase();
    // console.log(uppercase); // Output: "HELLO, WORLD!"
// 9. toLowercase ()
    // const Lowercase = myName.toLowerCase();
    // console.log(Lowercase ); // Output: "HELLO, WORLD!"
// 10.charat ()
    // const char1 = myName.charAt(0); // Retrieves the character at index 0
    // console.log(char1); // Output: "H"

    // const char2 = myName.charAt(7); // Retrieves the character at index 7
    // console.log(char2); // Output: "W"
// 11. search()
    // const position1 = myName.search(/World/); // Searches for the pattern "World"
    // console.log(position1); // Output: 7

    // const position2 = myName.search(/Earth/); // Searches for the pattern "Earth" (not found)
    // console.log(position2); // Output: -1
// 12.replace ()
    // const newStr = myName.replace("World", "Universe");
    // console.log(newStr); // Output: "Hello, Universe!"

// 13.trim ()
    // const trimmed = myName.trim();
    // console.log(trimmed); // Output: "Hello, World!"
// 14.trimRight()
    // Apologies for the confusion. There is no built-in trimRight() method in JavaScript. However, you can achieve the same result using the trimEnd() method, which removes trailing whitespace characters from a string
    // const trimmed = myName.trimEnd();
    // console.log(trimmed); // Output: "   Hello, World!"
// trimleft()
//15. startswith()
    // const startsWith1 = myName.startsWith("Hello"); // Checks if the string starts with "Hello"
    // console.log(startsWith1); // Output: true

    // const startsWith2 = myName.startsWith("World"); // Checks if the string starts with "World"
    // console.log(startsWith2); // Output: false
//16. endswith ()
    // const endsWith1 = myName.endsWith("World!"); // Checks if the string ends with "World!"
    // console.log(endsWith1); // Output: true

    // const endsWith2 = myName.endsWith("Hello"); // Checks if the string ends with "Hello"
    // console.log(endsWith2); // Output: false
// 17.match()
    // One practical real case where the match() function in JavaScript is commonly used is for extracting specific patterns or substrings from a string using regular expressions.Regular expressions provide a powerful way to search for and manipulate text patterns in strings. The match() function allows you to extract substrings that match a specified regular expression pattern. In this case, the match() function is used to search for the pattern "quick.*fox" within the sentence string. The pattern consists of the word "quick" followed by any characters (.*) and then the word "fox". The match() function returns an array of substrings that match the pattern.

    // Here's an example:
    // var sentence = "The quick brown fox jumps over the lazy dog.";
    // var pattern = /quick.*fox/;
    // var matchedSubstrings = sentence.match(pattern);
    // In this case, the match() function is used to search for the pattern "quick.*fox" within the sentence string. The pattern consists of the word "quick" followed by any characters (.*) and then the word "fox". The match() function returns an array of substrings that match the pattern.

    // The value of the matchedSubstrings variable will be an array containing the matched substring:

    // javascript
    // Copy code
    // ["quick brown fox"]
    // You can use regular expressions to define more complex patterns for matching, such as searching for specific patterns, extracting data from strings, or performing text manipulation tasks.

    // The match() function is commonly used when you need to find and extract substrings that match a specific pattern within a larger string, which can be useful in tasks like data extraction, text analysis, or parsing information from textual data sources.
// -------------------
    // const matches = myName.match(/o/g);
    // console.log(matches); // Output: ["o", "o"]
//18. matchAll()
    // One practical real case where the matchAll() function in JavaScript is commonly used is for iterating over multiple matches of a regular expression within a string and extracting detailed information from each match. Let's say you have a string that contains multiple instances of a specific pattern, and you want to extract information from each occurrence. The matchAll() function allows you to do that by returning an iterator object that yields all the matches.

    // Here's an example:
    // var text = "OpenAI is revolutionizing artificial intelligence. OpenAI is based in San Francisco.";

    // var pattern = /OpenAI/g;

    // var matches = text.matchAll(pattern);

    // for (const match of matches) {
    //   console.log(match[0]);
    // }
    // In this example, the matchAll() function is used to find all occurrences of the pattern "OpenAI" within the text string. The pattern variable is a regular expression with the "g" flag to indicate a global search.

    // The matches variable holds the iterator object returned by matchAll(). By iterating over this object, we can access each match and extract information from it. In this case, we simply log the matched substring (match[0]) to the console.
// -------------------------
    // const regex = /o/g;
    // const matches = myName.matchAll(regex);

    // for (const match of matches) {
    //   console.log(match[0]); // Output: "o"
    // }

// 19.padstart()
    // One practical real case where the padStart() function in JavaScript is commonly used is for formatting strings with a specific length and padding characters at the beginning.For example, let's say you have a time value represented as a string in the format "HH:MM" (hours and minutes), and you want to ensure that the string always has a length of 5 characters by padding leading zeros if necessary.In this case, the padStart() function is used to ensure that the time string is always 5 characters long. The first argument specifies the desired length, which is 5 in this example. The second argument is the padding character, which is "0" to pad with leading zeros.

    // Here's an example using padStart():

    // javascript
    // Copy code
    // var time = "9:30";

    // var formattedTime = time.padStart(5, "0");
    // In this case, the padStart() function is used to ensure that the time string is always 5 characters long. The first argument specifies the desired length, which is 5 in this example. The second argument is the padding character, which is "0" to pad with leading zeros.

    // The resulting value of formattedTime will be:

    // javascript
    // Copy code
    // "09:30"
    // The padStart() function adds the necessary padding characters at the beginning of the string to achieve the desired length.

    // This function is useful for formatting strings with fixed lengths, such as aligning data in tabular structures, displaying timestamps or time values with consistent formatting, or generating formatted identifiers or codes.

    // By using padStart(), you can ensure that strings have a specific length and conform to a desired format by adding padding characters as needed.
// ---------------
    // const paddedStr = myName.padStart(10, "-");
    // console.log(paddedStr); // Output: "-----Hello"

// 20.padend ()
    // Apologies, but there is no built-in padEnd() function in JavaScript. However, I can provide an alternative example using a common scenario where padding at the end of a string is required.

    // One practical real case where the need for padding at the end of a string arises is when formatting text in a table or aligning columns of data. Let's consider a situation where you have a list of product names and corresponding prices, and you want to display them in a formatted table-like structure. In this example, we have an array of products with their names and prices. We want to display them in a table-like format, where the product names are left-aligned and padded with spaces to make them equal in length, followed by the prices. By using the repeat() function, we can create a string with a specific number of spaces (in this case, 15 - product.name.length). This string is then concatenated with the product name and price to create the desired formatted text.
    // This technique of using string concatenation and padding with spaces can be useful when you need to align and format text in a table or columnar structure. While there is no built-in padEnd() function in JavaScript, you can achieve similar results by combining string manipulation methods and padding techniques.

    // Here's an example of how you can use string concatenation and padding techniques to achieve the desired output:

    // javascript
    // Copy code
    // var products = [
    //   { name: "Apples", price: "$2.99" },
    //   { name: "Bananas", price: "$1.49" },
    //   { name: "Oranges", price: "$3.99" },
    //   { name: "Grapes", price: "$4.99" }
    // ];

    // for (var i = 0; i < products.length; i++) {
    //   var product = products[i];
    //   var formattedText = product.name + " ".repeat(15 - product.name.length) + product.price;
    //   console.log(formattedText);
    // }
    // In this example, we have an array of products with their names and prices. We want to display them in a table-like format, where the product names are left-aligned and padded with spaces to make them equal in length, followed by the prices. By using the repeat() function, we can create a string with a specific number of spaces (in this case, 15 - product.name.length). This string is then concatenated with the product name and price to create the desired formatted text.
    // This technique of using string concatenation and padding with spaces can be useful when you need to align and format text in a table or columnar structure. While there is no built-in padEnd() function in JavaScript, you can achieve similar results by combining string manipulation methods and padding techniques.
    // The output will be:

    // bash
    // Copy code
    // Apples          $2.99
    // Bananas         $1.49
    // Oranges         $3.99
    // Grapes          $4.99
    // This technique of using string concatenation and padding with spaces can be useful when you need to align and format text in a table or columnar structure. While there is no built-in padEnd() function in JavaScript, you can achieve similar results by combining string manipulation methods and padding techniques.
// --------------------
    // const paddedStr = myName.padEnd(10, "-");
    // console.log(paddedStr); // Output: "Hello-----"
// 21.substring ()
    // One practical real case where the substring() function in JavaScript is commonly used is for extracting a portion of a string based on its starting and ending positions. Let's say you have a long string representing a paragraph of text, and you want to extract a specific sentence or a substring within that paragraph. The substring() function is often used in various scenarios, such as extracting parts of a longer text, manipulating and processing substrings, or implementing text-based algorithms. It allows you to work with specific portions of a string, which can be beneficial for tasks like text analysis, data extraction, or generating summaries.

    // Here's an example:

    // javascript
    // Copy code
    // var paragraph = "JavaScript is a versatile programming language used for web development. It is widely adopted and provides powerful functionality.";

    // var sentence = paragraph.substring(0, 42);
    // In this case, the substring() function is used to extract the substring from the paragraph string starting from index 0 and ending at index 42 (exclusive). The resulting substring will contain the first sentence of the paragraph:

    // javascript
    // Copy code
    // "JavaScript is a versatile programming"
    // By specifying the start and end positions, you can extract a specific portion of the string.

    // The substring() function is often used in various scenarios, such as extracting parts of a longer text, manipulating and processing substrings, or implementing text-based algorithms. It allows you to work with specific portions of a string, which can be beneficial for tasks like text analysis, data extraction, or generating summaries.
// ------------
    // const substring1 = myName.substring(7); // Extracts the substring from index 7 to the end
    // console.log(substring1); // Output: "World!"

    // const substring2 = myName.substring(0, 5); // Extracts the substring from index 0 to 4
    // console.log(substring2); // Output: "Hello"
    // so what is the  main difference between substring and slice rather than their purpose
    // The main difference between substring and slice lies in how they handle negative parameters and the order of the start and end positions.

    // substring(startIndex, endIndex): The substring method returns a new string that includes characters from the specified startIndex up to, but not including, the endIndex. If startIndex is greater than endIndex, the substring method swaps the two values before extracting the substring. Negative parameters are treated as 0.
    // javascript
    // Copy code
    // var str = "Hello, World!";
    // console.log(str.substring(0, 5));    // Output: "Hello"
    // console.log(str.substring(7, 12));   // Output: "World"
    // console.log(str.substring(12, 7));   // Output: "World" (swapped positions)
    // console.log(str.substring(-5, 5));   // Output: "Hello" (negative start treated as 0)
    // slice(startIndex, endIndex): The slice method also returns a new string that includes characters from the specified startIndex up to, but not including, the endIndex. However, unlike substring, if startIndex is greater than endIndex, an empty string is returned. Negative parameters are treated as counting from the end of the string.
    // javascript
    // Copy code
    // var str = "Hello, World!";
    // console.log(str.slice(0, 5));    // Output: "Hello"
    // console.log(str.slice(7, 12));   // Output: "World"
    // console.log(str.slice(12, 7));   // Output: "" (empty string)
    // console.log(str.slice(-6, -1));  // Output: "World" (negative parameters count from the end)
    // In summary, the key differences between substring and slice are:
    
    // substring swaps positions if the start index is greater than the end index, while slice returns an empty string.
    // substring treats negative parameters as 0, while slice counts from the end of the string.
    // The end result of using negative or invalid parameters differs between the two methods.

// 22.sup ()
    // const formattedStr = `${myName}<sup>2</sup>`;
    // console.log(formattedStr); // Output: "Hello<sup>2</sup>"
// 23.valueOf()
    // One practical real case where the valueOf() function in JavaScript is commonly used is for converting custom objects or data types into their primitive values.When you use JavaScript's built-in data types, such as numbers or strings, the primitive value is readily available. However, when you're working with custom objects or implementing your own data types, the valueOf() function allows you to define how these objects should be converted into their primitive counterparts.
// Let's consider an example where you have a custom object representing a Date, and you want to convert it into a primitive value representing the timestamp in milliseconds:
//The valueOf() function can also be used with other custom objects or data types that you define. By implementing the valueOf() method for your objects, you can control how they are converted into primitive values, allowing you to customize the behavior based on your specific requirements
    // javascript
    // Copy code
    // var customDate = new Date();

    // var timestamp = customDate.valueOf();
    // In this case, the valueOf() function is called on the customDate object to obtain its primitive value, which is the timestamp in milliseconds since January 1, 1970.

    // The resulting value of the timestamp variable will be a number representing the date and time as a primitive value.

    // The valueOf() function can also be used with other custom objects or data types that you define. By implementing the valueOf() method for your objects, you can control how they are converted into primitive values, allowing you to customize the behavior based on your specific requirements.

    // The valueOf() function is commonly used when you need to convert custom objects or data types into their primitive values, enabling interoperability with JavaScript's built-in functionality or other libraries and frameworks that rely on primitive values.
    // -----------------------------------
    // const value = myName.valueOf();
    // console.log(value); // Output: "Hello, World!"
// 24.small()
    // const formattedStr = `<small>${myName}</small>`;
    // console.log(formattedStr); // Output: "<small>Hello, World!</small>"
//25. link()
    // const linkText = "Click here";
    // const url = "https://example.com";
    // const link = `<a href="${url}">${linkText}</a>`;
    // console.log(link); // Output: "<a href="https://example.com">Click here</a>"
// 26.fontsize()
    // const formattedStr = `<span style="font-size: 20px;">${myName}</span>`;
    // console.log(formattedStr); // Output: "<span style="font-size: 20px;">Hello, World!</span>"
// 27.fontcolor()
    // const formattedStr = `<span style="color: blue;">${myName}</span>`;
    // console.log(formattedStr); // Output: "<span style="color: blue;">Hello, World!</span>"
// 28.anchor()
    // const url = "https://example.com";
    // const anchor = `<a href="${url}">${myName}</a>`;
    // console.log(anchor); // Output: "<a href="https://example.com">Click here</a>"
// 29.ParseInt()
    // The parseInt() function in JavaScript is used to parse a string and convert it to an integer
    // const num = parseInt(str);
    // console.log(num); // Output: 123
