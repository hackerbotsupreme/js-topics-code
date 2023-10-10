let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding a new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)
// 51 most commolnly used array methods in javascript with what they do ?
// 1.concat()
// 2.copywithin 
// 3.entries
// 4.every 
// 5.fill 
// 6.filter 
// 7.find 
// 8.findindddex 
// 9.flat 
// 10.flatmap 
// 11.from 
// 12.includes 
// 13.indesof 
// 14.join 
// 15.keys 
// 16.indesof 
// 17.map 
// 18.pop 
// 19.push 
// 20.reduce 
// 21.reduceright 
// 22.reverse 
// 23.shift 
// 24.slicr 
// 25.some 
// 26.splice 
// 27.telocalstring 
// 28.tostring 
// 29.unshift 
// 30.values 
// 31.flatmap 
// 32.filter 
// 33.find 
// 34.findindex 
// 35.foreach 
// 36.includes 
// 37.indexof 
// 38.join 
// 39.keys 
// 40.lastindexof 
// 41.map 
// 42.pop 
// 43.push 
// 44.reduce 
// 45.reduceend 
// 46.shift  
// 47.slice
// 48.reduce + map 
// 49.every + some 
// 50.foreach + push 
// 51. filter +reduce 
// 53. some + indexof 
// 54.slice + conact 
// 55. find +map 
// 56. every + filter 
// 57. foreach + slice 
// 58. indexof + splice 

// filter() + map(): Filters the array and maps the filtered elements into a new array.
// findIndex() + splice(): Finds the index of an element and removes it from the array.
// every() + some(): Checks if all elements pass a test and if at least

// reduce() + map(): Reduces the array to a single value while transforming each element.
// forEach() + push(): Iterates over the array and pushes elements to a new array or modifies the existing array.
// filter() + reduce(): Filters the array based on a condition and reduces the filtered elements to a single value.
// some() + indexOf(): Checks if an element exists in the array by using indexOf() inside a some() callback function.
// slice() + concat(): Extracts a section of an array and concatenates it with another array or elements.
// map() + join(): Transforms each element in the array and joins them into a string.
// reduce() + filter(): Reduces the array to a single value based on a condition specified in the filter() callback function.
// find() + map(): Finds an element in the array and transforms it using the map() callback function.
// every() + filter(): Checks if all elements pass a condition specified in the filter() callback function.
// forEach() + slice(): Iterates over the array and extracts a portion of the array for each iteration.
// reduceRight() + concat(): Reduces the array from right to left and concatenates the values into a new array.
// filter() + map() + reduce(): Filters the array, transforms the filtered elements, and reduces them to a single value.
// some() + map(): Checks if at least one element satisfies a condition and transforms the matching elements.
// indexOf() + splice(): Finds the index of an element and removes it from the array using splice().
// 1.concat(): Concatenates two or more arrays and returns a new array.
    // var myArray = ['Hello', 'World'];
    // var myString = '!';
    // var newArray = myArray.concat(myString);

    // console.log(newArray); // Output: ['Hello', 'World', '!']
// 2.copyWithin(): Copies elements within an array to another position in the same array.
    // var myArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    // myArray.copyWithin(2, 0, 3);
                        // target , start , end     
    // console.log(myArray); // Output: ['apple', 'banana', 'apple', 'banana', 'cherry']
    // -----------------------
    //One practical real case where the copyWithin() function in JavaScript is commonly used is for efficiently copying and rearranging elements within an array.
    // Consider a scenario where you have an array representing a sequence of numbers, and you want to rearrange some elements within the array without creating a new array or using multiple temporary variables.
    // In this case, the copyWithin() function is called on the numbers array. The first argument, 2, specifies the index where the copied elements will be placed. The second argument, 5, represents the starting index of the elements to be copied. The third argument, 8, indicates the ending index (exclusive) of the elements to be copied.
    // After executing the copyWithin() function, the array will be modified as follows:
    // The copyWithin() function is particularly useful when you need to efficiently manipulate arrays by copying elements within the same array structure. It allows you to avoid creating a new array and efficiently update the existing array's elements.
    // Some practical applications of copyWithin() include rearranging and shuffling elements within a deck of cards, reordering items in a list, or implementing algorithms that require in-place modifications to array elements.

    // Here's an example:
    // var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // numbers.copyWithin(2, 5, 8);
    // Outut:  [1, 2, 6, 7, 8, 6, 7, 8, 9]
    // The elements at indices 5, 6, and 7 (6, 7, 8) are copied and placed starting from index 2, resulting in the rearrangement of elements within the array.


// 3.entries(): Returns a new array iterator that contains key/value pairs for each index in the array.
    // const fruits = ['apple', 'banana', 'cherry'];

    // const iterator = fruits.entries();

    // for (let entry of iterator) {
    //   console.log(entry);
    // }
// ------------------
    // One practical real case where the entries() function in JavaScript is commonly used is for iterating over the key-value pairs of an object or entries of a Map and performing operations based on those pairs.
    // Let's say you have an object representing a student record with properties like name, age, and grade, and you want to iterate over the key-value pairs of the object to perform some calculations or generate a report.
    
    // Here's an example:

    // var student = {
    //   name: "John Doe",
    //   age: 18,
    //   grade: "A"
    // };
    // var studentEntries = Object.entries(student);
    // for (var [key, value] of studentEntries) {
    //   console.log(key + ": " + value);
    // }
    // In this case, the entries() function is used to obtain an array of key-value pairs from the student object. The Object.entries() function converts the object into an array of arrays, where each inner array contains the key-value pair.
    // By iterating over the studentEntries array using destructuring assignment, we can access each key-value pair. In the example, we simply log the key and value to the console.

    // The output will be:

    // name: John Doe
    // age: 18
    // grade: A
    // The entries() function is commonly used in scenarios where you need to process or analyze the properties and values of an object or entries of a Map. It allows you to dynamically iterate over the key-value pairs, perform calculations or transformations, generate reports, or implement algorithms based on the data contained in the entries.
    // Using entries(), you can work with the structured data in a more flexible and dynamic manner, making it useful in a wide range of applications, including data processing, form submissions, configuration settings, and more.





// 4.every(): Checks if all elements in the array satisfy a given condition.
    // const numbers = [2, 4, 6, 8, 10];
    // const allEven = numbers.every(function(number) {
    //   return number % 2 === 0;
    // });

    // console.log(allEven); // Output: true
    // // --------------------------
    // One practical real case where the every() function in JavaScript is commonly used is for validating whether all elements in an array satisfy a specific condition or criteria.
    // For example, let's consider a scenario where you have an array of numbers representing students' exam scores, and you want to check if all the students passed the exam by ensuring that their scores are above a certain threshold.
    // Here's an example:

    // var scores = [85, 90, 78, 92, 88];
    // var allPassed = scores.every(function(score) {
    //   return score >= 70;
    // });
    // In this case, the every() function is called on the scores array. The provided callback function checks if each score is greater than or equal to 70, which is the passing threshold.
    // The every() function iterates through each element of the array and returns true if all elements satisfy the condition specified by the callback function. Otherwise, it returns false.
    // In the example, the allPassed variable will be true since all scores are above 70.
    // The every() function is commonly used for validation purposes, such as checking if all elements in an array meet certain criteria, constraints, or conditions. It is helpful in scenarios where you need to ensure that a specific condition is satisfied by every element before proceeding with further operations or decisions.
    // Other practical applications of every() include checking if all checkboxes in a form are selected, validating input data, or performing quality checks on datasets.
// 5.fill(): Fills all or a portion of an array with a specified value.
    // Certainly! Here's an example that demonstrates the usage of the fill() method on an array in JavaScript:

    // javascript
    // Copy code
    // const numbers = [1, 2, 3, 4, 5];

    // numbers.fill(0, 2, 4);

    // console.log(numbers); // Output: [1, 2, 0, 0, 5]
    // In this example, we have an array called numbers containing five elements. We want to replace a portion of the array with a specific value.
    // The fill() method is called on the numbers array. It takes three arguments: the value to fill, the start index (inclusive), and the end index (exclusive). In this case, we want to fill the values with 0 starting from the index 2 (inclusive) up to the index 4 (exclusive).

    // After calling numbers.fill(0, 2, 4), the array is modified, and the elements at indices 2 and 3 are replaced with 0.

    // Finally, we log the modified numbers array to the console, which outputs [1, 2, 0, 0, 5]. The values at indices 2 and 3 have been replaced with 0 as specified.

    // The fill() method is useful when you want to set a specific range of elements in an array to a particular value without modifying the length of the array.
    // -----------------
    //One practical real case where the fill() function in JavaScript is commonly used is for initializing or modifying array elements with a specific value.
    // For example, let's say you have an array representing a game board with empty spaces, and you want to fill the entire board with a specific symbol or marker to indicate that the spaces are occupied.

    // Here's an example:

    // javascript
    // Copy code
    // var board = ["", "", "", "", "", "", "", "", ""];

    // board.fill("X");
    // In this case, the fill() function is called on the board array, and the argument "X" specifies the value to be filled in for all array elements.

    // After executing the fill() function, the board array will be modified as follows:

    // javascript
    // Copy code
    // ["X", "X", "X", "X", "X", "X", "X", "X", "X"]
    // All the empty spaces in the array are replaced with the value "X".

    // The fill() function is commonly used in scenarios where you need to initialize or modify array elements with a specific value. It allows you to quickly set all or a portion of the array to a predefined value without using loops or manual assignment.

    // Other practical applications of fill() include resetting arrays to a default value, initializing arrays with a specific pattern or value, or preparing data structures before performing operations or calculations.
// 6.filter(): Creates a new array with all elements that pass a test.
    // const numbers = [1, 2, 3, 4, 5];

    // const evenNumbers = numbers.filter(function(number) {
    //   return number % 2 === 0;
    // });

    // console.log(evenNumbers); // Output: [2, 4]
// -------------------------------
        // One practical real case where the filter() function in JavaScript is commonly used is for filtering elements in an array based on specific conditions or criteria.
        // For example, let's say you have an array of products, and you want to filter out all products that are out of stock or have a price higher than a certain threshold.
        // In this case, the filter() function is called on the products array. The provided callback function checks if each product is in stock (inStock property is true) and if its price is less than or equal to 500.
        // The filter() function iterates through each element of the array and returns a new array containing only the elements that satisfy the condition specified by the callback function.
        // In the example, the availableProducts array will contain the filtered products that are both in stock and have a price of 500 or less:
        // The filter() function is commonly used for data filtering and selection, where you need to extract a subset of elements from an array based on specific conditions. It allows you to easily extract and work with the elements that meet certain criteria, facilitating data analysis, searching, or performing operations on specific subsets of data.
        // Other practical applications of filter() include implementing search functionality, removing duplicates, or selecting specific data points based on various criteria in applications such as e-commerce, data visualization, or data manipulation.
        // Here's an example:

        // var products = [
        //   { name: "iPhone", price: 999, inStock: true },
        //   { name: "Laptop", price: 1499, inStock: false },
        //   { name: "Headphones", price: 199, inStock: true },
        //   { name: "Smartwatch", price: 299, inStock: false }
        // ];

        // var availableProducts = products.filter(function(product) {
        //   return product.inStock && product.price <= 500;
        // });
        // In this case, the filter() function is called on the products array. The provided callback function checks if each product is in stock (inStock property is true) and if its price is less than or equal to 500.
        // The filter() function iterates through each element of the array and returns a new array containing only the elements that satisfy the condition specified by the callback function.
        // In the example, the availableProducts array will contain the filtered products that are both in stock and have a price of 500 or less:


        // [
        //   { name: "Headphones", price: 199, inStock: true }
        // ]
        // The filter() function is commonly used for data filtering and selection, where you need to extract a subset of elements from an array based on specific conditions. It allows you to easily extract and work with the elements that meet certain criteria, facilitating data analysis, searching, or performing operations on specific subsets of data.
        // Other practical applications of filter() include implementing search functionality, removing duplicates, or selecting specific data points based on various criteria in applications such as e-commerce, data visualization, or data manipulation.
