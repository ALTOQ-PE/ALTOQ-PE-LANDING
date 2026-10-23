/**
 * ALTOQ PE - GESTIÓN DE PLANES MENSUALES Y SELECCIÓN DIRECTA
 * Vincula la elección de planes mensuales con el formulario de contacto
 * REGLA ESTRICTA: Sin uso de emojis en código ni contenido
 */

document.addEventListener('DOMContentLoaded', () => {
  const planButtons = document.querySelectorAll('.plan-card .btn');
  const profileSelect = document.getElementById('contactProfile');
  const messageInput = document.getElementById('contactMessage');

  planButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.plan-card');
      if (!card) return;

      const planNameEl = card.querySelector('.plan-name');
      const planName = planNameEl ? planNameEl.textContent.trim() : 'Plan';

      // Preseleccionar rol de productor en el formulario de contacto
      if (profileSelect) {
        profileSelect.value = 'productor';
      }

      // Rellenar mensaje predeterminado para agilizar la consulta
      if (messageInput) {
        messageInput.value = `Hola equipo de ALTOQ PE. Deseo registrar a mi empresa y activar el ${planName} para publicar mis alimentos liofilizados en el catálogo.`;
      }
    });
  });
});
