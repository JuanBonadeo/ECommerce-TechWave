import '../ProductCard/ProductCard.css'
import CarritoIcon from '../Carrito/CarritoIcon'
import Button from '../Buttons/Buttons/Buttons'


const ProductCard = (props) =>{
    return(
        <div className='ProductcardContainer'>
            <img className="ProdcutImg" src={props.img}></img>
            <h3 className='NombreProducto'>{props.label}</h3>
            <div className='Info1'>
                <h3 className='PrecioProducto'>{props.precio}</h3>
                <CarritoIcon/>
            </div>
            <div className='Info2'>
            <Button label="Más Info"/>
            </div>
        </div>
    )
}
export default ProductCard