// 7.find(): Returns the first element in the array that satisfies a provided testing function.
    // const numbers = [1, 2, 3, 4, 5];

    // const foundNumber = numbers.find(function(number) {
    //   return number > 3;
    // });

    // console.log(foundNumber); // Output: 4
// -------------------------------
    // One practical real case where the find() function in JavaScript is commonly used is for searching and retrieving the first element in an array that satisfies a specific condition or criteria.
    // Let's consider a scenario where you have an array of user objects, and you want to find a specific user by their unique identifier.
    // In this case, the find() function is called on the users array. The provided callback function checks if each user's id property matches the desired userId.
    // The find() function iterates through each element of the array and returns the first element that satisfies the condition specified by the callback function.
    // In the example, the foundUser variable will contain the user object with an id of 3:
    // The find() function stops iterating and returns the first matching element it encounters, so it is particularly useful when you only need to retrieve the first occurrence that meets a specific condition.
    // The find() function is commonly used in scenarios where you need to search and retrieve a specific element from an array based on a particular condition. It allows you to easily locate and access the desired element, facilitating tasks such as user lookups, data retrieval, or filtering data based on specific criteria.
    // Other practical applications of find() include searching for specific items in an inventory, identifying matches in a list, or finding objects based on specific properties in various real-world applications, such as e-commerce, data management, or search functionalities.
    // Here's an example:

    // var users = [
    //   { id: 1, name: "John" },
    //   { id: 2, name: "Jane" },
    //   { id: 3, name: "Alex" },
    //   { id: 4, name: "Emily" }
    // ];

    // var userId = 3;

    // var foundUser = users.find(function(user) {
    //   return user.id === userId;
    // });
    // In this case, the find() function is called on the users array. The provided callback function checks if each user's id property matches the desired userId.
    // The find() function iterates through each element of the array and returns the first element that satisfies the condition specified by the callback function.
    // In the example, the foundUser variable will contain the user object with an id of 3:

    // { id: 3, name: "Alex" }
    // The find() function stops iterating and returns the first matching element it encounters, so it is particularly useful when you only need to retrieve the first occurrence that meets a specific condition.
    // The find() function is commonly used in scenarios where you need to search and retrieve a specific element from an array based on a particular condition. It allows you to easily locate and access the desired element, facilitating tasks such as user lookups, data retrieval, or filtering data based on specific criteria.
    // Other practical applications of find() include searching for specific items in an inventory, identifying matches in a list, or finding objects based on specific properties in various real-world applications, such as e-commerce, data management, or search functionalities.
// 8.findIndex(): Returns the index of the first element in the array that satisfies a provided testing function.
    // const numbers = [1, 2, 3, 4, 5];

    // const index = numbers.findIndex(function(number) {
    //   return number > 3;
    // });

    // console.log(index); // Output: 3
    // -------------------------------
    // One practical real case where the find() function in JavaScript is commonly used is for searching and retrieving the first element in an array that satisfies a specific condition or criteria.
    // Let's consider a scenario where you have an array of user objects, and you want to find a specific user by their unique identifier.
    // In this case, the find() function is called on the users array. The provided callback function checks if each user's id property matches the desired userId.
    // The find() function iterates through each element of the array and returns the first element that satisfies the condition specified by the callback function.
    // In the example, the foundUser variable will contain the user object with an id of 3:
    // only need to retrieve the first occurrence that meets a specific condition.
    // The find() function is commonly used in scenarios where you need to search and retrieve a specific element from an array based on a particular condition. It allows you to easily locate and access the desired element, facilitating tasks such as user lookups, data retrieval, or filtering data based on specific criteria.
    // Other practical applications of find() include searching for specific items in an inventory, identifying matches in a list, or finding objects based on specific properties in various real-world applications, such as e-commerce, data management, or search functionalities.
    // Here's an example:

    // var users = [
    //   { id: 1, name: "John" },
    //   { id: 2, name: "Jane" },
    //   { id: 3, name: "Alex" },
    //   { id: 4, name: "Emily" }
    // ];

    // var userId = 3;

    // var foundUser = users.find(function(user) {
    //   return user.id === userId;
    // });
    // In this case, the find() function is called on the users array. The provided callback function checks if each user's id property matches the desired userId.
    // The find() function iterates through each element of the array and returns the first element that satisfies the condition specified by the callback function.
    // In the example, the foundUser variable will contain the user object with an id of 3:

    // { id: 3, name: "Alex" }
    // The find() function stops iterating and returns the first matching element it encounters, so it is particularly useful when you only need to retrieve the first occurrence that meets a specific condition.
    // The find() function is commonly used in scenarios where you need to search and retrieve a specific element from an array based on a particular condition. It allows you to easily locate and access the desired element, facilitating tasks such as user lookups, data retrieval, or filtering data based on specific criteria.
    // Other practical applications of find() include searching for specific items in an inventory, identifying matches in a list, or finding objects based on specific properties in various real-world applications, such as e-commerce, data management, or search functionalities.





    // User
    // state me one good  practical real  case where  findIndex  of js are used 

    // One practical real case where the findIndex() function in JavaScript is commonly used is for finding the index of the first element in an array that satisfies a specific condition or criteria.

    // For example, let's say you have an array of numbers representing exam scores, and you want to find the index of the first score that is above a certain threshold.// In this case, the findIndex() function is called on the scores array. The provided callback function checks if each score is greater than the passingScore threshold./ The findIndex() function iterates through each element of the array and returns the index of the first element that satisfies the condition specified by the callback function. If no element satisfies the condition, it returns -1.


    // Here's an example:

    // var scores = [65, 72, 80, 88, 92];
    // var passingScore = 75;
    // var firstPassingIndex = scores.findIndex(function(score) {
    //   return score > passingScore;
    // });
    // In this case, the findIndex() function is called on the scores array. The provided callback function checks if each score is greater than the passingScore threshold.

    // The findIndex() function iterates through each element of the array and returns the index of the first element that satisfies the condition specified by the callback function. If no element satisfies the condition, it returns -1.

    // In the example, the firstPassingIndex variable will contain the index of the first score that is above 75, which is 2.

    // The findIndex() function is particularly useful when you need to locate the index of the first occurrence that meets a specific condition or criteria. It allows you to quickly find the position of an element within an array based on a particular condition.

    // The findIndex() function is commonly used in scenarios where you need to search for the position of a specific element within an array, perform conditional operations based on the element's index, or retrieve related data associated with that index.

    // Other practical applications of findIndex() include implementing pagination, identifying the index of specific elements for further processing, or managing data relationships in applications such as data analysis, task management, or data-driven web applications.

// 9.flat(): Creates a new array by flattening a nested array to a specified depth.
    // const numbers = [1, 2, [3, 4], 5, [6, [7, 8]]];

    // const flattenedArray = numbers.flat();

    // console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

    // -------------------------------
    // One practical real case where the flat() function in JavaScript is commonly used is for flattening nested arrays into a single-level array.// Let's say you have an array that contains nested arrays, and you want to flatten it to obtain a single-level array with all the elements combined.
    // The flat() function is particularly useful when you have nested arrays and you want to simplify the data structure by combining all elements into a single array. It provides a convenient way to access and process all the elements without having to deal with nested levels of arrays.

    // The flat() function is commonly used in scenarios where you need to work with flattened data, such as when manipulating JSON data structures, processing recursive data structures, or performing operations that require a flat representation of the data.

    // Other practical applications of flat() include merging arrays, working with hierarchical data, handling tree structures, or transforming data between different formats or representations in various real-world applications, such as data processing, data visualization, or working with APIs.

    // Here's an example:

    // var nestedArray = [1, [2, 3], [4, [5, 6]]];
    // var flattenedArray = nestedArray.flat();
    // In this case, the flat() function is called on the nestedArray. It recursively flattens the nested arrays into a single-level array.

    // After executing the flat() function, the flattenedArray variable will contain a single-level array:

    // [1, 2, 3, 4, 5, 6]
    // The flat() function is particularly useful when you have nested arrays and you want to simplify the data structure by combining all elements into a single array. It provides a convenient way to access and process all the elements without having to deal with nested levels of arrays.

    // The flat() function is commonly used in scenarios where you need to work with flattened data, such as when manipulating JSON data structures, processing recursive data structures, or performing operations that require a flat representation of the data.

    // Other practical applications of flat() include merging arrays, working with hierarchical data, handling tree structures, or transforming data between different formats or representations in various real-world applications, such as data processing, data visualization, or working with APIs.
//10. flatMap(): Maps each element using a mapping function, then flattens the result into a new array.
    // const numbers = [1, 2, 3, 4, 5];

    // const doubledNumbers = numbers.flatMap(function(number) {
    //   return [number, number * 2];
    // });

    // console.log(doubledNumbers); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
    // -------------------------------
        // One practical real case where the flatMap() function in JavaScript is commonly used is when you have an array of objects and you want to extract a specific property from each object and flatten the results into a single array.// For example, let's say you have an array of user objects, and you want to extract all the unique tags associated with each user and store them in a single array./ In this case, the flatMap() function is called on the users array. The provided callback function returns the tags property of each user object.
        
        // The flatMap() function applies the callback function to each element of the array and then flattens the resulting arrays into a single array. It handles the flattening process automatically, eliminating the need for an additional step of manually flattening the results.
        
        // After executing the flatMap() function, the uniqueTags variable will contain a single array with all the unique tags:
        
        // ["developer", "javascript", "designer", "ux", "developer", "python"]
        // The flatMap() function is particularly useful when you need to extract and flatten specific properties or values from objects within an array. It provides a concise way to perform both the extraction and flattening operations in a single step.
        
        // The flatMap() function is commonly used in scenarios where you need to work with nested or hierarchical data structures, extract specific properties or values, transform data, or perform operations that require a flat representation of the extracted values.
        
        // Other practical applications of flatMap() include working with arrays of arrays, handling nested data structures, processing data from APIs or databases, or performing data manipulations in various real-world applications, such as data analysis, data transformation, or data visualization.
        
        
        
        // Here's an example:
        
        // var users = [
        //   { id: 1, name: "John", tags: ["developer", "javascript"] },
        //   { id: 2, name: "Jane", tags: ["designer", "ux"] },
        //   { id: 3, name: "Alex", tags: ["developer", "python"] }
        // ];
        
        // var uniqueTags = users.flatMap(function(user) {
        //   return user.tags;
        // });
        // In this case, the flatMap() function is called on the users array. The provided callback function returns the tags property of each user object.
        
        // The flatMap() function applies the callback function to each element of the array and then flattens the resulting arrays into a single array. It handles the flattening process automatically, eliminating the need for an additional step of manually flattening the results.
        
        // After executing the flatMap() function, the uniqueTags variable will contain a single array with all the unique tags:
        
        // ["developer", "javascript", "designer", "ux", "developer", "python"]
        // The flatMap() function is particularly useful when you need to extract and flatten specific properties or values from objects within an array. It provides a concise way to perform both the extraction and flattening operations in a single step.
        
        // The flatMap() function is commonly used in scenarios where you need to work with nested or hierarchical data structures, extract specific properties or values, transform data, or perform operations that require a flat representation of the extracted values.
        
        // Other practical applications of flatMap() include working with arrays of arrays, handling nested data structures, processing data from APIs or databases, or performing data manipulations in various real-world applications, such as data analysis, data transformation, or data visualization.
        
        
    
    
    
