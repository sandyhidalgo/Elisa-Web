/* ============================================================
   ELISA · Bolsos Tejidos
   Datos del negocio, colecciones y catálogo.
   Precios, medidas y descripciones tomados del catálogo oficial
   "Catálogo Elisa Bolsos" (Marisol, Andrea, LilyBag y Sarita).
   Edita este archivo para cambiar precios, fotos o textos.
   ============================================================ */

const CONFIG = {
  marca: 'Elisa',
  lema: 'Bolsos tejidos a mano',
  // Número de WhatsApp en formato internacional, sin + ni espacios
  whatsapp: '593999109718',
  telefonoVisible: '0999109718',
  email: 'elisabolsos@hotmail.com',
  // Solo el usuario, sin @
  instagram: 'elisabolsos',
  tiktok: 'elisabolsos.ec',
  ciudad: 'Ecuador',
  moneda: '$',
  // Plazos: modelos del catálogo y bolsos personalizados
  entregaCatalogo: '3 días laborables',
  diasElaboracion: '8–12 días',
  envio: 'Envíos a todo Ecuador · Pago contra entrega disponible',
  frase: 'Diseños que cuentan historias. Hechos con amor, tejidos para ti.'
};

/* Datos del titular para las páginas legales (aviso legal, privacidad…).
   Completa ruc y domicilio: mientras estén vacíos, esas líneas no se muestran.
   La ley ecuatoriana exige identificar al proveedor, así que no lo dejes pendiente. */
const TITULAR = {
  nombre: 'Elisa Bolsos',
  ruc: '',          // RUC o cédula del titular, p. ej. '1712345678001'
  domicilio: '',    // Dirección completa, p. ej. 'Av. Amazonas N00-00, Quito'
  pais: 'Ecuador',
  actualizado: '10 de septiembre de 2026'
};

/* Detalles que comparten todas las piezas, según el catálogo */
const DETALLES_BASE = [
  'Tejido a mano',
  'Trapillo premium',
  'Accesorios metálicos',
  'Forro interior',
  'Broches seguros',
  'Diseño exclusivo'
];

const COLECCIONES = [
  {
    id: 'marisol',
    nombre: 'Marisol',
    orden: '01',
    resumen: 'Sobres con cadena',
    precioDesde: 45,
    medidas: 'Alto 25 cm · Ancho 25 cm · Asa 100 cm',
    descripcion: 'Un bolso formal, diseñado para eventos especiales y looks sofisticados.',
    colores: 'Negro, rojo, durazno, marrón y lila',
    portada: 'assets/img/productos/marisol-rojo.jpg'
  },
  {
    id: 'andrea',
    nombre: 'Andrea',
    orden: '02',
    resumen: 'Flecos y herrajes',
    precioDesde: 40,
    medidas: 'Tres modelos · Asa de 65 a 90 cm',
    descripcion: 'Un bolso moderno, versátil y lleno de estilo para mujeres que aman lo auténtico.',
    colores: 'Marrón, gris, negro, olivo y durazno',
    portada: 'assets/img/productos/andrea-grupo.jpg'
  },
  {
    id: 'lilybag',
    nombre: 'LilyBag',
    orden: '03',
    resumen: 'Compactos de asa corta',
    precioDesde: 25,
    medidas: 'Tres tallas · de 26 × 21 cm a 28 × 28 cm',
    descripcion: 'Diseñado para tu ritmo, creado para tu estilo. Sé auténtica, sé tú misma con la colección LilyBag.',
    colores: 'Crudo, marrón, rojo, coral, amarillo, celeste, morado y rosa',
    portada: 'assets/img/productos/lilybag-trio.jpg'
  },
  {
    id: 'sarita',
    nombre: 'Sarita',
    orden: '04',
    resumen: 'Alargados con borla',
    precioDesde: 30,
    medidas: 'Alto 17 cm · Ancho 28 cm',
    descripcion: 'Piezas únicas tejidas a mano que destacan por su textura, practicidad y diseño atemporal. Con una paleta de colores pensada para cada personalidad y su característica borla decorativa.',
    colores: 'Terracota, turquesa, verde olivo, café oscuro, vino y azul',
    portada: 'assets/img/productos/sarita-arena.jpg'
  }
];

