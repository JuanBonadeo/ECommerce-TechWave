import ProductCard from "../ProductCard/ProductCard"
import '../ProductList/ProductList.css'

const ProductList = ({ products }) => {
    return (
            <div className='ProductsContainer'>
                {products.map(product => <ProductCard key={product.id} {...product}/>)}
            </div>
    )
}

export default ProductList