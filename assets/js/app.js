/* ============================================================
   ELISA · Bolsos Tejidos — lógica del sitio
   Encabezado, pie, bolsa de compras, favoritos, catálogo,
   personalizador y formularios. Todo en el navegador.
   ============================================================ */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const RUTA_IMG = 'assets/img/';
const foto = p => RUTA_IMG + p;
const fotoSm = p => RUTA_IMG + 'sm/' + p;
const money = n => CONFIG.moneda + Number(n).toFixed(2);

const LLAVE_BOLSA = 'elisa_bolsa';
const LLAVE_FAV = 'elisa_favoritos';

/* ------------------------------------------------------------
   Almacenamiento
------------------------------------------------------------ */
function leerAlmacen(llave) {
  try { return JSON.parse(localStorage.getItem(llave)) || []; }
  catch (e) { return []; }
}
function guardarAlmacen(llave, valor) {
  try { localStorage.setItem(llave, JSON.stringify(valor)); } catch (e) { /* modo privado */ }
}

let BOLSA = leerAlmacen(LLAVE_BOLSA);
let FAVORITOS = leerAlmacen(LLAVE_FAV);

/* ------------------------------------------------------------
   Logo (SVG) — versión emblema y versión completa
------------------------------------------------------------ */
function bolaLana(cx, cy, r, id) {
  const clip = `clip-${id}`;
  return `
    <clipPath id="${clip}"><circle cx="${cx}" cy="${cy}" r="${r - 2}"/></clipPath>
    <circle cx="${cx}" cy="${cy}" r="${r}" class="logo-fondo logo-trazo" stroke-width="4"/>
    <g clip-path="url(#${clip})" class="logo-trazo" fill="none" stroke-width="3">
      <ellipse cx="${cx}" cy="${cy}" rx="${r * .98}" ry="${r * .34}" transform="rotate(-34 ${cx} ${cy})"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r * .98}" ry="${r * .70}" transform="rotate(-34 ${cx} ${cy})"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r * .98}" ry="${r * .34}" transform="rotate(40 ${cx} ${cy})"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r * .98}" ry="${r * .70}" transform="rotate(40 ${cx} ${cy})"/>
      <ellipse cx="${cx - r * .42}" cy="${cy + r * .18}" rx="${r * .80}" ry="${r * .30}" transform="rotate(72 ${cx - r * .42} ${cy + r * .18})"/>
      <ellipse cx="${cx + r * .44}" cy="${cy - r * .16}" rx="${r * .78}" ry="${r * .28}" transform="rotate(72 ${cx + r * .44} ${cy - r * .16})"/>
    </g>`;
}

function agujas(cx, cy, r) {
  const largo = r * 1.42;
  const linea = (x1, y1, x2, y2) => `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="logo-trazo" stroke-width="6" stroke-linecap="round"/>
    <circle cx="${x1}" cy="${y1}" r="7.5" class="logo-trazo logo-fondo" stroke-width="3.5"/>`;
  return `<g>
    ${linea(cx + largo, cy - largo * .92, cx - largo, cy + largo * .92)}
    ${linea(cx - largo, cy - largo * .92, cx + largo, cy + largo * .92)}
  </g>`;
}

function corazonPath(x, y, s) {
  return `<path transform="translate(${x} ${y}) scale(${s})"
    d="M0 26 C -20 8 -26 -6 -16 -14 C -8 -21 0 -14 0 -6 C 0 -14 8 -21 16 -14 C 26 -6 20 8 0 26 Z"/>`;
}

/* Emblema compacto: círculo, agujas, bola de lana y corazón (para cabecera y pie) */
function logoEmblema(id = 'e') {
  return `<svg viewBox="0 0 400 400" role="img" aria-label="Elisa · bolsos tejidos" focusable="false">
    <g fill="none" stroke-linejoin="round">
      <circle cx="200" cy="200" r="190" class="logo-trazo" stroke-width="6"/>
      <circle cx="200" cy="200" r="172" class="logo-trazo" stroke-width="2.5"/>
      ${agujas(200, 196, 78)}
      ${bolaLana(200, 196, 82, id)}
      <path d="M282 250 C 330 250 344 214 322 198" class="logo-trazo" stroke-width="4.5" stroke-linecap="round"/>
    </g>
    <g class="logo-relleno">${corazonPath(316, 176, 1.25)}</g>
  </svg>`;
}

