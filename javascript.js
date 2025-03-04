//         let a = 19;
//         let b = 18.5;
//         let c = 'a';
//         let d = true;
//         let e;
//         let f = null;
//         let g = [1, 2.5, true, 'a', "bharu", {
//             name: "bhargavi",
//             id: 5
//         }, [1, 2, 3, 4, 5], null, undefined];
//         let string = "bharu";
//         let obj = {
//             name: "shruthi",
//             id: 5
//         };
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log(d);
//         console.log(e);
//         console.log(f);
//         console.log(g);
//         console.log(string);
//         console.log(obj);
        
        
// // 19
// // 18.5
// // a
// // true
// // undefined
// // null
// // [
// //   1,
// //   2.5,
// //   true,
// //   'a',
// //   'bharu',
// //   { name: 'bhargavi', id: 5 },
// //   [ 1, 2, 3, 4, 5 ],
// //   null,
// //   undefined
// // ]
// // bharu
// // { name: 'shruthi', id: 5 }



//var a = 10;//the var can be reassigned and redeclared ;
//         var a = 20;
//         let b = 30;//let can be re assigned but not re declared;
//         b = 50;
//         const k = 100;//const can neither be redeclared or reassigned;

// console.log(a)
// console.log(b)
// console.log(k)

// function foodCourtBill() {
//     let total = Number(prompt("enter the total amount:"));
//     console.log(`total-${total}`);
//     console.log(`tax-${(18 / 100) * total}$`);
//     console.log(`service charges-15$`);
//     console.log(`your total bill amount is:${total + ((18 / 100) * total) + 15}$`);
// }
// function simpleInterest() {
//     let principal = Number(prompt("enter the principal amount:"));
//     let rate = Number(prompt("enter the rate of interest:"));
//     let time = Number(prompt("enter the time:"));
//     console.log(`the simple interest is ${(principal * rate * time) / 100} and the amount after adding the interest is ${((principal * rate * time) / 100) + principal}`);
// }
// function lateFees() {
//     let lateDays = Number(prompt("enter number of late days:"));

//     if (lateDays >= 1 && lateDays <= 5) {
//         console.log(`the fine amount to pay is: ${lateDays * 2}`);
//     }
//     else if (lateDays >= 6 && lateDays <= 10) {
//         console.log(`the fine amount to pay is: ${lateDays * 3}`);
//     }
//     else if (lateDays > 10) {
//         console.log(`the fine amount to pay is: ${lateDays * 5}`);
//     }

// }

// function hotelRoomRent() {
//     let room = prompt("enter the type of rrom required(standard,delux,suite):").toLowerCase();
//     let days = Number(prompt("enter number of days;"));
//     switch (room) {
//         case "standard":
//             console.log(`the total amount is ${1000 * days}`);
//             break;
//         case "delux":
//             console.log(`the total amount is ${2000 * days}`);
//             break;
//         case "delux":
//             console.log(`the total amount is ${5000 * days}`);
//             break;
//         default:
//             console.log(`invalid input`);
//     }
// }


// function gpa() {
//     let num = Number(prompt("enter number of subjects:"));
//     let total = 0;
//     let credits = 0;
//     for (let i = 1; i <= num; i++) {
//         let grade = prompt(`enter the grade of subject${i}:`).toLowerCase();
//         let c = Number(prompt(`enter the credits for subject${i}`));
//         credits += c;
//         total += marks(grade) * c;
//     }
//     console.log(`your gpa is ${((total) / (credits) / 10)}`);
// }
// function marks(g) {
//     if (g == 'o') {
//         return 100;
//     }
//     else if (g == 'a') {
//         return 90;
//     }
//     else if (g == 'b') {
//         return 80;
//     }
//     else if (g == 'c') {
//         return 70;
//     }
//     else if (g == 'd') {
//         return 60;
//     }
//     else if (g == 'f') {
//         return 0;
//     }
// }






// let updateSalary = () => {
//     let salary = [30000, 45000, 50000, 35000];
//     let updatedSalary = salary.map((val) => val + ((10 / 100) * val));
//     console.log(updatedSalary);
// }

