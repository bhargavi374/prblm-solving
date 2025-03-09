// for(i=-2;i>=-12;i--){
//     console.log(i)
// }
// num=1;
// sum=0;
// while(num<=50){
//     sum=sum+num;
//     num++
// }
// console.log(sum)
// sum=0;
// for(i=1;i<=20;i++){
//     if(i%2==0){
//         sum=sum+i
//     }
// }
// console.log(sum)
// i=0;
// sum=0;
// while(i<=20){
//     if(i%2==0){
//         sum=sum+i
//     }
//     i++
// }
// console.log(sum)

// var num = prompt("enter a number:")
// for(i=1;i<=10;i++){
//     console.log(`${num}*${i}=${num*i}`)
// }

//  var num = prompt("enter a number:")
// fact=1;
// for(i=1;i<=num;i++){
//     if(num==0){
//         return 1
//     }else{
//     fact=fact*i;
//     }
// }
// console.log(fact)
// var num = prompt("Enter a number:");
// num = Number(num); // Convert input to a number
// var sum = 0;

// while (num > 0) {
//     var digit = num % 10;  // Extract last digit
//     sum = sum + digit; // Add digit to sum
//     num = Math.floor(num / 10); // Remove last digit
// }

// console.log("Sum of digits:", sum);

// str="shruthi"
// newstr="";
// i=str.length-1
// while(i>=0){
//     newstr=newstr+str[i];
//     i--
// }
// console.log(newstr)

// str="shruthi"
// nstr=""
// for(i=str.length-1;i>=0;i--){
//     nstr=nstr+str[i]
// }
// console.log(nstr)


// a=0;
// b=1;
// sum=0;
// for(i=1;i<=20;i++){
//     console.log(sum)
//     a=b;
//     b=sum;
//     sum=a+b
// }
// row=5;
// col=5;
// for(i=1;i<=row;i++){
//     res=""
//     for(j=1;j<=5-i+1;j++){
//         res=res+"*"+" "
//     }
//     console.log(res)
// }
// row=5;
// col=5;
// for(i=1;i<=row;i++){
//     res=""
//     for(j=1;j<=i;j++){
//         res=res+"*"+" "
//     }
//     console.log(res)
// }
// row=5;
// col=5;
// for(i=1;i<=row;i++){
//     res=""
//     for(j=1;j<=col;j++){
//         if(j>=i){
//         res=res+"*"+" "
//     }else{
//         res=res+" "+" "
//     }
//     }
//     console.log(res)
// }
// row=5;
// col=5;
// for(i=1;i<=row;i++){
//     res=""
//     for(j=1;j<=col;j++){
//         if(5-i+1<=j){
//         res=res+"*"+" "
//     }else{
//         res=res+" "+" "
//     }
//     }
//     console.log(res)
// }

// const arr = [1,2,3,4,5]
// console.log(arr)
// arr.push(6)
// console.log(arr)
// arr.unshift(0)
// console.log(arr)
// arr.pop(6)
// console.log(arr)
// arr.shift(0)
// console.log(arr)

// const arr = ["abc","def","ghi","jkl","mno","pqr","stu"]
// // const newarr = arr.slice(1,4)
// const newarr = arr.splice(1,4)
// console.log(newarr)

// function func1(callback){
//     console.log("1st function");
//     callback();
// }
// function callback(){
//     console.log("callback function")
// }

// const arr = [1,2,3,4,5]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]*2)
// }
// const arr = [1,2,3,4,5]
// let maparr = []
// for(i=0;i<arr.length;i++){
// maparr.push(arr[i]*2)
// }
// console.log(maparr)
//   arr=["shruthi","nareddy"]
//   for(val of arr){
//       console.log(val)
//   }
//   obj={
//       name:"shruthi",
//       age:21
//   }
//   for(keys in obj){
//     //   console.log("keys",keys)
//     //   console.log("values",obj[keys])
//       console.log(keys,obj[keys])
//   }