/* Emblema completo con el nombre (sin número de teléfono) */
function logoCompleto(id = 'c') {
  return `<svg viewBox="0 0 400 400" role="img" aria-label="Elisa · bolsos tejidos" focusable="false">
    <defs>
      <path id="arco-${id}" d="M 48 200 A 152 152 0 0 0 352 200"/>
    </defs>
    <g fill="none" stroke-linejoin="round">
      <circle cx="200" cy="200" r="190" class="logo-trazo" stroke-width="5"/>
      <circle cx="200" cy="200" r="174" class="logo-trazo" stroke-width="2"/>
      ${agujas(200, 112, 48)}
      ${bolaLana(200, 112, 50, id)}
      <path d="M248 132 C 286 140 296 116 288 104" class="logo-trazo" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M72 268 C 114 254 156 280 200 280 C 244 280 286 254 328 268" class="logo-trazo" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M134 300 L 174 300 M 226 300 L 266 300" class="logo-trazo" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="126" cy="300" r="2.8" class="logo-relleno" stroke="none"/>
      <circle cx="274" cy="300" r="2.8" class="logo-relleno" stroke="none"/>
    </g>
    <g class="logo-relleno">${corazonPath(284, 88, .85)}</g>
    <g class="logo-relleno">${corazonPath(200, 292, .5)}</g>
    <text x="200" y="242" text-anchor="middle" class="logo-texto"
      font-family="'Playfair Display', Georgia, serif" font-style="italic" font-weight="600"
      font-size="80" letter-spacing="1">ELISA</text>
    <text class="logo-texto" font-family="'Jost', sans-serif" font-size="19" letter-spacing="5.5" font-weight="400">
      <textPath href="#arco-${id}" startOffset="50%" text-anchor="middle">BOLSOS TEJIDOS</textPath>
    </text>
  </svg>`;
}

/* ------------------------------------------------------------
   Iconos
------------------------------------------------------------ */
const ICONOS = {
  bolsa: '<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8Z" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  corazon: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.6-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7 2.6C19 15.4 12 20 12 20Z" stroke-linejoin="round"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/></svg>',
  cerrar: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>',
  lupa: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5" stroke-linecap="round"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9a9.8 9.8 0 0 0 1.35 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2h.01a9.9 9.9 0 0 0 9.93-9.9A9.9 9.9 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.4 1.3-1.94 1.35-.5.05-.98.23-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.3.25-.28.55-.35.73-.35h.52c.17 0 .4-.06.62.48.24.57.8 1.98.87 2.12.07.14.12.3.02.5-.1.19-.14.3-.28.47l-.42.49c-.14.14-.28.3-.12.58.16.28.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.25.09 1.6.75 1.87.89.28.14.46.2.53.32.07.11.07.65-.17 1.32Z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M4 12.5 9.5 18 20 6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

/* ------------------------------------------------------------
   Cabecera y pie
------------------------------------------------------------ */
const PAGINAS = [
  { id: 'inicio', texto: 'Inicio', url: 'index.html' },
  { id: 'catalogo', texto: 'Catálogo', url: 'catalogo.html' },
  { id: 'personaliza', texto: 'Personaliza', url: 'personaliza.html' },
  { id: 'contacto', texto: 'Contacto', url: 'contacto.html' }
];

function pintarCabecera() {
  const actual = document.body.dataset.pagina || 'inicio';
  const host = $('#cabecera');
  if (!host) return;
  host.innerHTML = `
    <header class="cabecera">
      <div class="contenedor cabecera-fila">
        <a class="marca" href="index.html">
          ${logoEmblema('cab')}
          <span class="marca-texto">
            <span class="marca-nombre">Elisa</span>
            <span class="marca-sub">Bolsos tejidos</span>
          </span>
        </a>
        <nav class="nav" id="nav">
          ${PAGINAS.map(p => `<a href="${p.url}" class="${p.id === actual ? 'activo' : ''}">${p.texto}</a>`).join('')}
        </nav>
        <div class="acciones">
          <button class="boton-icono" id="btn-favoritos" aria-label="Ver favoritos" title="Favoritos">
            ${ICONOS.corazon}
            <span class="contador" id="contador-favoritos">0</span>
          </button>
          <button class="boton-icono" id="btn-bolsa" aria-label="Abrir la bolsa" title="Mi bolsa">
            ${ICONOS.bolsa}
            <span class="contador" id="contador-bolsa">0</span>
          </button>
          <button class="boton-icono hamburguesa" id="btn-menu" aria-label="Abrir el menú">${ICONOS.menu}</button>
        </div>
      </div>
    </header>`;

  $('#btn-menu').addEventListener('click', () => {
    const nav = $('#nav');
    const abierto = nav.classList.toggle('abierto');
    $('#btn-menu').innerHTML = abierto ? ICONOS.cerrar : ICONOS.menu;
    $('#capa').classList.toggle('abierta', abierto);
    document.body.classList.toggle('menu-abierto', abierto);
  });
  $('#btn-bolsa').addEventListener('click', abrirBolsa);
  $('#btn-favoritos').addEventListener('click', () => {
    if (document.body.dataset.pagina === 'catalogo') {
      const chip = $('.chip[data-coleccion="favoritos"]');
      if (chip) { chip.click(); chip.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    } else {
      location.href = 'catalogo.html#favoritos';
    }
  });
}

function pintarPie() {
  const host = $('#pie');
  if (!host) return;
  host.innerHTML = `
    <footer class="pie">
      <div class="contenedor">
        <div class="pie-grid">
          <div>
            <a class="marca" href="index.html">
              ${logoEmblema('pie')}
              <span class="marca-texto">
                <span class="marca-nombre">Elisa</span>
                <span class="marca-sub">Bolsos tejidos</span>
              </span>
            </a>
            <p class="pie-intro">Bolsos en trapillo tejidos punto por punto en ${CONFIG.ciudad}. Cada pieza se hace bajo pedido y lleva la firma de quien la teje.</p>
          </div>
          <div>
            <h5>Tienda</h5>
            <ul>
              <li><a href="catalogo.html">Catálogo completo</a></li>
              <li><a href="catalogo.html#coleccion-elisa">Colección Elisa</a></li>
              <li><a href="catalogo.html#coleccion-andrea">Colección Andrea</a></li>
              <li><a href="personaliza.html">Personaliza el tuyo</a></li>
            </ul>
          </div>
          <div>
            <h5>Pedidos</h5>
            <ul>
              <li>${CONFIG.envio.split('·')[0].trim()}</li>
              <li>Pago contra entrega</li>
              <li>Elaboración: ${CONFIG.diasElaboracion}</li>
              <li><a href="contacto.html">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h5>Escríbenos</h5>
            <ul>
              <li><a href="${enlaceWhatsApp('¡Hola Elisa! Vengo de la página web 💗')}" target="_blank" rel="noopener">WhatsApp ${CONFIG.telefonoVisible}</a></li>
              <li><a href="https://instagram.com/${CONFIG.instagram}" target="_blank" rel="noopener">@${CONFIG.instagram}</a></li>
              <li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
            </ul>
          </div>
        </div>
        <div class="pie-abajo">
          <span>© <span id="anio"></span> Elisa · Bolsos tejidos a mano</span>
          <span>Hecho con hilo, paciencia y cariño</span>
        </div>
      </div>
    </footer>`;
  $('#anio').textContent = new Date().getFullYear();
}

/* ------------------------------------------------------------
   Avisos flotantes
------------------------------------------------------------ */
function aviso(texto) {
  let cont = $('#avisos');
  if (!cont) {
    cont = document.createElement('div');
    cont.id = 'avisos';
    cont.className = 'avisos';
    document.body.appendChild(cont);
  }
  const el = document.createElement('div');
  el.className = 'aviso';
  el.innerHTML = `${ICONOS.check}<span>${texto}</span>`;
  cont.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity .4s, transform .4s';
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    setTimeout(() => el.remove(), 400);
  }, 2600);
}

