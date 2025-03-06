let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 10 elements
let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
let name = "bob";
let age = 24;

console.log(typeof name); // string
console.log(typeof age); // number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);

console.log('1' == 1); // true
console.log(1 == true); // true
console.log("false" == false); // false
console.log("false" == true); // false

if ("false") console.log("Hello false!");

console.log('1' === 1); // false
console.log(1 === true); // false
console.log("true" === true); // false

for (let i = 0; i < 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}

function happyPrint(string) {
  console.log("😀: " + string);
}

function sadPrint(string) {
  console.log("😢: " + string);
}

function add(a, b, callback) {
  let ans = a + b;
  callback(ans);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);

function printDate() {
  console.log(new Date().toLocaleTimeString());
}

setInterval(printDate, 1000);

let arr2 = [-5, 16, 33, 42, 103, 344];

console.log(arr2.includes(-5));

arr2.push(11);
console.log(arr2);

let lastItem = arr2.pop();
console.log(lastItem, arr2);

arr2.unshift(22);
console.log(arr2);

let firstItem = arr2.shift();
console.log(firstItem, arr2);

let reversed = arr2.reverse();
console.log(reversed);
console.log(arr2.join('-'));

let arr3 = [12, 33, 4, 5, -4, 8, 19, 25];

function double(num) {
  return num * 2;
}

let doubledArr = arr3.map(double);
console.log(doubledArr);

function isOdd(num) {
  return num % 2 !== 0;
}

let odds = arr3.filter(isOdd);
console.log(odds);

function has5Factor(num) {
  return num % 5 === 0;
}

let hasFiveFactor = arr3.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b) {
  return a - b;
}

let ascending = arr3.sort(intCompare);
console.log(ascending);

function createPerson(name, height, weight) {
  return { name, height, weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}

let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));
