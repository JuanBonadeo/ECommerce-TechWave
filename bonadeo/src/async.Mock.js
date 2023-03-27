const products = [
    {
        id:'1',
        nombre:'Apple iPhone 11 128 GB 8gb RAM',
        precio: 315000,
        categoria: 'celularesApple',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_796892-MLA46114829828_052021-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_781098-MLA46114829829_052021-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_815215-MLA46115014399_052021-F.webp',
        descripcion:"Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. ",
        color:"blanco",
        fabricante:'apple',
        supcategoria:'celulares'
    },
    {
        id:'2',
        nombre:'Auriculares inalámbricos Xiaomi Redmi AirDots 3 Pro',
        precio: 23999,
        categoria: 'auriculares',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_737268-MLA47844479339_102021-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_973627-MLA47844614076_102021-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_985829-MLA47844412522_102021-F.webp',
        descripcion:"Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Xiaomi AirDots 3 Pro no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
        color:"gris",
        fabricante:'xiaomi',
        supcategoria:'audio&video'
    },
    {
        id:'3',
        nombre:'Monitor gamer Samsung led 24',
        precio: 61900,
        categoria: 'monitores',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_973781-MLA48131216539_112021-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_905728-MLA48131292348_112021-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_684148-MLA48131216540_112021-F.webp',
        descripcion:"Una experiencia visual de calidad Este monitor de 24'' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
        color:"negro",
        fabricante:'samsung',
        supcategoria:'audio&video',
    },
    {
        id:'4',
        nombre:'Auriculares inalámbricos Sony 1000X',
        precio: 143000,
        categoria: 'auriculares',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_794797-MLA50436072460_062022-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_942427-MLA50436038781_062022-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_702651-MLA50436164034_062022-F.webp',
        descripcion:"El formato perfecto para vos El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        color:"negro",
        fabricante:'sony',
        supcategoria:'audio&video'
    },
    {
        id:'5',
        nombre:'Silla Herman Miller Ergonomica',
        precio: 120000,
        categoria: 'sillas',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_644747-MLA42046097362_062020-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_907412-MLA42045995433_062020-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_924465-MLA42045995434_062020-F.webp',
        descripcion:"Con esta silla Herman Miller, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada. Además, podés ubicarla en cualquier parte de tu casa u oficina ya que su diseño se adapta a múltiples entornos. ¡Dale a tus espacios un toque más moderno!",
        color:"negro",
        fabricante:'Miller',
        supcategoria:'accesorios'
    },
    {
        id:'6',
        nombre:'Apple Watch Se 2da Gen 44mm',
        precio: 139999,
        categoria: 'smartwatches',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_660726-MLA53669428863_022023-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_669327-MLA53669428864_022023-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_629948-MLA53669428866_022023-F.webp',
        descripcion:"Todos los elementos esenciales para ayudarte a controlar tu fitness, mantenerte conectado, rastrear tu salud y mantenerte seguro. Ahora hasta un 20 % más rápido, con características como detección de accidentes y métricas de entrenamiento mejoradas, es un mejor valor que nunca.        ",
        color:"blanco",
        fabricante:'apple',
        supcategoria:'accesorios'
    },
    {
        id:'7',
        nombre:'Samsung Galaxy A13 128gb + 4gb Ram Pls Lcd negro ',
        precio: 190000,
        categoria: 'celularesSamsung',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_917545-MLA50401654103_062022-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_955991-MLA50055778251_052022-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_721491-MLA50401578341_062022-F.webp',
        descripcion:"",
        color:"negro",
        fabricante:'samsung',
        supcategoria:'celulares'
    },
    {
        id:'8',
        nombre:'Notebook Lenovo IdeaPad i5 8GB RAM 512GB SSD',
        precio: 275000,
        categoria: 'laptops',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_638942-MLA49937651999_052022-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_773703-MLA49937685740_052022-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_680757-MLA49937685739_052022-F.webp',
        descripcion:"La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.",
        color:"gris",
        fabricante:'lenovo',
        supcategoria: 'computacion'
    },
    {
        id: '9',
        nombre: 'Samsung Galaxy S20 cloud navy 6GB RAM 128GB',
        precio: 95000,
        categoria: 'celularesSamsung',
        img1: 'https://http2.mlstatic.com/D_NQ_NP_2X_903307-MLA52383198086_112022-F.webp',
        img2: 'https://http2.mlstatic.com/D_NQ_NP_2X_953094-MLA52382881920_112022-F.webp',
        img3: 'https://http2.mlstatic.com/D_NQ_NP_2X_821971-MLA52382900914_112022-F.webp',
        descripcion: 'El Samsung Galaxy S21 es un smartphone de alta gama con pantalla Dynamic AMOLED de 6.2", procesador Exynos 2100, 8GB de RAM, 128GB de almacenamiento, cámara triple de 64MP + 12MP + 12MP, y batería de 4000mAh con carga rápida.',
        color: 'azul',
        fabricante: 'samsung',
        supcategoria: 'celulares'
      },
      {
        id: '10',
        nombre: 'Smart TV LG 55" 4K UHD',
        precio: 325000,
        categoria: 'televisores',
        img1: 'https://http2.mlstatic.com/D_NQ_NP_2X_749310-MLA53433735956_012023-F.webp',
        img2: 'https://http2.mlstatic.com/D_NQ_NP_2X_675870-MLA53433806165_012023-F.webp',
        img3: 'https://http2.mlstatic.com/D_NQ_NP_2X_669624-MLA53433798213_012023-F.webp',
        descripcion: 'La Smart TV LG 55" 4K UHD ofrece una experiencia de imagen envolvente gracias a su pantalla IPS 4K, procesador Quad Core, y tecnología HDR 10 Pro. Además, cuenta con sistema operativo WebOS 6.0, control por voz, y conectividad WiFi y Bluetooth.',
        color: 'negro',
        fabricante: 'lg',
        supcategoria:'audio&video'
      },
      {
        id: '11',
        nombre: 'Auriculares Inalámbricos Apple AirPods Pro',
        precio: 95000,
        categoria: 'auriculares',
        img1: 'https://http2.mlstatic.com/D_NQ_NP_2X_631240-MLA48697556561_122021-F.webp',
        img2: 'https://http2.mlstatic.com/D_NQ_NP_2X_735081-MLA48697557580_122021-F.webp',
        img3: 'https://http2.mlstatic.com/D_NQ_NP_2X_756335-MLA48697557581_122021-F.webp',
        descripcion: 'Los auriculares inalámbricos Apple AirPods Pro ofrecen una experiencia de sonido superior gracias a su tecnología de cancelación de ruido activa y su diseño ergonómico. Además, cuentan con resistencia al agua y al sudor, y compatibilidad con Siri.',
        color: 'blanco',
        fabricante: 'apple',
        supcategoria:'audio&video'
      },
      {
        id: '13',
        nombre: 'Tablet Apple iPad Pro 11"',
        precio: 330000,
        categoria: 'tablets',
        img1: 'https://http2.mlstatic.com/D_NQ_NP_2X_897121-MLA46974955652_082021-F.webp',
        img2: 'https://http2.mlstatic.com/D_NQ_NP_2X_796676-MLA46975166147_082021-F.webp',
        img3: 'https://http2.mlstatic.com/D_NQ_NP_2X_960413-MLA46975173046_082021-F.webp',
        descripcion: 'La tablet Apple iPad Pro 11" es una herramienta ideal para el trabajo y el entretenimiento. Cuenta con una pantalla Liquid Retina, procesador A12Z Bionic, 6GB de RAM, 128GB de almacenamiento, cámara trasera de 12MP y cámara frontal de 7MP, y una batería que dura todo el día.',
        color: 'gris',
        fabricante: 'apple',
        supcategoria:'celulares'
      },
      {
        id: '14',
        nombre: 'Consola Xbox Series X',
        precio: 195000,
        categoria: 'consolas',
        img1: 'https://http2.mlstatic.com/D_NQ_NP_2X_963862-MLA45041918050_032021-F.webp',
        img2: 'https://http2.mlstatic.com/D_NQ_NP_2X_664180-MLA45041918051_032021-F.webp',
        img3: 'https://http2.mlstatic.com/D_NQ_NP_2X_719524-MLA45041918498_032021-F.webp',
        descripcion: 'La consola Xbox Series X es la más potente de Microsoft, con procesador AMD Zen 2, 16GB de RAM, 1TB de almacenamiento SSD, y una tarjeta gráfica AMD Radeon RDNA 2 capaz de mostrar juegos en resolución 4K y 120 FPS. Además, cuenta con una amplia biblioteca de juegos exclusivos.',
        color: 'negro',
        fabricante: 'microsoft',
        supcategoria: 'computacion'
      },
      {
        id: '15',
        nombre: 'Altavoz inteligente Amazon Echo Dot',
        precio: 15000,
        categoria: 'parlantes',
        img1: 'https://http2.mlstatic.com/D_NQ_NP_2X_701798-MLA43059089824_082020-F.webp',
        img2: 'https://http2.mlstatic.com/D_NQ_NP_2X_917766-MLA43059544028_082020-F.webp',
        img3: 'https://http2.mlstatic.com/D_NQ_NP_2X_672274-MLA43059544027_082020-F.webp',
        descripcion: 'El altavoz inteligente Amazon Echo Dot es un dispositivo compacto y potente que te permitirá controlar tu hogar con la voz. Además, puedes reproducir música, hacer llamadas y enviar mensajes, obtener información del clima y noticias, y mucho más. Cuenta con Alexa, el asistente virtual de Amazon.',
        color: 'gris',
        fabricante: 'amazon',
        supcategoria:'audio&video'
      },
      {
        id: '16',
        nombre: 'Smartwatch Samsung Galaxy Watch 4',
        precio: 70000,
        categoria: 'smartwatches',
        img1: 'https://http2.mlstatic.com/D_NQ_NP_2X_925598-MLA47661251182_092021-F.webp',
        img2: 'https://http2.mlstatic.com/D_NQ_NP_2X_795081-MLA47661165296_092021-F.webp',
        img3: 'https://http2.mlstatic.com/D_NQ_NP_2X_615081-MLA47660938661_092021-F.webp',
        descripcion: 'El smartwatch Samsung Galaxy Watch 4 es un reloj inteligente con sistema operativo Wear OS de Google, diseñado para mantener el control de tu salud y tu actividad física. Cuenta con monitor de ritmo cardíaco, medidor de oxígeno en la sangre, seguimiento de sueño, GPS, y mucho más.',
        color: 'gris',
        fabricante: 'samsung',
        supcategoria:'accesorios'
      }

]

// funciones para exportar productos 
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
// filtra por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 1000)
    })
}
// filtra por supcategoria
export const getProductsBySupCategory = (supcategoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.supcategoria === supcategoryId))
        }, 1000)
    })
}
// filtra por fabricante
export const getProductsByFabricante = (fabricanteID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.fabricante === fabricanteID))
        }, 1000)
    })
}
// filtra por color
export const getProductsBycolor = (colorId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.color === colorId))
        }, 1000)
    })
}
// filtra por id
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}