/* ------------------------------------------------------------
   Bolsa de compras
------------------------------------------------------------ */
function totalBolsa() {
  return BOLSA.reduce((s, i) => s + i.precio * i.cantidad, 0);
}
function unidadesBolsa() {
  return BOLSA.reduce((s, i) => s + i.cantidad, 0);
}

function agregarABolsa(item, cantidad = 1) {
  const existente = BOLSA.find(i => i.id === item.id && i.meta === item.meta);
  if (existente) existente.cantidad += cantidad;
  else BOLSA.push({ ...item, cantidad });
  guardarAlmacen(LLAVE_BOLSA, BOLSA);
  refrescarBolsa();
  aviso(`${item.nombre} está en tu bolsa`);
}

function cambiarCantidad(indice, delta) {
  const item = BOLSA[indice];
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad < 1) BOLSA.splice(indice, 1);
  guardarAlmacen(LLAVE_BOLSA, BOLSA);
  refrescarBolsa();
}

function quitarDeBolsa(indice) {
  BOLSA.splice(indice, 1);
  guardarAlmacen(LLAVE_BOLSA, BOLSA);
  refrescarBolsa();
}

function pintarBolsa() {
  if ($('#bolsa')) return;
  const aside = document.createElement('aside');
  aside.className = 'bolsa';
  aside.id = 'bolsa';
  aside.setAttribute('aria-label', 'Bolsa de compras');
  aside.innerHTML = `
    <div class="bolsa-cabecera">
      <h2>Tu bolsa</h2>
      <button class="cerrar" id="cerrar-bolsa" aria-label="Cerrar la bolsa">${ICONOS.cerrar}</button>
    </div>
    <div class="bolsa-items" id="bolsa-items"></div>
    <div class="bolsa-pie" id="bolsa-pie"></div>`;
  document.body.appendChild(aside);
  $('#cerrar-bolsa').addEventListener('click', cerrarBolsa);
}

function refrescarBolsa() {
  const cont = $('#contador-bolsa');
  if (cont) {
    const n = unidadesBolsa();
    cont.textContent = n;
    cont.classList.toggle('visible', n > 0);
  }
  const lista = $('#bolsa-items');
  if (!lista) return;

  if (!BOLSA.length) {
    lista.innerHTML = `
      <div class="bolsa-vacia">
        ${ICONOS.bolsa}
        <p>Todavía no has elegido ninguna pieza.</p>
        <a class="boton boton-secundario" href="catalogo.html">Ver el catálogo</a>
      </div>`;
    $('#bolsa-pie').innerHTML = '';
    return;
  }

  lista.innerHTML = BOLSA.map((item, i) => `
    <article class="bolsa-item">
      <img src="${item.img}" alt="${item.nombre}" loading="lazy">
      <div>
        <h4>${item.nombre}</h4>
        <div class="meta">${item.meta || ''}</div>
        <div class="fila">
          <div class="cantidad">
            <button data-accion="menos" data-indice="${i}" aria-label="Quitar una unidad">−</button>
            <span>${item.cantidad}</span>
            <button data-accion="mas" data-indice="${i}" aria-label="Añadir una unidad">+</button>
          </div>
          <div class="precio">${money(item.precio * item.cantidad)}</div>
        </div>
        <div class="fila">
          <button class="quitar" data-accion="quitar" data-indice="${i}">Quitar</button>
        </div>
      </div>
    </article>`).join('');

  $('#bolsa-pie').innerHTML = `
    <div class="total"><span>Total</span><strong>${money(totalBolsa())}</strong></div>
    <p class="nota-pie">${CONFIG.envio}. Confirmamos disponibilidad y tiempo de tejido por WhatsApp.</p>
    <a class="boton boton-wa boton-bloque" id="pedir-wa" href="#">${ICONOS.whatsapp} Pedir por WhatsApp</a>`;

  $$('#bolsa-items [data-accion]').forEach(b => {
    b.addEventListener('click', () => {
      const i = Number(b.dataset.indice);
      if (b.dataset.accion === 'mas') cambiarCantidad(i, 1);
      else if (b.dataset.accion === 'menos') cambiarCantidad(i, -1);
      else quitarDeBolsa(i);
    });
  });

  $('#pedir-wa').href = enlaceWhatsApp(mensajePedido());
  $('#pedir-wa').target = '_blank';
  $('#pedir-wa').rel = 'noopener';
}

