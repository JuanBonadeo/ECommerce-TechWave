const products = [
    {
        id:'1',
        nombre:'Apple iPhone 11 128 GB 8gb RAM',
        precio: 315000,
        categoria: 'Celulares',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_796892-MLA46114829828_052021-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_781098-MLA46114829829_052021-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_815215-MLA46115014399_052021-F.webp',
        descripcion:"Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. ",
        color:"Blanco"
    },
    {
        id:'2',
        nombre:'Auriculares inalámbricos Xiaomi Redmi AirDots 3 Pro',
        precio: 23999,
        categoria: 'Auriculares',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_737268-MLA47844479339_102021-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_973627-MLA47844614076_102021-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_985829-MLA47844412522_102021-F.webp',
        descripcion:"Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Xiaomi AirDots 3 Pro no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
        color:"Gris"
    },
    {
        id:'3',
        nombre:'Monitor gamer Samsung led 24',
        precio: 61900,
        categoria: 'Monitores',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_973781-MLA48131216539_112021-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_905728-MLA48131292348_112021-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_684148-MLA48131216540_112021-F.webp',
        descripcion:"Una experiencia visual de calidad Este monitor de 24'' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
        color:"Negro"
    },
    {
        id:'4',
        nombre:'Auriculares inalámbricos Sony 1000X',
        precio: 143000,
        categoria: 'Auriculares',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_794797-MLA50436072460_062022-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_942427-MLA50436038781_062022-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_702651-MLA50436164034_062022-F.webp',
        descripcion:"El formato perfecto para vos El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
        color:"Negro"
    },
    {
        id:'5',
        nombre:'Silla Herman Miller Ergonomica',
        precio: 120000,
        categoria: 'Sillas',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_644747-MLA42046097362_062020-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_907412-MLA42045995433_062020-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_924465-MLA42045995434_062020-F.webp',
        descripcion:"Con esta silla Herman Miller, vas a tener la comodidad y el bienestar que necesitás a lo largo de tu jornada. Además, podés ubicarla en cualquier parte de tu casa u oficina ya que su diseño se adapta a múltiples entornos. ¡Dale a tus espacios un toque más moderno!",
        color:"Negro"
    },
    {
        id:'6',
        nombre:'Apple Watch Se 2da Gen 44mm',
        precio: 139999,
        categoria: 'Smartwatches',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_660726-MLA53669428863_022023-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_669327-MLA53669428864_022023-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_629948-MLA53669428866_022023-F.webp',
        descripcion:"Todos los elementos esenciales para ayudarte a controlar tu fitness, mantenerte conectado, rastrear tu salud y mantenerte seguro. Ahora hasta un 20 % más rápido, con características como detección de accidentes y métricas de entrenamiento mejoradas, es un mejor valor que nunca.        ",
        color:"Blanco"
    },
    {
        id:'7',
        nombre:'Samsung Galaxy A13 128gb + 4gb Ram Pls Lcd Negro ',
        precio: 190000,
        categoria: 'Celulares',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_917545-MLA50401654103_062022-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_955991-MLA50055778251_052022-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_721491-MLA50401578341_062022-F.webp',
        descripcion:"",
        color:"Negro"
    },
    {
        id:'8',
        nombre:'Notebook Lenovo IdeaPad i5 8GB RAM 512GB SSD',
        precio: 275000,
        categoria: 'Laptops',
        img1:'https://http2.mlstatic.com/D_NQ_NP_2X_638942-MLA49937651999_052022-F.webp',
        img2:'https://http2.mlstatic.com/D_NQ_NP_2X_773703-MLA49937685740_052022-F.webp',
        img3:'https://http2.mlstatic.com/D_NQ_NP_2X_680757-MLA49937685739_052022-F.webp',
        descripcion:"La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.",
        color:"Gris"
    }
    

]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}