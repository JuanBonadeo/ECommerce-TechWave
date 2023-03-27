import '../Carrito/Carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CarritoIcon = (props) => {
    return(
        <button className="buttonIcon carrito carritoIcon">
            <FontAwesomeIcon icon={faCartPlus} size={props.talla}/>
        </button>
    )
}
export default CarritoIcon