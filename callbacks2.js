function doble(numero){
    return numero * 2;
}

function triple(numero){
    return numero * 3;
}

function apply(numero, operacion){
    return operacion(numero);
}

console.log(doble(2));
console.log(triple(2));
console.log(apply(4, doble));