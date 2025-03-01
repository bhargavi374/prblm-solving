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