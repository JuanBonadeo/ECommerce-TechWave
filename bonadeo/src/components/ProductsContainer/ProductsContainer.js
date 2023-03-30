import './ProductsContainer.css'
import { useEffect, useState } from 'react'
import { getProducts,getProductsByCategory, getProductsByFabricante, getProductsBySupCategory, getProductsBycolor, getProductsByPrice } from "../../async.Mock"
import ProductList from '../ProductList/ProductList'
import Pagination from '../Pagination/Pagination'
import OrderList from '../OrderList/OrderList'
import { useParams } from 'react-router-dom'

const ProductsContainer = () =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    const {supcategoryId} = useParams()

    useEffect(() => {
        const asyncFunction = supcategoryId ? getProductsBySupCategory : getProducts

        asyncFunction(supcategoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [supcategoryId])

    const { FabricanteId } = useParams()

    useEffect(() => {
        const asyncFunction = FabricanteId ? getProductsByFabricante : getProducts

        asyncFunction(FabricanteId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [FabricanteId])

    const { colorId } = useParams()

    useEffect(() => {
        const asyncFunction = colorId ? getProductsBycolor : getProducts

        asyncFunction(colorId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [colorId])

    

    return(
        <div className='ContentContainer'>
            <div className='ContentHeader'>
                <div></div>
                <h2 className='h2Container'>Nuestros Productos</h2>
                <OrderList/>
                 
            </div>
            
                <ProductList products={products}/>
            <Pagination/>
        </div>

    )
}
export default ProductsContainer