// let oddSales = () => {
//     let sales = [23, 45, 60, 70, 33];
//     let odd = sales.filter((val) => val % 2 !== 0);
//     console.log(odd);
// }
// let capitalTag = () => {
//     let tag = ['soap', 'shampoo', 'toothpaste'];
//     tag.forEach((val) => console.log(val.charAt(0).toUpperCase() + val.slice(1)));
// }
// let pass = () => {
//     let marks = [55, 70, 82, 47];
//     let passing = marks.filter((val) => val >= 50);
//     console.log(passing);
// }

// let emailNames = () => {
//     let details = [{ 'name': 'Alice' }, { 'name': 'Bob' }, { 'name': 'Charlie' }];
//     let names = details.filter((val) => val.name);
//     console.log(names);
// }






        // const person = {name:"Alice",age:25,country:"USA"};

        // for(obj in person){
        //   console.log(`${obj}:${person[obj]}`)
        // }


      

        // let numbers = [10,20,30,40,50]
        // let sum =0;
        // for(num  of numbers ){
        //   sum += num;
        // }
        // console.log(sum)

  
        // let person = {name:"Alice",age:25,country:"USA"};
        // Object.freeze(person);
        // person.id = 20;   
        // console.log(person)



        // let person = {name:"Alice",age:25,country:"USA"};
        // Object.seal(person);
        // person.age = 20;   
        // console.log(person);


      

        // let person = {name:"Alice",age:25,country:"USA"};

        // // Object.keys(person);
        // console.log(Object.keys(person))

    

        // let person = {name:"Alice",age:25,country:"USA"};
        // console.log(Object.values(person))

     

        // let person = {name:"Alice",age:25,country:"USA"};
        //  let none = Object.entries(person);
        //  console.log(none)

      

        // const student = {name:"john",subjects:{math:90,english:85}};

        // for(value in student){
        // //   console.log(Object.keys(student[value]))
        // //       for(key in student){
        // //          console.log(student[value.key])
        // //       }

        //   let int = Object.keys(student[value])
        //   console.log(int)
        // }

     
        // const student = { name: "John", age: 25, subject: "Math" };

        // for(value in student){
        //   console.log(`${value}:${student[value]}`)
        // }
        // for(value in student){
        //   console.log(student[value])
        // }

   

        // const person = { name: "Alice" };
        // Object.freeze(person);
        // person.name = "bob";
        // person.age = 20;
        // console.log(person)




        // function monthlyBudgetPlanner() {
//     let income = prompt("enter the income : ")

//     let list = prompt("enter the total no of items : ")
//     let sum = 0;
//     for (let i = 0; i < list; i++) {
//         let expenses = +prompt("enter the expenses : ")
//         sum += expenses;
//     }

//     let remaining = income - sum;
//     document.write(`The remaining balance - ${remaining}`);
//     console.log(remaining);
// }


// function taxiFareCalculator() {
//     let distance = +prompt("enter the distance : ");
//     let amount = 0;

//     if (distance < 2) {
//         amount = distance * 3;
//     } else if (distance > 2) {
//         let extra = distance - 2;
//         amount = (extra * 5) + (2 * 3);
//     }
//     document.write(`The Total fare is : ${amount} `)

//     console.log(amount);
// }


// function universityAttendanceTracker() {
//     let students = prompt("enter the number of students :  ")
//     let details = []
//     for (let i = 0; i < students; i++) {
//         let obj = {};
//         obj.name = prompt("enter the name : ")
//         obj.attendence = +prompt("enter the attendence : ")
//         details.push(obj);
//     }
//     let ans = details.filter((val) => val.attendence >= 75)
//     for (x of ans) {
//         console.log(x)
//     }
// }

// function speedingTicketCheck() {
//     let speed = prompt("Enter the speed : ");
//     let speedLimit = prompt("Enter the speed limit : ");

//     if (speed > speedLimit) {
//         console.log("crossing speed limit")
//     }
// }



// function currencyConverter() {
//     let inr = Number(prompt("enter the currency in inr to convert in dollars:"));
//     let dollars = (inr / 84).toPrecision(2);
//     if (dollars < 1 && dollars > 0) {
//         console.log(`${inr} rupees in dollars is ${dollars}cents`);
//     }
//     else {
//         console.log(`${inr} rupees in dollars is ${dollars} dollars`);
//     }
// }

      