// 11.forEach(): Executes a provided function once for each array element.
    // const numbers = [1, 2, 3, 4, 5];

    // numbers.forEach(function(number) {
    //   console.log(number);
    // });

    // // Output:
    // // 1
    // // 2
    // // 3
    // // 4
    // // 5
    // -------------------------------
        // One practical real case where the forEach() function in JavaScript is commonly used is for iterating over elements in an array and performing a specific operation or action on each element.

        // For example, let's say you have an array of user objects, and you want to display a greeting message for each user in the console.
        
        // In this case, the forEach() function is called on the users array. The provided callback function is executed for each element in the array, and it logs a greeting message to the console for each user.
        
        // The forEach() function iterates through each element of the array and applies the specified callback function to each element.
        
        // When executing the code, you will see the following output in the console:
        // The forEach() function is commonly used when you need to perform a specific action or operation on each element of an array, such as updating values, making API calls, performing calculations, or manipulating data.
        
        // It provides a convenient way to iterate over array elements without the need for manual indexing or maintaining a separate loop counter.
        
        // Other practical applications of forEach() include updating the DOM elements, handling events, processing data, or performing any operation that needs to be applied to each element in an array or collection in various real-world applications, such as web development, data manipulation, or task automation.
        // Here's an example:
        
        // var users = [
        //   { id: 1, name: "John" },
        //   { id: 2, name: "Jane" },
        //   { id: 3, name: "Alex" }
        // ];
        
        // users.forEach(function(user) {
        //   console.log("Hello, " + user.name + "!");
        // });
        // In this case, the forEach() function is called on the users array. The provided callback function is executed for each element in the array, and it logs a greeting message to the console for each user.
        
        // The forEach() function iterates through each element of the array and applies the specified callback function to each element.
        
        // When executing the code, you will see the following output in the console:
        
      
        // Hello, John!
        // Hello, Jane!
        // Hello, Alex!
        // The forEach() function is commonly used when you need to perform a specific action or operation on each element of an array, such as updating values, making API calls, performing calculations, or manipulating data.
        
        // It provides a convenient way to iterate over array elements without the need for manual indexing or maintaining a separate loop counter.
        
        // Other practical applications of forEach() include updating the DOM elements, handling events, processing data, or performing any operation that needs to be applied to each element in an array or collection in various real-world applications, such as web development, data manipulation, or task automation.
// 12.from(): Creates a new array from an array-like or iterable object.
    // const str = 'Hello, World!';
    // const strArray = Array.from(str);

    // console.log(strArray); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']
    // -------------------------------
    // One practical real case where the forEach() function in JavaScript is commonly used is for iterating over elements in an array and performing a specific operation or action on each element.// For example, let's say you have an array of user objects, and you want to display a greeting message for each user in the console.
    // In this case, the forEach() function is called on the users array. The provided callback function is executed for each element in the array, and it logs a greeting message to the console for each user.
    // The forEach() function iterates through each element of the array and applies the specified callback function to each element.
    // The forEach() function is commonly used when you need to perform a specific action or operation on each element of an array, such as updating values, making API calls, performing calculations, or manipulating data.
    
    // It provides a convenient way to iterate over array elements without the need for manual indexing or maintaining a separate loop counter.
    
    // Other practical applications of forEach() include updating the DOM elements, handling events, processing data, or performing any operation that needs to be applied to each element in an array or collection in various real-world applications, such as web development, data manipulation, or task automation.
    // Here's an example:
    
    // javascript
    // Copy code
    // var users = [
    //   { id: 1, name: "John" },
    //   { id: 2, name: "Jane" },
    //   { id: 3, name: "Alex" }
    // ];
    
    // users.forEach(function(user) {
    //   console.log("Hello, " + user.name + "!");
    // });
    // In this case, the forEach() function is called on the users array. The provided callback function is executed for each element in the array, and it logs a greeting message to the console for each user.
    // The forEach() function iterates through each element of the array and applies the specified callback function to each element.
    
    // When executing the code, you will see the following output in the console:
    
    // Copy code
    // Hello, John!
    // Hello, Jane!
    // Hello, Alex!
    // The forEach() function is commonly used when you need to perform a specific action or operation on each element of an array, such as updating values, making API calls, performing calculations, or manipulating data.
    
    // It provides a convenient way to iterate over array elements without the need for manual indexing or maintaining a separate loop counter.
    
    // Other practical applications of forEach() include updating the DOM elements, handling events, processing data, or performing any operation that needs to be applied to each element in an array or collection in various real-world applications, such as web development, data manipulation, or task automation.
// 13.includes(): Checks if an array contains a specific element.
    // const numbers = [1, 2, 3, 4, 5];

    // const includesThree = numbers.includes(3);
    // const includesTen = numbers.includes(10);

    // console.log(includesThree); // Output: true
    // console.log(includesTen); // Output: false
    // -------------------------------
    //One practical real case where the includes() function in JavaScript is commonly used is for checking if a specific value exists in an array or string.// For example, let's say you have an array of numbers representing product IDs, and you want to check if a given product ID is present in the array.
    // In this case, the includes() function is called on the productIds array. It checks if the productIdToCheck is present in the array.

    // The includes() function returns a boolean value indicating whether the specified value is found in the array. If the value is present, it returns true; otherwise, it returns false.

    // In the example, the isIncluded variable will contain true because the productIdToCheck of 456 is included in the productIds array.

    // The includes() function is particularly useful when you need to perform a simple presence check for a specific value in an array or string. It provides a concise way to determine if an element exists without requiring a manual loop or conditional checks.

    // The includes() function can also be used to check if a substring exists within a larger string.

    // Other practical applications of includes() include search functionalities, input validation, conditional rendering of elements, or filtering based on specific values in various real-world applications, such as e-commerce, form validation, data processing, or search functionality implementations.
    // Here's an example:

    // var productIds = [123, 456, 789, 1011];
    // var productIdToCheck = 456;
    // var isIncluded = productIds.includes(productIdToCheck);
    // In this case, the includes() function is called on the productIds array. It checks if the productIdToCheck is present in the array.

    // The includes() function returns a boolean value indicating whether the specified value is found in the array. If the value is present, it returns true; otherwise, it returns false.

    // In the example, the isIncluded variable will contain true because the productIdToCheck of 456 is included in the productIds array.

    // The includes() function is particularly useful when you need to perform a simple presence check for a specific value in an array or string. It provides a concise way to determine if an element exists without requiring a manual loop or conditional checks.

    // The includes() function can also be used to check if a substring exists within a larger string.

    // Other practical applications of includes() include search functionalities, input validation, conditional rendering of elements, or filtering based on specific values in various real-world applications, such as e-commerce, form validation, data processing, or search functionality implementations.
// 14.indexOf(): Returns the first index at which a given element is found in the array.
    // const fruits = ['apple', 'banana', 'orange', 'apple'];

    // const indexOfApple = fruits.indexOf('apple');
    // const indexOfMango = fruits.indexOf('mango');

    // console.log(indexOfApple); // Output: 0
    // console.log(indexOfMango); // Output: -1
    // -------------------------------
    // One practical real case where the indexOf() function in JavaScript is commonly used is for searching and retrieving the index of a specific value within an array or string.// For example, let's say you have an array of usernames, and you want to find the index of a particular username.
    // In this case, the indexOf() function is called on the usernames array. It searches for the position of the usernameToFind within the array.
    // The indexOf() function returns the index of the first occurrence of the specified value in the array. If the value is not found, it returns -1.
    
    // In the example, the index variable will contain the value 2 because the username "alex" is located at index 2 within the usernames array.
    
    // The indexOf() function is particularly useful when you need to locate the position of a specific value within an array or find the first occurrence of a value in a string.
    
    // It allows you to easily retrieve the index of an element, which can be useful for various purposes such as data retrieval, conditional checks, or manipulating array elements at a specific position.
    
    // Here's an example:
    
    // var usernames = ["john", "jane", "alex", "emily"];
    // var usernameToFind = "alex";
    // var index = usernames.indexOf(usernameToFind);
    // In this case, the indexOf() function is called on the usernames array. It searches for the position of the usernameToFind within the array.
    // The indexOf() function returns the index of the first occurrence of the specified value in the array. If the value is not found, it returns -1.
    
    // In the example, the index variable will contain the value 2 because the username "alex" is located at index 2 within the usernames array.
    
    // The indexOf() function is particularly useful when you need to locate the position of a specific value within an array or find the first occurrence of a value in a string.
    
    // It allows you to easily retrieve the index of an element, which can be useful for various purposes such as data retrieval, conditional checks, or manipulating array elements at a specific position.
    
    // The indexOf() function is commonly used in scenarios where you need to search for the position of a specific value within an array or string, perform conditional operations based on the element's index, or retrieve related data associated with that index.
    
    // Other practical applications of indexOf() include removing elements from an array, validating the uniqueness of values, identifying the occurrence of specific elements, or implementing search functionality in various real-world applications such as data management, filtering, or user input validation.
