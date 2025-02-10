// 10-Day Problem-Solving Challenge
// Day 3: 

// Beginner Level:
// 1. Print the Fibonacci series. 
// a=0;
// b=1;
// console.log(a)
// console.log(b)
// for(i=1;i<10;i++){
//     c=a+b;
//     console.log(c)
//     a=b;
//     b=c;
// } 

// a=0;
// b=1;
// stop=420
// console.log(a)
// console.log(b)
// while(true){
//     c=a+b
//     if(c>stop){
//         break;
//     }
//     console.log(c)
//     a=b
//     b=c
// }
// 2. Check if a number is a strong number.

// let n = +prompt("enter a number:")
// temp=n
// sum=0
// while(n>0){
//     digit=n%10
//     fact=1
//     for(i=1;i<=digit;i++){
//         fact=fact*i
//     }
//     sum=sum+fact
//     n=Math.floor(n/10)
// }
// if(temp==sum){
//     console.log("strong number")
// }else{
//    console.log("Not a strong number") 
// }

// 3. Check if a number is an Armstrong number.  

// let n = +prompt("enter a number:")
// temp=n;
// original=temp;
// count=0;
// while(n>0){
//     digit=n%10
//     count++
//     n=Math.floor(n/10)
// }
// sum=0
// while(temp>0){
//     digit=temp%10
//     value=Math.pow(digit,count)
//     sum=sum+value
//     temp=Math.floor(temp/10)
// }
// if(sum==original){
//     console.log("armstrong number")
// }else{
//     console.log("not a armstrong number")
// }

// Intermediate Level:
// 1. Write 20 methods for an array, with one example for each.  
// 1.Length:
// It returns the length of an array.
// Syntax: array.length;

// let arr=[1,2,3,4,5,6]
// console.log(arr.length) //6


// 2.push():
// It adds one or more elements at the end of the array and returns the new length of the array.
// Syntax: array.push(element1, element2, ..., elementN)

// let arr = [1, 2, 3]; 
// let newLen = arr.push(4, 5, 6); 
// console.log(arr);  //[1, 2, 3, 4, 5, 6]
// console.log(newLen); 


// 3.pop():
// The pop() method is used to remove the last element from an array. It modifies the original array and returns the element that was removed.
// Syntax: array.pop()

// let arr = [1, 2, 3]; 
// let removedElement = arr.pop(); 
// console.log(arr);  //[1, 2] 
// console.log(removedElement);  //3

// 4.shift():
// Removes the first element from an array and returns it.
// Syntax:arr.shift()

// let arr = [1, 2, 3]; 
// let removedElement = arr.shift(); 
// console.log(arr);  // [2, 3] 
// console.log(removedElement);  // 1


// 5.unshift():
// Add one or more elements to the beginning of an array.
// Syntax:arr.unshift(element1, element2, ..., elementN)

// let arr = [2, 3, 4]; 
// let newLength = arr.unshift(1); 
// console.log(arr);  //[1, 2, 3, 4] 
// console.log(newLength);  //4


// 6. concat():
// The concat() method is used to merge two or more arrays. It does not modify the original arrays and returns a new array.
// Syntax:array1.concat(array2, array3, ..., arrayN)
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);  // [1, 2,3,4]


// 7. slice():
// The slice() method returns a shallow copy of a portion of an array into a new array. The original array is not modified.
// Syntax:array.slice(start(optional), end(optional))
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 4);
// console.log(arr);        // [1, 2, 3, 4, 5]
// console.log(newArr);  // [2, 3, 4]


// 8. splice():
// The splice() method is used to add, remove, or replace elements in an array. It modifies the original array and returns an array of removed elements.
// Syntax:array.splice(start, deleteCount, item1, item2, ..., itemN)
// deleteCount,item1,item2…. are optional.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 2, 6, 7);
// console.log(arr);     // [1, 6, 7, 4, 5]
// console.log(newArr); // [2, 3]


// 9. indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not found.
// Syntax:
// array.indexOf(searchElement, fromIndex)

