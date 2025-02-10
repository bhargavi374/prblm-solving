// 10-Day Problem-Solving Challenge
// Day 8:
// Beginner Level (Strings & Arrays):

// 1. Check if a String is a Pangram
// Determine if a given string contains every letter of the English alphabet at least once.

// Input: "The quick brown fox jumps over the lazy dog"
// Output: true

// let str = "The quick brown fox jumps over the lazy dog".toLowerCase();
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let isPangram = true;
// for (let char of alphabet) {
//     if (!str.includes(char)) {
//         isPangram = false;
//         break;
//     }
// }
// console.log(isPangram); // Output: true

//or

// let str = "The quick brown fox jumps over the lazy dog".toLowerCase();
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let isPangram = alphabet.split('').every(char => str.includes(char));
// console.log(isPangram); // Output: true


// 2. Convert the Roman numeral "MCDXCVIII" to its corresponding integer

// let roman = "MCDXCVIII";
// let romanMap = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
// let num = roman.split('').reduce((acc, curr, i, arr) => 
//     romanMap[curr] < romanMap[arr[i + 1]] ? acc - romanMap[curr] : acc + romanMap[curr], 0);
// console.log(num); // Output: 1498

// or

// let roman = "MCDXCVIII";
// let romanMap = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
// let num = 0;
// for (let i = 0; i < roman.length; i++) {
//     if (i < roman.length - 1 && romanMap[roman[i]] < romanMap[roman[i + 1]]) {
//         num -= romanMap[roman[i]];
//     } else {
//         num += romanMap[roman[i]];
//     }
// }
// console.log(num); // Output: 1498

// Intermediate Level (Strings & Arrays):

// 1. Find the Most Frequent Word in a Sentence
// Identify the word that appears most frequently in a given sentence.

// Input: "apple banana apple orange banana apple"
// Output: "apple"

// let sentence = "apple banana apple orange banana apple".split(" ");
// let freqMap = {};
// let maxWord = "", maxCount = 0;
// for (let word of sentence) {
//     freqMap[word] = (freqMap[word] || 0) + 1;
//     if (freqMap[word] > maxCount) {
//         maxCount = freqMap[word];
//         maxWord = word;
//     }
// }
// console.log(maxWord); // Output: "apple"

//or

// let sentence = "apple banana apple orange banana apple".split(" ");
// let freqMap = sentence.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
// }, {});
// let maxWord = Object.keys(freqMap).reduce((a, b) => freqMap[a] > freqMap[b] ? a : b);
// console.log(maxWord); // Output: "apple"


// 2. Find the Longest Common Prefix in an Array of Strings
// Given an array of strings, find the longest common prefix shared among them.

// Input: ["flower", "flow", "flight"]
// Output: "fl"

// let words = ["flower", "flow", "flight"];
// let prefix = "";
// let minLen = Math.min(...words.map(word => word.length));
// for (let i = 0; i < minLen; i++) {
//     let char = words[0][i];
//     for (let word of words) {
//         if (word[i] !== char) {
//             console.log(prefix); // Output: "fl"
//             return;
//         }
//     }
//     prefix += char;
// }
// console.log(prefix);

//or

// let words = ["flower", "flow", "flight"];
// let prefix = words.reduce((acc, word) => acc.slice(0, word.split('').findIndex((char, i) => char !== acc[i]) + 1 || acc.length), words[0]);
// console.log(prefix); // Output: "fl"



// input=["flower","flow","flight"]
// comprefix=""
// shortest=input[0]
// for(ele of input){
//     if(shortest.length>ele.length){
//         shortest=ele
//     }
// }
// console.log(shortest)
// for(i=0;i<shortest.length;i++){
//     count=0
//     for(j=0;j<input.length;j++){
//         if(shortest[i]==input[j][i]){
//             count++;
//         }
//     }
//     if(count==input.length){
//         comprefix=comprefix+shortest[i]
//     }else{
//         break;
//     }
// }
// console.log(comprefix)