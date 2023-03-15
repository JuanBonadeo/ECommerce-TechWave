import React, { useState } from 'react';
import '../ProductCard/ProductCard.css'
import CarritoIcon from '../Carrito/CarritoIcon'
import Button from '../Buttons/Buttons/Buttons'
import Carousel from 'react-bootstrap/esm/Carousel'


const ProductCard = (props) =>{
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <div className='ProductcardContainer'>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={100000000000000}>
                 <img className="ProdcutImg" src={props.img}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={1000000000000}>
                 <img className="ProdcutImg" src={props.img2}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={1000000000000}>
                 <img className="ProdcutImg" src={props.img3}></img>   
                </Carousel.Item>
            </Carousel>
            
            <h3 className='NombreProducto'>{props.label}</h3>
            <div className='Info1'>
                <h3 className='PrecioProducto'>{props.precio}</h3>
                <CarritoIcon/>
            </div>
            <div className='Info2'>
            <Button label="Más Info"/>
            </div>
        </div>
    )
}
export default ProductCard