function mensajePedido() {
  const lineas = BOLSA.map(i =>
    `• ${i.cantidad} × ${i.nombre}${i.meta ? ` (${i.meta})` : ''} — ${money(i.precio * i.cantidad)}`);
  return `¡Hola Elisa! Quiero hacer este pedido 💗\n\n${lineas.join('\n')}\n\nTotal: ${money(totalBolsa())}\n\nMi nombre: \nCiudad de envío: `;
}

function enlaceWhatsApp(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}

function abrirBolsa() {
  refrescarBolsa();
  $('#bolsa').classList.add('abierta');
  $('#capa').classList.add('abierta');
  document.body.classList.add('sin-scroll');
}
function cerrarBolsa() {
  $('#bolsa').classList.remove('abierta');
  cerrarCapaSiLibre();
}

/* ------------------------------------------------------------
   Favoritos
------------------------------------------------------------ */
function esFavorito(id) { return FAVORITOS.includes(id); }
function alternarFavorito(id, boton) {
  const i = FAVORITOS.indexOf(id);
  if (i >= 0) { FAVORITOS.splice(i, 1); aviso('Quitado de tus favoritos'); }
  else { FAVORITOS.push(id); aviso('Guardado en tus favoritos 💗'); }
  guardarAlmacen(LLAVE_FAV, FAVORITOS);
  if (boton) boton.classList.toggle('activo', esFavorito(id));
  $$(`.favorito[data-id="${id}"]`).forEach(b => b.classList.toggle('activo', esFavorito(id)));
  refrescarContadorFavoritos();
  if (document.body.dataset.pagina === 'catalogo' && $('.chip.activo')?.dataset.coleccion === 'favoritos') {
    pintarCatalogo();
  }
}
function refrescarContadorFavoritos() {
  const c = $('#contador-favoritos');
  if (!c) return;
  c.textContent = FAVORITOS.length;
  c.classList.toggle('visible', FAVORITOS.length > 0);
}

/* ------------------------------------------------------------
   Tarjetas de producto
------------------------------------------------------------ */
function tarjetaProducto(p) {
  const col = COLECCIONES.find(c => c.id === p.coleccion);
  const etiqueta = p.nuevo ? 'Recién tejido' : '';
  return `
    <article class="producto revelar" data-id="${p.id}">
      <button class="producto-foto" data-ver="${p.id}" aria-label="Ver ${p.nombre}">
        <img src="${fotoSm(p.img)}" alt="${p.nombre}, bolso tejido a mano" loading="lazy">
      </button>
      ${etiqueta ? `<span class="etiqueta">${etiqueta}</span>` : ''}
      <button class="favorito ${esFavorito(p.id) ? 'activo' : ''}" data-id="${p.id}" aria-label="Guardar ${p.nombre} en favoritos">${ICONOS.corazon}</button>
      <div class="producto-cuerpo">
        <span class="producto-coleccion">${col ? col.nombre : ''}</span>
        <h3>${p.nombre}</h3>
        <div class="producto-precio">${money(p.precio)}</div>
        <div class="producto-acciones">
          <button class="boton boton-principal" data-agregar="${p.id}">Añadir</button>
          <button class="boton boton-secundario" data-ver="${p.id}">Ver</button>
        </div>
      </div>
    </article>`;
}

function conectarTarjetas(ctx = document) {
  $$('[data-agregar]', ctx).forEach(b => b.addEventListener('click', () => {
    const p = PRODUCTOS.find(x => x.id === b.dataset.agregar);
    if (p) agregarABolsa({ id: p.id, nombre: p.nombre, precio: p.precio, img: fotoSm(p.img), meta: p.color });
  }));
  $$('[data-ver]', ctx).forEach(b => b.addEventListener('click', () => abrirProducto(b.dataset.ver)));
  $$('.favorito', ctx).forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    alternarFavorito(b.dataset.id, b);
  }));
  observarRevelado(ctx);
}

/* ------------------------------------------------------------
   Modal de producto
------------------------------------------------------------ */
let cantidadModal = 1;

function pintarModal() {
  if ($('#modal')) return;
  const div = document.createElement('div');
  div.className = 'modal';
  div.id = 'modal';
  div.setAttribute('role', 'dialog');
  div.setAttribute('aria-modal', 'true');
  document.body.appendChild(div);
}

