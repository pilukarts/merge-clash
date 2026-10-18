# Laboratorio de gemas · Match-3 + 2048

[English](GEM_LAB.md) · [Español](GEM_LAB.es.md)

Se abre en `dist/training.html`, también enlazado desde el campamento. Es un prototipo separado: no sustituye al combate de campaña y guarda su progreso con la clave propia `mc-hybrid-training-v1`.

- Fusionar: seleccionar dos gemas vecinas del mismo color Y valor. La segunda duplica su valor hasta 2048; en el origen aparece una pieza nueva de 2.
- Match: intercambiar vecinas para formar una línea horizontal o vertical de tres o más del mismo color. Pueden tener valores distintos.
- Las líneas creadas por cualquiera de las acciones atacan automáticamente, con caída, reposición y cascadas. El daño suma los valores y aplica multiplicador 1/2/3/4 para matches de 3/4/5/6+.
- Los matches cargan al soldado correspondiente. A 100 de energía, las habilidades ofensivas añaden poder de entrenamiento; el médico verde restaura vida. El simulador resta 6 de vida por jugada válida, sin bajar de 1, para poder probar la curación.
- Reordenar conserva todos los colores y valores. Las pistas corresponden al modo elegido. Incluye progreso local, sonido opcional e interfaz ES/EN.

La parte de 2048 es la duplicación de valores, no el desplazamiento de todo el tablero. Todavía no es el combate definitivo ni su equilibrio final. No modifica materiales, vida ni mejoras de campaña.

El arte original de las gemas se encuentra en `dist/assets/galactic-gems.webp`: cristal facetado, marcos metálicos, fuego rojo, semilla verde, rayo azul, órbita violeta y sol de mando dorado. Los números se dibujan en HTML.

Comprobaciones: `node checks/hybrid-check.cjs` y las pruebas existentes de campaña, campamento e intro. Pendiente revisión visual en navegador y móvil.