// let arr = [1, 2, 3, 4, 5];
// let index = arr.indexOf(3);
// console.log(index);  // 2


// 10. includes():
// The includes() method determines whether an array includes a certain value, returning true or false.
// Syntax:array.includes(searchElement, fromIndex(optional))
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3));  // true
// console.log(arr.includes(16));  // false

// 11. forEach()
// The forEach() method executes a provided function once for each array element.
// Syntax:
// array.forEach(callback(value, index, arr))

// let arr = [1, 2, 3];
// arr.forEach((num) => console.log(num * 3));  //3,6,9

// 12. map():
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax:
// array.map(callback(ele, index, arr))

// let arr = [1, 2, 3];
// let newArr = arr.map(ele => ele * ele);
// console.log(arr);         // [1, 2, 3]
// console.log(newArr);  // [1, 4, 9]


// 13. filter():
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax:
// array.filter(callback(ele, index, arr))

// let arr = [1, 2, 3, 4, 5];
// let evenNums = arr.filter(ele => ele % 2 === 0);
// console.log(arr);       // [1, 2, 3, 4, 5]
// console.log(evenNums);  // [2, 4]



// 14. reduce()
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// Syntax:array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum);  // 10


// 15. reverse():
// The reverse() method reverses the elements of an array in place.
// Syntax:
// array.reverse()

// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);  // [3, 2, 1]


// 16. sort():
// The sort() method sorts the elements of an array in place and returns the sorted array.
// Syntax:array.sort(compareFunction)

// let arr = [3, 1, 4, 2];
// arr.sort((a, b) => a - b); or arr.sort((a,b)=>b-a);
// console.log(arr);          // [1, 2, 3, 4]


// 17. find():
// The find() method returns the first element in the array that satisfies the provided testing function.
// Syntax:
// array.find(callback(ele, index, arr))

// let arr = [1, 2, 3, 4];
// let result = arr.find(ele => ele > 2);
// console.log(result);  // 3



// 18. findIndex():
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the condition, it returns -1.
// Syntax:array.findIndex(callback(element, index, array))
// let arr = [1, 2, 3, 4];
// let index = arr.findIndex(num => num > 2);
// console.log(index);  // 2



// 19. every():
// The every() method tests whether all elements in the array pass the provided test implemented by a callback function. It returns true if all elements pass the test, otherwise false.
// Syntax:
// array.every(callback(element, index, array))

// let arr = [2, 4, 6, 8];
// let result = arr.every(num => num % 2 === 0);
// console.log(result);  // true




// 20. some():
// The some() method tests whether at least one element in the array passes the provided test implemented by a callback function. It returns true if any element passes the test, otherwise false.
// Syntax:
// array.some(callback(element, index, array))

// let arr = [1, 3, 5, 6];
// let result = arr.some(num => num % 2 === 0);
// console.log(result);  // true



// 21. join():
// The join() method joins all elements of an array into a string, separated by a specified separator.
// Syntax:
// array.join(separator)

// let arr = ['Hello', 'World'];
// let str = arr.join(' ');
// console.log(str);  // "Hello World"


// 22. flat():
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Syntax:
// array.flat(depth)

// let arr = [1, [2, [3, 4]], 5];
// let flatArr = arr.flat(2);
// console.log(flatArr);  // [1, 2, 3, 4, 5]



// 23. flatMap():
// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is similar to a map() followed by a flat() of depth 1.
// Syntax:
// array.flatMap(callback(ele, index, arr))

// let arr = [1, 2, 3];
// let result = arr.flatMap(num => [num, num * 2]);
// console.log(result);  // [1, 2, 2, 4, 3, 6]


// 23. fill():
// The fill() method changes all elements in an array to a static value from a start index to an end index.
// Syntax:
// array.fill(value, start(optional), end(optional))


// let arr = [1, 2, 3, 4];
// arr.fill(0, 1, 3);
// console.log(arr);  // [1, 0, 0, 4]


