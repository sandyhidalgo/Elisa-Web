# Elisa · Bolsos Tejidos — sitio web

Sitio estático (HTML, CSS y JavaScript, sin dependencias ni servidor). Se puede subir tal cual
a cualquier hosting: Netlify, Vercel, GitHub Pages, Hostinger, cPanel…

## Archivos

```
index.html          Portada
catalogo.html       Catálogo con filtros, búsqueda y orden
personaliza.html    Personalizador de bolsos con precio en vivo
contacto.html       Formulario, «Escríbenos» (WhatsApp, Instagram, TikTok, correo) y preguntas frecuentes
aviso-legal.html    Titular del sitio, condiciones de uso, propiedad intelectual
terminos.html       Condiciones de venta: pedidos, pago, plazos, envíos, cambios, devoluciones, garantía
privacidad.html     Política de privacidad (Ley Orgánica de Protección de Datos Personales)
cookies.html        Política de cookies (la web no usa cookies de seguimiento)

assets/css/estilo.css   Todo el diseño (colores, tipografías, responsive)
assets/js/datos.js      ← LO QUE MÁS VAS A EDITAR: productos, precios, colores, contacto, titular
assets/fonts/           Tipografías alojadas en el propio sitio (sin Google Fonts)
assets/js/app.js        Lógica: logo SVG, bolsa, favoritos, filtros, formularios
assets/img/             Fotos (versión grande) y assets/img/sm/ (versión ligera para las tarjetas)

Catalogo Elisa fotos/   Fotos originales sin comprimir (no se publican, guárdalas de respaldo)
```

## Qué hace la web

- **Bolsa de compras** en dos pasos: primero las piezas, luego los datos de envío (nombre completo,
  cédula opcional, provincia, ciudad, dirección y referencia, más la casilla de privacidad).
  El mensaje de WhatsApp sale con todo completado. Los datos de envío no se guardan en el navegador.
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

### Cambiar el número de WhatsApp, correo, Instagram o TikTok
En `assets/js/datos.js`, arriba del todo, en `CONFIG`.
El número va en formato internacional y sin signos: `593999109718`.
Instagram y TikTok van sin la @: `instagram: 'elisabolsos'`, `tiktok: 'elisabolsos.ec'`.
Los plazos están en `entregaCatalogo` (3 días laborables) y `diasElaboracion` (personalizados).

### Datos del titular (páginas legales)
En `assets/js/datos.js`, en `TITULAR`. **Completa `ruc` y `domicilio`**: mientras estén vacíos,
esas líneas no aparecen en las páginas legales, pero la ley pide identificar al proveedor.
Cuando cambies algo de las políticas, actualiza también `actualizado` (la fecha).

### Cookies
La web no usa cookies ni analítica, y las tipografías se sirven desde `assets/fonts/`, así que no
hace falta banner de consentimiento. Si algún día añades Google Analytics, un píxel de Meta o
vídeos incrustados, eso cambia: habrá que actualizar `cookies.html` y pedir permiso antes de cargarlos.

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

## De dónde salen los datos

Precios, medidas, colores y descripciones vienen del **catálogo oficial** (Marisol, Andrea,
LilyBag y Sarita):

| Colección | Precio | Medidas |
|---|---|---|
| Marisol  | $45     | 25 × 25 cm · asa 100 cm |
| Andrea   | $40     | 24×30 / 22×28 / 19×45 cm · asa 65–90 cm |
| LilyBag  | $25–$29 | 26×21 / 29×23 / 28×28 cm |
| Sarita   | $30     | 17 × 28 cm |

Detalles comunes a todas las piezas: tejido a mano, trapillo premium, accesorios metálicos,
forro interior, broches seguros y diseño exclusivo.

## Pendientes sugeridos

- **Revisar a qué colección quedó asignada cada foto.** Las agrupé por parecido visual con el
  catálogo; hay algunas dudosas (ver más abajo). Cambiar una pieza de colección es editar
  el campo `coleccion:` de ese producto en `datos.js`.
- Completar RUC/cédula y domicilio en `TITULAR` (ver arriba).
- Hacer revisar los textos legales por un abogado en Ecuador antes de darlos por definitivos.
- Si algún día quieres pago en línea, se puede añadir un botón de PayPal o de transferencia
  sobre la misma bolsa, sin rehacer el sitio.