// setTimeout(()=>{
//     console.log("hi")
// },5000)
// for(i=0;i<5;i++){
// setTimeout(()=>{
//     console.log("i")
// },5000)
// }
// let countdown=10;
// const intervalId = setInterval(()=>{
//     console.log(countdown)
//     countdown--
//     if(countdown<0){
//         clearInterval(intervalId)
//         console.log("countdown ended")
//     }
// })

// const obj1 = {
//     name: "john",
//     age: 21,
//     sayhello: function () {
//         console.log(`I am ${this.name}. And I am ${this.age} years old.`);
//     }
// };

// obj1.sayhello(); // Output: I am john. And I am 21 years old.

// const obj2 = {
//     name: "alice",
//     age: 25
// };

// // Using `call` to execute `sayhello` from obj1 with `this` bound to obj2
// obj1.sayhello.call(obj2); 
// // Output: I am alice. And I am 25 years old.
// function model(name,milage){
//     this.name=name;
//     this.milage=milage;
//     this.getinfo=function(){
//         console.log(`${this.name}model gives ${ this.milage}milage`)
//     }
// }

// const car = new model("thar roxx",8)
// console.log(car.getinfo())
// console.log(car.name)
// console.log(car.milage)//constructor
// function outer() {
//     let name = "outer";
//     return function inner() {
//         console.log(`This is inner function accessing variable called name from "outer": ${name}`);
//     };
// }

// // Store the returned function
// const innerFunc = outer();

// // Call the inner function
// innerFunc(); //closure

// function a(a){
//     console.log(a);
//     return function b(b){
//         console.log(a*b)
//         return function c(c){
//             console.log(a,b,c)
//             return a+b+c
//         }
//     }
// }
// console.log(a(1)(2)(3))//currying

// const promise = new Promise((resolve, reject) => {
//     console.log(resolve); // Logs the resolve function
//     console.log(reject);  // Logs the reject function
// });

// console.log(promise); // Logs the pending Promise object

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 2000);
// });

// console.log(promise); // Logs: Promise { <pending> }

// promise.then((result) => console.log(result)); // Logs: Promise resolved! (after 2s)

// async function promise(){
//     return "hello"
// }
// promise().then((res)=>console.log(res))
// async function promise() {
//     return "hello";
// }

// promise().then((res) => console.log(res));
// Step-by-Step Execution:
// The async function promise() implicitly returns a Promise.
// Calling promise() returns Promise { "hello" }.
// .then(res => console.log(res)) logs "hello" to the console.
// Expected Output:
// nginx
// Copy
// Edit
// hello
// Using await Instead of .then()
// If you want to use await, you must be inside another async function:

// js
// Copy
// Edit
// async function main() {
//     const res = await promise();
//     console.log(res);
// }

// main();
// Key Takeaways:
// ✅ async functions always return a Promise.
// ✅ Use .then() to handle the returned Promise.
// ✅ Use await inside an async function to simplify handling the Promise.







// // arr = [10, 5, 8, 20, 15];
// // largest = -Infinity;
// // secondLargest = -Infinity;

// // for (i = 0; i < arr.length; i++) {
// //     if (arr[i] > largest) {
// //         secondLargest = largest;
// //         largest = arr[i];
// //     } else if (arr[i] > secondLargest && arr[i] != largest) {
// //         secondLargest = arr[i];
// //     }
// // }
// // console.log(secondLargest); // Output: 15

// str = "hello";
// reversed = "";

// for (i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
// }
// console.log(reversed); // Output: "olleh"

// str = "radar";
// isPalindrome = true;

// for (i = 0; i < str.length / 2; i++) {
//     if (str[i] != str[str.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }
// console.log(isPalindrome); // Output: true

// // arr = [1, 2, 3, 4, 6];
// // sum = 6;
// // found = false;

