// Asi no seria no optimo:
const body = document.querySelector('body');
for(let i = 1; i<=100; i++){
    const nodo = document.createElement('input');
    body.appendChild(nodo);
}

// Esto no es optimo ya que por cada ciclo estamos modificando el dom al ejecutar appendChild y requiere un consumo de recursos.

// Forma optima:
const nodos = [];
for(let i = 1; i<=100; i++){
    const nodo = document.createElement('input');
    nodos.push(nodo);
}
body.append(...nodos);

/* OJO: los ... es el spread operator que vino en la version ES6, de esta forma agregamos de una sola vez en el dom.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/
