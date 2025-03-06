<!-- // js is an interepreted language -it checks line by line before running the code.
// developed by brendin eich.
// it depends on browser.
// compiler loads at once,and shows error when executed.
// electron js is used for mobile devleopment
// js is versatile-can be used for frontend and backend
// js is a dynamically typed scripting lang which is used to create dynamic web pages.
// it is not necessary to define data types.
// it is a synchronous language or blocking language (performs single task).

// EVENT-LOOPS
// web apis(settimeout,setinterval)-task queues or macro tasks
// promises-micro tasks
// call stack is global
// order of entering in to call stack - global,promises,web apis


// CONSOLE MTHDS:
// console.log(),console.warn(),console.asset(),console.clear(),console.group(),console.info(),console.groupcollapsed()


// chrome-v8engine
// edge-chakra
// firefox-spidermonkey
// apple-safari-jscore


// ECMA-european communication manufacturing association

// rules-start with variables,special charcters only like $,_
// not start with numbers but may include in it
// cannot use reserve words

// variables = it is a container that is used to store data/values

// var a(declaring) = 5(assigning) - (initialization)

// var=redeclare,reassign,(let=reassign,const=neither reclare nor reassign)-after 2015 Es6 features


// var a =10;
// console.log(a)//10
// console.log(b)
// var b =20;//undefined

// hoisting=it is a javascript mechanism where variables and function declaration are moved to the top of their containing scope during the compilation phase

// temporal dead zone = it refers to a period between entering a scope and the actual declartion of the variable with let or const


// data types= type of data that can be stored and manupulated by a program

// types=1.primitive=immutable
// stored directly in memory (stack) and are represented by their actual value
// string,number,boolean,symbol,null,bigint,undefined
// 2.non-primitive = mutable
// not stored directly in memory,instead they are accessed by reference
// array,obj,function

// obj=collection of key value pairs,values can be of any data types
// {key:value}-obj
// var obj = {
//     name:"bhargavi",
//     age:21,
//     gender:"female"
// }
// console.log(obj)
// array=ordered collection of elements
// accessed by indexes,starts form 0
// [any datatypes]
// var str = "bhargavi"
// console.log(str[6])
// function=block of code that performs specific task

// ?.=optional chaining=to overcome cannot read properties of undefined
// ??=null colleasing operator=to overcome null or 0(left side no 0 or null means right side wii be printed as defalut)

// string=spaces are also considered in string
// string mthds:
// 1. length
// Returns the length of the string.
const str = "Hello World";
console.log(str.length); // Output: 11
// 2. toUpperCase()
// Converts all characters to uppercase.
console.log("javascript".toUpperCase()); // Output: "HELLO"
// 3. toLowerCase()
// Converts all characters to lowercase.
console.log("JAVASCRIPT".toLowerCase()); // Output: "hello"
// 4. charAt()
// Returns the character at a specific index.
console.log("javascript".charAt(1)); // Output: "a"
// 5. indexOf()
// Returns the index of the first occurrence of a substring.
console.log("hello world".indexOf("world")); // Output: 6
// 6. lastIndexOf()
// Returns the index of the last occurrence of a substring.
console.log("hello world world".lastIndexOf("world")); // Output: 12
// 7. includes()
// Checks if a string contains a specific substring.
console.log("hello world".includes("world")); // Output: true
// 8. startsWith()
// Checks if a string starts with a specific substring.
console.log("hello world".startsWith("hello")); // Output: true
// 9. endsWith()
// Checks if a string ends with a specific substring.
console.log("hello world".endsWith("world")); // Output: true
// 10. slice()
// Extracts a section of a string and returns it as a new string.
console.log("hello world".slice(0, 6)); // Output: "hello"
// 11. substring()
// Returns a part of the string between two indices.
console.log("hello world".substring(0, 5)); // Output: "hello"
// 12. substr() (Deprecated, but still functional)
// Extracts a substring from the string, starting at a specific index and for a given length.
console.log("hello world".substr(0, 5)); // Output: "hello"
// 13. trim()
// Removes whitespace from both ends of a string.
console.log("   hello world   ".trim()); // Output: "hello world"
// 14. trimStart()
// Removes whitespace from the start of the string.
console.log("   hello".trimStart()); // Output: "hello"
// 15. trimEnd()
// Removes whitespace from the end of the string.
console.log("hello   ".trimEnd()); // Output: "hello"
// 16. replace()
// Replaces the first occurrence of a substring with another.
console.log("hello world".replace("world", "JavaScript")); // Output: "hello JavaScript"
// 17. replaceAll()
// Replaces all occurrences of a substring with another.
console.log("hello world world".replaceAll("world", "JavaScript")); // Output: "hello JavaScript JavaScript"
// 18. split()
// Splits a string into an array based on a delimiter.
console.log("hello,world,JavaScript".split(",")); // Output: ["hello", "world", "JavaScript"]
// 19. concat()
// Joins two or more strings.
console.log("hello".concat(" ", "world")); // Output: "hello world"
// 20. padStart()
// Pads the string with another string until it reaches the desired length, adding to the start.
console.log("5".padStart(4, "0")); // Output: "005"
// 21. padEnd()
// Pads the string with another string until it reaches the desired length, adding to the end.
console.log("5".padEnd(4, "0")); // Output: "500" -->







 <!-- Basic String Methods