// // for (i = 0; i < arr.length; i++) {
// //     for (j = i + 1; j < arr.length; j++) {
// //         if (arr[i] + arr[j] == sum) {
// //             console.log(arr[i], arr[j]); // Output: 2 4
// //             found = true;
// //             break;
// //         }
// //     }
// //     if (found) break;
// // }
// // 5. Factorial of a Number Without Recursion
// // js
// // Copy
// // Edit
// // n = 5;
// // fact = 1;

// // for (i = 1; i <= n; i++) {
// //     fact = fact * i;
// // }
// // console.log(fact); // Output: 120
// // 6. Fibonacci Series Without Recursion
// // js
// // Copy
// // Edit
// // n = 6;
// // a = 0;
// // b = 1;
// // console.log(a); // First term
// // console.log(b); // Second term

// // for (i = 2; i < n; i++) {
// //     c = a + b;
// //     console.log(c);
// //     a = b;
// //     b = c;
// // }
// // // Output: 0 1 1 2 3 5
// // 7. Reverse a Number
// // js
// // Copy
// // Edit
// // num = 1234;
// // rev = 0;

// // while (num > 0) {
// //     digit = num % 10;
// //     rev = rev * 10 + digit;
// //     num = Math.floor(num / 10);
// // }
// // console.log(rev); // Output: 4321
// // 8. Find First Repeating Element
// // js
// // Copy
// // Edit
// // arr = [1, 2, 3, 2, 1];
// // found = false;

// // for (i = 0; i < arr.length; i++) {
// //     for (j = i + 1; j < arr.length; j++) {
// //         if (arr[i] == arr[j]) {
// //             console.log(arr[i]); // Output: 2
// //             found = true;
// //             break;
// //         }
// //     }
// //     if (found) break;
// // }
// // 9. Check If a Number is Prime
// // js
// // Copy
// // Edit
// // n = 7;
// // isPrime = true;

// // if (n < 2) isPrime = false;
// // for (i = 2; i * i <= n; i++) {
// //     if (n % i == 0) {
// //         isPrime = false;
// //         break;
// //     }
// // }
// // console.log(isPrime); // Output: true
// // 10. Find GCD (Greatest Common Divisor) Using Euclidean Algorithm
// // js
// // Copy
// // Edit
// // a = 48;
// // b = 18;

// // while (b != 0) {
// //     temp = b;
// //     b = a % b;
// //     a = temp;
// // }
// // console.log(a); // Output: 6


// 11. Find the Largest Element in an Array
// js
// Copy
// Edit
// arr = [10, 5, 8, 20, 15];
// largest = arr[0];

// for (i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log(largest); // Output: 20
// 12. Find the Smallest Element in an Array
// js
// Copy
// Edit
// arr = [10, 5, 8, 20, 15];
// smallest = arr[0];

// for (i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// console.log(smallest); // Output: 5
// 13. Count Even and Odd Numbers in an Array
// js
// Copy
// Edit
// arr = [1, 2, 3, 4, 5, 6, 7, 8];
// evenCount = 0;
// oddCount = 0;

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }
// console.log("Even:", evenCount, "Odd:", oddCount); // Output: Even: 4 Odd: 4
// 14. Swap Two Numbers Without Using a Third Variable
// js
// Copy
// Edit
// a = 5;
// b = 10;

// a = a + b; // a becomes 15
// b = a - b; // b becomes 5
// a = a - b; // a becomes 10

// console.log(a, b); // Output: 10 5
// 15. Check if an Array is Sorted
// js
// Copy
// Edit
// arr = [1, 2, 3, 4, 5];
// isSorted = true;

// for (i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//         isSorted = false;
//         break;
//     }
// }
// console.log(isSorted); // Output: true
// 16. Find Missing Number in an Array (1 to N)
// js
// Copy
// Edit
// arr = [1, 2, 3, 5];
// n = arr.length + 1;
// sumExpected = (n * (n + 1)) / 2;
// sumActual = 0;

