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

// Arrays
// let programmingLanguages = ['js', 'css', 'html'];
// the old way
// for (let i = 0; i < programmingLanguages.length; i++) {
//    console.log(`I really like ${programmingLanguages[i]}`);
// }
// new es6 way
// for(let language of programmingLanguages) {
//    console.log(`I really like ${language}`);
// }

// let students = [{
//    name: 'Steve',
//    course: 'History'
// }, {
//    name: 'Lisa',
//    course: 'Biology'
// }, {
//    name: 'John',
//    course: 'Physics'
// }];
// let peopleArray = students.find((student) => {
//    return student.course === 'Physics';
// })
// console.log(peopleArray);

// classes

// function Plane() {
//     this.wings=2;
//     this.speed = 100;
//     this.altitude = 0; 
// }
// Plane.prototype.fly = function() {
//    this.altitude = 3000;
// };
// const myPlane = new Plane();
// function JetFighter () {
//     this.speed = 1000; 
// }
// JetFighter.prototype = new Plane();
// const myJetFighter = new JetFighter();
// // console.log(myPlane.altitude);
// console.log(myJetFighter.speed);
// // es6 classes
// class Human {
//    constructor(height){
//       this.height = height;
//       this.location = {
//          x:0,
//          y:0
//       };
//    // note there is no comma after method
//    }
//    walk(x,y){
//       this.location.x += x;
//       this.location.y += y;
//    }
//    static get sayHello(){
//       return 'Aloha!'
//    }
// }
// class Warrior extends Human{
//    constructor(){
//       super();
//       this.strength =10;
//    }
// }
// // const myWarrior = new Warrior();
// // console.log(myWarrior);
// console.log(Human.sayHello);

// objects

// let flower = {
//    height: 10,
//    color: 'yellow',
//    // shorthand method
//    grow() {
//       this.height +=5;
//    }
// };
// flower.grow();
// console.log(flower.height);

// let height = 4;
// let strength = 100;
// let person = {
//    name: 'Liviu',
//    height: '181',
//    strength: 100
// };
// let warrior = {
//    height: '200',
//    strength: 1000
// };
// let myWarrior = Object.assign({}, person, warrior);
// console.log(myWarrior);

let person1 = {
   name: 'Liviu',
   age: 30
};

let person2 = Object.assign({}, person1, {
   name: 'McJohn',
   age: 24,
   style: 'Autumn'
});
console.log(person1, person2);
