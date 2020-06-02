# NgForeinApp
Demo de una app web que se empleará para los proyectos de la fundación chilena de fomento, reciclaje e investigación tecnológica sin fines de lucro, FOREIN.
El objetivo de la app se desglosa en disponer los siguientes módulos: un catálogo de equipos licitados y/o por licitar (con enlaces a su documentación oficial actualizada),  un foro de preguntas y respuestas para que los usuarios de dichos equipos tengan dónde realizar sus consultas de soporte técnico, y un sector donde encontrar las clases TIC impartidas con el apoyo de FOREIN en formato online.

Este proyecto fue generado usando [la interfaz de comandos de Angular](https://github.com/angular/angular-cli) (originalmente en v8.3.22, la app se migró a la v9.1.9 siguiendo [la guía](https://update.angular.io/).
Para seguir las instrucciones descritas, debes poseer los binarios de Node.JS y Angular CLI en un ambiente de línea de comandos.


## Visualización y Desarrollo
Con `ng serve` se ejecuta la app en un servidor local de desarrollo. En el directorio `environments\` se encuentran la configuración de la URL de conexión a la API REST.
Si la API REST está en el mismo equipo de la app, deberás configurarle un proxy. Para esto puedes revisar el archivo `proxy.conf.json` y ejecutar el comando anterior con la opción `--proxy-config proxy.conf.json`.

Cualquier cambio que se realice en el código fuente dentro de la carpeta 'src', desencadenará una re-compilación y recarga de la app en el navegador en que se esté viendo.

## Compilación
Ejecuta `ng build` para compilar y generar una versión estática del sitio. 
Ésta se almacenará en el directorio `dist/`, en la raíz (junto a `/src`). 
Si le adicionas el parámetro `--prod`, generarás una versión apta para ambientes de producción (recuerda editar el `environment.prod.ts`).

## Pruebas
No se ha puesto énfasis en las pruebas; todo lo que las compone son aquellas generadas por la interfaz de comandos de Angular.

Ejecuta `ng test` para que [Karma](https://karma-runner.github.io) ejecute las pruebas configuradas.
Ejecuta `ng e2e` para que [Protractor](http://www.protractortest.org/) ejecute las pruebas End-to-End configuradas.

## Ayuda
Si necesitas ayuda con la interfaz de comandos de Angular, ejecuta `ng help` o revisa el [léeme](https://github.com/angular/angular-cli/blob/master/README.md).
