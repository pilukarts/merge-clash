# Prototipo de lanzador Gem Blaster

[English](GEM_BLASTER.md) · [Español](GEM_BLASTER.es.md)

Se abre en `dist/launcher.html`, también enlazado desde el campamento. Es un experimento separado junto al tablero `training.html`; no sustituye al combate de campaña.

## Controles

Apuntar a una de cinco columnas. Tocar/hacer clic en el tablero o en sus botones numerados dispara; el botón Disparar usa la columna señalada. También se puede arrastrar hacia arriba desde la gema actual y soltar. Con el tablero enfocado: flechas izquierda/derecha para apuntar, Intro/Espacio para disparar. Cambiar intercambia la gema actual y la siguiente sin generar una nueva.

## Reglas

- Ocho filas por columna, ancladas al techo. La gema se coloca en el primer hueco bajo la columna.
- Si toca el mismo número, se fusionan y duplican el valor. En este experimento el número determina el color: dos valores iguales siempre tienen el mismo color.
- La gema activa puede seguir fusionándose con iguales encima, a los lados o debajo, en ese orden de prioridad.
- Al quitar una gema, su columna se compacta hacia arriba. Ese movimiento puede acercar otro número igual a la gema activa.
- Tres fusiones consecutivas o más dan un bonus de cadena. Este prototipo usa cadenas de fusiones numéricas, no el match-3 manual de líneas del tablero anterior, que sigue disponible.
- Valores de 2 a 65.536. El poder de las fusiones carga las barras de los soldados. Las barras son demostrativas: esta página todavía no implementa los enemigos ni las habilidades finales.
- Una columna llena admite un disparo del mismo número contra su última gema si puede duplicarse sin superar el límite.
- La práctica termina cuando ni la gema actual ni la siguiente caben en ninguna columna. Reiniciar afecta solo a este lanzador.

El primer disparo en la columna central muestra 2 → 4 → 8 → 16. La siguiente munición sigue una distribución limitada que favorece parcialmente los números visibles en las últimas piezas. No hay temporizador ni filas que avancen con el tiempo en esta versión.

Incluye guía del hueco de llegada, vuelo del disparo, destellos, recolocación hacia el techo, rayos de energía, etiquetas de combo y sonido opcional. Respeta movimiento reducido. Español e inglés.

Guardado local: `mc-gem-launcher-v1`. No modifica los datos de campaña, campamento ni el laboratorio anterior. Si se sale a mitad de una animación, se guarda la jugada completa ya resuelta.

Pruebas: `node checks/launcher-check.cjs`. Comprueban combo inicial, huecos, fusiones laterales, recuperación de columnas llenas, cambio de munición, derrota, límite, inmutabilidad y 400 disparos legales. Pendiente verificación visual en navegador y móvil.
