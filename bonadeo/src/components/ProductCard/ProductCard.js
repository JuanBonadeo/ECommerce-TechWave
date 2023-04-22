import React, { useContext, useState } from 'react';
import '../ProductCard/ProductCard.css'
import CarritoIcon from '../Carrito/CarritoIcon'
import Button from '../Buttons/Buttons/Buttons'
import Carousel from 'react-bootstrap/esm/Carousel'
import { useCart } from '../../context/CartContext';
import Swal from 'sweetalert2';



const ProductCard = ({nombre, img1, img2, img3, precio, id}) =>{
     const { addItem, quantity } = useCart()
     const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, precio, quantity,img1,img2,img3
        }
        addItem(productToAdd)
        
    } 

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <div className='ProductcardContainer'>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={100000000000000}>
                 <img className="ProdcutImg" src={img1}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={1000000000000}>
                 <img className="ProdcutImg" src={img2}></img>   
                </Carousel.Item>
                <Carousel.Item  interval={1000000000000}>
                 <img className="ProdcutImg" src={img3}></img>   
                </Carousel.Item>
            </Carousel>
            <h3 className='NombreProducto'>{nombre}</h3>
            <div className='Info1'>
                <h3 className='PrecioProducto'>${precio}</h3>
                <CarritoIcon onAdd={handleOnAdd}/>
            </div>
            <div className='Info2'>
             <Button  to={`/ECommerce-TechWave/ProductPage/${id}`} label="Más Info"/>
            </div>
        </div>
    )
}
export default ProductCard