// // 1.Reverse a String: Input: 'hello' | Output: 'olleh'.

// function reverse() {
//     let str = "hello";
//     reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     console.log(reverse)
// }

// // 2.Check Palindrome: Input: 'radar' | Output: True .

// function palindrome() {
//     let str = "radar"
//     reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }

//     if (str === reverse) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }

// }

// // 3.Find Length: Input: 'hello' | Output: 5.

// function length() {
//     let str = "hello";
//     let length = str.length;
//     console.log(length)
// }


// // 4.Count Vowels and Consonants: Input: 'hello' | Output: Vowels: 2, Consonants: 3 .

// function countVowelsAndConsonants() {
//     let n = "hello";
//     let vowels = 0;
//     let Consonants = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === "a" || n[i] === "i" || n[i] === "e" || n[i] === "o" || n[i] === "u") {
//             vowels++;
//         } else {
//             Consonants++;
//         }
//     }
//     console.log(vowels);
//     console.log(Consonants);
// }

// // 5.Change Case: Input: 'Hello' | Output: 'hELLO' .

// function changeCase() {
//     let n = "Hello";
//     let v = "";
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === n[i].toUpperCase()) {
//             v = v + n[i].toLowerCase()
//         } else {
//             v = v + n[i].toUpperCase();
//         }
//     }
//     console.log(v);
// }

// // 6.Remove White Spaces: Input: 'hello world' | Output: 'helloworld'

// function removeWhiteSpaces() {
//     let n = "hello world"
//     let s = "";
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === " ") {
//             continue;
//         } else {
//             s = s + n[i];
//         }
//     }
//     console.log(s);
// }

// // 7.Concatenate Strings: Input: 'hello', 'world' | Output: 'helloworld'.

// function concat() {
//     let f = "hello";
//     let l = "world";
//     console.log(f + l);
// }

// // 8.Compare Two Strings: Input: 'abc', 'abc' | Output: True .

// function compare() {
//     let a = "abc";
//     let b = "abc";

//     if (a === b) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// // 9.Repeat a String: Input: 'abc', 3 | Output: 'abcabcabc' .

// function repeat() {
//     let str = "abc";

//     let Repeat = str.repeat(3);
//     console.log(Repeat);
// }

// // 10. Replace a Character: Input: 'hello', 'l', 'z' | Output: 'hezzo'.

// function replace() {
//     let n = "hello"
//     let o = "";
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === "l") {
//             o += "z"
//         } else {
//             o += n[i]
//         }
//     }
//     console.log(o);
// }



// let arr = [3,1,4,1,5,9]
// max = arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)


// function largest(arr){
//     max=arr[0]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(largest([3,1,4,5,9]))//9


// function secondLargest(arr){
//     max=arr[0]
//     secondmax=arr[0]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             secondmax=max
//             max=arr[i]
//         }
//         else if(arr[i]>secondmax && arr[i]<max){
//             secondmax=arr[i]
//         }
//     }
//     return secondmax
// }
// console.log(secondLargest([3,1,4,5,9]))//5

// function sum(arr){
//     sum=0;
//     for(i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum;
// }
// console.log(sum([3,1,4,2]))//10

// //removing dups
// function Duplicate(arr){
//     emp=[]
//     for(i=0;i<arr.length;i++){
//         if(!emp.includes(arr[i])){
//             emp.push(arr[i])
//         }
//     }
//     return emp
// }
// console.log(Duplicate([3,1,1,4,2,5,9,9,2]))


// //check if array is sorted
// function Array(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             return false
//         }
//     }
//     return true
// }
// console.log(Array([1,2,3,4,5]))


// patterns
// row=+prompt("enter no of rows:")
// for(i=1;i<=row;i++){
//     res=" "
//     for(j=1;j<=i;j++){
//         res=res+"*"+" "
//     }
//     console.log(res)
// }
// enter no of rows:6
//  * 
//  * * 
//  * * * 
//  * * * * 
//  * * * * * 
//  * * * * * * 
// row=+prompt("enter no of rows:")
// for(i=1;i<=row;i++){
//     res=" "
//     for(j=1;j<=i;j++){
//         res=res+j+" "
//     }
//     console.log(res)
// }
// enter no of rows:6
//  1 
//  1 2 
//  1 2 3 
//  1 2 3 4 
//  1 2 3 4 5 
//  1 2 3 4 5 6 
// row=+prompt("enter no of rows:")
// value=1
// for(i=2;i<=row;i++){
//     res=" "
//     for(j=2;j<=i;j++){
//         res=res+value+" "
//         value++
//     }
//     console.log(res)
// }
// enter no of rows:6
//  1 
//  2 3 
//  4 5 6 
//  7 8 9 10 
//  11 12 13 14 15 
// row=+prompt("enter no of rows:")
// value=1
// for(i=1;i<=row;i++){
//     res=" "
//     for(j=1;j<=i;j++){
//         res=res+value+" "
//         value++
//     }
//     console.log(res)
// }
// enter no of rows:6
//  1 
//  2 3 
//  4 5 6 
//  7 8 9 10 
//  11 12 13 14 15 
//  16 17 18 19 20 21 

// row=+prompt("enter no of rows:")
// for(i=1;i<=row;i++){
//     res=" "
//     for(j=1;j<=row-i+1;j++){
//         res=res+j+" "
//     }
//     console.log(res)
// }
// enter no of rows:6
//  1 2 3 4 5 6 
//  1 2 3 4 5 
//  1 2 3 4 
//  1 2 3 
//  1 2 
//  1



// function triangle(height){
//     for(let i=1;i<=height;i++){
//     const spaces=''.repeat(height-1);
//     const stars='*'.repeat(i*2-1);
//     console.log(spaces+stars);
// }
// }
// const height = 5
// triangle(height)
// *
// ***
// *****
// *******
// ********* pyramid
// function robits(integer){
//     const br=integer.toString(2).padStart(8,'0')
//     const rb = br.split("").reverse().join("");
//     const ri=parseInt(rb,2);
//     console.log(`original integer:${integer}`)
//     console.log(`binaryrepresentation:${br}`)
//     console.log(`reversed binary:${rb}`)
//     console.log(`reversed integer:${ri}`)
// }
// robits(4)
// robits(14)
// robits(56)
// robits(234)
// original integer:4
// binaryrepresentation:00000100
// reversed binary:00100000
// reversed integer:32






// Basic Operations
// Reverse a String

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello')); // 'olleh'
// Check Palindrome

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome('radar')); // true
// Find Length of String
// function getLength(str) {
//     return str.length;
// }
// console.log(getLength('hello')); // 5
// Count Vowels and Consonants

