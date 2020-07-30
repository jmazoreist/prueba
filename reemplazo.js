function reemplazoFastFast(texto, buscarPalabra, reemplazoPalabra){
    console.log(texto);
    return texto.replace(buscarPalabra, reemplazoPalabra);
}

console.log(reemplazoFastFast('Luli es fea', 'fea', 'linda'));