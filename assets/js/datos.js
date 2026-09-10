/* ============================================================
   ELISA · Bolsos Tejidos
   Datos del negocio, colecciones y catálogo.
   Edita este archivo para cambiar precios, fotos o textos.
   ============================================================ */

const CONFIG = {
  marca: 'Elisa',
  lema: 'Bolsos tejidos a mano',
  // Número de WhatsApp en formato internacional, sin + ni espacios
  whatsapp: '593999109718',
  telefonoVisible: '099 910 9718',
  email: 'hola@elisabolsos.com',
  instagram: 'elisabolsos',
  ciudad: 'Ecuador',
  moneda: '$',
  diasElaboracion: '8–12 días',
  envio: 'Envíos a todo Ecuador · Pago contra entrega disponible'
};

const COLECCIONES = [
  {
    id: 'elisa',
    nombre: 'Elisa',
    orden: '01',
    resumen: 'Sobres con cadena',
    descripcion: 'Sobres alargados de punto cerrado, con cadena trenzada en trapillo o metal. La pieza que acompaña una noche entera sin pesar.',
    portada: 'assets/img/productos/elisa-lila.jpg'
  },
  {
    id: 'andrea',
    nombre: 'Andrea',
    orden: '02',
    resumen: 'Flecos y herrajes',
    descripcion: 'Cuerpo amplio, flecos largos y herrajes en dorado o plata. Es la colección más atrevida del taller, y la que más se pide en negro.',
    portada: 'assets/img/productos/andrea-grupo.jpg'
  },
  {
    id: 'sarita',
    nombre: 'Sarita',
    orden: '03',
    resumen: 'Mini bolsos',
    descripcion: 'Pequeños, redondos y de punto grueso. Nacieron como regalo para una niña y terminaron siendo los favoritos de las mamás.',
    portada: 'assets/img/productos/sarita-trio.jpg'
  },
  {
    id: 'luzmila',
    nombre: 'Luzmila',
    orden: '04',
    resumen: 'Estructurados con borla',
    descripcion: 'Base firme, asa redonda y borla al costado. Aguantan el día completo: cartera, agenda, botella y las llaves de siempre.',
    portada: 'assets/img/productos/luzmila-arena.jpg'
  }
];

