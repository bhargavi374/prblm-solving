// 10-Day Problem-Solving Challenge  
// Day 6:  

// Beginner Level (Strings):
// 1. Write 20 String Methods with Examples 
//    List and demonstrate 20 string methods available in JavaScript with examples.  

// // 1. length
// // Returns the length of the string.
// const str = "Hello World";
// console.log(str.length); // Output: 11
// // 2. toUpperCase()
// // Converts all characters to uppercase.
// console.log("javascript".toUpperCase()); // Output: "HELLO"
// // 3. toLowerCase()
// // Converts all characters to lowercase.
// console.log("JAVASCRIPT".toLowerCase()); // Output: "hello"
// // 4. charAt()
// // Returns the character at a specific index.
// console.log("javascript".charAt(1)); // Output: "a"
// // 5. indexOf()
// // Returns the index of the first occurrence of a substring.
// console.log("hello world".indexOf("world")); // Output: 6
// // 6. lastIndexOf()
// // Returns the index of the last occurrence of a substring.
// console.log("hello world world".lastIndexOf("world")); // Output: 12
// // 7. includes()
// // Checks if a string contains a specific substring.
// console.log("hello world".includes("world")); // Output: true
// // 8. startsWith()
// // Checks if a string starts with a specific substring.
// console.log("hello world".startsWith("hello")); // Output: true
// // 9. endsWith()
// // Checks if a string ends with a specific substring.
// console.log("hello world".endsWith("world")); // Output: true
// // 10. slice()
// // Extracts a section of a string and returns it as a new string.
// console.log("hello world".slice(0, 5)); // Output: "hello"
// // 11. substring()
// // Returns a part of the string between two indices.
// console.log("hello world".substring(0, 5)); // Output: "hello"
// // 12. substr() (Deprecated, but still functional)
// // Extracts a substring from the string, starting at a specific index and for a given length.
// console.log("hello world".substr(0, 5)); // Output: "hello"
// // 13. trim()
// // Removes whitespace from both ends of a string.
// console.log("   hello world   ".trim()); // Output: "hello world"
// // 14. trimStart()
// // Removes whitespace from the start of the string.
// console.log("   hello".trimStart()); // Output: "hello"
// // 15. trimEnd()
// // Removes whitespace from the end of the string.
// console.log("hello   ".trimEnd()); // Output: "hello"
// // 16. replace()
// // Replaces the first occurrence of a substring with another.
// console.log("hello world".replace("world", "JavaScript")); // Output: "hello JavaScript"
// // 17. replaceAll()
// // Replaces all occurrences of a substring with another.
// console.log("hello world world".replaceAll("world", "JavaScript")); // Output: "hello JavaScript JavaScript"
// // 18. split()
// // Splits a string into an array based on a delimiter.
// console.log("hello,world,JavaScript".split(",")); // Output: ["hello", "world", "JavaScript"]
// // 19. concat()
// // Joins two or more strings.
// console.log("hello".concat(" ", "world")); // Output: "hello world"
// // 20. padStart()
// // Pads the string with another string until it reaches the desired length, adding to the start.
// console.log("5".padStart(4, "0")); // Output: "005"
// // 21. padEnd()
// // Pads the string with another string until it reaches the desired length, adding to the end.
// console.log("5".padEnd(4, "0")); // Output: "500"


// 2. Reverse a String
//    Write a function to reverse a string.  
//    - Input: "hello"  
//    - Output: "olleh" 
// function reverseString(input) {
//     return input.split('').reverse().join('');
// }
// const input = "hello";
// const reversed = reverseString(input);
// console.log(reversed); // Output: "olleh"

// 3. Check for Substring
//    Check if a string contains a specific substring.  
//    - Input: str = "JavaScript is fun", substr = "fun" 
//    - Output: true
//  function checkSubstring(str, substr) {
//     return str.includes(substr);
// }
// const str = "JavaScript is fun";
// const substr = "fun";
// const result = checkSubstring(str, substr);
// console.log(result); // Output: true

// Intermediate Level (Strings): 
// 1. Longest Word in a Sentence
//    Find the longest word in a given string.  
//    - Input:*"The quick brown fox jumps over the lazy dog"  
//    - Output: "jumps"  
// input="The quick brown fox jumps over the lazy dog"
// arr=input.split(" ")
//// console.log(arr)
// longest=arr[0]
// for(ele of arr){
//     if(ele.length>longest.length){
//         longest=ele
//     }
// }
// console.log(longest)//first-quick last-one =>=


// 2. Anagram Check 
//    Write a function to check if two strings are anagrams of each other.  
//    - Input: str1 = "listen", str2 = "silent"  
//    - Output: true 
// str1 = "listen"
// str2 = "silent" 
// // str1=str1.split("").sort().join("")
// // str2=str2.split("").sort().join("")
// // if(str1===str2){
// //     console.log("anagram")
// // }else{
// //     console.log("not an anagram")
// // }
// console.log(str1.split("").sort().join("")===str2.split("").sort().join("") ?"true":"false")


// 3. Capitalize Each Word //title cases
//    Write a function to capitalize the first letter of each word in a sentence.  
//    - Input: "hello world"  
//    - Output: "Hello World"
// function capitalizeEachWord(sentence) {
//     return sentence
//         .split(' ') 
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
//         .join(' '); 
// }

// const input = "hello world";
// const result = capitalizeEachWord(input);
// console.log(result); // Output: "Hello World"