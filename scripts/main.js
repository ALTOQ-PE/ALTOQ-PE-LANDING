/**
 * ALTOQ PE - CONTROL PRINCIPAL DE INTERACCIONES Y EVENTOS
 * Desplazamiento suave, control de cabecera y formulario de contacto
 * REGLA ESTRICTA: Sin uso de emojis en código ni contenido
 */

document.addEventListener('DOMContentLoaded', () => {
  const headerNav = document.getElementById('headerNav');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('feedbackToast');
  const toastMsg = document.getElementById('toastMessage');

  // Control de scroll en cabecera
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerNav.classList.add('scrolled');
    } else {
      headerNav.classList.remove('scrolled');
    }
  });

  // Alternancia de menú móvil
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Cerrar al hacer clic en cualquier enlace
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Desplazamiento suave exacto a cada sección en encuadre
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });

        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Marcado automático del enlace activo en navegación
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // Procesamiento del formulario de contacto
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const profile = document.getElementById('contactProfile').value;
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email) {
        alert('Por favor complete los campos obligatorios (Nombre y Correo electrónico).');
        return;
      }

      // Notificación de confirmación en pantalla
      if (toast && toastMsg) {
        toastMsg.textContent = 'Mensaje recibido con éxito. Un asesor de ALTOQ PE se comunicará a la brevedad.';
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 5000);
      }

      contactForm.reset();
    });
  }
});

// Función utilitaria para contacto directo por WhatsApp Business
function openWhatsAppChat(tipo) {
  const phone = '51940049923'; // Número corporativo ALTOQ PE
  let message = 'Hola equipo de ALTOQ PE. Deseo información sobre el catálogo de alimentos liofilizados.';

  if (tipo === 'proveedor') {
    message = 'Hola equipo de ALTOQ PE. Soy productor de alimentos y deseo postular al catálogo comercial.';
  } else if (tipo === 'b2b') {
    message = 'Hola equipo de ALTOQ PE. Represento a una empresa/cafetería y requiero cotización al por mayor.';
  }

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}