// 15.join(): Joins all elements of an array into a string.
    // const fruits = ['apple', 'banana', 'orange'];

    // const joinedString = fruits.join(', ');

    // console.log(joinedString); // Output: "apple, banana, orange"
    // -------------------------------
    // One practical real case where the join() function in JavaScript is commonly used is for converting an array of values into a string representation, with each element joined by a specified delimiter.
    // For example, let's say you have an array of tags representing different categories, and you want to display them as a comma-separated string.
    // In this case, the join() function is called on the tags array. It joins each element of the array into a single string, with a comma and space as the delimiter between each element.
    // After executing the join() function, the tagString variable will contain the following string:
    // In this case, the join() function is called on the tags array. It joins each element of the array into a single string, with a comma and space as the delimiter between each element.
    // After executing the join() function, the tagString variable will contain the following string:

    // "javascript, html, css"
    // The join() function is particularly useful when you need to convert an array of values into a string representation for display, storage, or transmission.
    
    // It provides a convenient way to concatenate array elements into a single string with a specified delimiter, without the need for manual iteration or concatenation operations.
    
    // The join() function can also be used to concatenate other types of values, such as numbers or objects, into a string representation.
    
    // Other practical applications of join() include generating CSV (comma-separated values) files, constructing URL query strings, creating formatted output, or generating dynamic strings in various real-world applications, such as data manipulation, report generation, or string formatting.
    // Here's an example:
    // var tags = ["javascript", "html", "css"];
    
    // var tagString = tags.join(", ");
    // In this case, the join() function is called on the tags array. It joins each element of the array into a single string, with a comma and space as the delimiter between each element.
    // After executing the join() function, the tagString variable will contain the following string:

    // "javascript, html, css"
    // The join() function is particularly useful when you need to convert an array of values into a string representation for display, storage, or transmission.
    
    // It provides a convenient way to concatenate array elements into a single string with a specified delimiter, without the need for manual iteration or concatenation operations.
    
    // The join() function can also be used to concatenate other types of values, such as numbers or objects, into a string representation.
    
    // Other practical applications of join() include generating CSV (comma-separated values) files, constructing URL query strings, creating formatted output, or generating dynamic strings in various real-world applications, such as data manipulation, report generation, or string formatting.
// 16.keys(): Returns a new array iterator that contains the keys of the array.
    // const fruits = ['apple', 'banana', 'orange'];

    // const keys = fruits.keys();

    // for (const key of keys) {
    //   console.log(key);
    // }

    // // Output:
    // // 0
    // // 1
    // // 2
    // -------------------------------
    // One practical real case where the keys() function in JavaScript is commonly used is for obtaining an array of keys from an object.
    // For example, let's say you have an object that represents a user profile, and you want to retrieve an array of all the keys present in the object.
    // In this case, the keys() function is called on the Object object. It retrieves an array of keys present in the userProfile object.
    // After executing the keys() function, the keysArray variable will contain the following array:
    // The keys() function is particularly useful when you need to extract and work with the keys of an object dynamically. It allows you to access the keys without having to know them beforehand, which can be useful for tasks such as object manipulation, data validation, or iterating over object properties.
    
    // By obtaining an array of keys, you can easily perform operations on specific properties or loop over the object's properties using the retrieved keys.
    
    // Other practical applications of keys() include dynamic property access, object comparison, object cloning, or performing operations on object properties in various real-world applications such as data processing, object manipulation, or building dynamic user interfaces.
    // Here's an example:
   
    // var userProfile = {
    //   username: "john_doe",
    //   firstName: "John",
    //   lastName: "Doe",
    //   age: 30,
    //   email: "john.doe@example.com"
    // };
    
    // var keysArray = Object.keys(userProfile);
    // In this case, the keys() function is called on the Object object. It retrieves an array of keys present in the userProfile object.
    
    // After executing the keys() function, the keysArray variable will contain the following array:
    
    // javascript
    // Copy code
    // ["username", "firstName", "lastName", "age", "email"]
    // The keys() function is particularly useful when you need to extract and work with the keys of an object dynamically. It allows you to access the keys without having to know them beforehand, which can be useful for tasks such as object manipulation, data validation, or iterating over object properties.
    
    // By obtaining an array of keys, you can easily perform operations on specific properties or loop over the object's properties using the retrieved keys.
    
    // Other practical applications of keys() include dynamic property access, object comparison, object cloning, or performing operations on object properties in various real-world applications such as data processing, object manipulation, or building dynamic user interfaces.
// 17.lastIndexOf(): Returns the last index at which a given element is found in the array.
    // const numbers = [1, 2, 3, 4, 5, 3, 6, 7];

    // const lastIndexThree = numbers.lastIndexOf(3);
    // const lastIndexTen = numbers.lastIndexOf(10);

    // console.log(lastIndexThree); // Output: 5
    // console.log(lastIndexTen); // Output: -1
//-----------------------------
    // One practical real case where the lastIndexOf() function in JavaScript is commonly used is for finding the last occurrence of a specific value within an array or string.
    // For example, let's say you have an array of numbers representing product IDs, and you want to find the index of the last occurrence of a particular product ID.
    // In this case, the lastIndexOf() function is called on the productIds array. It searches for the last position of the productIdToFind within the array.

    // The lastIndexOf() function returns the index of the last occurrence of the specified value in the array. If the value is not found, it returns -1.

    // In the example, the lastIndex variable will contain the value 3 because the product ID 456 is found at the last position in the productIds array.

    // The lastIndexOf() function is particularly useful when you need to locate the position of the last occurrence of a specific value within an array or find the last occurrence of a value in a string.

    // It allows you to easily retrieve the index of the last element, which can be useful for various purposes such as data retrieval, conditional checks, or manipulating array elements based on their last occurrence.

    // The lastIndexOf() function is commonly used in scenarios where you need to search for the position of the last occurrence of a specific value within an array or string, perform conditional operations based on the element's index, or retrieve related data associated with that index.

    // Other practical applications of lastIndexOf() include removing elements from an array based on their last occurrence, validating the uniqueness of values from the end of an array, identifying the last occurrence of specific elements, or implementing search functionality from the end of a string in various real-world applications such as data management, filtering, or user input validation.


    // Here's an example:

    // var productIds = [123, 456, 789, 456, 1011];
    // var productIdToFind = 456;
    // var lastIndex = productIds.lastIndexOf(productIdToFind);
    // In this case, the lastIndexOf() function is called on the productIds array. It searches for the last position of the productIdToFind within the array.

    // The lastIndexOf() function returns the index of the last occurrence of the specified value in the array. If the value is not found, it returns -1.

    // In the example, the lastIndex variable will contain the value 3 because the product ID 456 is found at the last position in the productIds array.

    // The lastIndexOf() function is particularly useful when you need to locate the position of the last occurrence of a specific value within an array or find the last occurrence of a value in a string.

    // It allows you to easily retrieve the index of the last element, which can be useful for various purposes such as data retrieval, conditional checks, or manipulating array elements based on their last occurrence.

    // The lastIndexOf() function is commonly used in scenarios where you need to search for the position of the last occurrence of a specific value within an array or string, perform conditional operations based on the element's index, or retrieve related data associated with that index.

    // Other practical applications of lastIndexOf() include removing elements from an array based on their last occurrence, validating the uniqueness of values from the end of an array, identifying the last occurrence of specific elements, or implementing search functionality from the end of a string in various real-world applications such as data management, filtering, or user input validation.





// 18.map(): Creates a new array with the results of calling a provided function on each element.
    // const numbers = [1, 2, 3, 4, 5];

    // const doubledNumbers = numbers.map((num) => num * 2);

    // console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    // -------------------------------
        // One practical real case where the map() function in JavaScript is commonly used is for transforming each element of an array into a new array based on a specific mapping logic.
        // For example, let's say you have an array of numbers representing temperatures in Celsius, and you want to convert them into Fahrenheit.// In this case, the map() function is called on the celsiusTemperatures array. It applies a transformation logic to each element of the array and returns a new array containing the converted Fahrenheit temperatures.
        // The map() function iterates over each element of the array and applies the specified mapping function to each element, creating a new array with the results.
        // The map() function is particularly useful when you need to perform a one-to-one transformation on each element of an array, such as converting units, applying formulas, or transforming data into a different format.
                
        // It allows you to create a new array based on the modified elements of the original array without modifying the original array itself.
        
        // The map() function can also be used to perform more complex transformations, such as extracting specific properties from objects, manipulating strings, or creating new objects based on existing ones.
        
        // Other practical applications of map() include data normalization, formatting data for display, performing calculations on arrays, or creating derived data from existing data in various real-world applications such as data processing, data visualization, or building dynamic user interfaces.
        
        // Here's an example:
        
        // var celsiusTemperatures = [25, 30, 15, 20];
        // var fahrenheitTemperatures = celsiusTemperatures.map(function(celsius) {
        // return (celsius * 9/5) + 32;
        // });
        // In this case, the map() function is called on the celsiusTemperatures array. It applies a transformation logic to each element of the array and returns a new array containing the converted Fahrenheit temperatures.
        // The map() function iterates over each element of the array and applies the specified mapping function to each element, creating a new array with the results.
        
        // After executing the map() function, the fahrenheitTemperatures array will contain the following values:
        
        // [77, 86, 59, 68]
        // The map() function is particularly useful when you need to perform a one-to-one transformation on each element of an array, such as converting units, applying formulas, or transforming data into a different format.
        
        // It allows you to create a new array based on the modified elements of the original array without modifying the original array itself.
        
        // The map() function can also be used to perform more complex transformations, such as extracting specific properties from objects, manipulating strings, or creating new objects based on existing ones.
        
        // Other practical applications of map() include data normalization, formatting data for display, performing calculations on arrays, or creating derived data from existing data in various real-world applications such as data processing, data visualization, or building dynamic user interfaces.
// 19.pop(): Removes the last element from the array and returns it.
    // const fruits = ['apple', 'banana', 'orange'];

    // const removedFruit = fruits.pop();

    // console.log(fruits); // Output: ['apple', 'banana']
    // console.log(removedFruit); // Output: 'orange'
    // -------------------------------
    // One practical real case where the pop() function in JavaScript is commonly used is for removing the last element from an array and retrieving that element.
    // For example, let's say you have an array of tasks representing a to-do list, and you want to remove and retrieve the last task from the list.// In this case, the pop() function is called on the tasks array. It removes the last element from the array and returns that element.
    // After executing the pop() function, the lastTask variable will contain the value "Task 4", which was the last task in the tasks array.
    // The pop() function is particularly useful when you need to remove the last element from an array and perform some operation with that element, such as displaying it, processing it, or updating other data based on its value.
    // By using pop(), you can easily retrieve and manipulate the last element in an array without needing to manually track the index or modify the array's length.
    // Other practical applications of pop() include implementing stack data structures, removing and processing items in reverse order, implementing undo/redo functionality, or managing dynamic data in various real-world applications such as task management systems, chat applications, or data manipulation tools.
    // Here's an example:
    
    // var tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
    // var lastTask = tasks.pop();
    // In this case, the pop() function is called on the tasks array. It removes the last element from the array and returns that element.
    // After executing the pop() function, the lastTask variable will contain the value "Task 4", which was the last task in the tasks array.
    // The pop() function is particularly useful when you need to remove the last element from an array and perform some operation with that element, such as displaying it, processing it, or updating other data based on its value.
    // By using pop(), you can easily retrieve and manipulate the last element in an array without needing to manually track the index or modify the array's length.
    // Other practical applications of pop() include implementing stack data structures, removing and processing items in reverse order, implementing undo/redo functionality, or managing dynamic data in various real-world applications such as task management systems, chat applications, or data manipulation tools.
