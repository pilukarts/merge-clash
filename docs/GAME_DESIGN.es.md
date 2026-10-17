# Merge Clash — diseño acordado

[English](GAME_DESIGN.md) · [Español](GAME_DESIGN.es.md)

## Identidad

MC significa Merge Clash. El emblema tiene una M dominante con la C integrada en su parte inferior, dentro del contorno de la M. Cascos originales, metal con volumen, visores luminosos y ambiente galáctico. La referencia de arena medieval se transforma en fortalezas espaciales: no se incorporan sus imágenes ni personajes.

## Arena y estrategia

Nuestro bando ocupa la parte inferior y el rival la superior. Las tropas existen dentro del escenario con profundidad, sombras, caminos y defensas. El jugador coloca a cinco soldados de manera estratégica. El tablero de match y la arena forman una misma partida: los matches impulsan las acciones de las tropas, no son únicamente un recurso previo a otra modalidad.

Las posiciones exactas de la arena y del tablero en móvil se deben probar antes de cerrar el diseño. La interfaz actual de paneles es una base temporal.

## Escuadrón

| Color | Rango provisional | Función propuesta |
|---|---|---|
| Rojo | Cadete | Rápido y de bajo coste |
| Verde | Soldado | Resistencia y protección |
| Azul | Oficial | Ataque a distancia |
| Violeta | General | Apoyo y coordinación |
| Dorado | Comandante | Habilidad especial potente |

Los cinco luchan juntos contra una tropa enemiga. El color identifica al soldado cuya energía y acción se activan al combinar piezas. Los detalles de alcance, velocidad, daño y coste requieren pruebas de equilibrio.

## Matches

3 piezas: normal; 4: súper; 5: épico; 6 o más: ataque máximo (nombre provisional: supernova). El rival contraataca mediante su jugada. El prototipo usa intercambios entre vecinos, líneas horizontales/verticales, cascadas y turnos sobre un tablero compartido; son decisiones técnicas iniciales que se pueden ajustar durante las pruebas.

## Misiones, rangos y jefe

Hay cuatro rondas por nivel y un jefe final. Vencerlo desbloquea el siguiente nivel y otorga puntos de evolución. Se solicitó una batalla final con cartas; después se precisó que los matches también hacen avanzar a los soldados en la arena. La siguiente implementación debe integrar ambos mecanismos sin separarlos en pantallas desconectadas.

El casco evoluciona visualmente al superar misiones hasta comandante. La primera versión anima cinco apariencias durante el primer nivel. Las evoluciones posteriores y sus recompensas visuales están por definir.

## Historias y tutorial

Cada soldado tendrá una historia, personalidad y motivación. Sus capítulos enseñan las reglas mediante acciones breves en la arena: primer match, defensa, alcance, coordinación y mando. Empezar por la primera misión del cadete rojo. Nombres, diálogos y biografías aún no están definidos.

## Unidades avanzadas

En niveles altos se desbloquean soldados con cañones, artillería y tanques. Deben mantener la relación entre color, energía y acción estratégica. Sus diseños y reglas todavía están pendientes.

## Coleccionables

Primero validar que el juego resulta divertido. Los soldados podrían convertirse en NFT si el proyecto tiene interés real. No se ha decidido blockchain, cantidad, precio ni utilidades. El juego actual no integra servicios de blockchain.

## Campaña de supervivencia — actualización

Los cinco soldados estaban en una ronda de vigilancia. Una tormenta eléctrica desvió la nave y provocó un aterrizaje de emergencia en un planeta desconocido, habitado también por tropas de otros mundos. Fiery, el cadete rojo, despierta entre los restos. Ninguno puede quitarse el casco hasta comprobar el aire: el analizador atmosférico está averiado.

El campamento en el lugar del accidente conecta mapa, taller, nave, escuadrón y match. Las batallas dan puntos de evolución, cascos, armaduras y materiales; el camino ofrece suministros y restos de tecnología. El taller permitirá fusionar piezas repetidas y fabricar equipo. La nave se repara gradualmente y refleja el progreso de la campaña.

### Plan de temporada

Objetivo de diseño: **500 niveles en 10 sectores de 50**, todavía no implementados. Construir y probar primero el sector inicial, sin presentar los 500 niveles como contenido disponible. Cada sector añade exploración, encuentros, historias y componentes de reparación.

Diseñar una nave completa, una versión accidentada y un conjunto de piezas coherentes con sus sistemas. Su distribución en el camino puede variar, pero los componentes imprescindibles tendrán fuentes garantizadas mediante misiones: el azar no debe bloquear la reparación ni obligar a reiniciar.

### Implementado en el campamento inicial

Prólogo ilustrado de tres escenas, cinco soldados, mapa con tres misiones, recompensas únicas de aleación/circuitos/cristales, refugio y taller construibles, analizador y comunicaciones reparables. Las misiones se completan ganando una ronda del match existente. Motores y escudos están reservados a sectores posteriores. Las piezas físicas de la nave repartidas por el camino, el inventario de armaduras y la fusión de equipo siguen pendientes. La lógica del match permanece intacta.
