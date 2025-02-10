// 10-Day Problem-Solving Challenge
// Day 1:
// Beginner Level:

// 1.Determine if a number is even or odd:
// * Using the modulus operator (%).
// * Using the floor division method.
// * Using bitwise operations (&).

// let num = 5;
// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let num = 6;
// if(num===2*Math.floor(num/2)){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let num=7;
// if((num&1)===0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// 2.Find the maximum of three numbers.

// let a=10;b=20;c=5;
// if(a>=b && a>=c){
//     console.log("maximum of three numbers is :"+a);
// }
// else if(b>=a && b>=c){
//     console.log("maximum of three numbers is :"+b);
// }else{
//     console.log("maximum of three numbers is :"+c);
// }

// 3.Print the multiplication table of a given number.

// let n=3;
// for(i=1;i<=10;i++){
//     console.log(n+"*"+i+"="+(n*i))
// }

// or

// let n = 5;
// let limit = 10;
// for(let i=1;i<=limit;i++){
//     console.log(`${n}*${i}=${n*i}`)
// }

// 4.Count even numbers in a given range.

// let start = 4;
// let end = 20;
// let count = 0;
// for(let i=start;i<=end;i++){
//     if(i%2===0){
//         count++
//     }
// }
// console.log(`count of even numbers in a given range ${start} and ${end} : ${count}`)

// 5.Swap two variables:
// * Using a third variable.
// * Without using a third variable.
// * Using XOR.

// let a = 5;
// let b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(`after swapping: a= ${a}, b=${b}`);

// let a = 5;
// let b = 10;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(`after swapping: a= ${a}, b=${b}`);

// let a = 5;
// let b = 10;
// a=a^b;
// b=a^b;
// a=a^b;
// console.log(`after swapping: a= ${a}, b=${b}`);



// Intermediate Level:
// 1.Find the greatest of three numbers.
// let a = 10, b = 25, c = 15
// let greatest = (a>=b && a>=c)?a:(b>=c?b:c);
// console.log("The greatest number is:"+greatest)

// or 

// let a = 12, b = 25, c = 18;
// let greatest;
 
// if (a > b && a > c) {
//     greatest = a;
// } else if (b > a && b > c) {
//     greatest = b;
// } else {
//     greatest = c;
// }
// console.log("The greatest number is:", greatest);

// or

// function findGreatest(a, b, c) {
//     return Math.max(a, b, c);
// }
// console.log(findGreatest(10, 20, 15)); 


// 2.Check if a number is prime.
// n=5;
// count=0;
// for(i=1;i<=n;i++){
//     if(n%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log("prime number")
// }else{
//     console.log("not a prime number")     
// }

// or

// n=2;
// status=true;
// for(i=2;i<n;i++){
//     if(n%i==0){
//         status=false
//         break;
//     }
// }
//   if(status) {
//       console.log("prime number")
// }else{
//     console.log("not a prime number")
// }

// 3.Calculate the factorial of a number:
// * Without recursion.
// * With recursion.
//without
// let num = 9;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact *= i;
// }
// console.log(`the factorial of ${num} is : ${fact}`)

//with
// function fact(n){
//     if(n==1){
//         return 1;
//     }
//     return n*fact(n-1)
// }
// console.log(fact(9))


// 4.Print all the digits in a number.

// let num = 456;
// let digits = num.toString();
// console.log("The digits in the number are:");
// for (let i = 0; i < digits.length; i++) {
//     console.log(digits[i]);
// }

// 5.Implement addition, subtraction, multiplication, and division using functions.
// // // Addition Function
// let a = 2;
// let b = 3;
// function add(a, b) {
//     return a + b;
// }
// console.log("Addition:", add(a, b));
// // // Subtraction Function
// function subtract(a, b) {
//     return a - b;
// }
// console.log("Subtraction:", subtract(a, b));
// // // Multiplication Function
// function multiply(a, b) {
//     return a * b;
// }
// console.log("Multiplication:", multiply(a, b));
// // // Division Function
// function divide(a, b) {
//     if (b === 0) {
//         return "Division by zero is not allowed.";
//     }
//     return a / b;
// }
// console.log("Division:", divide(a, b));