const MEDIDAS = {
  marisol: '25 × 25 cm · asa 100 cm',
  andreaA: '24 × 30 cm · asa 90 × 6 cm',
  andreaB: '22 × 28 cm · asa y flecos 90 cm',
  andreaC: '19 × 45 cm · asa 65 cm',
  lilyA: '26 × 21 cm',
  lilyB: '29 × 23 cm',
  lilyC: '28 × 28 cm',
  sarita: '17 × 28 cm'
};

const PRODUCTOS = [
  /* ---------- Colección Marisol · $45 ---------- */
  { id: 'marisol-rojo', nombre: 'Marisol Rojo', coleccion: 'marisol', precio: 45, color: 'Rojo', destacado: true,
    img: 'productos/marisol-rojo.jpg', medidas: MEDIDAS.marisol,
    descripcion: 'La pieza insignia de la colección: solapa tejida en punto trenza, lazo metálico dorado y cadena forrada en trapillo a juego.',
    detalles: ['Solapa con lazo dorado', 'Cadena forrada en trapillo', 'Borla decorativa', 'Broche de seguridad'] },

  { id: 'marisol-carmin', nombre: 'Marisol Carmín', coleccion: 'marisol', precio: 45, color: 'Rojo',
    img: 'productos/marisol-carmin.jpg', medidas: MEDIDAS.marisol,
    descripcion: 'Mismo cuerpo del Marisol Rojo con borla larga y cadena fina. Se lleva cruzado o al hombro con el asa de 100 cm.',
    detalles: ['Borla larga a juego', 'Cadena fina metálica', 'Solapa con broche', 'Forro interior'] },

  { id: 'marisol-marron', nombre: 'Marisol Marrón', coleccion: 'marisol', precio: 45, color: 'Marrón', destacado: true,
    img: 'productos/marisol-marron.jpg', medidas: MEDIDAS.marisol,
    descripcion: 'Marrón cacao con lazo dorado y cadena trenzada del mismo trapillo. El tono que combina con todo el año.',
    detalles: ['Lazo metálico dorado', 'Cadena trenzada en trapillo', 'Solapa con broche', 'Forro interior'] },

  { id: 'marisol-lila', nombre: 'Marisol Lila', coleccion: 'marisol', precio: 45, color: 'Lila', destacado: true, nuevo: true,
    img: 'productos/marisol-lila.jpg', medidas: MEDIDAS.marisol,
    descripcion: 'Lila suave con broche giratorio dorado y cadena plateada desmontable, para llevarlo también de mano.',
    detalles: ['Broche giratorio dorado', 'Cadena desmontable', 'Borla a juego', 'Forro interior'] },

  { id: 'marisol-crudo', nombre: 'Marisol Crudo', coleccion: 'marisol', precio: 45, color: 'Crudo',
    img: 'productos/marisol-crudo.jpg', medidas: MEDIDAS.marisol,
    descripcion: 'El más sobrio de la colección: crudo natural, argolla dorada y cordón tejido a mano.',
    detalles: ['Argolla dorada', 'Cordón tejido', 'Solapa con broche', 'Forro interior'] },

  { id: 'marisol-negro', nombre: 'Marisol Negro', coleccion: 'marisol', precio: 45, color: 'Negro',
    img: 'productos/marisol-negro.jpg', medidas: MEDIDAS.marisol,
    descripcion: 'Negro profundo con asas trenzadas a mano y placa metálica firmada. El de siempre para la noche.',
    detalles: ['Asas trenzadas a mano', 'Placa metálica firmada', 'Base reforzada', 'Forro interior'] },

  /* ---------- Colección Andrea · $40 ---------- */
  { id: 'andrea-negro', nombre: 'Andrea Negro', coleccion: 'andrea', precio: 40, color: 'Negro', destacado: true,
    img: 'productos/andrea-negro.jpg', medidas: MEDIDAS.andreaA,
    descripcion: 'Cuerpo negro con cadena plateada al frente, alfiler decorativo y flecos largos a los costados. La pieza más pedida del taller.',
    detalles: ['Cadena plateada frontal', 'Alfiler decorativo', 'Flecos largos', 'Asa tejida de 90 cm'] },

  { id: 'andrea-marron', nombre: 'Andrea Marrón', coleccion: 'andrea', precio: 40, color: 'Marrón',
    img: 'productos/andrea-marron.jpg', medidas: MEDIDAS.andreaA,
    descripcion: 'Chocolate con herrajes dorados y flecos en dos largos. El asa trenzada lleva la cadena entretejida.',
    detalles: ['Cadena y alfiler dorados', 'Flecos escalonados', 'Asa trenzada con cadena', 'Forro interior'] },

  { id: 'andrea-gris', nombre: 'Andrea Gris', coleccion: 'andrea', precio: 40, color: 'Gris',
    img: 'productos/andrea-gris.jpg', medidas: MEDIDAS.andreaA,
    descripcion: 'Gris humo con flecos en contraste y herrajes plateados. Discreto de lejos, tejido impecable de cerca.',
    detalles: ['Herrajes plateados', 'Flecos en contraste', 'Asa tejida de 90 cm', 'Forro interior'] },

  { id: 'andrea-cafe', nombre: 'Andrea Café', coleccion: 'andrea', precio: 40, color: 'Marrón', nuevo: true,
    img: 'productos/andrea-cafe.jpg', medidas: MEDIDAS.andreaB,
    descripcion: 'Modelo de hombro con flor tejida, bordado a mano y flecos de 90 cm. Se teje también en durazno y en vino con celeste.',
    detalles: ['Flor tejida a mano', 'Bordado decorativo', 'Asa y flecos de 90 cm', 'Broche de seguridad'] },

  { id: 'andrea-olivo', nombre: 'Andrea Olivo', coleccion: 'andrea', precio: 40, color: 'Verde olivo',
    img: 'productos/andrea-olivo.jpg', medidas: MEDIDAS.andreaB,
    descripcion: 'Verde olivo oscuro con asas dobles y flecos largos. Tono de temporada, tejido en cantidad limitada.',
    detalles: ['Asas dobles tejidas', 'Flecos largos', 'Herrajes plateados', 'Forro interior'] },

  { id: 'andrea-amplio', nombre: 'Andrea Amplio', coleccion: 'andrea', precio: 40, color: 'Marrón', destacado: true,
    img: 'productos/andrea-amplio.jpg', medidas: MEDIDAS.andreaC,
    descripcion: 'El modelo grande de la colección: 45 cm de ancho, asa corta de 65 cm y cuerpo fruncido con flecos. Se teje en olivo con negro, rojo con durazno y negro con gris.',
    detalles: ['Cuerpo fruncido de 45 cm', 'Asa corta de 65 cm', 'Flecos y apliques metálicos', 'Base reforzada'] },

  /* ---------- Colección LilyBag · $25 a $29 ---------- */
  { id: 'lilybag-rojo', nombre: 'LilyBag Rojo Corazones', coleccion: 'lilybag', precio: 25, color: 'Rojo', destacado: true,
    img: 'productos/lilybag-rojo.jpg', medidas: MEDIDAS.lilyC,
    descripcion: 'Rojo con corazones tejidos en blanco, uno por uno, y borla de cintas. El regalo que agotamos cada San Valentín.',
    detalles: ['Corazones tejidos a mano', 'Borla de cintas', 'Asa corta rígida', 'Placa firmada'] },

  { id: 'lilybag-morado', nombre: 'LilyBag Morado Corazones', coleccion: 'lilybag', precio: 29, color: 'Morado', destacado: true, nuevo: true,
    img: 'productos/lilybag-morado.jpg', medidas: MEDIDAS.lilyC,
    descripcion: 'Morado con corazones blancos y bandolera desmontable. Es el modelo que más tiempo toma, porque cada corazón se teje aparte.',
    detalles: ['Corazones tejidos a mano', 'Bandolera desmontable', 'Borla y cintas', 'Forro interior'] },

  { id: 'lilybag-rosa', nombre: 'LilyBag Rosa', coleccion: 'lilybag', precio: 29, color: 'Rosa', destacado: true, nuevo: true,
    img: 'productos/lilybag-rosa.jpg', medidas: MEDIDAS.lilyA,
    descripcion: 'Rosa de punto grueso en relieve, con broche dorado y asa rígida tejida. Entra celular, llaves y labial.',
    detalles: ['Punto grueso en relieve', 'Broche dorado', 'Asa rígida tejida', 'Borla decorativa'] },

  { id: 'lilybag-celeste', nombre: 'LilyBag Celeste', coleccion: 'lilybag', precio: 29, color: 'Celeste',
    img: 'productos/lilybag-celeste.jpg', medidas: MEDIDAS.lilyA,
    descripcion: 'El mismo molde en celeste cielo. Se teje también en amarillo y en coral, los tres tonos de la colección.',
    detalles: ['Broche dorado', 'Asa rígida tejida', 'Cordón desmontable', 'Forro interior'] },

  { id: 'lilybag-nude', nombre: 'LilyBag Nude', coleccion: 'lilybag', precio: 29, color: 'Rosa',
    img: 'productos/lilybag-nude.jpg', medidas: MEDIDAS.lilyB,
    descripcion: 'Rosa nude con flecos negros largos y bandolera tejida. El contraste lo pidió una clienta y se quedó en el catálogo.',
    detalles: ['Flecos en contraste', 'Bandolera tejida', 'Broche de seguridad', 'Forro interior'] },

  /* ---------- Colección Sarita · $30 ---------- */
  { id: 'sarita-arena', nombre: 'Sarita Arena', coleccion: 'sarita', precio: 30, color: 'Arena', destacado: true,
    img: 'productos/sarita-arena.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Cuerpo alargado en trapillo arena, asa trenzada y la borla decorativa que caracteriza a toda la colección.',
    detalles: ['Borla decorativa', 'Asa trenzada a mano', 'Placa metálica firmada', 'Base reforzada'] },

  { id: 'sarita-vino', nombre: 'Sarita Vino', coleccion: 'sarita', precio: 30, color: 'Vino', destacado: true,
    img: 'productos/sarita-vino.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Vino tinto con bandolera trenzada larga y borla a juego. Uno de los seis tonos oficiales de la colección.',
    detalles: ['Bandolera trenzada', 'Borla a juego', 'Herrajes dorados', 'Forro interior'] },

  { id: 'sarita-azul', nombre: 'Sarita Azul', coleccion: 'sarita', precio: 30, color: 'Azul',
    img: 'productos/sarita-azul.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Azul de punto firme con borla y asa redonda. Aguanta el uso diario sin perder la forma.',
    detalles: ['Punto firme', 'Borla decorativa', 'Asa redonda tejida', 'Base reforzada'] },

  { id: 'sarita-olivo', nombre: 'Sarita Olivo', coleccion: 'sarita', precio: 30, color: 'Verde olivo',
    img: 'productos/sarita-olivo.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Verde olivo con bandolera larga y borla. En la foto aparece junto a la versión en arena.',
    detalles: ['Bandolera larga', 'Borla decorativa', 'Herrajes dorados', 'Forro interior'] },

  { id: 'sarita-cafe', nombre: 'Sarita Café', coleccion: 'sarita', precio: 30, color: 'Café oscuro',
    img: 'productos/sarita-cafe.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Café oscuro de punto cerrado, con borla a juego y herrajes dorados.',
    detalles: ['Punto cerrado', 'Borla a juego', 'Herrajes dorados', 'Forro interior'] },

  { id: 'sarita-chocolate', nombre: 'Sarita Chocolate', coleccion: 'sarita', precio: 30, color: 'Café oscuro',
    img: 'productos/sarita-chocolate.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Chocolate con asas dobles y borla gruesa. El tono más cálido de los seis.',
    detalles: ['Asas dobles', 'Borla gruesa', 'Base reforzada', 'Bolsillo interior'] },

  { id: 'sarita-malva', nombre: 'Sarita Malva', coleccion: 'sarita', precio: 30, color: 'Malva', nuevo: true,
    img: 'productos/sarita-malva.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Rosa malva empolvado en punto trenza, con asa redonda y borla a juego.',
    detalles: ['Punto trenza', 'Asa redonda', 'Borla a juego', 'Placa firmada'] },

  { id: 'sarita-rosa', nombre: 'Sarita Rosa', coleccion: 'sarita', precio: 30, color: 'Rosa',
    img: 'productos/sarita-rosa.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Rosa empolvado con asa gruesa tejida y borla al costado. El punto queda a la vista, hilada por hilada.',
    detalles: ['Asa gruesa tejida', 'Borla artesanal', 'Placa firmada', 'Forro interior'] },

  { id: 'sarita-rosa-te', nombre: 'Sarita Rosa Té', coleccion: 'sarita', precio: 30, color: 'Rosa',
    img: 'productos/sarita-rosa-te.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Un rosa más cálido, tejido en punto trenza con borla larga y asa redonda.',
    detalles: ['Punto trenza', 'Borla larga', 'Asa redonda tejida', 'Forro interior'] },

  { id: 'sarita-lila', nombre: 'Sarita Lila', coleccion: 'sarita', precio: 30, color: 'Lila',
    img: 'productos/sarita-lila.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Lila en punto trenza en relieve, con asa redonda del mismo hilo y borla al costado.',
    detalles: ['Punto trenza en relieve', 'Asa redonda tejida', 'Borla al costado', 'Base reforzada'] },

  { id: 'sarita-violeta', nombre: 'Sarita Violeta', coleccion: 'sarita', precio: 30, color: 'Violeta',
    img: 'productos/sarita-violeta.jpg', medidas: MEDIDAS.sarita,
    descripcion: 'Violeta profundo con asa ancha para el hombro. Uno de los tonos que más rápido se agota.',
    detalles: ['Asa ancha tejida', 'Borla decorativa', 'Placa metálica', 'Forro interior'] }
];

