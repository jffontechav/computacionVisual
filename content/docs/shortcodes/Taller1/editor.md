En esta sección está el editor de imagenes de luminosidad y visualización de histogramas de imagenes.

# Kernels


Un kernel o máscara de convolución puede entenderse como una matriz de coeficientes que al ser aplicada en un pixel objetivo (considérese el pixel como un punto (x,y) del plano) obteniendo una transformación en el pixel objetivo como en sus vecinos (entendiendo la transformación como la imagen G(x,y) en todos ellos).

Se encuentran de manera aleatoria 3 valores uno para cada coponente de color R G B y es por este valor que se multiplican cada uno de los valores de color de cada pixel.


<iframe src="https://editor.p5js.org/iuribel/full/FirhDUI1B" style="width: 700px; height: 700px; overflow: hidden;"  scrolling="no" frameborder="0"></iframe>

#Kernels con variación de color con proximidad al cursor.

Dos de los valores R G B  varian segun la posición X y Y del cursor, mientras que el valor restante (cualquiera de los valores R G B), permanecen como en la imagen original.


<a href="https://editor.p5js.org/iuribel/full/PHHpD_loR">Imagen en vivo Kernel</a>

# Brightness

El brillo de la imagen (o brillo luminoso) es una medida de la intensidad después de que la imagen haya sido adquirida con una cámara digital o digitalizada por un convertidor de analógico a digital.

En este cado la luminosidad se calcula respecto a la posición del cursor , entre mas cerca, mas luminoso es, entre mas lejos menos.

<iframe src="https://editor.p5js.org/iuribel/full/7qJ104XOs" style="width: 700px; height: 700px; overflow: hidden;"  scrolling="no" frameborder="0"></iframe>