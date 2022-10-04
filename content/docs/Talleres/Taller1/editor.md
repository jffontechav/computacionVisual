En esta sección está el editor de imagenes de luminosidad y visualización de histogramas de imagenes.

# Kernels


Un kernel o máscara de convolución puede entenderse como una matriz de coeficientes que al ser aplicada en un pixel objetivo (considérese el pixel como un punto (x,y) del plano) obteniendo una transformación en el pixel objetivo como en sus vecinos (entendiendo la transformación como la imagen G(x,y) en todos ellos).

El filtro examina, sucesivamente, cada píxel de la imagen. Para cada uno de ellos, que llamaremos “píxeles iniciales”, se multiplica el valor de este píxel y el valor de los 8 circundantes por el valor correspondiente del kernel. Entonces se añade el resultado, y el píxel inicial se regula en este valor resultante final.

Se encuentran de manera aleatoria, los valores de la matriz 3x3 que definen el kernel.


<iframe src="https://editor.p5js.org/iuribel/full/FirhDUI1B" style="width: 700px; height: 700px; overflow: hidden;"  scrolling="no" frameborder="0"></iframe>

# Brightness

El brillo de la imagen (o brillo luminoso) es una medida de la intensidad después de que la imagen haya sido adquirida con una cámara digital o digitalizada por un convertidor de analógico a digital.

En este cado la luminosidad se calcula respecto a la posición del cursor , entre mas cerca, mas luminoso es, entre mas lejos menos.

<iframe src="https://editor.p5js.org/iuribel/full/7qJ104XOs" style="width: 600px; height: 700px; overflow: hidden;"  scrolling="no" frameborder="0"></iframe>