// Vamos a crear nodos:

//nodo referencia - appendChild
const body = document.querySelector('body');

// Creamos los nodo
const container = document.createElement('div');
const h2 = document.createElement('h2');
const text = document.createTextNode("CONTAINER");

h2.appendChild(text);
container.appendChild(h2);
body.appendChild(container);

// Metodo append()
const container2 = document.createElement('div');
const h3 = document.createElement('h3');
const text2 = document.createTextNode("CONTAINER 2");
h3.appendChild(text2);
container2.append(h3);

const mensaje = "Que maravillo es JS";

body.append( mensaje ,container2);

// metodo insertBefore()
const container3 = document.createElement('div');
const p1 = document.createElement('p');
const text3 = "CONTAINER 3";

p1.append(text3);
container3.append(p1);

body.insertBefore(container3, container);

// metodo insertAdjacentElement()
const container4 = document.createElement('div');
const text4 = "CONTAINER4";

container4.append(text4);

container.insertAdjacentElement('beforebegin', container4);
container.insertAdjacentElement('beforeend', container4);
container.insertAdjacentElement('afterbegin', container4);
container.insertAdjacentElement('afterend', container4);

