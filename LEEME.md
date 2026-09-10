# Elisa · Bolsos Tejidos — sitio web

Sitio estático (HTML, CSS y JavaScript, sin dependencias ni servidor). Se puede subir tal cual
a cualquier hosting: Netlify, Vercel, GitHub Pages, Hostinger, cPanel…

## Archivos

```
index.html          Portada
catalogo.html       Catálogo con filtros, búsqueda y orden
personaliza.html    Personalizador de bolsos con precio en vivo
contacto.html       Formulario, datos de contacto y preguntas frecuentes

assets/css/estilo.css   Todo el diseño (colores, tipografías, responsive)
assets/js/datos.js      ← LO QUE MÁS VAS A EDITAR: productos, precios, colores, WhatsApp
assets/js/app.js        Lógica: logo SVG, bolsa, favoritos, filtros, formularios
assets/img/             Fotos (versión grande) y assets/img/sm/ (versión ligera para las tarjetas)

Catalogo Elisa fotos/   Fotos originales sin comprimir (no se publican, guárdalas de respaldo)
```

## Qué hace la web

- **Bolsa de compras** que se guarda en el navegador y arma un pedido listo para enviar por WhatsApp.
- **Favoritos** con el corazón de cada pieza; se filtran desde el catálogo.
- **Catálogo** con filtro por colección, buscador por nombre o color y orden por precio o novedad.
- **Ficha de producto** en ventana emergente con medidas, detalles y cantidad.
- **Personalizador**: modelo, tamaño, color de trapillo, herrajes, extras y placa con nombre.
  Calcula un precio estimado y lo manda por WhatsApp o lo guarda en la bolsa.
- **Formulario de contacto** que abre WhatsApp con el mensaje ya escrito.
- Botón flotante de WhatsApp, menú móvil y preguntas frecuentes desplegables.

No hay pasarela de pago: todos los pedidos terminan en una conversación de WhatsApp,
que es como ya trabaja el taller.

## Cambios habituales

### Cambiar el número de WhatsApp, correo o Instagram
En `assets/js/datos.js`, arriba del todo, en `CONFIG`.
El número va en formato internacional y sin signos: `593999109718`.

### Cambiar un precio
En `assets/js/datos.js`, busca el producto y edita `precio: 46`.

### Añadir un bolso nuevo
1. Guarda la foto en `assets/img/productos/` y una versión ligera en `assets/img/sm/productos/`
   (mismo nombre; basta con reducir el ancho a unos 760 px).
2. Copia un bloque de producto en `PRODUCTOS` y cambia `id`, `nombre`, `coleccion`,
   `precio`, `img`, `medidas`, `descripcion` y `detalles`.
3. `nuevo: true` le pone la etiqueta «Recién tejido»; `destacado: true` lo muestra en la portada.

El contador de piezas de cada colección y el «27 modelos» de la portada se calculan solos.

### Cambiar los colores del personalizador
En `assets/js/datos.js`, en `OPCIONES.colores`. Cada uno lleva nombre y código de color.

### Cambiar la paleta del sitio
En `assets/css/estilo.css`, en el bloque `:root` de arriba (`--rosa`, `--cacao`, etc.).

## El logo

Está dibujado en SVG dentro de `assets/js/app.js` (funciones `logoEmblema` y `logoCompleto`),
así que se ve nítido en cualquier tamaño y toma el color del sitio. **No lleva el número de
teléfono**, tal como se pidió: en su lugar, la curva inferior dice «BOLSOS TEJIDOS».
Si prefieres esa curva vacía, borra la última etiqueta `<text>` de `logoCompleto`.

## Ver el sitio en tu computadora

Basta con abrir `index.html` con doble clic. Si algo no carga, levanta un servidor local:

```bash
python3 ".claude/serve.py" 4321
```

y abre `http://127.0.0.1:4321`.

## Pendientes sugeridos

- Reemplazar `hola@elisabolsos.com` por el correo real (o quitarlo de `CONFIG`).
- Confirmar el usuario real de Instagram.
- Revisar precios y medidas: los que están puestos son una propuesta a partir de la maqueta.
- Si algún día quieres pago en línea, se puede añadir un botón de PayPal o de transferencia
  sobre la misma bolsa, sin rehacer el sitio.
