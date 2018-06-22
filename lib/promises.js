// Resolve promise
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve('foo'), 100);
});

promise1.then((message) => console.log(message))

// Reject promise
var promise2 = new Promise(function(resolve, reject) {
  reject('bar');
  setTimeout(resolve('foo'), 1000);
});

promise2.then(res => console.log('response')).catch(console.log);

// Ajax request
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(console.log);

// Async function
async function asyncAwait() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await res.json()
    document.getElementById('text').innerHTML = json.title
    document.getElementById('body').innerHTML = json.body

  } catch(e) {
    console.log(e)
  }
}

// Call async function on click
document.getElementById('myButton').addEventListener('click', asyncAwait)
