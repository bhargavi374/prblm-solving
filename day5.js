// 10-Day Problem-Solving Challenge* 
// Day 5:

// Beginner Level:

// 1. Rotate an Array
// Rotate an array k times to the right.
// Input: arr = [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

// function rotateArray(arr, k) {
//     let n = arr.length;
//     k = k % n; 

//     for (let i = 0; i < k; i++) {
//         arr.unshift(arr.pop());
//     }

//     return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// console.log(rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]
// 2. Implement Binary search
// a=[11,23,45,67,89,122,345,567]
// s=0;
// e=a.length-1;
// target=45;
// while(s<=e){
//     let mid=Math.floor((s+e)/2)
//     if(a[mid]==target){
//         console.log("element found at index:"+mid)
//         break;
//     }else if(a[mid]>target){
//         e=mid-1;
//     }else{
//         s=mid-1;
//     }
// }

// Intermediate Level:

// 1. Find Intersection
// Write a function to find the intersection of two arrays.
// Input: [1, 2, 3, 4] and [3, 4, 5, 6]
// Output: [3, 4]

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// let intersection = [];

// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.includes(arr1[i])) {
//     intersection.push(arr1[i]);
//   }
// }

// console.log(intersection); // Output: [3, 4]
// 2. Find Pair with Sum
// Find a pair of numbers in an array that adds up to a target sum.
// Input: arr = [1, 2, 3, 4, 5], target = 6
// Output: [1, 5] or [2, 4]
// const arr = [1, 2, 3, 4, 5];
// const target = 6;
// let pair = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       pair = [arr[i], arr[j]];
//       break;
//     }
//   }
//   if (pair.length > 0) break;
// }

// console.log(pair); // Output: [1, 5] or [2, 4]

// 3. Merge Sorted Arrays
// Merge two sorted arrays into a single sorted array.
// Input: [1, 3, 5] and [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
// a=[1, 3, 5]
// b=[2, 4, 6]
// merge=[...a,...b]
// for(i=0;i<merge.length;i++){
//     for(j=0;j<merge.length;j++){
//         if(merge[j]>merge[j+1]){
//             temp=merge[j+1]
//             merge[j+1]=merge[j]
//             merge[j]=temp
//         }
//     }
// }
// console.log(merge)