// Constructor
function Cat(name) {
  this.name = name;
  this.talk = function () {
    console.log('Meww!')
  }
}

const cat1 = new Cat()
const cat2 = new Cat()
cat1.talk()
cat2.talk()
// Cat.prototype.talk = function() { console.log('Whuf');}
cat1.talk = function() { console.log('Whuf');}
cat1.talk()
cat2.talk()


function Person(name) {
  this.name = name;
}

Person.prototype.talk = function() {
  console.log('Hello');
}

const person1 = new Person('Thanos');
const person2 = new Person('John');
person1.talk();
person2.talk();
Person.prototype.talk = function () { console.log(this.name);}
person1.talk();
person2.talk();
