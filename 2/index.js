/**
 * 
 * @param {Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.} names 
 * @returns 
 */
function createFrame(names) {  
    const maxLength = Math.max(...names.map(n => n.length));
    const start = "*".repeat(maxLength + 4);
    const texts = names.map(n => `* ${n}${" ".repeat(maxLength - n.length)} *`)
  
    const frame = [start, ...texts, start].join("\n");
  
    return frame;
  }