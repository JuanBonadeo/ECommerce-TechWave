import '../ProductsContainer/ProductsContainer.css'
import ProductCard from '../components/ProductCard/ProductCard'
import Pagination from '../components/Pagination/Pagination'
const ProductsContainer = () =>{
    return(
        <>
            <h2 className='h2Container'>Nuestros Productos</h2>
            <div className='ProductsContainer'>
                <ProductCard label='nombre del producto' precio='$150.999' img='https://smarts.com.ar/media/catalog/product/cache/5b8653d9435ca7b8c035b3971b386dd0/1/4/14729_1.jpg'/>
                <ProductCard label='nombre del producto' precio='$150.999' img='https://smarts.com.ar/media/catalog/product/cache/5b8653d9435ca7b8c035b3971b386dd0/8/2/82kb00f9ar-16gb---foto-1-con-caracteristicas.jpg'/>
                <ProductCard label='nombre del producto' precio='$150.999' img='https://smarts.com.ar/media/catalog/product/cache/5b8653d9435ca7b8c035b3971b386dd0/t/i/ticwatch-e3.gif'/>
                <ProductCard label='nombre del producto' precio='$150.999' img='https://smarts.com.ar/media/catalog/product/cache/5b8653d9435ca7b8c035b3971b386dd0/1/1/11384_1.jpg'/>
                <ProductCard label='nombre del producto' precio='$150.999' img='https://smarts.com.ar/media/catalog/product/cache/5b8653d9435ca7b8c035b3971b386dd0/1/1/11589_1.jpg'/>
                <ProductCard label='nombre del producto' precio='$150.999' img='https://smarts.com.ar/media/catalog/product/cache/5b8653d9435ca7b8c035b3971b386dd0/1/4/14816_1.jpg'/>
                <ProductCard label='nombre del producto' precio='$150.999' img='https://smarts.com.ar/media/catalog/product/cache/5b8653d9435ca7b8c035b3971b386dd0/l/i/listo1_6_1.jpg'/>
            </div>
            <Pagination/>
        </>

    )
}
export default ProductsContainer