# Merge Clash · MC

[English](README.md) · [Español](README.es.md)

Juego galáctico de estrategia y match-3 de Pilukarts. Cinco soldados de colores forman un escuadrón: el jugador decide su posición y los matches activan su avance, sus ataques y sus habilidades.

## Campamento del accidente

La nueva pantalla principal incluye prólogo ilustrado de tres escenas, cinco soldados, tres misiones, recompensas únicas, refugio y taller construibles, y reparación del analizador y las comunicaciones. Las misiones conectan con el match anterior en `dist/battle.html`. Su motor no cambia. La temporada de 500 niveles está planificada, todavía no implementada.

## Estado actual

Este repositorio conserva el primer prototipo jugable como base técnica. Incluye tablero de 7×7, cinco colores, contraataques de la máquina, cascadas, energía, tres rondas de match, un jefe con cartas, evolución visual del casco y progreso local. El laboratorio de merge anterior está en `dist/merge.html`.

**La arena estratégica descrita a continuación todavía está pendiente de implementación.** El prototipo actual usa combate por turnos y paneles; su batalla final de cartas aún no permite colocar tropas ni recorrer caminos. No representa todavía el diseño final acordado.

## Dirección del juego

- Arena galáctica con volumen 2.5D, fortificaciones, dos bandos, caminos y puentes sobre energía.
- Cinco soldados MC: rojo/cadete, verde/soldado, azul/oficial, violeta/general y dorado/comandante. Las denominaciones intermedias son provisionales.
- Colocación estratégica del escuadrón en la arena.
- El match ocurre durante el combate y activa al soldado del color correspondiente: 3 normal, 4 súper, 5 épico, 6+ supernova (nombre provisional).
- Cuatro rondas por nivel, progresión hasta el jefe y desbloqueo del siguiente nivel. La función de las cartas se integrará con la arena y el match.
- Evolución animada del casco al ascender.
- Historias de los cinco soldados como tutorial mediante misiones cortas.
- En niveles altos: artillería, soldados con cañones y tanques.
- Posible colección NFT después de validar el interés y la diversión del juego. No hay contratos, wallet ni mint implementados.

Consulta [el diseño](docs/GAME_DESIGN.es.md) y [las siguientes tareas](docs/ROADMAP.es.md).

## Probar en local

No requiere instalación ni dependencias de JavaScript.

```bash
python3 -m http.server 8080 --directory dist
```

Abre http://localhost:8080. El progreso se guarda en el navegador y no se sincroniza entre dispositivos.

## Comprobar la lógica

Requiere Node.js:

```bash
node checks/game-check.cjs
node checks/camp-check.cjs
node --check dist/game.js
node --check dist/engine.js
```

Las comprobaciones cubren generación de tableros jugables, matches de 3–7, intercambios, cascadas, campaña completa, cartas, recompensas, mejoras, persistencia y reintentos. No sustituyen la revisión visual ni las pruebas en móvil.

## Archivos

- `dist/index.html`, `camp.css`, `camp.js`, `camp-state.js`: campamento y supervivencia.
- `dist/battle.html`, `style.css`: prototipo de combate conservado.
- `dist/engine.js`: reglas del tablero.
- `dist/game.js`: campaña, energía y combate.
- `dist/assets/`: conceptos visuales MC generados durante el diseño, optimizados en WebP.
- `dist/merge.html`: laboratorio de merge previo.
- `checks/game-check.cjs`: comprobaciones de lógica.
- `docs/`: diseño y tareas.

Proyecto independiente de `pilukarts/genesis-forge`. Este trabajo no modifica aquel repositorio.

## Idiomas

El selector ES / EN cambia el idioma de la interfaz y lo guarda en este navegador. Las historias futuras también se escribirán en ambos idiomas.
