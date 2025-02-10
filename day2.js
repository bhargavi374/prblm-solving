// 10-Day Problem-Solving Challenge
// Day 2:
// Beginner Level:

// 1. Find the LCM of two numbers.
// a=7;
// b=4;
// greatest=a>b?a:b
// while(true){
//     if(greatest%a===0&&greatest%b===0){
//         console.log(greatest)
//         break;
//     }
//     greatest++
// }

// 2. Find the GCD of two numbers.
// a=2;
// b=3;
// product=a*b;
// while(true){
//     remainder=a%b
//     if(remainder==0){
//         console.log(b)
//         break;
//     }
//     a=b;
//     b=remainder;
// }

// 3. Check if a number is a perfect number.
// let n = prompt("enter a number:");
// sum=0;
// for(i=1;i<n;i++){
//     if(n%i==0){
//         sum+=i;
//     }
// }
// if(sum==n){
//     console.log("perfect number");
// }else{
//     console.log("not a perfect number");
// }

// 4. Check if a number is a perfect square.
// let n = prompt("enter a number:");
// for(i=1;i<=n;i++){
//     if(i*i==n){
//         console.log("perfect square")
//     }else{
//         console.log("not a perfect square")
//         break;
//     }
// }

// Intermediate Level:

// 1. Find the sum of prime digits in a number.
// let num = 235468;
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;
//     if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
//         sum += digit;
//     }
//     num = Math.floor(num / 10);
// }
//console.log("Sum of prime digits:", sum)


// 2. Find the nearest prime number to a given number.
// let n = +prompt("enter a number:");
// x=n;
// while(x>0){
//     x++;
//     count=0;
//     for(i=1;i<=x;i++){
//         if(x%i==0){
//             count++;
//         }
//     }
//     if(count==2){
//         greatestprime=x;
//         break;
//     }
// }
// x=n;
// while(x>0){
//     x--;
//     count=0;
//     for(i=1;i<=x;i++){
//         if(x%i==0){
//             count++
//         }
//     }
//     if(count==2){
//         lesserprime=x;
//         break;
//     }
// }
// if(greatestprime-n<n-lesserprime){
//     console.log(greatestprime)
// }else{
//     console.log(lesserprime)
// } 

// or

// let input = 20;
// let isPrime = false;
// let nearestPrime = input;

// while (!isPrime) {
//     isPrime = true;
//     for (let i = 2; i <= Math.sqrt(nearestPrime); i++) {
//         if (nearestPrime % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (!isPrime) {
//         if (nearestPrime < input) {
//             nearestPrime -= 1; 
//         } else {
//             nearestPrime += 1; 
//         }
//     }
// }

// console.log("Nearest prime number:", nearestPrime);
// 3. Find all twin primes in a given range.
// let start = 1; 
// let end = 50; 
// let twinPrimes = [];

// for (let i = start; i <= end - 2; i++) {
//     let isPrime1 = true;
//     let isPrime2 = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime1 = false;
//             break;
//         }
//     }

//     for (let j = 2; j < i + 2; j++) {
//         if ((i + 2) % j === 0) {
//             isPrime2 = false;
//             break;
//         }
//     }

//     if (isPrime1 && isPrime2 && i > 1) {
//         twinPrimes.push([i, i + 2]);
//     }
// }

// console.log("Twin primes in the range:", twinPrimes);

// or

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0)
//             return false;
//     }
//     return true;
// }

// let res = [];
// for (let i = 2; i <= 50; i++) {
//     if (isPrime(i) && isPrime(i + 2)) {
//         res.push([i, i + 2]);
//     }
// }
// console.log(res);

//or

//range=prompt("enter end value:")
// function isPrime(n) {
//     for (let i = 2; i < n; i++) 
//         if (n % i == 0)return false
//     return true
// }
// for (let j = 2; j <= range-2; j++) {
//     if (isPrime(j) && isPrime(j + 2)) {
//         console.log([j, j + 2]);
//     }
// }
