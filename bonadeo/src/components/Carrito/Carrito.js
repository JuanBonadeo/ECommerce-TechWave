import '../Carrito/Carrito.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Carrito = (props) => {
    
    const { totalQuantity } = useCart()
    
    return(
        
        <>
        <Link  to='/ECommerce-TechWave/carrito'>
            <button className="buttonIcon carrito">
                <p className='carritoCounter'>{totalQuantity}</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/30px-Font_Awesome_5_solid_shopping-cart.svg.png'/>   
            </button>
        </Link></>
    )
}
export default Carrito