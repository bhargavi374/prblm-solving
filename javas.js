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
