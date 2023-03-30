import '../Carrito/Carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

 const CarritoIcon = ({stock = 0, initial = 1, onAdd},props) => {
        const [quantity, setQuantity] = useState(initial)
    
 
    return(
        <button className="buttonIcon carrito carritoIcon" onClick={() => onAdd(quantity)}>
            <FontAwesomeIcon icon={faCartPlus} size={props.talla}/>
        </button>
    )
}
export default CarritoIcon