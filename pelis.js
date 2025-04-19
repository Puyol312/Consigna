const fs = require('fs');

//Funcion que consigue los datos.
function conseguirDatos(){
    const archivoTexto = (fs.readFileSync(__dirname +"/pelis.json")).toString();
    const objeto = JSON.parse(archivoTexto);
    return objeto;
}
//Funcion que recibe un paremtro y un array de objetos, devuelve un nuevo array ordenado segun el 
// parametro, alfabeticamente o de mayor a menor.
function sort(argumentoN, datos){
    let nuevoDato = [];
    const argumento = argumentoN.toLowerCase();
    if (argumento == 'title'){
        nuevoDato = [...datos].sort((a, b) => a.title.localeCompare(b.title));
    }else if(argumento =='rating'){
        nuevoDato = [...datos].sort((a, b) => b.rating - a.rating);
    }else if(argumento == 'tags'){
        nuevoDato = [...datos].sort((a, b) => b.tags.length - a.tags.length);
    }else{
        console.log(`Campo no encontrado: ${argumento}`);
    }
    return nuevoDato;
}
//devolver las películas que tengan la palabra "parametro" en su titulo. No es case sensitive
function search(parametro, datos){
    return datos.filter(obj => obj.title.toLowerCase().includes(parametro.toLowerCase()));
}

//Devuelve aquellas peliculas en tengan en su campo tag el 'parametro', sin importar como lo 
//haya escrito el usuario.
function tag(parametro, datos){
    return datos.filter(obj => obj.tags.map(t => t.toLowerCase()).includes(parametro.toLowerCase()));
}

module.exports = {conseguirDatos, sort, search, tag};
