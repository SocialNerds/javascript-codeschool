// Closures
const elements = document.querySelectorAll('.element');
elements.forEach(el => {
  if (el.classList.contains('red')) {
    const newElement = document.createElement('span')
    newElement.classList.add('blue');
    newElement.classList.add('element');
    el.replaceWith(newElement);
    newElement.addEventListener('click', function(e) {
      e.target.replaceWith(el);
    });
  }
});
