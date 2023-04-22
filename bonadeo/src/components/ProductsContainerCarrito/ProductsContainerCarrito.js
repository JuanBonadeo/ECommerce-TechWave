import './ProductsContainerCarrito.css'
import { useEffect, useState } from 'react'
import Button from '../Buttons/Buttons/Buttons'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Toast } from '../../context/CartContext'
import Swal from 'sweetalert2'



const ProductsContainerCarrito = () =>{
    const navigateTo = useNavigate()

    const FinalizarC0mpra = () =>{
    
        Swal.fire({
          title: 'Desea continuar?',
          showDenyButton: true,
          confirmButtonText: 'Terminar Compra',
          denyButtonText: `Seguir Buscando`,
        }).then((result) => {
          if (result.isConfirmed) {
            navigateTo('/ECommerce-TechWave/Checkout')
          } else  {
            Toast.fire('','Puedes seguis tu buscando', 'info')
          }
        })
        
    }
    
    const { cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart } = useCart();

    return(
        <div className='ContentContainerCarrito'>
            
                <h2 className='h2Container'>Productos en carrito</h2>
            <div>
                {
                 cart.map(prod => {
                        return (       
                            <div className='cartContainer' key={prod.id}>
                                <div>
                                     <img className="ProdcutImg carritoImage" src={prod.img1}></img>   
                                </div>
                                <div className='Info1 Info2'>
                                    <h3 className='NombreProducto'>{prod.nombre}</h3>
                                    <h3 className='PrecioProducto'>${prod.precio}</h3>
                                    <Button  to={`/ECommerce-TechWave/ProductPage/${prod.id}`}label="Más Info"/>
                                    <button onClick={() => removeItem(prod.id)}>X</button>
                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                <div className="center"><Button action={() => clearCart()} label="Limpiar Carrito"/></div>
                <h1>Total de la compra ${total}</h1>
                <div className="center"><Button action={() => FinalizarC0mpra()}label="Finalizar Compra"/></div>
                
        </div>

    )
}
export default ProductsContainerCarrito