length → Returns the length of a string.

js
Copy
Edit
let str = "JavaScript";
console.log(str.length); // 10
charAt(index) → Returns the character at a specified index.

js
Copy
Edit
console.log("Hello".charAt(1)); // "e"
charCodeAt(index) → Returns the Unicode value of the character at a given index.

js
Copy
Edit
console.log("ABC".charCodeAt(0)); // 65
🔹 String Manipulation Methods
toUpperCase() → Converts the string to uppercase.

js
Copy
Edit
console.log("hello".toUpperCase()); // "HELLO"
toLowerCase() → Converts the string to lowercase.

js
Copy
Edit
console.log("HELLO".toLowerCase()); // "hello"
trim() → Removes whitespace from both ends of a string.

js
Copy
Edit
console.log("  hello  ".trim()); // "hello"
trimStart() → Removes whitespace only from the beginning.

js
Copy
Edit
console.log("  hello".trimStart()); // "hello"
trimEnd() → Removes whitespace only from the end.

js
Copy
Edit
console.log("hello  ".trimEnd()); // "hello"
🔹 String Searching Methods
indexOf(substring, startIndex) → Returns the position of the first occurrence of a substring.

js
Copy
Edit
console.log("hello world".indexOf("world")); // 6
lastIndexOf(substring, startIndex) → Returns the last occurrence of a substring.

js
Copy
Edit
console.log("hello world world".lastIndexOf("world")); // 12
includes(substring, startIndex) → Checks if a substring exists in the string (returns true or false).

js
Copy
Edit
console.log("hello world".includes("world")); // true
startsWith(substring, startIndex) → Checks if a string starts with a given substring.

js
Copy
Edit
console.log("JavaScript".startsWith("Java")); // true
endsWith(substring, length) → Checks if a string ends with a given substring.

js
Copy
Edit
console.log("hello world".endsWith("world")); // true
🔹 String Extraction Methods
slice(start, end) → Extracts part of a string (negative index allowed).

js
Copy
Edit
console.log("JavaScript".slice(0, 4)); // "Java"
console.log("JavaScript".slice(-6)); // "Script"
substring(start, end) → Similar to slice, but does not support negative indices.

js
Copy
Edit
console.log("JavaScript".substring(0, 4)); // "Java"
substr(start, length) → Extracts a part of a string based on start index and length (Deprecated).

js
Copy
Edit
console.log("JavaScript".substr(4, 6)); // "Script"
🔹 String Modification Methods
replace("old", "new") → Replaces the first occurrence of a substring.

js
Copy
Edit
console.log("I like Java".replace("Java", "JavaScript")); // "I like JavaScript"
replaceAll("old", "new") → Replaces all occurrences of a substring.

js
Copy
Edit
console.log("apple apple apple".replaceAll("apple", "banana"));
// "banana banana banana"
🔹 String Splitting & Joining
split(separator, limit) → Splits a string into an array based on a separator.

js
Copy
Edit
console.log("red,green,blue".split(",")); // ["red", "green", "blue"]
concat(str1, str2, ...) → Joins multiple strings.

js
Copy
Edit
console.log("Hello".concat(" ", "World")); // "Hello World"
repeat(n) → Repeats the string n times.