function abrirProducto(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return;
  const col = COLECCIONES.find(c => c.id === p.coleccion);
  cantidadModal = 1;

  $('#modal').innerHTML = `
    <div class="modal-grid">
      <div class="modal-foto"><img src="${foto(p.img)}" alt="${p.nombre}, bolso tejido a mano"></div>
      <div class="modal-cuerpo">
        <button class="cerrar" id="cerrar-modal" aria-label="Cerrar">${ICONOS.cerrar}</button>
        <p class="eyebrow">Colección ${col ? col.nombre : ''}</p>
        <h2>${p.nombre}</h2>
        <div class="modal-precio">${money(p.precio)}</div>
        <p class="texto-suave">${p.descripcion}</p>
        <ul>${p.detalles.map(d => `<li>${d}</li>`).join('')}</ul>
        <div class="ficha">
          <div><b>${p.medidas}</b>Medidas</div>
          <div><b>${p.color}</b>Color</div>
          <div><b>${CONFIG.diasElaboracion}</b>Elaboración</div>
        </div>
        <div class="producto-acciones" style="align-items:center">
          <div class="cantidad">
            <button id="menos-modal" aria-label="Quitar una unidad">−</button>
            <span id="cantidad-modal">1</span>
            <button id="mas-modal" aria-label="Añadir una unidad">+</button>
          </div>
          <button class="boton boton-principal" id="agregar-modal">Añadir a la bolsa</button>
        </div>
        <p class="pista" style="margin-top:14px">¿Lo quieres en otro color? <a href="personaliza.html" style="color:var(--rosa-profundo);text-decoration:underline;text-underline-offset:3px">Tejemos el tuyo a medida</a>.</p>
      </div>
    </div>`;

  $('#cerrar-modal').addEventListener('click', cerrarModal);
  $('#mas-modal').addEventListener('click', () => {
    cantidadModal++; $('#cantidad-modal').textContent = cantidadModal;
  });
  $('#menos-modal').addEventListener('click', () => {
    if (cantidadModal > 1) { cantidadModal--; $('#cantidad-modal').textContent = cantidadModal; }
  });
  $('#agregar-modal').addEventListener('click', () => {
    agregarABolsa({ id: p.id, nombre: p.nombre, precio: p.precio, img: fotoSm(p.img), meta: p.color }, cantidadModal);
    cerrarModal();
    abrirBolsa();
  });

  $('#modal').classList.add('abierto');
  $('#capa').classList.add('abierta');
  document.body.classList.add('sin-scroll');
}

function cerrarModal() {
  $('#modal').classList.remove('abierto');
  cerrarCapaSiLibre();
}

function cerrarCapaSiLibre() {
  const algoAbierto = $('#modal')?.classList.contains('abierto') ||
    $('#bolsa')?.classList.contains('abierta') ||
    $('#nav')?.classList.contains('abierto');
  if (!algoAbierto) {
    $('#capa').classList.remove('abierta');
    document.body.classList.remove('sin-scroll');
  }
}

/* ------------------------------------------------------------
   Página de inicio
------------------------------------------------------------ */
function pintarInicio() {
  const gridCol = $('#grid-colecciones');
  if (gridCol) {
    gridCol.innerHTML = COLECCIONES.map(c => {
      const n = PRODUCTOS.filter(p => p.coleccion === c.id).length;
      return `
        <a class="coleccion revelar" href="catalogo.html#coleccion-${c.id}">
          <div class="coleccion-foto"><img src="${fotoSm(c.portada.replace('assets/img/', ''))}" alt="Colección ${c.nombre}" loading="lazy"></div>
          <div class="coleccion-cuerpo">
            <span class="coleccion-orden">${c.orden}</span>
            <h3>${c.nombre}</h3>
            <p>${c.resumen} · ${n} piezas</p>
          </div>
        </a>`;
    }).join('');
  }

  const gridDestacados = $('#grid-destacados');
  if (gridDestacados) {
    const destacados = PRODUCTOS.filter(p => p.destacado).slice(0, 8);
    gridDestacados.innerHTML = destacados.map(tarjetaProducto).join('');
    conectarTarjetas(gridDestacados);
  }

  const totalModelos = $('#total-modelos');
  if (totalModelos) totalModelos.textContent = PRODUCTOS.length;

  const numColecciones = $('#num-colecciones');
  if (numColecciones) numColecciones.textContent = COLECCIONES.length;

  const fotosTaller = $('#fotos-taller');
  if (fotosTaller) {
    fotosTaller.innerHTML = AMBIENTE.map(f =>
      `<img src="${fotoSm(f)}" alt="El taller de Elisa" loading="lazy">`).join('');
  }
}

/* ------------------------------------------------------------
   Página de catálogo
------------------------------------------------------------ */
const estadoCatalogo = { coleccion: 'todos', busqueda: '', orden: 'destacados' };

