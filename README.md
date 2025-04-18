# Consigna Tarea Intermedia

## Objetivo 
La aplicación tiene que recibir argumentos a través de la terminal y mostrar un listado de películas basado en los argumentos que le hayas pasado.

## Arquitectura
- index.js:
    Recibe argumentos, los procesa y delega las acciones a pelis.js.
- pelis.js:
    Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.
- pelis.json:
    Es una colección (array de objetos) que tiene los datos de las películas. 
    Cada película (cada objeto del array) puede tener las propiedades que quieras, pero deben tener al menos estas tres propiedades: title, rating y tags.
## Observaciones 
No se tomo en cuenta el caso donde el usuario pasa mas de un parametro por comando sin embargo el usuario puede poner varios comandos junto a sus respectivos parametros.
> La forma de cargar la entrada
> ```js
> node index.js --comando1 parametro1 --comando2 parametro2 (...) --comandoN parametroN 
> ```