// 24. toString()
// The toString() method returns a string representing the elements of the array.
// Syntax:
// array.toString()

// let arr = [1, 2, 3];
// let str = arr.toString();
// console.log(str);  // "1,2,3"


// 25. toLocaleString()
// The toLocaleString() method returns a localized string representing the elements of the array.
// Syntax:array.toLocaleString(locales, options)

// let arr = [12345.67, new Date()];
// let str = arr.toLocaleString('en-US');
// console.log(str);   //"12,345.67, 12/26/2024, 12:00:00 AM"


// 26. keys():
// The keys() method returns a new Array Iterator object that contains the keys (indexes) for each element in the array.
// Syntax:
// array.keys()

// let arr = ['a', 'b', 'c'];
// let keys = arr.keys();
// for (let key of keys) {
//   console.log(key);  // 0, 1, 2
// }

// 27. values():
// The values() method returns a new Array Iterator object that contains the values for each element in the array.
// Syntax:array.values()

// let arr = ['a', 'b', 'c'];
// let values = arr.values();
// for (let value of values) {
//   console.log(value);  // 'a', 'b', 'c'
// }


// 28. entries():
// The entries() method returns a new Array Iterator object that contains key-value pairs for each index in the array.
// Syntax:array.entries()

// let arr = ['a', 'b', 'c'];
// let entries = arr.entries();
// for (let [key, value] of entries) {
//   console.log(key, value);  // 0 'a', 1 'b', 2 'c'
// }


// 29. copyWithin():
// The copyWithin() method copies part of an array to another location in the same array without modifying its length.
// Syntax:array.copyWithin(target, start, end)

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3);
// console.log(arr);  // [4, 5, 3, 4, 5]


// 30. reduceRight():
// The reduceRight() method works like reduce(), but it processes the array from right to left.
// Syntax:
// array.reduceRight(callback(accumulator, currentValue, index, array), initialValue)


// let arr = [1, 2, 3, 4];
// let result = arr.reduceRight((acc, num) => acc - num);
// console.log(result);  // -2 

// 31. isArray():
// The Array.isArray() method checks if the passed value is an array and returns true or false.
// Syntax:
// Array.isArray(value)

// console.log(Array.isArray([1, 2, 3]));  // true
// console.log(Array.isArray('Hello'));   // false


// 2. Find the second maximum in a given array without sorting it.  
// function findSecondMaximum(arr) {
//     if (arr.length < 2) {
//         return "Array must contain at least two elements.";
//     }

//     let max = -Infinity;
//     let secondMax = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             secondMax = max;
//             max = arr[i];
//         } else if (arr[i] > secondMax && arr[i] < max) {
//             secondMax = arr[i];
//         }
//     }

//     return secondMax === -Infinity ? "No second maximum found." : secondMax;
// }
// const array = [10, 20, 5, 8, 25];
// console.log(findSecondMaximum(array)); // Output: 20

//or

// const arr = [1,8,9,10,20]
// fmax=arr[0];
// smax=arr[0];
// for(i=0;i<arr.length;i++){
//     if(arr[i]>fmax){
//         smax=fmax
//         fmax=arr[i]
//     }else if(arr[i]>smax&&arr[i]!=fmax){
//         smax=arr[i]
//     }
// }
// console.log(smax)


// 3. Find the length of an array without using the length property.

// arr=[11,22,33,44,55]
// i=0
// while(arr[i]!==undefined){
//     i++
// }
// console.log(i)

// function arrayLength(arr){
//     let count=0;
//     for(ele of arr){
//         count++;
//     }
//     return count;
// }
// let nums = [1,2,3,4,5]
// console.log("Length of an array:",arrayLength(nums))//it internally use length property

// or

// function findArrayLength(arr) {
//     let length = 0;
//     while (arr[length] !== undefined) {
//         length++;
//     }
//     return length;
// }
// const array2 = [1, 2, 3, 4, 5];
// console.log(findArrayLength(array2)); // Output: 5