// 20.push(): Adds one or more elements to the end of the array and returns the new length.
    // const fruits = ['apple', 'banana'];
    // fruits.push('orange');
    // console.log(fruits); // Output: ['apple', 'banana', 'orange']
    // -------------------------------
    // One practical real case where the push() function in JavaScript is commonly used is for adding elements to the end of an array.
    // For example, let's say you have an array representing a shopping cart, and you want to add items to the cart.
    // The push() function is particularly useful when you need to dynamically add elements to an array. It allows you to append items to the end of the array without having to manually manage the array's length or index.
    
    // By using push(), you can easily add new elements to an array, such as when adding items to a shopping cart, adding messages to a chat log, or appending data to a dynamic list.
    
    // Other practical applications of push() include implementing stack or queue data structures, managing dynamic lists, appending data to an array, or maintaining a history of actions in various real-world applications such as e-commerce platforms, chat applications, or data collection systems.
    // Here's an example:
   
    // var shoppingCart = ["Item 1", "Item 2", "Item 3"];
    // shoppingCart.push("Item 4");
    // In this case, the push() function is called on the shoppingCart array. It adds the specified item to the end of the array.
    // After executing the push() function, the shoppingCart array will be updated with the new item, and it will contain the following elements:
    
    // ["Item 1", "Item 2", "Item 3", "Item 4"]
    // The push() function is particularly useful when you need to dynamically add elements to an array. It allows you to append items to the end of the array without having to manually manage the array's length or index.
    
    // By using push(), you can easily add new elements to an array, such as when adding items to a shopping cart, adding messages to a chat log, or appending data to a dynamic list.
    
    // Other practical applications of push() include implementing stack or queue data structures, managing dynamic lists, appending data to an array, or maintaining a history of actions in various real-world applications such as e-commerce platforms, chat applications, or data collection systems.
// 21.reduce(): Applies a function to reduce the array to a single value.
    // const numbers = [1, 2, 3, 4, 5];

    // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // console.log(sum); // Output: 15
    // -------------------------------
        // One practical real case where the reduce() function in JavaScript is commonly used is for aggregating or calculating a single value from an array of values.

        // For example, let's say you have an array of numbers representing the prices of items in a shopping cart, and you want to calculate the total cost of all the items.
         
        // The reduce() function takes two arguments: a callback function and an initial value for the accumulator. The callback function receives the accumulator and each element of the array, and it returns the updated value of the accumulator.
        
        // After executing the reduce() function, the totalCost variable will contain the value 28.46, which is the sum of all the prices in the prices array.
        
        // The reduce() function is particularly useful when you need to perform calculations or aggregations on an array of values, such as calculating totals, averages, maximum or minimum values, or any other operation that requires combining multiple values into a single result.
        
        // It allows you to reduce an array of values into a single value by iteratively applying a calculation or operation to each element of the array.
        
        // Other practical applications of reduce() include finding the highest or lowest value in an array, counting occurrences of specific values, concatenating strings, grouping data, or performing custom calculations on array elements in various real-world applications such as data analysis, reporting, or financial calculations.
        // Here's an example:
        
        // var prices = [10.99, 5.99, 7.49, 3.99];
        // var totalCost = prices.reduce(function(acc, price) {
        //   return acc + price;
        // }, 0);
        // In this case, the reduce() function is called on the prices array. It iterates over each element of the array and accumulates a running total by adding each element to the accumulator (acc in the example).
        
        // The reduce() function takes two arguments: a callback function and an initial value for the accumulator. The callback function receives the accumulator and each element of the array, and it returns the updated value of the accumulator.
        
        // After executing the reduce() function, the totalCost variable will contain the value 28.46, which is the sum of all the prices in the prices array.
        
        // The reduce() function is particularly useful when you need to perform calculations or aggregations on an array of values, such as calculating totals, averages, maximum or minimum values, or any other operation that requires combining multiple values into a single result.
        
        // It allows you to reduce an array of values into a single value by iteratively applying a calculation or operation to each element of the array.
        
        // Other practical applications of reduce() include finding the highest or lowest value in an array, counting occurrences of specific values, concatenating strings, grouping data, or performing custom calculations on array elements in various real-world applications such as data analysis, reporting, or financial calculations.
// 22.reduceRight(): Applies a function to reduce the array from right to left to a single value.
    // const numbers = [1, 2, 3, 4, 5];

    // const concatenatedString = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue.toString(), '');

    // console.log(concatenatedString); // Output: "54321"
    // -------------------------------
    // One practical real case where the reduceRight() function in JavaScript is commonly used is for aggregating or calculating a single value from an array of values, starting from the right side of the array.
    // For example, let's say you have an array of strings representing the steps of a recipe, and you want to concatenate them in reverse order to display the recipe instructions.// In this case, the reduceRight() function is called on the recipeSteps array. It iterates over each element of the array starting from the right side and accumulates a result by concatenating each step with the accumulator (acc in the example).

    // The reduceRight() function takes two arguments: a callback function and an initial value for the accumulator. The callback function receives the accumulator and each element of the array, and it returns the updated value of the accumulator.// The reduceRight() function is particularly useful when you need to perform calculations or aggregations on an array of values, but starting from the right side of the array instead of the left side.

    // It allows you to reduce an array of values into a single value by iteratively applying a calculation or operation to each element of the array, starting from the right side.

    // Other practical applications of reduceRight() include concatenating strings in reverse order, performing calculations on data in reverse order, building hierarchical structures from arrays, or processing data in reverse chronological order in various real-world applications such as generating reports, building navigational menus, or manipulating time-series data.

    // Here's an example:

    // var recipeSteps = ["Step 1: Preheat the oven", "Step 2: Mix the ingredients", "Step 3: Bake the cake"];
    // var reversedInstructions = recipeSteps.reduceRight(function(acc, step) {
    //   return acc + "\n" + step;
    // }, "");
    // In this case, the reduceRight() function is called on the recipeSteps array. It iterates over each element of the array starting from the right side and accumulates a result by concatenating each step with the accumulator (acc in the example).

    // The reduceRight() function takes two arguments: a callback function and an initial value for the accumulator. The callback function receives the accumulator and each element of the array, and it returns the updated value of the accumulator.

    // After executing the reduceRight() function, the reversedInstructions variable will contain the following string:

    // vbnet
    // Copy code
    // Step 3: Bake the cake
    // Step 2: Mix the ingredients
    // Step 1: Preheat the oven
    // The reduceRight() function is particularly useful when you need to perform calculations or aggregations on an array of values, but starting from the right side of the array instead of the left side.

    // It allows you to reduce an array of values into a single value by iteratively applying a calculation or operation to each element of the array, starting from the right side.

    // Other practical applications of reduceRight() include concatenating strings in reverse order, performing calculations on data in reverse order, building hierarchical structures from arrays, or processing data in reverse chronological order in various real-world applications such as generating reports, building navigational menus, or manipulating time-series data.

// 23.reverse(): Reverses the order of the elements in the array.
    // const fruits = ['apple', 'banana', 'orange'];

    // fruits.reverse();

    // console.log(fruits); // Output: ['orange', 'banana', 'apple']
    // -------------------------------


// 24.shift(): Removes the first element from the array and returns it.
    // const fruits = ['apple', 'banana', 'orange'];

    // const shiftedElement = fruits.shift();

    // console.log(fruits); // Output: ['banana', 'orange']
    // console.log(shiftedElement); // Output: 'apple'
    // -------------------------------
    // One practical real case where the shift() function in JavaScript is commonly used is for removing and retrieving the first element from an array.

    // For example, let's say you have an array of strings representing a queue of tasks, and you want to process each task one by one, starting from the first task in the queue.
    // In this case, the shift() function is called on the taskQueue array. It removes the first element from the array and returns that element.
    
    // After executing the shift() function, the currentTask variable will contain the value "Task 1", which was the first task in the taskQueue array.
    
    // The shift() function is particularly useful when you need to process items in a queue-like manner, where the first item added to the array should be the first item to be processed.
    
    // By using shift(), you can easily retrieve and remove the first element from an array without manually tracking the index or modifying the array's length.
    
    // Other practical applications of shift() include implementing queue data structures, processing items in a specific order, managing task queues, or implementing message queues in various real-world applications such as job scheduling systems, message processing systems, or asynchronous operations handling.
    
    // Here's an example:
    
    // var taskQueue = ["Task 1", "Task 2", "Task 3"];
    // var currentTask = taskQueue.shift();
    // In this case, the shift() function is called on the taskQueue array. It removes the first element from the array and returns that element.
    
    // After executing the shift() function, the currentTask variable will contain the value "Task 1", which was the first task in the taskQueue array.
    
    // The shift() function is particularly useful when you need to process items in a queue-like manner, where the first item added to the array should be the first item to be processed.
    
    // By using shift(), you can easily retrieve and remove the first element from an array without manually tracking the index or modifying the array's length.
    
    // Other practical applications of shift() include implementing queue data structures, processing items in a specific order, managing task queues, or implementing message queues in various real-world applications such as job scheduling systems, message processing systems, or asynchronous operations handling.
    
    
    
    
    
// 25.slice(): Extracts a section of an array and returns a new array.
    // const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

    // const slicedFruits = fruits.slice(1, 4);

    // console.log(slicedFruits); // Output: ['banana', 'orange', 'mango']
        // -------------------------------

    // One practical real case where the slice() function in JavaScript is commonly used is for extracting a portion of an array without modifying the original array.
    // For example, let's say you have an array of user records, and you want to retrieve a subset of users based on a specific condition, such as users with a certain age range.
 // In this case, the slice() function is called on the userRecords array. It extracts a portion of the array starting from the index specified by the first argument (1 in the example) up to, but not including, the index specified by the second argument (4 in the example).
    // The slice() function is particularly useful when you need to create a new array that contains a subset of the elements from an existing array.
    
    // It allows you to extract a portion of an array without modifying the original array itself, which can be helpful for filtering, paginating, or manipulating data while preserving the integrity of the original array.
    
    // Other practical applications of slice() include pagination, sorting and extracting a range of elements, creating copies of arrays, splitting arrays, or manipulating subsets of data in various real-world applications such as data filtering, data presentation, or data analysis.
    
    // Here's an example:
    
    // var userRecords = [
    //   { name: "John", age: 25 },
    //   { name: "Alice", age: 32 },
    //   { name: "Bob", age: 40 },
    //   { name: "Emily", age: 28 },
    //   { name: "Mike", age: 35 }
    // ];
    
    // var middleAgedUsers = userRecords.slice(1, 4);
    // In this case, the slice() function is called on the userRecords array. It extracts a portion of the array starting from the index specified by the first argument (1 in the example) up to, but not including, the index specified by the second argument (4 in the example).
    
    // After executing the slice() function, the middleAgedUsers variable will contain a new array with the following elements:
    
    // [
    //   { name: "Alice", age: 32 },
    //   { name: "Bob", age: 40 },
    //   { name: "Emily", age: 28 }
    // ]
    // The slice() function is particularly useful when you need to create a new array that contains a subset of the elements from an existing array.
    
    // It allows you to extract a portion of an array without modifying the original array itself, which can be helpful for filtering, paginating, or manipulating data while preserving the integrity of the original array.
    
    // Other practical applications of slice() include pagination, sorting and extracting a range of elements, creating copies of arrays, splitting arrays, or manipulating subsets of data in various real-world applications such as data filtering, data presentation, or data analysis.