js
Copy
Edit
console.log("Hi ".repeat(3)); // "Hi Hi Hi "
🔹 String Padding (Adding Characters)
padStart(targetLength, padString) → Pads the start of a string.

js
Copy
Edit
console.log("42".padStart(5, "0")); // "00042"
padEnd(targetLength, padString) → Pads the end of a string.

js
Copy
Edit
console.log("42".padEnd(5, "*")); // "42***"
🔹 Escape & Character Conversion
fromCharCode(num1, num2, ...) → Converts Unicode values to characters.

js
Copy
Edit
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
codePointAt(index) → Returns Unicode of the character at a given index.

js
Copy
Edit
console.log("A".codePointAt(0)); // 65
🔹 Template Literals (Modern String Method)
Backticks ( ) & ${} for String Interpolation
js
Copy
Edit
let name = "Bhargavi";
console.log(`Hello, ${name}!`); // "Hello, Bhargavi!"
📌 Summary Table of String Methods
Method	Description
length	Returns the length of the string.
charAt()	Returns a character at a specified index.
charCodeAt()	Returns the Unicode value of a character.
toUpperCase()	Converts string to uppercase.
toLowerCase()	Converts string to lowercase.
trim()	Removes spaces from both sides.
indexOf()	Returns the first occurrence of a substring.
lastIndexOf()	Returns the last occurrence of a substring.
includes()	Checks if a substring exists.
startsWith()	Checks if a string starts with a substring.
endsWith()	Checks if a string ends with a substring.
slice()	Extracts part of a string.
substring()	Extracts part of a string (no negative index).
replace()	Replaces the first occurrence of a substring.
replaceAll()	Replaces all occurrences of a substring.
split()	Splits a string into an array.
concat()	Joins multiple strings.
repeat()	Repeats the string n times.
padStart()	Pads the start of a string.
padEnd()	Pads the end of a string. -->



<!-- In JavaScript, strings do not have a built-in reverse() method like arrays do. However, you can reverse a string by converting it to an array, using the reverse() method, and then converting it back to a string.

✅ How to Reverse a String in JavaScript
js
Copy
Edit
let str = "hello";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // "olleh"
Explanation:
split("") → Converts the string into an array of characters: ["h", "e", "l", "l", "o"]
reverse() → Reverses the array: ["o", "l", "l", "e", "h"]
join("") → Joins the array back into a string: "olleh"
Alternative: Reverse Using a Loop (Without Using split/reverse/join)
js
Copy
Edit
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // "olleh" -->




<!-- // let day = prompt("enter the day name:");
// switch (day.toLowerCase()) { 
//     case "monday":
//         console.log("Start of the work week!");
//         break;
//     case "tuesday":
//         console.log("It's Tuesday, keep going!");
//         break;
//     case "wednesday":
//         console.log("Midweek already!");
//         break;
//     case "thursday":
//         console.log("Almost the weekend!");
//         break;
//     case "friday":
//         console.log("Weekend is near!");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("It's the weekend! Enjoy!");
//         break;
//     default:
//         console.log("Invalid day entered.");
// } -->




<!-- JavaScript Array Methods
Here’s a list of important JavaScript array methods, with examples.

🔹 Basic Methods
length → Returns the number of elements in an array.

js
Copy
Edit
let arr = [10, 20, 30];
console.log(arr.length); // 3
push() → Adds elements to the

You said:
need array methods
ChatGPT said:
Here is a complete list of JavaScript Array Methods with explanations and examples:

🔹 Basic Array Methods
length → Returns the number of elements in an array.

js
Copy
Edit
let arr = [10, 20, 30];
console.log(arr.length); // 3
push() → Adds elements to the end of an array.

js
Copy
Edit
arr.push(40);
console.log(arr); // [10, 20, 30, 40]
pop() → Removes the last element from an array.

js
Copy
Edit
arr.pop();
console.log(arr); // [10, 20, 30]
unshift() → Adds elements to the beginning of an array.

js
Copy
Edit
arr.unshift(5);
console.log(arr); // [5, 10, 20, 30]
shift() → Removes the first element from an array.

js
Copy
Edit
arr.shift();
console.log(arr); // [10, 20, 30]
🔹 Array Searching Methods
indexOf() → Finds the index of the first occurrence of a value.

