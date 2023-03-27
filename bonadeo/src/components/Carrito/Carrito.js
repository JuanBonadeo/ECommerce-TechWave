import '../Carrito/Carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Carrito = (props) => {
    return(
        <>
        <Link  to='/carrito'>
            <button className="buttonIcon carrito">
                <p className='carritoCounter'>0</p>
                <FontAwesomeIcon icon={faCartShopping} size="lg"/>   
            </button>
        </Link></>
    )
}
export default Carrito