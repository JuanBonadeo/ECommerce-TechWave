import '../Carrito/Carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Carrito = (props) => {
    return(
        <>
        <button className="buttonIcon carrito">
            <p>0</p>
            <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        </button></>
    )
}
export default Carrito