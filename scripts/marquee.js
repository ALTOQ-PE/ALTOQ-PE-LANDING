/**
 * ALTOQ PE - CONTROL DEL CARRIL DE PROVEEDORES Y VIDEOS
 * Duplicación dinámica de logotipos y portadas de video para garantizar bucle infinito sin saltos
 * REGLA ESTRICTA: Sin uso de emojis en código ni comentarios
 */

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('marqueeTrack');
  if (track) {
    const trackContent = track.innerHTML;
    track.innerHTML = trackContent + trackContent;
  }

  const trackVideos = document.getElementById('marqueeTrackVideos');
  if (trackVideos) {
    const videoContent = trackVideos.innerHTML;
    trackVideos.innerHTML = videoContent + videoContent;
  }
});
