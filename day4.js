// 10-Day Problem-Solving Challenge* 
// Day 4:

// Beginner Level:

// 1. Print the non-Fibonacci series.  
// function getNonFibonacciSeries(limit) {
//     let fib = [0, 1];
//     while (true) {
//         let nextFib = fib[fib.length - 1] + fib[fib.length - 2];
//         if (nextFib > limit) break;
//         fib.push(nextFib);
//     }

//     let nonFib = [];
//     for (let i = 0; i <= limit; i++) {
//         if (!fib.includes(i)) {
//             nonFib.push(i);
//         }
//     }

//     return nonFib;
// }

// const limit = 50; 
// const nonFibonacciNumbers = getNonFibonacciSeries(limit);
// console.log("Non-Fibonacci Numbers:", nonFibonacciNumbers);

// 2. Print the non-prime numbers up to 50. 
// for (let i = 2; i <= 50; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (!isPrime) {
//         console.log(i);
//     }
// }
// or
// let nonPrimes = [];
// for (let i = 2; i <= 50; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (!isPrime) {
//         nonPrimes.push(i); 
//     }
// }

// console.log("Non-Prime Numbers:", nonPrimes); 
// 3. Program to check whether a number is a Magic Number or not.  
// let num = 19; 
// let sum = num;
// while (sum > 9) {
//     sum = Math.floor(sum / 10) + (sum % 10); 
// }
// if (sum === 1) {
//     console.log(`${num} is a Magic Number.`);
// } else {
//     console.log(`${num} is NOT a Magic Number.`);
// }
// Intermediate Level:

// 1. Input:  [1, 2, 0, 4, 3, 0, 5, 0]
//    Output: [1, 2, 4, 3, 5, 0, 0, 0]  
//    Explanation: There are three 0s that are moved to the end.
// input =  [1, 2, 0, 4, 3, 0, 5, 0]
// newop=[]
// zeroop=[]
// for(ele of input){
//     if(ele==0){
//         zeroop.push(ele)
//     }else{
//         newop.push(ele)
//     }
// }
// for(ele of zeroop){
//     newop.push(ele)
// }
// console.log(newop)

// 2. Input: [10, 3, 5, 6, 2] 
//    Output: [180, 600, 360, 300, 900]
//    Explanation: Product of the array excluding itself.
// input = [10, 3, 5, 6, 2];
//output = [];
//  for (let i = 0; i < input.length; i++) {
//      let prod = 1;
//      for (let j = 0; j < input.length; j++) {
//          if (i !== j) {
//              prod *= input[j];
//          }
//      }
//      output.push(prod);
//  }
 
//  console.log("Output:", output);//Output: [ 180, 600, 360, 300, 900 ]

// 3. Generate all consecutive subarrays in the array [22, 33, 44, 55, 66]
// arr = [22, 33, 44, 55, 66]
// newarr=[]
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<=arr.length;j++){
//         newarr.push(arr.slice(i,j));
//     }
// }
// console.log(newarr)
     
//op  [
//     [ 22 ],
//     [ 22, 33 ],
//     [ 22, 33, 44 ],
//     [ 22, 33, 44, 55 ],
//     [ 22, 33, 44, 55, 66 ],
//     [ 33 ],
//     [ 33, 44 ],
//     [ 33, 44, 55 ],
//     [ 33, 44, 55, 66 ],
//     [ 44 ],
//     [ 44, 55 ],
//     [ 44, 55, 66 ],
//     [ 55 ],
//     [ 55, 66 ],
//     [ 66 ]
//   ]