// 26.some(): Checks if at least one element in the array satisfies a given condition.
    // const numbers = [1, 2, 3, 4, 5];

    // const hasEvenNumber = numbers.some((number) => number % 2 === 0);

    // console.log(hasEvenNumber); // Output: true
    // -------------------------------
    // One practical real case where the some() function in JavaScript is commonly used is for checking if at least one element in an array satisfies a specific condition.
    // For example, let's say you have an array of numbers representing temperatures, and you want to determine if there is at least one temperature above a certain threshold.
        // In this case, the some() function is called on the temperatures array. It iterates over each element of the array and checks if the temperature is greater than 25.
    
    // The some() function takes a callback function as an argument. The callback function is called with each element of the array, and it returns a boolean value indicating if the condition is true for at least one element.
    
    // After executing the some() function, the isHot variable will contain true if at least one temperature in the temperatures array is above 25, and false otherwise.
    
    // The some() function is particularly useful when you need to perform a condition check on an array and determine if at least one element satisfies the condition.
    
    // It allows you to quickly and efficiently determine the presence of a desired condition without needing to iterate over the entire array or manually track the result.
    
    // Other practical applications of some() include validation checks, determining if an array contains any elements that meet specific criteria, checking for the existence of certain values, or implementing conditional logic based on array content in various real-world applications such as form validation, data filtering, or access control.
    // Here's an example:
    
    // var temperatures = [23, 25, 21, 28, 20];
    // var isHot = temperatures.some(function(temperature) {
    //   return temperature > 25;
    // });
    // In this case, the some() function is called on the temperatures array. It iterates over each element of the array and checks if the temperature is greater than 25.
    
    // The some() function takes a callback function as an argument. The callback function is called with each element of the array, and it returns a boolean value indicating if the condition is true for at least one element.
    
    // After executing the some() function, the isHot variable will contain true if at least one temperature in the temperatures array is above 25, and false otherwise.
    
    // The some() function is particularly useful when you need to perform a condition check on an array and determine if at least one element satisfies the condition.
    
    // It allows you to quickly and efficiently determine the presence of a desired condition without needing to iterate over the entire array or manually track the result.
    
    // Other practical applications of some() include validation checks, determining if an array contains any elements that meet specific criteria, checking for the existence of certain values, or implementing conditional logic based on array content in various real-world applications such as form validation, data filtering, or access control.
// 27.sort(): Sorts the elements of the array in place.
    // const fruits = ['apple', 'banana', 'orange', 'mango'];

    // fruits.sort();

    // console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']
    // -------------------------------
    // One practical real case where the sort() function in JavaScript is commonly used is for sorting an array of elements in a specific order.
    // For example, let's say you have an array of objects representing products, and you want to sort them based on their prices in ascending order.
    // In this case, the sort() function is called on the products array. It sorts the array based on the comparison of the price property of each object.
    
    // The sort() function takes a callback function as an argument. The callback function compares two elements from the array and returns a negative value if the first element should come before the second element, a positive value if the second element should come before the first element, or zero if the elements are equal.
    // The sort() function is particularly useful when you need to arrange the elements of an array in a specific order, such as sorting a list of items based on their properties, values, or custom comparison criteria.
    
    // It allows you to easily sort an array without having to implement your own sorting algorithm or manually reorganize the array elements.
    
    // Other practical applications of sort() include sorting arrays of strings, dates, or any other comparable values, implementing custom sorting logic, arranging data for display or analysis, or organizing data in a specific order for various real-world applications such as e-commerce platforms, data visualization, or data processing.
    // Here's an example:
    
    // var products = [
    //   { name: "Product A", price: 20.99 },
    //   { name: "Product B", price: 15.99 },
    //   { name: "Product C", price: 25.99 },
    //   { name: "Product D", price: 10.99 }
    // ];
    
    // products.sort(function(a, b) {
    //   return a.price - b.price;
    // });
    // In this case, the sort() function is called on the products array. It sorts the array based on the comparison of the price property of each object.
    
    // The sort() function takes a callback function as an argument. The callback function compares two elements from the array and returns a negative value if the first element should come before the second element, a positive value if the second element should come before the first element, or zero if the elements are equal.
    
    // After executing the sort() function, the products array will be sorted in ascending order based on the prices:
    
    // [
    //   { name: "Product D", price: 10.99 },
    //   { name: "Product B", price: 15.99 },
    //   { name: "Product A", price: 20.99 },
    //   { name: "Product C", price: 25.99 }
    // ]
    // The sort() function is particularly useful when you need to arrange the elements of an array in a specific order, such as sorting a list of items based on their properties, values, or custom comparison criteria.
    
    // It allows you to easily sort an array without having to implement your own sorting algorithm or manually reorganize the array elements.
    
    // Other practical applications of sort() include sorting arrays of strings, dates, or any other comparable values, implementing custom sorting logic, arranging data for display or analysis, or organizing data in a specific order for various real-world applications such as e-commerce platforms, data visualization, or data processing.
// 28.splice(): Changes the content of an array by removing, replacing, or adding elements.
    // const numbers = [1, 2, 3, 4, 5];
    // const removedElements = numbers.splice(2, 2);

    // console.log(numbers); // Output: [1, 2, 5]
    // console.log(removedElements); // Output: [3, 4]
    // -------------------------------
    // One practical real case where the splice() function in JavaScript is commonly used is for modifying an array by adding, removing, or replacing elements at specific positions.
    // For example, let's say you have an array of numbers representing a list of scores, and you want to remove a specific score from the array and replace it with a new score.
        // In this case, the splice() function is called on the scores array. It removes one element at the index specified by the first argument (2 in the example), and then inserts a new element (92 in the example) at the same position.
    
    // The splice() function takes three arguments: the index at which to start the modification, the number of elements to remove, and the elements to add at that position.

    // Here's an example:
    
    // var scores = [80, 85, 90, 95, 100];
    // // Remove the score at index 2 (90) and replace it with a new score of 92
    // scores.splice(2, 1, 92);
    // In this case, the splice() function is called on the scores array. It removes one element at the index specified by the first argument (2 in the example), and then inserts a new element (92 in the example) at the same position.
    
    // The splice() function takes three arguments: the index at which to start the modification, the number of elements to remove, and the elements to add at that position.
    
    // The splice() function is particularly useful when you need to modify an array by adding, removing, or replacing elements at specific positions.
    
    // It allows you to modify an array in-place, without creating a new array or manually manipulating individual elements.
    
    // Other practical applications of splice() include adding new elements to an array at specific positions, removing multiple elements at once, extracting a subset of elements from an array, or implementing advanced data manipulation logic in various real-world applications such as CRUD operations, data modeling, or interactive user interfaces.
    
    // After executing the splice() function, the scores array will be modified as follows:
    
    // [80, 85, 92, 95, 100]
    // The element at index 2 (90) is removed, and the new score of 92 is inserted at that position.
    
    // The splice() function is particularly useful when you need to modify an array by adding, removing, or replacing elements at specific positions.
    
    // It allows you to modify an array in-place, without creating a new array or manually manipulating individual elements.
    
    // Other practical applications of splice() include adding new elements to an array at specific positions, removing multiple elements at once, extracting a subset of elements from an array, or implementing advanced data manipulation logic in various real-world applications such as CRUD operations, data modeling, or interactive user interfaces.
// 29.toLocaleString(): Returns a string representing the elements of the array formatted according to the current locale.
    // const numbers = [1000, 2000, 3000, 4000];

    // const formattedNumbers = numbers.toLocaleString();

    // console.log(formattedNumbers); // Output: "1,000, 2,000, 3,000, 4,000"
    // -------------------------------
    // One practical real case where the toLocaleString() function in JavaScript is commonly used is for formatting numbers, dates, or currencies according to the user's locale or specific formatting requirements.
    // For example, let's say you have a web application that displays sales data to users in different countries. You want to format the sales figures according to each user's preferred number formatting, including decimal separators, thousands separators, and locale-specific symbols.
    // The toLocaleString() function takes one or two arguments. The first argument is the locale code, which determines the formatting rules to apply. The second argument (optional) is an options object that allows you to specify additional formatting preferences, such as the currency code.
    
    // After executing the toLocaleString() function, the formattedSales variable will contain the sales value formatted as a currency string according to the 'en-US' locale:
    
    // The toLocaleString() function is particularly useful when you need to present numbers, dates, or currencies in a user-friendly and culturally appropriate format.
    
    // It automatically adapts the formatting based on the user's locale, taking into account language conventions, number systems, and symbol usage.
    
    // Other practical applications of toLocaleString() include formatting dates in different date and time formats, customizing the number of decimal places, applying percentage or scientific notation, or implementing multi-lingual support in various real-world applications such as e-commerce platforms, financial systems, or internationalized web applications.
    // Here's an example:
    
    // var sales = 1500000;
    // var formattedSales = sales.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // In this case, the toLocaleString() function is called on the sales number. It formats the number according to the specified locale ('en-US' in the example) and the desired formatting options.
    
    // The toLocaleString() function takes one or two arguments. The first argument is the locale code, which determines the formatting rules to apply. The second argument (optional) is an options object that allows you to specify additional formatting preferences, such as the currency code.
    
    // After executing the toLocaleString() function, the formattedSales variable will contain the sales value formatted as a currency string according to the 'en-US' locale:
    
    // $1,500,000.00
    // The number is formatted with a thousands separator (comma), a decimal separator (dot), and the currency symbol for USD ($).
    
    // The toLocaleString() function is particularly useful when you need to present numbers, dates, or currencies in a user-friendly and culturally appropriate format.
    
    // It automatically adapts the formatting based on the user's locale, taking into account language conventions, number systems, and symbol usage.
    
    // Other practical applications of toLocaleString() include formatting dates in different date and time formats, customizing the number of decimal places, applying percentage or scientific notation, or implementing multi-lingual support in various real-world applications such as e-commerce platforms, financial systems, or internationalized web applications.
