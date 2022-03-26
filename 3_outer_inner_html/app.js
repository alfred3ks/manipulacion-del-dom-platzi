// Vamos a ver como leer y modificar elelemntos con innerHTML y outerHTML

let titulo = document.querySelector('#titulo');

// Leo la variable que viene del dom
console.log(titulo.outerHTML);

// Modifico el valor del elemento
titulo.innerHTML = 'Hola';
console.log(titulo.outerHTML);

