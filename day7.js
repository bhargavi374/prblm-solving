// 10-Day Problem-Solving Challenge  
// Day 7:  

// Beginner Level (Strings):
// 1. Find Unique Characters in a String
// Identify all unique characters in a string.

// Input: "hello"
// Output: ["h", "e", "o"]
// function findUniqueChars(str) {
//     return str.split("").filter(char => str.indexOf(char) === str.lastIndexOf(char));
// }

// console.log(findUniqueChars("hello")); // Output: ["h", "e", "o"]
// or
// input="hello"
// obj={}
// res=[]
// for(ele of input){
//     obj[ele]=(obj[ele]||0)+1
// }
// for(ele in obj){
//     if(obj[ele]==1){
//         res.push(ele)
//     }
// }
// console.log(res)

// 2. Reverse Words in a Sentence
// Reverse the words in a sentence while keeping their order.

// Input: "Hello World"
// Output: "olleH dlroW"
// function reverseWords(sentence) {
//     return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// }

// console.log(reverseWords("Hello World")); // Output: "olleH dlroW"

// 3. Count Characters in a String
// Count the number of occurrences of each character in a string.

// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
// str="hello"
// res=""
// count=1
// for(i=0;i<str.length;i++){
//     if(str[i]==str[i+1]){
//         count++
//     }else{
//         res=res+str[i]+count
//         count=1
//     }
// }
// console.log(res)

// or

//input="hello"
//obj={}
//for(ele of input){
//obj[ele]=(obj[ele]||0)+1
//}
//console.log(obj)


// Intermediate Level (Strings): 

// 1. Find the Length of the Longest Substring Without Repeating Characters

// Input: "abcabcbb"
// Output: 3 (The longest substring is "abc")
// function longestUniqueSubstring(s) {
//     let longest = 0, temp = "";
//     for (let char of s) {
//         if (temp.includes(char)) {
//             temp = temp.slice(temp.indexOf(char) + 1);
//         }
//         temp += char;
//         longest = Math.max(longest, temp.length);
//     }
//     return longest;
// }

// console.log(longestUniqueSubstring("abcabcbb")); // Output: 3

// 2. Find All Palindromic Substrings in a Given String

// Input: "racecar madam level noon"
// Output:
// ["racecar", "aceca", "cec", "madam", "ada", "level", "eve", "noon"]


// input = "racecar madam level noon"
// output=[]
// for(i=0;i<input.length;i++){
//  for(j=i+1;j<=input.length;j++){
//           substr=input.slice(i,j+1)
//      if(substr==substr.split("").reverse().join("")){
//      output.push(substr)
//      }
     
//  }
// }
// console.log(output)//[
//   'racecar', 'aceca',
//   'cec',     ' madam ',
//   'madam',   'ada',
//   ' level ', 'level',
//   'eve',     'noon',
//   'noon',    'oo',
//   'n'
// ]

// or

// input = "racecar madam level noon"
// output=[]
// for(i=0;i<input.length-1;i++){
//  for(j=i+1;j<input.length;j++){
//           substr=input.slice(i,j+1)
//      rev=substr.split("").reverse().join(""))
//   if(str==rev){
//      output.push(substr)
//      }
     
//  }

// function findPalindromicSubstrings(str) {
//     let words = str.split(" "); // Split words
//     let palindromes = [];

//     for (let word of words) {
//         for (let i = 0; i < word.length; i++) {
//             for (let j = i + 2; j <= word.length; j++) {
//                 let part = word.slice(i, j);
//                 if (part === part.split("").reverse().join("")) {
//                     palindromes.push(part);
//                 }
//             }
//         }
//     }
//     return palindromes;
// }

// console.log(findPalindromicSubstrings("racecar madam level noon"));
// // Output: ["racecar", "aceca", "cec", "madam", "ada", "level", "eve", "noon"]