import '../Carrito/Carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Carrito = (props) => {
    
    const { totalQuantity } = useCart()
    
    return(
        
        <>
        <Link  to='/ECommerce-TechWave/carrito'>
            <button className="buttonIcon carrito">
                <p className='carritoCounter'>{totalQuantity}</p>
                <FontAwesomeIcon icon={faCartShopping} size="lg"/>   
            </button>
        </Link></>
    )
}
export default Carrito