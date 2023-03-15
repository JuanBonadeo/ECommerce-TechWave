import '../ProductsContainer/ProductsContainer.css'
import ProductCard from '../components/ProductCard/ProductCard'
import Pagination from '../components/Pagination/Pagination'
const ProductsContainer = () =>{
 
      
    return(
        <div className='ContentContainer'>
            <h2 className='h2Container'>Nuestros Productos</h2>
            <div className='ProductsContainer'>
                <ProductCard label='Samsung Galaxy A13 128gb + 4gb Ram Pls Lcd Negro ' precio='$150.999' 
                img='https://http2.mlstatic.com/D_NQ_NP_2X_917545-MLA50401654103_062022-F.webp'
                img2='https://http2.mlstatic.com/D_NQ_NP_2X_955991-MLA50055778251_052022-F.webp'
                img3='https://http2.mlstatic.com/D_NQ_NP_2X_721491-MLA50401578341_062022-F.webp'
                />
                <ProductCard label='Auriculares inalámbricos Xiaomi Redmi AirDots 3 Pro' precio='$23.999' 
                img='https://http2.mlstatic.com/D_NQ_NP_2X_737268-MLA47844479339_102021-F.webp'
                img2='https://http2.mlstatic.com/D_NQ_NP_2X_973627-MLA47844614076_102021-F.webp'
                img3='https://http2.mlstatic.com/D_NQ_NP_2X_985829-MLA47844412522_102021-F.webp'
                />
                <ProductCard label='Monitor gamer Samsung led 24"' precio='$61.999' 
                img='https://http2.mlstatic.com/D_NQ_NP_2X_973781-MLA48131216539_112021-F.webp'
                img2='https://http2.mlstatic.com/D_NQ_NP_2X_905728-MLA48131292348_112021-F.webp'
                img3='https://http2.mlstatic.com/D_NQ_NP_2X_684148-MLA48131216540_112021-F.webp'
                />
                <ProductCard label='Auriculares inalámbricos Sony 1000X' precio='$123.999' 
                img='https://http2.mlstatic.com/D_NQ_NP_2X_794797-MLA50436072460_062022-F.webp'
                img2='https://http2.mlstatic.com/D_NQ_NP_2X_942427-MLA50436038781_062022-F.webp'
                img3='https://http2.mlstatic.com/D_NQ_NP_2X_702651-MLA50436164034_062022-F.webp'
                />
                <ProductCard label='Silla Herman Miller Ergonomica' precio='$143.999' 
                img='https://http2.mlstatic.com/D_NQ_NP_2X_644747-MLA42046097362_062020-F.webp'
                img2='https://http2.mlstatic.com/D_NQ_NP_2X_907412-MLA42045995433_062020-F.webp'
                img3='https://http2.mlstatic.com/D_NQ_NP_2X_924465-MLA42045995434_062020-F.webp'
                />
                
            </div>
            <Pagination/>
        </div>

    )
}
export default ProductsContainer