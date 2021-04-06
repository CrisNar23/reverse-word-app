# REVERSE STRINGS APP
Este proyecto se encarga de recibir una cadena de texto, invertir sus cararcteres y validar si el texto tiene el mismo significado leyendolo de izquierda a derecha o viceversa (Palíndromo). Las palabras ingresadas se listaran en una tabla odendada de manera descendente de la última palabra ingresada a la primera.

## Cómo clonar el proyecto
Para realizar la clonación del proyecto se debe ingresar al repositorio de la aplicación [Reverse Strings App](https://github.com/CrisNar23/reverse-word-app)
* Primero, se debe presionar el botón **Code**,seleccionar entre las opciones HTTP o SSH y copiar el enlace del proyecto.
* En la consola de comandos, ubíquese en el directorio en donde quiere clonar el proyecto y debe ingresar el comando git clone seguido del enlace copiado en el paso anterior como se muestra a continuación:
```bash
git clone https://github.com/CrisNar23/reverse-word-app.git
```
* Finalmente, el proyecto ya estará copiado en la ruta que seleccionó y listo para ser instalado.

## Instalación
#### Backend
* Para instalar el backend de este proyecto, abra una consola de comandos y dirijase al directorio donde clonó el repositorio. Ingrese al directorio **core** y ejecute el comando:
```bash
npm install
```
* Una vez finalizada la instalación, ejecutar el comando para iniciar la aplicación:
```bash
npm start
```
* Para realizar los test del endpoint de la aplicación, ejecutar el comando:
```bash
npm test
```
#### Frontend
* Para instalar el frontend de este proyecto, abra una consola de comandos y dirijase al directorio donde clonó el repositorio. Ingrese al directorio **web** y ejecute el comando
```bash
npm install
```
* Una vez finalizada la instalación, ejecutar el comando para iniciar la aplicación:
```bash
npm start
```
## Preview
Cuando el proyecto se esté ejecutando, se visuallizará como se muestra a continuación:

![](/preview.PNG)

### Notas
* El proyecto corre bajo la versión 12.18.3 de Node.JS.
* Se realizarón los puntos opcionales del API implementando Standard.js y creando el flag para determinar si la cadena de texto es palíndromo o no.
* Se realizó el punto opcional del frontend implementando Redux.