const PRODUCTOS = [
  /* ---------- Colección Elisa · sobres con cadena ---------- */
  { id: 'elisa-lila', nombre: 'Sobre Lila', coleccion: 'elisa', precio: 46, color: 'Lila', nuevo: true, destacado: true,
    img: 'productos/elisa-lila.jpg',
    medidas: '28 × 14 × 6 cm',
    descripcion: 'Sobre en trapillo lila con solapa y broche dorado. La cadena plateada se puede quitar para llevarlo de mano.',
    detalles: ['Trapillo de algodón lila', 'Broche giratorio dorado', 'Cadena desmontable', 'Forro interior en tela'] },

  { id: 'elisa-noche', nombre: 'Sobre Noche', coleccion: 'elisa', precio: 52, color: 'Negro', destacado: true,
    img: 'productos/elisa-noche.jpg',
    medidas: '34 × 18 × 8 cm',
    descripcion: 'El más grande de la colección, tejido en negro profundo con asas dobles. Entra una tablet sin forzar el punto.',
    detalles: ['Trapillo negro mate', 'Asas trenzadas a mano', 'Placa metálica firmada', 'Base reforzada'] },

  { id: 'elisa-rubi', nombre: 'Sobre Rubí', coleccion: 'elisa', precio: 50, color: 'Rojo', destacado: true,
    img: 'productos/elisa-rubi.jpg',
    medidas: '30 × 15 × 7 cm',
    descripcion: 'Rojo intenso con lazo dorado al centro y cadena trenzada en trapillo. Nuestro pedido número uno para bodas.',
    detalles: ['Trapillo rojo', 'Lazo metálico dorado', 'Cadena trenzada a juego', 'Cierre imantado'] },

  { id: 'elisa-carmin', nombre: 'Sobre Carmín', coleccion: 'elisa', precio: 50, color: 'Rojo',
    img: 'productos/elisa-carmin.jpg',
    medidas: '30 × 15 × 7 cm',
    descripcion: 'Mismo cuerpo del Rubí pero con borla larga y cadena fina. Se lleva cruzado o al hombro.',
    detalles: ['Trapillo rojo', 'Borla larga a juego', 'Cadena fina dorada', 'Bolsillo interior'] },

  { id: 'elisa-cacao', nombre: 'Sobre Cacao', coleccion: 'elisa', precio: 48, color: 'Marrón',
    img: 'productos/elisa-cacao.jpg',
    medidas: '30 × 15 × 7 cm',
    descripcion: 'Marrón cacao con lazo dorado y cadena trenzada del mismo trapillo. Combina con todo y no se ensucia.',
    detalles: ['Trapillo cacao', 'Lazo dorado', 'Cadena trenzada en trapillo', 'Cierre imantado'] },

  { id: 'elisa-rosa', nombre: 'Sobre Rosa', coleccion: 'elisa', precio: 46, color: 'Rosa', nuevo: true,
    img: 'productos/elisa-rosa.jpg',
    medidas: '30 × 15 × 7 cm',
    descripcion: 'Rosa empolvado con asa gruesa tejida y borla al costado. El punto queda a la vista, hilada por hilada.',
    detalles: ['Trapillo rosa palo', 'Asa tejida gruesa', 'Borla artesanal', 'Placa firmada'] },

  { id: 'elisa-rosa-te', nombre: 'Sobre Rosa Té', coleccion: 'elisa', precio: 46, color: 'Rosa',
    img: 'productos/elisa-rosa-te.jpg',
    medidas: '30 × 15 × 7 cm',
    descripcion: 'Un rosa más cálido, tejido en punto trenza con borla larga. Se hace por pedido en el tono que elijas.',
    detalles: ['Punto trenza', 'Borla larga', 'Asa redonda tejida', 'Forro interior'] },

  { id: 'elisa-violeta', nombre: 'Sobre Violeta', coleccion: 'elisa', precio: 48, color: 'Morado',
    img: 'productos/elisa-violeta.jpg',
    medidas: '30 × 15 × 7 cm',
    descripcion: 'Violeta profundo con asa ancha para el hombro. Uno de los tonos que más rápido se agota.',
    detalles: ['Trapillo violeta', 'Asa ancha tejida', 'Placa metálica', 'Cierre imantado'] },

  { id: 'elisa-lila-trenza', nombre: 'Sobre Lila Trenza', coleccion: 'elisa', precio: 52, color: 'Lila',
    img: 'productos/elisa-lila-trenza.jpg',
    medidas: '32 × 16 × 7 cm',
    descripcion: 'Versión grande del Sobre Lila, en punto trenza y con asa redonda del mismo hilo.',
    detalles: ['Punto trenza en relieve', 'Asa redonda tejida', 'Borla al costado', 'Base reforzada'] },

  { id: 'elisa-arena', nombre: 'Sobre Arena', coleccion: 'elisa', precio: 44, color: 'Beige',
    img: 'productos/elisa-arena.jpg',
    medidas: '28 × 14 × 6 cm',
    descripcion: 'Crudo natural con argolla dorada y cordón tejido. El más sobrio de la colección.',
    detalles: ['Trapillo crudo', 'Argolla dorada', 'Cordón tejido', 'Cierre imantado'] },

  /* ---------- Colección Andrea · flecos y herrajes ---------- */
  { id: 'andrea-negro', nombre: 'Andrea Negro', coleccion: 'andrea', precio: 66, color: 'Negro', destacado: true,
    img: 'productos/andrea-negro.jpg',
    medidas: '32 × 20 × 10 cm',
    descripcion: 'Cuerpo negro con cadena plateada al frente, flecos largos y alfiler decorativo. La pieza estrella del taller.',
    detalles: ['Trapillo negro', 'Cadena plateada frontal', 'Flecos largos a los lados', 'Bandolera regulable'] },

  { id: 'andrea-cacao', nombre: 'Andrea Cacao', coleccion: 'andrea', precio: 68, color: 'Marrón',
    img: 'productos/andrea-cacao.jpg',
    medidas: '32 × 20 × 10 cm',
    descripcion: 'Chocolate con herrajes dorados y flecos en dos largos. Se teje por pedido en 10 días.',
    detalles: ['Trapillo chocolate', 'Cadena y alfiler dorados', 'Flecos escalonados', 'Bandolera tejida'] },

  { id: 'andrea-cafe', nombre: 'Andrea Café', coleccion: 'andrea', precio: 66, color: 'Marrón',
    img: 'productos/andrea-cafe.jpg',
    medidas: '32 × 20 × 10 cm',
    descripcion: 'Café con leche, herrajes dorados y flecos gruesos. Un clásico que combina con jean.',
    detalles: ['Trapillo café', 'Herrajes dorados', 'Flecos gruesos', 'Placa firmada'] },

  { id: 'andrea-grafito', nombre: 'Andrea Grafito', coleccion: 'andrea', precio: 64, color: 'Gris',
    img: 'productos/andrea-grafito.jpg',
    medidas: '32 × 20 × 10 cm',
    descripcion: 'Gris humo con flecos negros y detalles plateados. Discreto de lejos, tejido impecable de cerca.',
    detalles: ['Trapillo gris', 'Flecos en contraste', 'Herrajes plateados', 'Interior forrado'] },

  { id: 'andrea-olivo', nombre: 'Andrea Olivo', coleccion: 'andrea', precio: 66, color: 'Verde', nuevo: true,
    img: 'productos/andrea-olivo.jpg',
    medidas: '32 × 20 × 10 cm',
    descripcion: 'Verde olivo oscuro con asas dobles y flecos largos. Tono de temporada, tejido en cantidad limitada.',
    detalles: ['Trapillo verde olivo', 'Asas dobles', 'Flecos largos', 'Herrajes plateados'] },

  /* ---------- Colección Sarita · mini bolsos ---------- */
  { id: 'sarita-rosa', nombre: 'Mini Sarita Rosa', coleccion: 'sarita', precio: 24, color: 'Rosa', destacado: true, nuevo: true,
    img: 'productos/sarita-rosa.jpg',
    medidas: '18 × 13 × 7 cm',
    descripcion: 'Mini bolso rosa de punto grueso con broche dorado y borla. Entra celular, llaves y labial.',
    detalles: ['Punto grueso en relieve', 'Broche dorado', 'Borla pequeña', 'Asa rígida tejida'] },

  { id: 'sarita-celeste', nombre: 'Mini Sarita Celeste', coleccion: 'sarita', precio: 24, color: 'Celeste',
    img: 'productos/sarita-celeste.jpg',
    medidas: '18 × 13 × 7 cm',
    descripcion: 'El mismo molde en celeste cielo. Se teje también en amarillo, lila y blanco por encargo.',
    detalles: ['Trapillo celeste', 'Broche dorado', 'Asa rígida tejida', 'Forro interior'] },

  { id: 'sarita-rosa-flecos', nombre: 'Mini Sarita Flecos', coleccion: 'sarita', precio: 28, color: 'Rosa',
    img: 'productos/sarita-rosa-flecos.jpg',
    medidas: '20 × 13 × 7 cm',
    descripcion: 'Rosa nude con flecos negros largos y bandolera tejida. El contraste lo pidió una clienta y se quedó en el catálogo.',
    detalles: ['Trapillo rosa nude', 'Flecos negros', 'Bandolera tejida', 'Cierre imantado'] },

  /* ---------- Colección Luzmila · estructurados con borla ---------- */
  { id: 'luzmila-arena', nombre: 'Luzmila Arena', coleccion: 'luzmila', precio: 58, color: 'Beige', destacado: true,
    img: 'productos/luzmila-arena.jpg',
    medidas: '30 × 18 × 12 cm',
    descripcion: 'Base firme, asa redonda y borla al costado en trapillo arena. El modelo con el que empezó todo.',
    detalles: ['Base rígida reforzada', 'Asa redonda tejida', 'Borla larga', 'Placa metálica firmada'] },

  { id: 'luzmila-cacao', nombre: 'Luzmila Cacao', coleccion: 'luzmila', precio: 58, color: 'Marrón',
    img: 'productos/luzmila-cacao.jpg',
    medidas: '30 × 18 × 12 cm',
    descripcion: 'Marrón cacao de punto cerrado, con borla a juego y herrajes dorados.',
    detalles: ['Punto cerrado', 'Borla a juego', 'Herrajes dorados', 'Interior forrado'] },

  { id: 'luzmila-chocolate', nombre: 'Luzmila Chocolate', coleccion: 'luzmila', precio: 60, color: 'Marrón',
    img: 'productos/luzmila-chocolate.jpg',
    medidas: '32 × 19 × 12 cm',
    descripcion: 'Versión amplia en chocolate con asas dobles y borla gruesa. Cabe una laptop de 13".',
    detalles: ['Asas dobles', 'Borla gruesa', 'Base reforzada', 'Bolsillo interior'] },

  { id: 'luzmila-malva', nombre: 'Luzmila Malva', coleccion: 'luzmila', precio: 58, color: 'Rosa', nuevo: true,
    img: 'productos/luzmila-malva.jpg',
    medidas: '30 × 18 × 12 cm',
    descripcion: 'Rosa malva empolvado, el tono más pedido de la temporada. Punto trenza en todo el cuerpo.',
    detalles: ['Punto trenza', 'Asa redonda', 'Borla a juego', 'Placa firmada'] },

  { id: 'luzmila-vino', nombre: 'Luzmila Vino', coleccion: 'luzmila', precio: 60, color: 'Vino',
    img: 'productos/luzmila-vino.jpg',
    medidas: '32 × 19 × 12 cm',
    descripcion: 'Vino tinto con borla larga y asa trenzada. Se tejió para una boda y se quedó de fijo.',
    detalles: ['Trapillo vino', 'Asa trenzada', 'Borla larga', 'Interior forrado'] },

  { id: 'luzmila-azul', nombre: 'Luzmila Azul', coleccion: 'luzmila', precio: 62, color: 'Azul',
    img: 'productos/luzmila-azul.jpg',
    medidas: '30 × 18 × 12 cm',
    descripcion: 'Azul denim de punto firme con borla y asa redonda. Aguanta lluvia y no destiñe.',
    detalles: ['Trapillo azul denim', 'Punto firme', 'Borla a juego', 'Base impermeable'] },

  { id: 'luzmila-duo', nombre: 'Luzmila Olivo', coleccion: 'luzmila', precio: 56, color: 'Verde',
    img: 'productos/luzmila-duo.jpg',
    medidas: '28 × 17 × 11 cm',
    descripcion: 'Verde olivo con bandolera larga y borla. También se teje en arena, como en la foto.',
    detalles: ['Bandolera larga', 'Borla artesanal', 'Herrajes dorados', 'Punto cerrado'] },

  { id: 'luzmila-corazon-lila', nombre: 'Luzmila Corazones Lila', coleccion: 'luzmila', precio: 62, color: 'Morado', destacado: true, nuevo: true,
    img: 'productos/luzmila-corazon-lila.jpg',
    medidas: '26 × 20 × 12 cm',
    descripcion: 'Morado con corazones tejidos en blanco, uno por uno. Es el modelo que más tiempo toma: 14 días.',
    detalles: ['Corazones tejidos a mano', 'Asa redonda', 'Cintas y borla', 'Interior forrado'] },

  { id: 'luzmila-corazon-rojo', nombre: 'Luzmila Corazones Rojo', coleccion: 'luzmila', precio: 62, color: 'Rojo', destacado: true,
    img: 'productos/luzmila-corazon-rojo.jpg',
    medidas: '26 × 20 × 12 cm',
    descripcion: 'Rojo con corazones blancos y asa corta. El regalo de San Valentín que agotamos cada año.',
    detalles: ['Corazones tejidos a mano', 'Asa corta rígida', 'Borla y cinta', 'Placa firmada'] }
];

