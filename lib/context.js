// This and object context
const elText = document.getElementById('text');
let h = {
  num: 5,
  hello: function () {
    // setTimeout(function() {
    console.log(this.num)
    // }, 500)
  }
};

h.hello();

let obj = {a: 5};

function global() { console.log(this, this.a) }

global();

global.call(obj);

new global();