// function countVowelsConsonants(str) {
//     let vowels = str.match(/[aeiou]/gi)?.length || 0;
//     let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
//     return { vowels, consonants };
// }
// console.log(countVowelsConsonants('hello')); // { vowels: 2, consonants: 3 }
// Change Case

// function swapCase(str) {
//     return str.split('').map(char => 
//         char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//     ).join('');
// }
// console.log(swapCase('Hello')); // 'hELLO'
// Remove White Spaces

// function removeSpaces(str) {
//     return str.replace(/\s+/g, '');
// }
// console.log(removeSpaces('hello world')); // 'helloworld'
// Concatenate Strings

// function concatenate(str1, str2) {
//     return str1 + str2;
// }
// console.log(concatenate('hello', 'world')); // 'helloworld'
// Compare Two Strings

// function compareStrings(str1, str2) {
//     return str1 === str2;
// }
// console.log(compareStrings('abc', 'abc')); // true
// Repeat a String

// function repeatString(str, num) {
//     return str.repeat(num);
// }
// console.log(repeatString('abc', 3)); // 'abcabcabc'
// Replace a Character

// function replaceChar(str, oldChar, newChar) {
//     return str.split(oldChar).join(newChar);
// }
// console.log(replaceChar('hello', 'l', 'z')); // 'hezzo'
// Substring and Patterns
// Count Occurrences of a Substring

// function countSubstring(str, sub) {
//     return str.split(sub).length - 1;
// }
// console.log(countSubstring('banana', 'ana')); // 1
// Find All Substrings

