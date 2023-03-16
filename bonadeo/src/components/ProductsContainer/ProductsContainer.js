import './ProductsContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from "../../async.Mock"
import ProductList from '../ProductList/ProductList'
import Pagination from '../Pagination/Pagination'

const ProductsContainer = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])

    return(
        <div className='ContentContainer'>
            <h2 className='h2Container'>Nuestros Productos</h2>
                <ProductList products={products}/>
            <Pagination/>
        </div>

    )
}
export default ProductsContainer
