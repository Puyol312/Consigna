const pelis = require(__dirname + '/pelis.js');
function main(){
    const comandos = process.argv.slice(2);
    if (comandos.length % 2 !== 0)
        throw "Mal subidos los datos, falta un parametro";
    const data = pelis.conseguirDatos();
    if (comandos.length === 0){
        return data;
    }else{
        for(let i = 0; i<comandos.length; i+=2){
            switch(comandos[i]){
                case ('--sort'):
                    console.log(`Ordenado por ${comandos[(i+1)]}:\n`,pelis.sort(comandos[(i+1)], data));
                    break;
                case ('--search'):
                    console.log(`Buscando por ${comandos[(i+1)]}:\n`,pelis.search(comandos[(i+1)], data));
                    break;
                case ('--tag'):
                    console.log(`Buscando por ${comandos[(i+1)]}:\n`,pelis.tag(comandos[(i+1)], data));
                    break;
                default:
                    console.log(`Comando no encontrado: ${comandos[i]}`);
                    break;
            }
        }
    }
    console.log('Fin');
}
main();
