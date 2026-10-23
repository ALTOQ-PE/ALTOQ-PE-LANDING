/**
 * ALTOQ PE - CONTROL DEL CARRIL DE PROVEEDORES Y VIDEOS
 * Duplicación dinámica de logotipos y portadas de video para garantizar bucle infinito sin saltos
 * REGLA ESTRICTA: Sin uso de emojis en código ni comentarios
 */

document.addEventListener('DOMContentLoaded', () => {
  const setupSeamlessTrack = (trackId) => {
    const track = document.getElementById(trackId);
    if (!track) return;

    const baseContent = track.innerHTML;
    // Multiplicar por 4 asegura que el 50% del carril supere 2400px, eliminando cualquier corte o salto visual
    track.innerHTML = baseContent + baseContent + baseContent + baseContent;
  };

  setupSeamlessTrack('marqueeTrack');
  setupSeamlessTrack('marqueeTrackVideos');
});
