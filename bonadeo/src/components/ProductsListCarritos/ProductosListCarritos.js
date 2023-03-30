import ProductCard from "../ProductCard/ProductCard"
import '../ProductList/ProductList.css'
import { useCart } from "../../context/CartContext";
import ProductCardCarrito from "../ProductCardCarrito/ProductCardCarrito";



const ProductListCarritos = ( { products } ) => {
 
    return (
            <div className='ProductsContainer'>
                {products.map(product => <ProductCard key={product.id} {...product}/>)}
            </div>
    )
}

export default ProductListCarritos
