// Remove child
const padre1 = document.querySelector('#padre_1');
const hijo1 = document.querySelector('#hijo_1');

console.log(hijo1.parentElement);

padre1.removeChild(hijo1);

// Remove
const referencia = document.querySelector('h1');
referencia.remove();

// Replace
const padre2 = document.querySelector('#padre_2');
const hijo2 = document.querySelector('#hijo_2');
const h2 = document.createElement('h2');
h2.textContent = 'Soy un H2 y reemplazo al H3...';

padre2.replaceChild(h2,hijo2);