js
Copy
Edit
console.log(arr.indexOf(20)); // 1
lastIndexOf() → Finds the last occurrence of a value.

js
Copy
Edit
let nums = [10, 20, 30, 20, 40];
console.log(nums.lastIndexOf(20)); // 3
includes() → Checks if an array contains a value.

js
Copy
Edit
console.log(arr.includes(20)); // true
console.log(arr.includes(50)); // false
🔹 Array Modification Methods
splice(start, deleteCount, item1, item2, ...) → Adds/removes elements.

js
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "mango"); // Removes "banana" and adds "mango"
console.log(fruits); // ["apple", "mango", "cherry"]
slice(start, end) → Returns a portion of an array (without modifying it).

js
Copy
Edit
let newArr = arr.slice(1, 3); 
console.log(newArr); // [20, 30]
reverse() → Reverses the array.
js
Copy
Edit
arr.reverse();
console.log(arr); // [30, 20, 10]
sort() → Sorts an array (alphabetically by default).
js
Copy
Edit
let numbers = [40, 100, 1, 5];
numbers.sort((a, b) => a - b); // Sorting numerically
console.log(numbers); // [1, 5, 40, 100]
🔹 Array Iteration Methods
map(callback) → Returns a new array after applying a function to each element.
js
Copy
Edit
let squared = [1, 2, 3].map(num => num * num);
console.log(squared); // [1, 4, 9]
filter(callback) → Returns elements that satisfy a condition.
js
Copy
Edit
let evenNumbers = [10, 15, 20, 25].filter(num => num % 2 === 0);
console.log(evenNumbers); // [10, 20]
reduce(callback, initialValue) → Reduces an array to a single value.
js
Copy
Edit
let sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
forEach(callback) → Executes a function on each element.
js
Copy
Edit
[1, 2, 3].forEach(num => console.log(num * 2)); // 2, 4, 6
🔹 Array Conversion Methods
join(separator) → Converts an array into a string.
js
Copy
Edit
let words = ["Hello", "world"];
console.log(words.join(" ")); // "Hello world"
toString() → Converts an array to a string (similar to join()).
js
Copy
Edit
console.log(arr.toString()); // "10,20,30"
flat(depth) → Flattens nested arrays.
js
Copy
Edit
let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArr.flat(2)); // [1, 2, 3, 4, 5, 6]
🔹 Array Checking Methods
isArray() → Checks if a value is an array.
js
Copy
Edit
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
some(callback) → Checks if at least one element satisfies a condition.
js
Copy
Edit
let nums2 = [1, 2, 3, 4];
console.log(nums2.some(num => num > 3)); // true
every(callback) → Checks if all elements satisfy a condition.
js
Copy
Edit
console.log(nums2.every(num => num > 0)); // true
🔹 Array Filling & Copying Methods
fill(value, start, end) → Fills elements with a value.
js
Copy
Edit
let arr3 = [1, 2, 3, 4];
arr3.fill(0, 1, 3);
console.log(arr3); // [1, 0, 0, 4]
copyWithin(target, start, end) → Copies elements within an array.
js
Copy
Edit
let arr4 = [10, 20, 30, 40, 50];
arr4.copyWithin(2, 0, 2);
console.log(arr4); // [10, 20, 10, 20, 50]
🔹 Combining & Extracting Methods
concat() → Combines arrays into a new array.
js
Copy
Edit
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
🔥 Summary of Array Methods
Method	Description
push()	Add elements to the end
pop()	Remove last element
shift()	Remove first element
unshift()	Add elements to the beginning
splice()	Add/remove elements
slice()	Extract a portion
reverse()	Reverse an array
sort()	Sort an array
map()	Apply function to each element
filter()	Return elements that match condition
reduce()	Reduce array to a single value
forEach()	Loop through array
join()	Convert array to string
flat()	Flatten nested arrays
some()	Check if any element matches condition
every()	Check if all elements match condition -->


<!-- // A function is a standalone block of code that can be used anywhere:

function greet() {
    console.log("Hello, world!");
}

greet(); // Calling the function

// A method is a function inside an object:

let person = {
    name: "Bhargavi",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Calling the method -->


<!-- function add (a,b){
    console.log(a+b)
}
add(2,3)

sum=0;
function impure(){
    sum+=1
    return sum
}
console.log(impure()) -->