// function getAllSubstrings(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             result.push(str.substring(i, j));
//         }
//     }
//     return result;
// }
// console.log(getAllSubstrings('abc')); // ['a', 'b', 'c', 'ab', 'bc', 'abc']
// Longest Unique Substring

// function longestUniqueSubstring(str) {
//     let seen = new Set(), maxStr = '', tempStr = '';
//     for (let char of str) {
//         if (seen.has(char)) {
//             if (tempStr.length > maxStr.length) maxStr = tempStr;
//             tempStr = tempStr.slice(tempStr.indexOf(char) + 1);
//         }
//         tempStr += char;
//         seen.add(char);
//     }
//     return maxStr.length > tempStr.length ? maxStr : tempStr;
// }
// console.log(longestUniqueSubstring('abcabcbb')); // 'abc'
// Check Rotation

// function isRotation(str1, str2) {
//     return str1.length === str2.length && (str1 + str1).includes(str2);
// }
// console.log(isRotation('abc', 'cab')); // true
// Substring Check

// function containsSubstring(str, sub) {
//     return str.includes(sub);
// }
// console.log(containsSubstring('hello', 'ell')); // true
// Implement strStr() (Find First Occurrence)

// function strStr(haystack, needle) {
//     return haystack.indexOf(needle);
// }
// console.log(strStr('hello', 'll')); // 2
// Count Unique Substrings

// function countUniqueSubstrings(str) {
//     let substrings = new Set(getAllSubstrings(str));
//     return substrings.size;
// }
// console.log(countUniqueSubstrings('aba')); // 6
// Find All Occurrences of Substring

// function findAllOccurrences(str, sub) {
//     let indices = [], i = -1;
//     while ((i = str.indexOf(sub, i + 1)) !== -1) {
//         indices.push(i);
//     }
//     return indices;
// }
// console.log(findAllOccurrences('ababab', 'ab')); // [0, 2, 4]
// Generate All Character Combinations

// function generateCombinations(str) {
//     let result = new Set();
//     function permute(prefix, remaining) {
//         if (prefix.length) result.add(prefix);
//         for (let i = 0; i < remaining.length; i++) {
//             permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
//         }
//     }
//     permute('', str);
//     return [...result];
// }
// console.log(generateCombinations('ab')); // ['a', 'b', 'ab', 'ba']
// Check Anagrams

// function isAnagram(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(isAnagram('listen', 'silent')); // true
// Character Manipulation
// Remove Duplicates

// function removeDuplicates(str) {
//     return [...new Set(str)].join('');
// }
// console.log(removeDuplicates('aabbcc')); // 'abc'

// Character Manipulation
// Replace Vowels

// function replaceVowels(str, char) {
//     return str.replace(/[aeiou]/gi, char);
// }
// console.log(replaceVowels('hello', '*')); // 'h*ll*'
// Most Frequent Character

// function mostFrequentChar(str) {
//     let freq = {}, maxChar = '', maxCount = 0;
//     for (let char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//         if (freq[char] > maxCount) {
//             maxCount = freq[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }
// console.log(mostFrequentChar('hello')); // 'l'
// Character Frequency

// function charFrequency(str) {
//     let freq = {};
//     for (let char of str) freq[char] = (freq[char] || 0) + 1;
//     return freq;
// }
// console.log(charFrequency('hello')); // { h: 1, e: 1, l: 2, o: 1 }
// Permutation Check

// function isPermutation(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(isPermutation('abc', 'cab')); // true
// First Non-Repeating Character

// function firstNonRepeatingChar(str) {
//     let freq = {};
//     for (let char of str) freq[char] = (freq[char] || 0) + 1;
//     for (let char of str) if (freq[char] === 1) return char;
//     return null;
// }
// console.log(firstNonRepeatingChar('swiss')); // 'w'
// Shift Characters

// function shiftChars(str, shift) {
//     return str.replace(/[a-zA-Z]/g, char =>
//         String.fromCharCode(char.charCodeAt(0) + shift)
//     );
// }
// console.log(shiftChars('abc', 1)); // 'bcd'
// Remove Digits

// function removeDigits(str) {
//     return str.replace(/\d/g, '');
// }
// console.log(removeDigits('h3llo')); // 'hllo'
// Reverse Only Vowels

