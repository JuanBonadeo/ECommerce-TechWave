import '../ProductPage/ProductPage.css'
import Carousel from 'react-bootstrap/esm/Carousel'
import CarritoIcon from '../Carrito/CarritoIcon'
import { useState } from 'react'
import ColorPicker from '../ColorPicker/ColorPicker'

const ProductPage = ({id, nombre, precio, categoria, img1,img2,img3, descripcion, color}) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <div className='backgroundGey'>
        <div className='ProductPageContainer'>
            <div className='detail1'>
            <Carousel variant="dark"  activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
                <Carousel.Item interval={10000}>
                 <img className="ProdcutInfoImg" src={img1}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={10000}>
                 <img className="ProdcutInfoImg" src={img2}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={10000}>
                 <img className="ProdcutInfoImg" src={img3}></img>   
                </Carousel.Item>
            </Carousel>
            </div>
            <div className='detail2'>
                <h2 className='NombreProducto'>{nombre}</h2>
                <div className='detail3'>
                    <h3 className='PrecioProducto'>${precio}</h3>
                    <CarritoIcon talla='xl'/>
                </div>
                <ColorPicker/>
                <h3>Categoria: {categoria}</h3>
                <p>{descripcion}</p>
                
            </div>
        </div>
        </div>
    ) 
}
export default ProductPage