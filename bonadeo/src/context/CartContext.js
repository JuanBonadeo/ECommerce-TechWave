import { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';

const CartContext = createContext('valor inicial')
 export const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        const { id, nombre, precio, quantity, img1, img2, img3 } = productToAdd
        if(!isInCart(id)) {
          const newProduct = { id, nombre, precio, quantity, img1, img2, img3 }
          setCart(prev => [...prev, newProduct])
          Toast.fire({
            icon: 'success',
            title: `${nombre} ah sido agregado al carrito`
          })
        } else {
          Toast.fire({
            icon: 'error',
            title: `${nombre} ya esta en el carrito`
          })
        }
      }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
        Toast.fire({
          icon: "info",
          title: `eliminado`
        })
    }
    const updateItemQuantity = (id, quantity) => {
        const cartUpdated = cart.map(prod => {
          if(prod.id === id) {
            const productUpdated = {
              ...prod,
              quantity: quantity
            }
            return productUpdated
          } else {
            return prod
          }
        })
        setCart(cartUpdated)
      }
    
    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.precio
        })

        return total
    }

    const total = getTotal()


    const clearCart = () => {
        setCart([])
        Swal.fire({
          title: 'Deseas de borrar el carrito?',
          showCancelButton: true,
          confirmButtonText: 'Limpiar',
        }).then((result) => {
          if (result.isConfirmed) {
            Toast.fire('',"carrito limpio", 'info')
          } else  {
            Toast.fire('','Changes are not saved', 'info')
          }
        })
    }



    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, isInCart, total, clearCart,updateItemQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}