/* Fotos del taller para la sección "quién teje" */
const AMBIENTE = ['ambiente/taller-1.jpg', 'productos/luzmila-chocolate.jpg'];

/* Opciones del personalizador */
const OPCIONES = {
  colores: [
    { nombre: 'Rosa palo', hex: '#EFB8C4' },
    { nombre: 'Rosa té', hex: '#DE9BA8' },
    { nombre: 'Malva', hex: '#C08A9B' },
    { nombre: 'Vino', hex: '#7C3245' },
    { nombre: 'Rojo', hex: '#C0342B' },
    { nombre: 'Lila', hex: '#B9A2DA' },
    { nombre: 'Violeta', hex: '#6C4B93' },
    { nombre: 'Celeste', hex: '#A8CBD9' },
    { nombre: 'Azul denim', hex: '#4A5D78' },
    { nombre: 'Verde olivo', hex: '#5A6242' },
    { nombre: 'Arena', hex: '#D9C4AE' },
    { nombre: 'Cacao', hex: '#7A4B3B' },
    { nombre: 'Chocolate', hex: '#4A2E22' },
    { nombre: 'Negro', hex: '#2A2320' },
    { nombre: 'Crudo', hex: '#EFE5D8' },
    { nombre: 'Gris humo', hex: '#8C8781' }
  ],
  herrajes: [
    { id: 'dorado', nombre: 'Dorado', extra: 0 },
    { id: 'plateado', nombre: 'Plateado', extra: 0 },
    { id: 'sin', nombre: 'Sin herrajes', extra: -4 }
  ],
  tamanos: [
    { id: 'mini', nombre: 'Mini', detalle: '18 × 13 cm', factor: 0.55 },
    { id: 'clasico', nombre: 'Clásico', detalle: '30 × 18 cm', factor: 1 },
    { id: 'amplio', nombre: 'Amplio', detalle: '34 × 20 cm', factor: 1.18 }
  ],
  extras: [
    { id: 'borla', nombre: 'Borla artesanal', extra: 4 },
    { id: 'flecos', nombre: 'Flecos largos', extra: 8 },
    { id: 'corazones', nombre: 'Corazones tejidos', extra: 12 },
    { id: 'bandolera', nombre: 'Bandolera larga', extra: 6 },
    { id: 'forro', nombre: 'Forro interior en tela', extra: 5 }
  ],
  placa: 6
};
