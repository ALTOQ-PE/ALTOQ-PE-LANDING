# ALTOQ PE - Plataforma y Catálogo Digital de Alimentos Liofilizados

Iniciativa FoodTech desarrollada por emprendedores de la Universidad Peruana de Ciencias Aplicadas (UPC). La plataforma conecta a productores agroindustriales de alimentos liofilizados e instantáneos en el Perú con consumidores finales y empresas del sector gastronómico, hotelero e institucional.

---

## Estructura del Proyecto

El repositorio está organizado de forma modular, sin dependencias externas pesadas, asegurando máxima velocidad de carga y total compatibilidad con navegadores modernos:

- `index.html`: Página principal (Landing Page institucional) con encuadre de pantalla completa (100vh) por sección:
  1. Inicio (Hero y propuesta de valor con llamado a la acción hacia la tienda)
  2. Misión y Visión (Propósito social, visión regional y garantía sanitaria DIGESA)
  3. Proveedores (Carril infinito de marcas peruanas aliadas y módulo de postulación B2B)
  4. Suscripción (Planes mensuales para productores agroindustriales: Gratuito, Plata y Oro)
  5. Contacto (Formulario segmentado y canal directo de atención vía WhatsApp Business)
- `ecommerce.html`: Catálogo digital interactivo con filtrado de productos por categorías, carrito de compras dinámico y confirmación de pedidos vía WhatsApp.
- `styles/`:
  - `variables.css`: Tokens de diseño oficiales (colores institucionales, tipografías, sombras y radios).
  - `main.css`: Reset CSS, importación tipográfica y estilos de maquetación base.
  - `components.css`: Componentes modulares (botones, tarjetas, formularios, insignias y modales).
  - `marquee.css`: Estilos y animación continua para el carril interactivo de proveedores.
- `scripts/`:
  - `main.js`: Control de navegación, desplazamiento suave, observador de secciones y validación de contacto.
  - `subscription.js`: Interacción y selección directa de planes mensuales hacia el formulario.
  - `marquee.js`: Duplicación dinámica de logotipos para garantizar el bucle infinito del carril sin cortes.
- `assets/`:
  - `fili/`: Ilustraciones oficiales de la mascota corporativa "Fili" en diferentes expresiones y roles.
  - `productores/`: Logotipos vectoriales y optimizados de marcas agroindustriales aliadas.
  - `products/`: Fotografías de empaques trilaminados y presentaciones comerciales de productos liofilizados.

---

## Identidad Visual y Paleta de Colores

La plataforma implementa la paleta de colores y lineamientos de marca oficiales:

- Verde Bosque Profundo: `#0F3D2E` (Color primario institucional)
- Verde Oliva / Hoja: `#8BAA52` (Color secundario de frescura y naturaleza)
- Crema Marfil Cálido: `#F6F3EB` (Fondo general y superficies limpias)
- Naranja Terracota: `#D85A2F` (Acentos visuales, llamados a la acción y botones destacados)
- Tipografía oficial: Plus Jakarta Sans y Montserrat vía Google Fonts.

---

## Reglas de Calidad y Cumplimiento

1. Cero Emojis: Todo el contenido visual, tipográfico e interactivo se comunica mediante diseño formal, iconos vectoriales SVG e ilustraciones de la mascota corporativa Fili.
2. Encuadre Visual Completo: Cada sección de la landing page está diseñada para ajustarse al alto de pantalla (100vh), facilitando la lectura sin desbordes verticales desproporcionados.
3. Respaldo Técnico y Sanitario: Cumplimiento de estándares de Registro Sanitario DIGESA y garantía de empaques trilaminados con barrera contra la humedad para Lima Metropolitana.

---

## Ejecución Local

Para visualizar el proyecto localmente, puede servirse con cualquier servidor estático:

```bash
# Con Python
python -m http.server 8080

# Con Node.js (npx)
npx serve .
```

Acceda a `http://localhost:8080` en su navegador preferido.
