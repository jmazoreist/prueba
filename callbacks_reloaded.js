function agregarHttp(url) {
    return "http://" + url;
}

function procesar(listaSitios, agregarHttp){
    var listaFinal = [];
    for(let i=0; i<listaSitios.length; i++){
        listaFinal.push(agregarHttp(listaSitios[i]));
    }
    return listaFinal;
}