// 30.toString(): Returns a string representing the array and its elements.
    // const fruits = ['apple', 'banana', 'orange'];

    // const fruitsString = fruits.toString();

    // console.log(fruitsString); // Output: "apple,banana,orange"
    // -------------------------------
    // One practical real case where the toString() function in JavaScript is commonly used is for converting an object or a value into its string representation.// For example, let's say you have a date object representing a specific date and time, and you want to convert it into a string to display it in a user-friendly format.
    // In this case, the toString() function is called on the currentDate object. It converts the date object into a string representation based on the implementation-defined format.
    
    // After executing the toString() function, the dateString variable will contain the string representation of the current date and time:
    // The toString() function is particularly useful when you need to obtain a human-readable string representation of an object or a value.
    
    // It is commonly used with date objects, providing a default string representation of the date and time. However, it can also be used with other types of objects or values to obtain their default string representations.
    
    // Other practical applications of toString() include converting numbers to strings, converting arrays to strings, obtaining string representations of custom objects, or implementing custom string conversions in various real-world applications such as data serialization, logging, debugging, or displaying information to users.
    // Here's an example:
   
    // var currentDate = new Date();
    // var dateString = currentDate.toString();
    // In this case, the toString() function is called on the currentDate object. It converts the date object into a string representation based on the implementation-defined format.
    
    // After executing the toString() function, the dateString variable will contain the string representation of the current date and time:
    
    // arduino
    // Copy code
    // "Wed Jun 05 2023 13:24:45 GMT+0000 (Coordinated Universal Time)"
    // The toString() function is particularly useful when you need to obtain a human-readable string representation of an object or a value.
    
    // It is commonly used with date objects, providing a default string representation of the date and time. However, it can also be used with other types of objects or values to obtain their default string representations.
    
    // Other practical applications of toString() include converting numbers to strings, converting arrays to strings, obtaining string representations of custom objects, or implementing custom string conversions in various real-world applications such as data serialization, logging, debugging, or displaying information to users.
// 31.unshift(): Adds one or more elements to the beginning of the array and returns the new length.
    // const fruits = ['banana', 'orange'];

    // fruits.unshift('apple');

    // console.log(fruits); // Output: ['apple', 'banana', 'orange']
    // -------------------------------
    // One practical real case where the unshift() function in JavaScript is commonly used is for adding elements to the beginning of an array.// For example, let's say you have an array representing a to-do list, and you want to add a new task to the beginning of the list.// In this case, the unshift() function is called on the todoList array. It adds a new element ("New Task" in the example) to the beginning of the array, shifting all existing elements to higher indices.
    // After executing the unshift() function, the todoList array will be modified as follows:
    // The unshift() function is particularly useful when you need to prepend new elements to an array and maintain the order of existing elements.
    
    // It allows you to easily add elements to the beginning of an array without needing to manually shift the indices or create a new array.
    
    // Other practical applications of unshift() include building dynamic lists, implementing stack-like behavior, adding header elements to tables or lists, or maintaining a history of actions in various real-world applications such as task management systems, chat applications, or interactive interfaces.
    
    // Here's an example:
   
    // var todoList = ["Task 1", "Task 2", "Task 3"];
    // // Add a new task at the beginning of the list
    // todoList.unshift("New Task");
    // In this case, the unshift() function is called on the todoList array. It adds a new element ("New Task" in the example) to the beginning of the array, shifting all existing elements to higher indices.
    
    // After executing the unshift() function, the todoList array will be modified as follows:
    
    // ["New Task", "Task 1", "Task 2", "Task 3"]
    // The new task is added to the beginning of the array, pushing the existing tasks one position higher.
    
    // The unshift() function is particularly useful when you need to prepend new elements to an array and maintain the order of existing elements.
    
    // It allows you to easily add elements to the beginning of an array without needing to manually shift the indices or create a new array.
    
    // Other practical applications of unshift() include building dynamic lists, implementing stack-like behavior, adding header elements to tables or lists, or maintaining a history of actions in various real-world applications such as task management systems, chat applications, or interactive interfaces.
// 32.values(): Returns a new array iterator that contains the values of the array.
    // const numbers = [1, 2, 3, 4, 5];

    // const iterator = numbers.values();

    // console.log(iterator.next().value); // Output: 1
    // console.log(iterator.next().value); // Output: 2
    // console.log(iterator.next().value); // Output: 3
    // console.log(iterator.next().value); // Output: 4
    // console.log(iterator.next().value); // Output: 5
        // -------------------------------
        // One practical real case where the values() function in JavaScript is commonly used is for iterating over the values of an object or a data structure that supports iteration.// For example, let's say you have an object that represents a collection of user information, and you want to iterate over the values of that object to perform some operations on each value.
        // In this case, the values() function is called on the Object global object, passing the user object as an argument. It returns an array containing the values of the properties in the user object.
        
        // The forEach() function is then called on the userValues array, and a callback function is passed as an argument. The callback function logs each value to the console.
        
        // When executed, the code will output the values of the name, age, and email properties of the user object:
                // The values() function is particularly useful when you need to extract and work with the values of an object or a data structure.
        
        // It allows you to easily access and iterate over the values without needing to manually extract them or write custom iteration logic.
        
        // Other practical applications of values() include extracting values from arrays, maps, or sets, performing operations or transformations on values, filtering or searching for specific values, or implementing data processing or analysis in various real-world applications such as data manipulation, object-oriented programming, or working with external APIs and data sources.

        // Here's an example:
        
        // var user = {
        //   name: "John",
        //   age: 30,
        //   email: "john@example.com"
        // };
        
        // var userValues = Object.values(user);
        
        // userValues.forEach(function(value) {
        //   console.log(value);
        // });
        // In this case, the values() function is called on the Object global object, passing the user object as an argument. It returns an array containing the values of the properties in the user object.
        
        // The forEach() function is then called on the userValues array, and a callback function is passed as an argument. The callback function logs each value to the console.
        
        // When executed, the code will output the values of the name, age, and email properties of the user object:
        
        // css
        // Copy code
        // John
        // 30
        // john@example.com
        // The values() function is particularly useful when you need to extract and work with the values of an object or a data structure.
        
        // It allows you to easily access and iterate over the values without needing to manually extract them or write custom iteration logic.
        
        // Other practical applications of values() include extracting values from arrays, maps, or sets, performing operations or transformations on values, filtering or searching for specific values, or implementing data processing or analysis in various real-world applications such as data manipulation, object-oriented programming, or working with external APIs and data sources.

// 33.flatmap(): Maps each element using a mapping function, then flattens the result into a new array.
    // const numbers = [1, 2, 3, 4, 5];

    // const multipliedNumbers = numbers.flatMap(num => [num, num * 2]);

    // console.log(multipliedNumbers); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
        // -------------------------------
        // One practical real case where the flatMap() function in JavaScript is commonly used is for flattening and transforming arrays in a single step.// For example, let's say you have an array of objects representing books, and each book has an array of tags associated with it. You want to extract all the unique tags from the books and create a flattened array of tags.
        // In this case, the flatMap() function is called on the books array. It applies a transformation function to each book, returning the tags array of each book. The flatMap() function then flattens the resulting arrays into a single, one-dimensional array.
        
        // After executing the flatMap() function, the uniqueTags variable will contain an array of unique tags extracted from the books:

        // Here's an example:
        
        // var books = [
        //   { title: "Book 1", tags: ["fiction", "adventure"] },
        //   { title: "Book 2", tags: ["fiction", "mystery"] },
        //   { title: "Book 3", tags: ["fantasy", "adventure"] }
        // ];
        
        // var uniqueTags = books.flatMap(book => book.tags).filter((tag, index, self) => self.indexOf(tag) === index);
        // In this case, the flatMap() function is called on the books array. It applies a transformation function to each book, returning the tags array of each book. The flatMap() function then flattens the resulting arrays into a single, one-dimensional array.
        
        // After executing the flatMap() function, the uniqueTags variable will contain an array of unique tags extracted from the books:
        // The flatMap() function is particularly useful when you need to perform a combination of mapping (extracting values from objects) and flattening (creating a one-dimensional array) in a single operation.
        
        // It allows you to handle nested arrays and extract values from them while creating a flat result array.
        
        // Other practical applications of flatMap() include working with nested arrays of data, transforming and merging arrays, handling asynchronous operations, or implementing data preprocessing and transformation in various real-world applications such as data analysis, data visualization, or working with complex data structures.

        // css
        // Copy code
        // ["fiction", "adventure", "mystery", "fantasy"]
        // The flatMap() function is particularly useful when you need to perform a combination of mapping (extracting values from objects) and flattening (creating a one-dimensional array) in a single operation.
        
        // It allows you to handle nested arrays and extract values from them while creating a flat result array.
        
        // Other practical applications of flatMap() include working with nested arrays of data, transforming and merging arrays, handling asynchronous operations, or implementing data preprocessing and transformation in various real-world applications such as data analysis, data visualization, or working with complex data structures.

// 34.filter(): Creates a new array with all elements that pass a test.
    // const numbers = [1, 2, 3, 4, 5];
    // const evenNumbers = numbers.filter(num => num % 2 === 0);

    // console.log(evenNumbers); // Output: [2, 4]
    // -------------------------------
    // One practical real case where the filter() function in JavaScript is commonly used is for filtering and extracting elements from an array based on specific criteria.// For example, let's say you have an array of numbers representing test scores, and you want to filter out the scores that are below a certain threshold.
    // In this case, the filter() function is called on the scores array. It applies a filtering condition to each score in the array, retaining only the scores that satisfy the condition (in this case, scores greater than or equal to 80).
    // In this case, the filter() function is called on the scores array. It applies a filtering condition to each score in the array, retaining only the scores that satisfy the condition (in this case, scores greater than or equal to 80).
    
    // After executing the filter() function, the passingScores variable will contain an array of scores that passed the filtering criteria:
    // The filter() function is particularly useful when you need to select or exclude elements from an array based on specific conditions.
    
    // It allows you to easily create new arrays containing only the elements that meet certain criteria, without modifying the original array.
    
    // Other practical applications of filter() include searching for specific values, removing duplicates, implementing data validation or sanitization, performing data analysis or data processing operations, or implementing user-driven filtering in various real-world applications such as e-commerce platforms, data-driven interfaces, or data visualization tools.
    // Here's an example:
    // var scores = [85, 92, 78, 95, 88, 72, 90];
    // var passingScores = scores.filter(score => score >= 80);
    
    
    // [85, 92, 95, 88, 90]
    // The filter() function is particularly useful when you need to select or exclude elements from an array based on specific conditions.
    
    // It allows you to easily create new arrays containing only the elements that meet certain criteria, without modifying the original array.
    
    // Other practical applications of filter() include searching for specific values, removing duplicates, implementing data validation or sanitization, performing data analysis or data processing operations, or implementing user-driven filtering in various real-world applications such as e-commerce platforms, data-driven interfaces, or data visualization tools.
// 35.find(): Returns the first element in the array that satisfies a provided testing function.
    // const fruits = ['apple', 'banana', 'orange', 'mango'];

    // const foundFruit = fruits.find(fruit => fruit === 'orange');

    // console.log(foundFruit); // Output: orange
    // -------------------------------
    // One practical real case where the find() function in JavaScript is commonly used is for searching and retrieving a specific element from an array based on a condition.// For example, let's say you have an array of objects representing products, and you want to find a product with a specific ID.
    // In this case, the find() function is called on the products array. It applies a condition to each object in the array, searching for the first object that satisfies the condition (in this case, the object with the id matching productId).
    
    // After executing the find() function, the product variable will contain the object that matches the specified condition:
