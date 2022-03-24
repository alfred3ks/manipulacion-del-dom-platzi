/*Leer nodos: Estos 3 son los reyes de internet.

    document.getElementById();
    document.getElementsByTagName();
    document.getElementsByClassName();

    document.querySelector();
    document.querySelectorAll();

*/

console.log(document.getElementById('titulo'));

console.log(document.getElementsByTagName('p'));

console.log(document.getElementsByClassName('parrafo'));

console.log(document.querySelector('.parrafo'));

console.log(document.querySelectorAll('.item'));


// NodeList vs Array:
const nodeList = document.querySelectorAll('.item');

// Metodos que si tiene los node list
console.log(nodeList.length);
console.log(nodeList.forEach);

// Metodos que no tiene el node list
console.log(nodeList.map);
console.log(nodeList.some);
console.log(nodeList.filter);
console.log(nodeList.reduce);

// Transformo el nodeList en un array con el spread operator que llego en ES6
const nodeListAsArray  = [...nodeList];

console.log(nodeListAsArray.map);
console.log(nodeListAsArray.some);
console.log(nodeListAsArray.filter);
console.log(nodeListAsArray.reduce);





