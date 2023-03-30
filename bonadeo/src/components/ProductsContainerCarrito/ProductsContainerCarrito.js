import './ProductsContainer.css'
import { useEffect, useState } from 'react'
import Button from '../Buttons/Buttons/Buttons'
import { getProducts,getProductsByCategory, getProductsByFabricante, getProductsBySupCategory, getProductsBycolor, getProductsByPrice } from "../../async.Mock"
import { useParams } from 'react-router-dom'
import ProductListCarritos from '../ProductsListCarritos/ProductosListCarritos'
import { useCart } from '../../context/CartContext'


const ProductsContainerCarrito = () =>{
    
    const { cart } = useCart();

    return(
        <div className='ContentContainer'>
            <div className='ContentHeader'>
                <h2 className='h2Container'>Productos en carrito</h2>
            </div>
                <ProductListCarritos products={cart}/>
                <Button label="Finalizar Compra" className="finalizarCompra" />
        </div>

    )
}
export default ProductsContainerCarrito
