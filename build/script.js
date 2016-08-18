// 'use strict';

// this is a test to convert syntax from es6 to es5

// const arr = [1, 2, 3];
// const squares = arr.map(x => x * x);
// let add = (a, b) => a + b;

// if (true) {
//    let name = 'John';
// }
// console.log(name);
// for (var i = 0; i >= 0; i--) {
//    // console.log(i + ' is inside function');
// }
// console.log(i + ' is global!');

// let firstName = 'Decebalvs';
// let lastName = 'Per Scorilo';
// // old way
// console.log('My name is ' + firstName + ' ' + lastName);

// arrow functions

// let add = (a,b) => a+b;
// console.log(add(3,2));

// let numbers = [2,3,4,5,6,7];
// // old function
// let doubled = numbers.map(function(n) {
//    return n*2;
// });
// // new es6 function
// let doubled = numbers.map((n)=>n*2);
// console.log(doubled);

// let person = {
//    name: 'Aristotel',
//    sayName(){
//       console.log(`Welcome to the future ${this.name}`);
//    }
// }
// person.sayName();

// let person = {
//    name: 'Aristotel',
//    hobbies: ['Philosophy', 'Reading', 'Drinking'],
//    showHobbies: function() {
//       this.hobbies.forEach( hobby => {
//          console.log(`${this.name} likes ${hobby}`)
//       });
//    }
// }
// person.showHobbies();

// Spread operator and Rest parameters
// let sum = function () {
//    return Array.prototype.reduce.call(arguments, (prev,current)=>{
//       return prev+current;
//    });
// };
// console.log(sum(2,3,4,5));

// // Rest parameters
// let sum = function(...args) {
//    console.log(args);
//    return args.reduce((prev, current)=>prev+current);
// };
// console.log(sum(2,3,4,5));

// let multiply = (mul, ...numbers)=> {
//    return numbers.map((n)=>{
//       return mul * n
//    });
// };
// let result = multiply(2,7,4,5);
// console.log(result);

// // Spread operator
// let numbers = [4,6,3,8];
// let max = Math.max(...numbers);
// console.log(max);

// // Concatenate arrays with the spread operator
// let numbers = ['a','b','c'];
// let secondArray = [3,4,...numbers,6,7,2,];
// console.log(secondArray);

// Destructuring

// let person = {
//    name: 'Liviu',
//    age: 30,
//    location: 'Tm'
// };
// let {age, location: currentLocation} = person;
// let key = 'age';
// let {[key] : keyAge} = person;
// console.log(keyAge);

// let numbers = [1,2,3,4];

// without destructuring
// let first = numbers[0];
// let second = numbers[1];

// using destructuring
// left side - new values we want to create
// right side - data we want to extract from
// let [first, second,,fourth] = numbers;
// console.log(first,second,fourth);
"use strict";