function pintarFiltros() {
  const cont = $('#filtros');
  if (!cont) return;
  const chips = [{ id: 'todos', nombre: 'Todos' }]
    .concat(COLECCIONES.map(c => ({ id: c.id, nombre: c.nombre })))
    .concat([{ id: 'favoritos', nombre: '♥ Favoritos' }]);

  cont.innerHTML = `
    <div class="chips">
      ${chips.map(c => `<button class="chip ${c.id === estadoCatalogo.coleccion ? 'activo' : ''}" data-coleccion="${c.id}">${c.nombre}</button>`).join('')}
    </div>
    <div class="chips">
      <label class="campo-busqueda">
        ${ICONOS.lupa}
        <input type="search" id="buscar" placeholder="Buscar por nombre o color" aria-label="Buscar" value="${estadoCatalogo.busqueda}">
      </label>
      <select class="selector" id="orden" aria-label="Ordenar">
        <option value="destacados">Destacados</option>
        <option value="nuevos">Recién tejidos</option>
        <option value="precio-asc">Precio: menor a mayor</option>
        <option value="precio-desc">Precio: mayor a menor</option>
        <option value="nombre">Nombre A–Z</option>
      </select>
    </div>`;

  $$('.chip', cont).forEach(ch => ch.addEventListener('click', () => {
    estadoCatalogo.coleccion = ch.dataset.coleccion;
    $$('.chip', cont).forEach(o => o.classList.toggle('activo', o === ch));
    pintarCatalogo();
  }));
  $('#buscar').addEventListener('input', e => {
    estadoCatalogo.busqueda = e.target.value.toLowerCase().trim();
    pintarCatalogo();
  });
  $('#orden').value = estadoCatalogo.orden;
  $('#orden').addEventListener('change', e => {
    estadoCatalogo.orden = e.target.value;
    pintarCatalogo();
  });
}

function pintarCatalogo() {
  const grid = $('#grid-catalogo');
  if (!grid) return;

  let lista = PRODUCTOS.slice();
  if (estadoCatalogo.coleccion === 'favoritos') lista = lista.filter(p => esFavorito(p.id));
  else if (estadoCatalogo.coleccion !== 'todos') lista = lista.filter(p => p.coleccion === estadoCatalogo.coleccion);

  if (estadoCatalogo.busqueda) {
    const q = estadoCatalogo.busqueda;
    lista = lista.filter(p =>
      (p.nombre + ' ' + p.color + ' ' + p.coleccion + ' ' + p.descripcion).toLowerCase().includes(q));
  }

  const ordenes = {
    'precio-asc': (a, b) => a.precio - b.precio,
    'precio-desc': (a, b) => b.precio - a.precio,
    'nombre': (a, b) => a.nombre.localeCompare(b.nombre, 'es'),
    'nuevos': (a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0),
    'destacados': (a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0)
  };
  lista.sort(ordenes[estadoCatalogo.orden] || ordenes.destacados);

  const conteo = $('#conteo');
  if (conteo) conteo.textContent = `${lista.length} ${lista.length === 1 ? 'modelo' : 'modelos'}`;

  if (!lista.length) {
    grid.innerHTML = `
      <div class="vacio" style="grid-column:1/-1">
        <h3>Aquí todavía no hay nada</h3>
        <p>${estadoCatalogo.coleccion === 'favoritos'
          ? 'Toca el corazón de las piezas que te gusten y las guardamos aquí.'
          : 'Prueba con otro color o mira todas las colecciones.'}</p>
        <a class="boton boton-secundario" href="personaliza.html">Personaliza el tuyo</a>
      </div>`;
    return;
  }

  grid.innerHTML = lista.map(tarjetaProducto).join('');
  conectarTarjetas(grid);
}

function pintarCabecerasColeccion() {
  const cont = $('#intro-colecciones');
  if (!cont) return;
  cont.innerHTML = COLECCIONES.map(c => `
    <div class="dato" id="coleccion-${c.id}">
      <h4>${c.orden} · ${c.nombre}</h4>
      <p style="font-size:1rem;font-style:normal;font-family:var(--sans);color:var(--cacao-medio)">${c.descripcion}</p>
    </div>`).join('');
}

/* ------------------------------------------------------------
   Personalizador
------------------------------------------------------------ */
const pedido = {
  coleccion: 'luzmila',
  color: OPCIONES.colores[0],
  herraje: OPCIONES.herrajes[0],
  tamano: OPCIONES.tamanos[1],
  extras: [],
  nombrePlaca: '',
  notas: ''
};

function basePorColeccion(id) {
  const precios = PRODUCTOS.filter(p => p.coleccion === id).map(p => p.precio);
  return precios.length ? Math.min(...precios) : 45;
}

function calcularPedido() {
  const base = basePorColeccion(pedido.coleccion);
  const porTamano = base * pedido.tamano.factor;
  const extrasTotal = pedido.extras.reduce((s, e) => s + e.extra, 0);
  const placa = pedido.nombrePlaca.trim() ? OPCIONES.placa : 0;
  const total = porTamano + pedido.herraje.extra + extrasTotal + placa;
  // Redondeamos al dólar para no dar precios con centavos raros
  return { base, porTamano, extrasTotal, placa, total: Math.max(Math.round(total), 0) };
}