// In this case, the find() function is called on the products array. It applies a condition to each object in the array, searching for the first object that satisfies the condition (in this case, the object with the id matching productId).
    
    // After executing the find() function, the product variable will contain the object that matches the specified condition:
// The find() function is particularly useful when you need to search for a specific element in an array based on a given condition.
    
    // It allows you to easily retrieve the first matching element without needing to manually iterate over the array or write custom search logic.
    
    // Other practical applications of find() include searching for objects based on multiple criteria, implementing user-driven search functionality, retrieving data from large datasets, or implementing data lookup in various real-world applications such as inventory management systems, search engines, or filtering and querying data in databases.
    // Here's an example:
    
    // var products = [
    //   { id: 1, name: "Product 1" },
    //   { id: 2, name: "Product 2" },
    //   { id: 3, name: "Product 3" }
    // ];
    
    // var productId = 2;
    
    // var product = products.find(item => item.id === productId);
    
    
    // { id: 2, name: "Product 2" }
    // The find() function is particularly useful when you need to search for a specific element in an array based on a given condition.
    
    // It allows you to easily retrieve the first matching element without needing to manually iterate over the array or write custom search logic.
    
    // Other practical applications of find() include searching for objects based on multiple criteria, implementing user-driven search functionality, retrieving data from large datasets, or implementing data lookup in various real-world applications such as inventory management systems, search engines, or filtering and querying data in databases.
// 36.findIndex(): Returns the index of the first element in the array that satisfies a provided testing function.
    // const numbers = [10, 20, 30, 40, 50];

    // const index = numbers.findIndex(num => num > 30);

    // console.log(index); // Output: 3
    // -------------------------------
    // -------------------------------
    // One practical real case where the findIndex() function in JavaScript is commonly used is for finding the index of a specific element in an array based on a condition.
    // For example, let's say you have an array of numbers representing test scores, and you want to find the index of the first score that exceeds a certain threshold.
// In this case, the findIndex() function is called on the scores array. It applies a condition to each score in the array, searching for the first score that satisfies the condition (in this case, a score greater than the threshold).
    
    // After executing the findIndex() function, the index variable will contain the index of the first score that meets the specified condition. In this example, the score of 95 has the index of 3.
    // The findIndex() function is particularly useful when you need to find the index of an element in an array based on a specific condition.
    
    // It allows you to easily locate the first occurrence of an element that meets the criteria without needing to manually iterate over the array or write custom search logic.
    
    // Other practical applications of findIndex() include searching for multiple occurrences of an element, implementing user-driven search functionality with index retrieval, finding the index of specific values in sorted arrays, or implementing data lookup and referencing in various real-world applications such as data manipulation, algorithms, or search algorithms.

    // Here's an example:
    
    // var scores = [85, 92, 78, 95, 88, 72, 90];
    // var threshold = 90;
    
    // var index = scores.findIndex(score => score > threshold);
    // In this case, the findIndex() function is called on the scores array. It applies a condition to each score in the array, searching for the first score that satisfies the condition (in this case, a score greater than the threshold).
    
    // After executing the findIndex() function, the index variable will contain the index of the first score that meets the specified condition. In this example, the score of 95 has the index of 3.
    

    // index = 3
    // The findIndex() function is particularly useful when you need to find the index of an element in an array based on a specific condition.
    
    // It allows you to easily locate the first occurrence of an element that meets the criteria without needing to manually iterate over the array or write custom search logic.
    
    // Other practical applications of findIndex() include searching for multiple occurrences of an element, implementing user-driven search functionality with index retrieval, finding the index of specific values in sorted arrays, or implementing data lookup and referencing in various real-world applications such as data manipulation, algorithms, or search algorithms.
// 37.forEach(): Executes a provided function once for each array element.
    // const colors = ['red', 'green', 'blue'];

    // colors.forEach(color => {
    //   console.log(color);
    // });

    // // Output:
    // // red
    // // green
    // // blue
    // -------------------------------
    // One practical real case where the forEach() function in JavaScript is commonly used is for iterating over elements in an array or a collection and performing a specific action for each element.// For example, let's say you have an array of numbers representing sales figures for each month, and you want to calculate the total sales for the year.
    // In this case, the forEach() function is called on the sales array. It iterates over each element in the array, and for each element, it performs the specified action (in this case, adding the sale value to the totalSales variable).
    
    // After executing the forEach() function, the totalSales variable will contain the sum of all the sales figures:
        // The forEach() function is particularly useful when you need to perform a specific operation on each element of an array or a collection without modifying the original array.
    
    // It allows you to easily iterate over the elements, access their values, and perform custom actions or calculations for each element.
    
    // Other practical applications of forEach() include data processing, performing calculations, updating UI elements based on data, logging or displaying information, or implementing custom algorithms or logic for each element in various real-world applications such as data analysis, data visualization, or working with user-generated data.
    // Here's an example:
    
    // var sales = [1000, 1500, 1200, 2000, 1800, 1600, 1900, 1700, 1300, 1100, 1400, 1800];
    
    // var totalSales = 0;
    
    // sales.forEach(function(sale) {
    //   totalSales += sale;
    // });
    // In this case, the forEach() function is called on the sales array. It iterates over each element in the array, and for each element, it performs the specified action (in this case, adding the sale value to the totalSales variable).
    
    // After executing the forEach() function, the totalSales variable will contain the sum of all the sales figures:
    
    // makefile
    // Copy code
    // totalSales = 19100
    // The forEach() function is particularly useful when you need to perform a specific operation on each element of an array or a collection without modifying the original array.
    
    // It allows you to easily iterate over the elements, access their values, and perform custom actions or calculations for each element.
    
    // Other practical applications of forEach() include data processing, performing calculations, updating UI elements based on data, logging or displaying information, or implementing custom algorithms or logic for each element in various real-world applications such as data analysis, data visualization, or working with user-generated data.
// 38.includes(): Checks if an array contains a specific element.
    // const numbers = [1, 2, 3, 4, 5];

    // const includesThree = numbers.includes(3);
    // console.log(includesThree); // Output: true

    // const includesTen = numbers.includes(10);
    // console.log(includesTen); // Output: false
        // -------------------------------

    // One practical real case where the includes() function in JavaScript is commonly used is for checking if an element exists in an array.// For example, let's say you have an array of usernames and you want to check if a specific username is present in the array.
     // In this case, the includes() function is called on the usernames array. It checks if the searchUsername exists in the array and returns a boolean value indicating the result.
    // After executing the includes() function, the exists variable will contain true if the searchUsername is found in the usernames array, or false if it's not found.
    // The includes() function is particularly useful when you need to quickly check if an array contains a specific element.
    
    // It allows you to easily determine the presence or absence of an element without needing to manually iterate over the array or write custom search logic.
    
    // Other practical applications of includes() include checking for the existence of specific values, validating user input or data, implementing conditional logic based on element presence, or filtering arrays based on specific criteria in various real-world applications such as form validation, user authentication, data filtering, or data deduplication.

    // Here's an example:
    
    // var usernames = ["John", "Jane", "Mike", "Emily", "Tom"];
    
    // var searchUsername = "Mike";
    
    // var exists = usernames.includes(searchUsername);
    // In this case, the includes() function is called on the usernames array. It checks if the searchUsername exists in the array and returns a boolean value indicating the result.
    // After executing the includes() function, the exists variable will contain true if the searchUsername is found in the usernames array, or false if it's not found.
    
    // exists = true
    // The includes() function is particularly useful when you need to quickly check if an array contains a specific element.
    
    // It allows you to easily determine the presence or absence of an element without needing to manually iterate over the array or write custom search logic.
    
    // Other practical applications of includes() include checking for the existence of specific values, validating user input or data, implementing conditional logic based on element presence, or filtering arrays based on specific criteria in various real-world applications such as form validation, user authentication, data filtering, or data deduplication.

// 39.indexOf(): Returns the first index at which a given element is found in the array.
    // const fruits = ['apple', 'banana', 'orange', 'banana'];

    // const indexOfOrange = fruits.indexOf('orange');
    // console.log(indexOfOrange); // Output: 2

    // const indexOfBanana = fruits.indexOf('banana');
    // console.log(indexOfBanana); // Output: 1

//40.join(): Joins all elements of an array into a string.
    // const fruits = ['apple', 'banana', 'orange'];

    // const joinedString = fruits.join(', ');
    // console.log(joinedString); // Output: "apple, banana, orange"

//41. keys(): Returns a new array iterator that contains the keys of the array.
    // const fruits = ['apple', 'banana', 'orange'];

    // const joinedString = fruits.join(', ');
    // console.log(joinedString); // Output: "apple, banana, orange"

//42.lastIndexOf(): Returns the last index at which a given element is found in the array.
    // const numbers = [1, 2, 3, 4, 3, 5];

    // const lastIndexThree = numbers.lastIndexOf(3);
    // console.log(lastIndexThree); // Output: 4

    // const lastIndexTen = numbers.lastIndexOf(10);
    // console.log(lastIndexTen); // Output: -1

// 43.map(): Creates a new array with the results of calling a provided function on each element.
    // const numbers = [1, 2, 3, 4, 5];

    // const squaredNumbers = numbers.map(num => num ** 2);
    // console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 44.pop(): Removes the last element from the array and returns it.
    // const fruits = ['apple', 'banana', 'orange'];

    // const removedFruit = fruits.pop();
    // console.log(removedFruit); // Output: "orange"

    // console.log(fruits); // Output: ["apple", "banana"]

// 45.push(): Adds one or more elements to the end of the array and returns the new length.
    // const fruits = ['apple', 'banana'];

    // fruits.push('orange', 'kiwi');
    // console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi"]

//46. reduce(): Applies a function to reduce the array to a single value.
    // const numbers = [1, 2, 3, 4, 5];

    // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // console.log(sum); // Output: 15

//47. reduceRight(): Applies a function to reduce the array from right to left to a single value.
    // const numbers = [1, 2, 3, 4, 5];

    // const concatenatedString = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue.toString(), '');
    // console.log(concatenatedString); // Output: "54321"

// 48.reverse(): Reverses the order of the elements in the array.
    // const fruits = ['apple', 'banana', 'orange'];

    // fruits.reverse();
    // console.log(fruits); // Output: ["orange", "banana", "apple"]

// 49.shift(): Removes the first element from the array and returns it.
    // const colors = ['red', 'green', 'blue'];

    // const shiftedElement = colors.shift();
    // console.log(shiftedElement); // Output: "red"
    // console.log(colors); // Output: ["green", "blue"]

//50. slice(): Extracts a section of an array and returns a new array.
    // const numbers = [1, 2, 3, 4, 5];

    // const slicedNumbers = numbers.slice(1, 4);
    // console.log(slicedNumbers); // Output: [2, 3, 4]
    // console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 51.some(): Checks if at least one element in the array satisfies a given condition.
    // const numbers = [1, 2, 3, 4, 5];

    // const hasEvenNumber = numbers.some((number) => number % 2 === 0);
    // console.log(hasEvenNumber); // Output: true


