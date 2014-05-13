ShareLoc
========

Proyecto del Curso AngularJS de Origami origami.academy/cursos/angularjs.html

Pasos Para Instalar
===================

1. Clonar el repositorio en una carpeta vacia: "git clone https://github.com/hybrisCole/ShareLoc.git"
2. Ejecutar el comando "npm install"
3. Ejecutar el comanto "bower install"
4. Ejecutar el comando "grunt server"

Ejercicios:
===================
Clase 3:
--------
* Usar Yeoman para generar una nueva vista y un controlador para los settings de la aplicacion: ver la documentacion de como generar una [ruta](https://github.com/yeoman/generator-angular#route).
* Colocar un ícono a la derecha del menu que tenga un link a la ruta que se acaba de crear en el punto anterior.
* En la vista creada, hacer un formulario de [PureCSS] (http://purecss.io/forms/) con los siguientes campos:
    1. Nombre
    2. Apellidos
    3. Edad
    4. [Boton](http://purecss.io/buttons/) de Guardar

Clase 5:
---------
* Sacar la logica de la funcion "enviarMensaje()" de la directiva friendbox, y colocarla
el factory de CoordenadaService.
* En el Mapa principal, agregar un nuevo boton, ahorita hay 3 botones, entonces cada row esta dividido en 1/3 cada uno, como vamos a tener 4, hay que dividirlo en 4 [cuartos](http://purecss.io/grids/)
* A el boton creado le vamos a llamar "Guardar Ubicacion" y vamos a sacar el form de la vista Share, y vamos a crear una nueva [ruta](https://github.com/yeoman/generator-angular#route) que este boton va a acceder.
* Esa nueva vista va a recibir las coordenadas del marker que se ha seleccionado (de la misma manera que sucede en el controller de share, que hace un llamado a CoordenadaService para obtenerlas)
* Crear un factory que se llame "ListaService" con [Yeoman](https://github.com/yeoman/generator-angular#service)
* En el factory recién creado, hacer un llamado utilizando $http POST a http://sharelocapi.jit.su/lugar con el siguiente formato:
    ```javascript
    {
        nombre:'Casa de Alberto',
        descripcion:'Descripcion',
        lat:9.931420671841616,
        long:-84.04696583747864,
        userId:649575738
    }
    ```
* Crear una directiva para el mapa de #/main.