/* Todas las piezas comparten los detalles del catálogo */
PRODUCTOS.forEach(p => {
  p.detalles = Array.from(new Set(p.detalles.concat(DETALLES_BASE)));
});

/* Fotos para la sección "quién teje" */
const AMBIENTE = ['ambiente/taller-1.jpg', 'productos/lilybag-grupo.jpg'];

/* Opciones del personalizador — colores tomados del catálogo */
const OPCIONES = {
  colores: [
    { nombre: 'Rojo', hex: '#D0201F' },
    { nombre: 'Vino', hex: '#7C1F35' },
    { nombre: 'Rosa', hex: '#EFB8C4' },
    { nombre: 'Coral', hex: '#F58A80' },
    { nombre: 'Durazno', hex: '#F6C3A4' },
    { nombre: 'Malva', hex: '#C08A9B' },
    { nombre: 'Lila', hex: '#C9B3E4' },
    { nombre: 'Morado', hex: '#7B3FC4' },
    { nombre: 'Celeste', hex: '#8FD3E0' },
    { nombre: 'Turquesa', hex: '#7FCFC6' },
    { nombre: 'Azul', hex: '#2E6F94' },
    { nombre: 'Verde olivo', hex: '#5E6B22' },
    { nombre: 'Amarillo', hex: '#F5D33F' },
    { nombre: 'Terracota', hex: '#C0552A' },
    { nombre: 'Arena', hex: '#D9C4AE' },
    { nombre: 'Crudo', hex: '#EFE5D8' },
    { nombre: 'Marrón', hex: '#7A4B3B' },
    { nombre: 'Café oscuro', hex: '#3B2019' },
    { nombre: 'Gris', hex: '#8C8781' },
    { nombre: 'Negro', hex: '#1F1B1A' }
  ],
  herrajes: [
    { id: 'dorado', nombre: 'Dorado', extra: 0 },
    { id: 'plateado', nombre: 'Plateado', extra: 0 },
    { id: 'sin', nombre: 'Sin herrajes', extra: -4 }
  ],
  tamanos: [
    { id: 'mini', nombre: 'Mini', detalle: '17 × 28 cm', factor: 0.85 },
    { id: 'clasico', nombre: 'Clásico', detalle: '25 × 25 cm', factor: 1 },
    { id: 'amplio', nombre: 'Amplio', detalle: '19 × 45 cm', factor: 1.2 }
  ],
  extras: [
    { id: 'borla', nombre: 'Borla decorativa', extra: 4 },
    { id: 'flecos', nombre: 'Flecos largos', extra: 8 },
    { id: 'corazones', nombre: 'Corazones tejidos', extra: 12 },
    { id: 'bandolera', nombre: 'Bandolera larga', extra: 6 },
    { id: 'flor', nombre: 'Flor tejida a mano', extra: 5 }
  ],
  placa: 6
};