// function reverseVowels(str) {
//     let vowels = str.match(/[aeiou]/gi) || [];
//     return str.replace(/[aeiou]/gi, () => vowels.pop());
// }
// console.log(reverseVowels('hello')); // 'holle'
// Sort Characters

// function sortCharacters(str) {
//     return str.split('').sort().join('');
// }
// console.log(sortCharacters('dcba')); // 'abcd'
// String Encoding/Decoding
// Run-Length Encoding

// function runLengthEncode(str) {
//     return str.replace(/(.)\1*/g, (m, c) => c + m.length);
// }
// console.log(runLengthEncode('aaabbc')); // 'a3b2c1'
// Run-Length Decoding

// function runLengthDecode(str) {
//     return str.replace(/(\D)(\d+)/g, (_, c, n) => c.repeat(n));
// }
// console.log(runLengthDecode('a3b2c1')); // 'aaabbc'
// Caesar Cipher

// function caesarCipher(str, shift) {
//     return str.replace(/[a-z]/gi, char => 
//         String.fromCharCode(char.charCodeAt(0) + shift)
//     );
// }
// console.log(caesarCipher('abc', 2)); // 'cde'
// Base64 Encoding/Decoding

// let encoded = btoa('hello');
// let decoded = atob(encoded);
// console.log(encoded); // 'aGVsbG8='
// console.log(decoded); // 'hello'
// Compressed String Expansion

// function decompress(str) {
//     return str.replace(/(\d+)\[([a-z]+)\]/gi, (_, n, s) => s.repeat(n));
// }
// console.log(decompress('3[a2[bc]]')); // 'abcbcabcbcabcbc'
// Shortest Compressed Form (Run-Length Encoding)

// console.log(runLengthEncode('aaabbc')); // 'a3b2c1'
// Decode Encoded String

// console.log(decompress('3[a]')); // 'aaa'
// Transformations Check

// function canTransform(str1, str2) {
//     return str1.length === str2.length;
// }
// console.log(canTransform('abc', 'def')); // false
// Matching and Validation
// Balanced Parentheses

// function isBalanced(str) {
//     let stack = [];
//     for (let char of str) {
//         if (char === '(') stack.push(char);
//         else if (char === ')') {
//             if (!stack.length) return false;
//             stack.pop();
//         }
//     }
//     return stack.length === 0;
// }
// console.log(isBalanced('(a+b)')); // true
// Contains Only Digits

// function onlyDigits(str) {
//     return /^\d+$/.test(str);
// }
// console.log(onlyDigits('1234')); // true
// Valid Email

// function isValidEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }
// console.log(isValidEmail('test@example.com')); // true
// Valid URL

// function isValidURL(url) {
//     return /^(https?:\/\/)?([\w-]+.)+[\w-]+(\/[\w-]*)?$/.test(url);
// }
// console.log(isValidURL('http://example.com')); // true
// Palindrome with Ignored Characters

// function isPalindromeIgnore(str) {
//     let cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }
// console.log(isPalindromeIgnore('A man, a plan, a canal: Panama')); // true
// Mirror Images

// function isMirrorImage(str1, str2) {
//     return str1 === str2.split('').reverse().join('');
// }
// console.log(isMirrorImage('abc', 'cba')); // true
// Pattern Match (No Regex)

// function patternMatch(str, pattern) {
//     let i = 0, j = 0;
//     while (i < str.length && j < pattern.length) {
//         if (pattern[j] === '*') {
//             if (j === pattern.length - 1) return true;
//             while (i < str.length && str[i] !== pattern[j + 1]) i++;
//         } else if (str[i] !== pattern[j]) return false;
//         i++, j++;
//     }
//     return j === pattern.length;
// }
// console.log(patternMatch('abcd', 'a*c')); // true

// Character & String Extraction
// Extract Numbers

// function extractNumbers(str) {
//     return str.match(/\d/g).map(Number);
// }
// console.log(extractNumbers('a1b2c3')); // [1, 2, 3]
// Unique Characters

// function hasUniqueChars(str) {
//     return new Set(str).size === str.length;
// }
// console.log(hasUniqueChars('abcde')); // true
// Password Validation