function pintarPersonalizador() {
  const cont = $('#personalizador');
  if (!cont) return;

  $('#modelos').innerHTML = COLECCIONES.map(c => `
    <button class="opcion ${c.id === pedido.coleccion ? 'activa' : ''}" data-modelo="${c.id}">
      <b>${c.nombre}</b><small>${c.resumen} · desde ${money(basePorColeccion(c.id))}</small>
    </button>`).join('');

  $('#colores').innerHTML = OPCIONES.colores.map((c, i) => `
    <button class="muestra ${i === 0 ? 'activa' : ''}" style="background:${c.hex}" data-color="${i}"
      title="${c.nombre}" aria-label="Color ${c.nombre}"></button>`).join('');

  $('#herrajes').innerHTML = OPCIONES.herrajes.map((h, i) => `
    <button class="opcion ${i === 0 ? 'activa' : ''}" data-herraje="${h.id}">
      <b>${h.nombre}</b><small>${h.extra === 0 ? 'Incluido' : (h.extra > 0 ? '+' : '−') + CONFIG.moneda + Math.abs(h.extra)}</small>
    </button>`).join('');

  $('#tamanos').innerHTML = OPCIONES.tamanos.map(t => `
    <button class="opcion ${t.id === pedido.tamano.id ? 'activa' : ''}" data-tamano="${t.id}">
      <b>${t.nombre}</b><small>${t.detalle}</small>
    </button>`).join('');

  $('#extras').innerHTML = OPCIONES.extras.map(e => `
    <label class="casilla" data-extra="${e.id}">
      <input type="checkbox" value="${e.id}">
      <span>${e.nombre}</span>
      <small>+${money(e.extra)}</small>
    </label>`).join('');

  cont.addEventListener('click', ev => {
    const modelo = ev.target.closest('[data-modelo]');
    if (modelo) {
      pedido.coleccion = modelo.dataset.modelo;
      $$('[data-modelo]').forEach(b => b.classList.toggle('activa', b === modelo));
    }
    const color = ev.target.closest('[data-color]');
    if (color) {
      pedido.color = OPCIONES.colores[Number(color.dataset.color)];
      $$('[data-color]').forEach(b => b.classList.toggle('activa', b === color));
    }
    const herraje = ev.target.closest('[data-herraje]');
    if (herraje) {
      pedido.herraje = OPCIONES.herrajes.find(h => h.id === herraje.dataset.herraje);
      $$('[data-herraje]').forEach(b => b.classList.toggle('activa', b === herraje));
    }
    const tamano = ev.target.closest('[data-tamano]');
    if (tamano) {
      pedido.tamano = OPCIONES.tamanos.find(t => t.id === tamano.dataset.tamano);
      $$('[data-tamano]').forEach(b => b.classList.toggle('activa', b === tamano));
    }
    refrescarResumen();
  });

  cont.addEventListener('change', ev => {
    if (ev.target.type === 'checkbox') {
      const casilla = ev.target.closest('.casilla');
      casilla.classList.toggle('activa', ev.target.checked);
      pedido.extras = $$('#extras input:checked').map(i => OPCIONES.extras.find(e => e.id === i.value));
      refrescarResumen();
    }
  });

  $('#placa').addEventListener('input', e => { pedido.nombrePlaca = e.target.value; refrescarResumen(); });
  $('#notas').addEventListener('input', e => { pedido.notas = e.target.value; refrescarResumen(); });

  refrescarResumen();
}

function refrescarResumen() {
  const c = calcularPedido();
  const col = COLECCIONES.find(x => x.id === pedido.coleccion);
  const lineas = [
    ['Modelo base', `${col.nombre} · ${col.resumen}`],
    ['Tamaño', `${pedido.tamano.nombre} (${pedido.tamano.detalle})`],
    ['Color del trapillo', pedido.color.nombre],
    ['Herrajes', pedido.herraje.nombre]
  ];
  if (pedido.extras.length) lineas.push(['Detalles', pedido.extras.map(e => e.nombre).join(', ')]);
  if (pedido.nombrePlaca.trim()) lineas.push(['Placa grabada', `«${pedido.nombrePlaca.trim()}»`]);

  $('#resumen-lineas').innerHTML = lineas.map(([a, b]) =>
    `<div class="resumen-linea"><span>${a}</span><span>${b}</span></div>`).join('');
  $('#resumen-total').textContent = money(c.total);

  const muestra = $('#resumen-muestra');
  if (muestra) {
    muestra.style.background = pedido.color.hex;
    muestra.nextElementSibling.textContent = pedido.color.nombre;
  }
}

function textoPedidoPersonalizado() {
  const c = calcularPedido();
  const col = COLECCIONES.find(x => x.id === pedido.coleccion);
  let t = `¡Hola Elisa! Quiero un bolso hecho a mi medida 💗\n\n`;
  t += `Modelo base: ${col.nombre} (${col.resumen})\n`;
  t += `Tamaño: ${pedido.tamano.nombre} — ${pedido.tamano.detalle}\n`;
  t += `Color del trapillo: ${pedido.color.nombre}\n`;
  t += `Herrajes: ${pedido.herraje.nombre}\n`;
  if (pedido.extras.length) t += `Detalles: ${pedido.extras.map(e => e.nombre).join(', ')}\n`;
  if (pedido.nombrePlaca.trim()) t += `Placa con el nombre: ${pedido.nombrePlaca.trim()}\n`;
  if (pedido.notas.trim()) t += `Notas: ${pedido.notas.trim()}\n`;
  t += `\nEstimado según la web: ${money(c.total)}\n\nMi nombre: \nCiudad de envío: `;
  return t;
}

