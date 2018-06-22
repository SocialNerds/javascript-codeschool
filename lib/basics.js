// variables
// var, let, const
const constant = 5;
// constant = 3;
const obj = { a: 4 };
obj.a = 5;
console.log(obj, "wanna be constant");

function f() {
  var variable = 3;
  let local = 3;
  console.log(variable, "before var");
  console.log(local, "before let");
  if (true) {
    var variable = 4;
    let local = 4;
    console.log(variable, "inside var");
    console.log(local, "inside let");
  }
  console.log(variable, "after var");
  console.log(local, "after let");
}

f();
// objects
var object = {
  key: "value",
  key2: [1, 2, 3, 4],
  key3: {
    key: "value"
  }
};

console.log(object.key);
console.log(object["key2"]);
console.log(object.key3["key"]);
// arrays
let array = [1, "string", { a: "a" }];
console.log(array);

// functions
function hello () {
  console.log ('hello');
}

hello()

const world = function (a) {
  console.log(a);
}

world('world');

function fun(cb) {
  cb();
}

fun(function () { console.log('oh god!')});

const arrow = (a, b) => {console.log(a + b);}

arrow(1, 1);

// window
console.log(window, "window");

// document
console.log(document)
document.querySelector('#app').innerHTML = 'Hello'
document.querySelectorAll('.app').forEach(element => {
  element.innerHTML = 'class'
});
document.querySelector('span').innerHTML = 'Element';

// hoisting
console.log(hoisting())
function hoisting() {
  return 'hoisting';
}

// Array and Object Methods
// filter
const studentsAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentsAge.filter( age => age > 18 );

// map
const numbers = [2, 3, 4, 5];
const dollars = numbers.map( number => '$' + number);

// reduce
const nums = [5, 10, 15];
const total = nums.reduce((accumulator, currentValue) => accumulator + currentValue);

// foreach
const emotions = ['happy', 'sad', 'angry'];
emotions.forEach( emotion => console.log(emotion) );

// some
const userPrivileges = ['user', 'user', 'user', 'admin'];
const containsAdmin = userPrivileges.some( element => element === 'admin');

// every
const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every( rating => rating >= 3 );

// includes
const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
const includesWaldo = names.includes('waldo');

// Object.values
const icecreamColors = {
  chocolate: 'brown',
  vanilla: 'white',
  strawberry: 'red',
}

const colors = Object.values(icecreamColors);

// Object.keys
const types = Object.keys(icecreamColors);
for (type in icecreamColors) console.log(type);

// Spread operator
const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combined = [...spreadableOne, ...spreadableTwo];

// Object spread
const spreadableObject = {
  name: 'Robert',
  phone: 'iPhone'
};

const newObject = {
  ...spreadableObject,
  carModel: 'Volkswagen'
}