// function isValidPassword(password) {
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
// }
// console.log(isValidPassword('P@ssw0rd')); // true
// Advanced Problems
// Longest Palindromic Substring


// function longestPalindrome(s) {
//     let res = '';
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             let substr = s.slice(i, j + 1);
//             if (substr === substr.split('').reverse().join('') && substr.length > res.length) {
//                 res = substr;
//             }
//         }
//     }
//     return res;
// }
// console.log(longestPalindrome('babad')); // 'bab' or 'aba'
// Group Anagrams

// function groupAnagrams(words) {
//     let map = {};
//     for (let word of words) {
//         let sorted = word.split('').sort().join('');
//         map[sorted] = map[sorted] || [];
//         map[sorted].push(word);
//     }
//     return Object.values(map);
// }
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
// Regular Expression Matcher (Simplified)


// function isMatch(str, pattern) {
//     let regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
//     return regex.test(str);
// }
// console.log(isMatch('aa', 'a*')); // true
// Minimum Window Substring


// function minWindowSubstring(s, t) {
//     let map = {}, min = '', left = 0, count = 0;
//     for (let char of t) map[char] = (map[char] || 0) + 1;
    
//     for (let right = 0; right < s.length; right++) {
//         if (map[s[right]]-- > 0) count++;
//         while (count === t.length) {
//             let sub = s.slice(left, right + 1);
//             if (!min || sub.length < min.length) min = sub;
//             if (++map[s[left++]] > 0) count--;
//         }
//     }
//     return min;
// }
// console.log(minWindowSubstring('ADOBECODEBANC', 'ABC')); // 'BANC'
// Edit Distance (Levenshtein Distance)

// function editDistance(a, b) {
//     let dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
//     for (let i = 0; i <= a.length; i++) dp[i][0] = i;
//     for (let j = 0; j <= b.length; j++) dp[0][j] = j;
    
//     for (let i = 1; i <= a.length; i++) {
//         for (let j = 1; j <= b.length; j++) {
//             dp[i][j] = a[i - 1] === b[j - 1] ?
//                 dp[i - 1][j - 1] :
//                 Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
//         }
//     }
//     return dp[a.length][b.length];
// }
// console.log(editDistance('horse', 'ros')); // 3
// Wildcard Matching

// console.log(isMatch('abc', '*b*')); // true
// Rearrange to Palindrome


// function canFormPalindrome(str) {
//     let freq = {};
//     for (let char of str) freq[char] = (freq[char] || 0) + 1;
//     return Object.values(freq).filter(v => v % 2 !== 0).length <= 1;
// }
// console.log(canFormPalindrome('civic')); // true
// Lexicographically Smallest Substring

// function smallestLexSubstring(str) {
//     return [...str].sort().join('');
// }
// console.log(smallestLexSubstring('bac')); // 'ac'
// Count Distinct Subsequences

// function countDistinctSubsequences(str) {
//     let subseq = new Set();
//     function generate(sub, index) {
//         if (index === str.length) return;
//         sub += str[index];
//         subseq.add(sub);
//         generate(sub, index + 1);
//         generate(sub.slice(0, -1), index + 1);
//     }
//     generate('', 0);
//     return subseq.size + 1;
// }
// console.log(countDistinctSubsequences('abc')); // 7
// Smallest String Rotation

// function smallestRotation(str) {
//     let rotations = Array.from({ length: str.length }, (_, i) => str.slice(i) + str.slice(0, i));
//     return rotations.sort()[0];
// }
// console.log(smallestRotation('cba')); // 'abc'
// Find All Permutations

// function getPermutations(str) {
//     if (str.length === 1) return [str];
//     let res = [];
//     for (let i = 0; i < str.length; i++) {
//         let rest = str.slice(0, i) + str.slice(i + 1);
//         for (let perm of getPermutations(rest)) res.push(str[i] + perm);
//     }
//     return res;
// }
// console.log(getPermutations('abc')); 
// // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
// Maximize Lexicographical Order

// function maximizeLexOrder(str) {
//     return [...str].sort().reverse().join('');
// }
// console.log(maximizeLexOrder('acb')); // 'cba'