function conectarBotonesPersonalizador() {
  const wa = $('#enviar-personalizado');
  if (wa) {
    wa.addEventListener('click', e => {
      e.preventDefault();
      window.open(enlaceWhatsApp(textoPedidoPersonalizado()), '_blank', 'noopener');
    });
  }
  const guardar = $('#guardar-personalizado');
  if (guardar) {
    guardar.addEventListener('click', () => {
      const c = calcularPedido();
      const col = COLECCIONES.find(x => x.id === pedido.coleccion);
      agregarABolsa({
        id: 'medida-' + Date.now(),
        nombre: `${col.nombre} a medida`,
        precio: Number(c.total.toFixed(2)),
        img: fotoSm(col.portada.replace('assets/img/', '')),
        meta: `${pedido.tamano.nombre} · ${pedido.color.nombre} · ${pedido.herraje.nombre}${pedido.nombrePlaca.trim() ? ' · placa «' + pedido.nombrePlaca.trim() + '»' : ''}`
      });
      abrirBolsa();
    });
  }
}

/* ------------------------------------------------------------
   Formulario de contacto
------------------------------------------------------------ */
function conectarContacto() {
  const form = $('#form-contacto');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(form).entries());
    const texto = `¡Hola Elisa! 💗\n\nNombre: ${datos.nombre}\nCiudad: ${datos.ciudad || '—'}\nMotivo: ${datos.motivo}\n\n${datos.mensaje}`;
    window.open(enlaceWhatsApp(texto), '_blank', 'noopener');
    aviso('Abrimos WhatsApp con tu mensaje listo');
    form.reset();
  });
}

/* ------------------------------------------------------------
   Acordeón de preguntas
------------------------------------------------------------ */
function conectarAcordeon() {
  $$('.acordeon-boton').forEach(b => {
    b.addEventListener('click', () => {
      const item = b.closest('.acordeon-item');
      const panel = $('.acordeon-panel', item);
      const abierto = item.classList.toggle('abierto');
      panel.style.maxHeight = abierto ? panel.scrollHeight + 'px' : '0';
    });
  });
}

/* ------------------------------------------------------------
   Animación de aparición
------------------------------------------------------------ */
let observador;
function observarRevelado(ctx = document) {
  if (!('IntersectionObserver' in window)) {
    $$('.revelar', ctx).forEach(el => el.classList.add('visible'));
    return;
  }
  if (!observador) {
    observador = new IntersectionObserver(entradas => {
      entradas.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observador.unobserve(e.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  }
  $$('.revelar', ctx).forEach((el, i) => {
    el.style.transitionDelay = Math.min(i % 8, 6) * 60 + 'ms';
    observador.observe(el);
  });
  // Red de seguridad: si algo impide que el observador dispare,
  // el contenido se muestra igual pasados unos segundos.
  clearTimeout(observarRevelado.reloj);
  observarRevelado.reloj = setTimeout(() => {
    $$('.revelar:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 3000);
}

/* ------------------------------------------------------------
   Arranque
------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  // Capa oscura compartida
  const capa = document.createElement('div');
  capa.className = 'capa';
  capa.id = 'capa';
  document.body.appendChild(capa);
  capa.addEventListener('click', () => {
    $('#modal')?.classList.remove('abierto');
    $('#bolsa')?.classList.remove('abierta');
    const nav = $('#nav');
    if (nav?.classList.contains('abierto')) {
      nav.classList.remove('abierto');
      $('#btn-menu').innerHTML = ICONOS.menu;
      document.body.classList.remove('menu-abierto');
    }
    cerrarCapaSiLibre();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') capa.click();
  });

  pintarCabecera();
  pintarPie();
  pintarBolsa();
  pintarModal();
  refrescarBolsa();
  refrescarContadorFavoritos();

  // Logo completo donde se pida
  $$('[data-logo-completo]').forEach((el, i) => { el.innerHTML = logoCompleto('full' + i); });

  // Botón flotante de WhatsApp
  if (!$('.wa-flotante')) {
    const a = document.createElement('a');
    a.className = 'wa-flotante';
    a.href = enlaceWhatsApp('¡Hola Elisa! Vengo de la página web y quiero preguntarte algo 💗');
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Escríbenos por WhatsApp');
    a.innerHTML = ICONOS.whatsapp;
    document.body.appendChild(a);
  }

  const pagina = document.body.dataset.pagina;
  if (pagina === 'inicio') pintarInicio();
  if (pagina === 'catalogo') {
    if (location.hash === '#favoritos') estadoCatalogo.coleccion = 'favoritos';
    const hashCol = location.hash.replace('#coleccion-', '');
    if (COLECCIONES.some(c => c.id === hashCol)) estadoCatalogo.coleccion = hashCol;
    pintarFiltros();
    pintarCabecerasColeccion();
    pintarCatalogo();
  }
  if (pagina === 'personaliza') { pintarPersonalizador(); conectarBotonesPersonalizador(); }
  if (pagina === 'contacto') conectarContacto();

  conectarAcordeon();
  observarRevelado();
});