// for (i = 0; i < arr.length; i++) {
//     sumActual += arr[i];
// }
// missingNumber = sumExpected - sumActual;
// console.log(missingNumber); // Output: 4
// 17. Count Frequency of Each Element in an Array
// js
// Copy
// Edit
// arr = [1, 2, 3, 2, 1, 3, 3];
// counted = [];

// for (i = 0; i < arr.length; i++) {
//     count = 1;
//     if (counted.includes(arr[i])) continue;

//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) count++;
//     }

//     counted.push(arr[i]);
//     console.log(arr[i], ":", count);
// }
// // Output: 
// // 1 : 2
// // 2 : 2
// // 3 : 3
// 18. Remove Duplicates from an Array
// js
// Copy
// Edit
// arr = [1, 2, 3, 2, 1, 4, 5];
// unique = [];

// for (i = 0; i < arr.length; i++) {
//     isDuplicate = false;
//     for (j = 0; j < unique.length; j++) {
//         if (arr[i] == unique[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         unique.push(arr[i]);
//     }
// }
// console.log(unique); // Output: [1, 2, 3, 4, 5]
// 19. Find the Intersection of Two Arrays
// js
// Copy
// Edit
// arr1 = [1, 2, 3, 4];
// arr2 = [3, 4, 5, 6];
// intersection = [];

// for (i = 0; i < arr1.length; i++) {
//     for (j = 0; j < arr2.length; j++) {
//         if (arr1[i] == arr2[j]) {
//             intersection.push(arr1[i]);
//             break;
//         }
//     }
// }
// console.log(intersection); // Output: [3, 4]
// 20. Find the Union of Two Arrays
// js
// Copy
// Edit
// arr1 = [1, 2, 3, 4];
// arr2 = [3, 4, 5, 6];
// union = [];

// for (i = 0; i < arr1.length; i++) {
//     union.push(arr1[i]);
// }

// for (i = 0; i < arr2.length; i++) {
//     isPresent = false;
//     for (j = 0; j < union.length; j++) {
//         if (arr2[i] == union[j]) {
//             isPresent = true;
//             break;
//         }
//     }
//     if (!isPresent) {
//         union.push(arr2[i]);
//     }
// }
// console.log(union); // Output: [1, 2, 3, 4, 5, 6]
// 21. Find Maximum Subarray Sum (Kadane’s Algorithm)
// js
// Copy
// Edit
// arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// maxSum = arr[0];
// currentSum = arr[0];

// for (i = 1; i < arr.length; i++) {
//     if (currentSum < 0) {
//         currentSum = arr[i];
//     } else {
//         currentSum += arr[i];
//     }
//     if (currentSum > maxSum) {
//         maxSum = currentSum;
//     }
// }
// console.log(maxSum); // Output: 6
// 22. Find Two Elements Whose Sum is Closest to Zero
// js
// Copy
// Edit
// arr = [-10, -8, -3, 2, 4, 6, 8];
// minSum = Infinity;
// num1 = num2 = 0;

// for (i = 0; i < arr.length - 1; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         sum = arr[i] + arr[j];
//         if (Math.abs(sum) < Math.abs(minSum)) {
//             minSum = sum;
//             num1 = arr[i];
//             num2 = arr[j];
//         }
//     }
// }
// console.log(num1, num2); // Output: -3 2
// 23. Count Vowels and Consonants in a String
// js
// Copy
// Edit
// str = "hello world";
// vowels = "aeiouAEIOU";
// vowelCount = 0;
// consonantCount = 0;

// for (i = 0; i < str.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {
//         isVowel = false;
//         for (j = 0; j < vowels.length; j++) {
//             if (str[i] == vowels[j]) {
//                 isVowel = true;
//                 break;
//             }
//         }
//         if (isVowel) vowelCount++;
//         else consonantCount++;
//     }
// }
// console.log("Vowels:", vowelCount, "Consonants:", consonantCount); 
// // Output: Vowels: 3 Consonants: 7