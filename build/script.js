'use strict';

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

var person = {
   name: 'Aristotel',
   hobbies: ['Philosophy', 'Reading', 'Drinking'],
   showHobbies: function showHobbies() {
      var _this = this;

      this.hobbies.forEach(function (hobby) {
         console.log(_this.name + ' likes ' + hobby);
      });
   }
};
person.showHobbies();