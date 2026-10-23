/**
 * ALTOQ PE - CONTROL DEL CARRIL DE PROVEEDORES
 * Duplicación dinámica de logotipos para garantizar bucle infinito sin saltos
 * REGLA ESTRICTA: Sin uso de emojis en código ni comentarios
 */

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  // Duplicar el contenido del carril para transición continua perfecta
  const trackContent = track.innerHTML;
  track.innerHTML = trackContent + trackContent;
});
