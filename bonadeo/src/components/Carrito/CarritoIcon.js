import '../Carrito/Carrito.css'
import { useState } from 'react'

 const CarritoIcon = ({stock = 0, initial = 1, onAdd},props) => {
        const [quantity, setQuantity] = useState(initial)
    
 
    return(
        <button className="buttonIcon carrito carritoIcon" onClick={() => onAdd(quantity)}>
            <img className='imgcart' src="https://icons.veryicon.com/png/o/miscellaneous/small-icons-1/ic-add-to-cart.png"></img>
        </button>
    )
}
export default CarritoIcon