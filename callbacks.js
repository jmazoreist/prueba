let doble = (numero) => numero * 2;
let triple = (numero) => numero * 3;

let apply = (numero, operacion) => operacion(numero);

console.log(doble(2));
console.log(triple(2));
console.log(apply(4, doble));
