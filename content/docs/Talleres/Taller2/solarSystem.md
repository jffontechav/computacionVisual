# Sistema Solar

Para este proyecto nos queremos enfocar en los conceptos que nos permitieron desarrollar este sistema solar.



## Pila de transformaciones 


Primero tenemos la pila de transformaciones. Esta pila, se refiere a la forma en la que se anidan los objetos con el proposito de conseguir las transformaciones deseadas.

## Push() y Pop()

Push() es una función que nos ayuda a guardar los cambios que hacemos despues de que se usa y pop() ayuda a reestablecer las condiciones a como estaban antes del push(). 

Como consecuencia todo lo que quede en medio de un push() y un pop() tendra las mismas caracterizaciones y movimientos.

De esta forma es posible crear las pilas de transformaciones.En el caso de un planeta que tiene una luna orbitando alrededor de el, debemos crear un push() y un pop() globales, que representaran al planeta y dentro de estos, hacemos otro push() y pop() que represente a la luna, de este modo cualquier transformación que afecte al planeta, tambien afectará a la luna.

## Rotación

Usamos la función Rotate() a la cual se le pasa como parametro, un angulo de rotación respecto a un centro.
Para rotar un objeto en particular alrededor de su propio origen, debe trasladar ese origen, luego realizar la rotación y luego dibujar el objeto.

## Traslación

Usamos la función Translate() la cual recibe como parametro 3 coordenadas x, y, z. De estas coordenadas en nuestro caso, solo se define x y será el coseno de el angulo propio de el objeto. La cual creará la orbita al rededor de el objeto central.

<iframe src="https://editor.p5js.org/iuribel/full/DgOKvpBaA" style="width: 1000px; height: 700px; overflow: hidden;"  scrolling="no" frameborder="0"></iframe>


## El todo 

Se desarrollo un modelo simplificado del sistema solar para mostrar las propiedades de rotacion, translacion y pila de trasformaciones.

En el progama se tiene una represetacion de Mercurio con una orbita irregular alrededor der sol en mas de un eje, la Tierra posee una luna mientras que Marte posee dos, ambas con diferentes orbitas y velocidades de trancito, asi como Saturno con sus anillos y los demas planetas del sistema solar.

Se genero el sol en el eje original y se generaron transforaciones para cada planeta, dentro de estas se generaron mas en caso de que tubieran lunas, estos tienen su propia rotacion con respecto a su eje asi como una rotacion con respecto a la tranforacion anterior, lo que genera la orbita. Para los anillos tambien se implementaron transformaciones y translaciones a diferentes dictancias para generar el efecto deseado.

<iframe src="https://editor.p5js.org/iuribel/full/1cI1nrslU" style="width: 1000px; height: 1000px; overflow: hidden;"  scrolling="no" frameborder="0"></iframe>

## Conclusiones:

Para el desarrollo de modelamiento de objetos y movimiento se debe tener en cuenta los cambios y las geometrias que se tengan en la pila de transformaciones con respecto al todo.
Las orientaciones deben ser consistentes entre los diferentes objetos del sistema para que la composicion se mantega, especialmente si se piensa hacer uso de diferentes texturas.
A la hora de escalar tamaños se debe considerar las distancias asi como la facilidad con la que la camara puede captar los elementos de diferentes tamaños con sus respectivas posiciones.
Cuando no se pueda alcanzar la complejidad de los modelos mas precisos se debe mantener ciertas aproximaciones que permitan generar un resultado que permita al usuario entender que se esta presentando.