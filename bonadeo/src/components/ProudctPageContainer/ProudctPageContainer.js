
import { useState, useEffect } from 'react'
import { getProductById } from '../../async.Mock'
import { useParams } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'

const ProductPageContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()


    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })
    }, [productId])


    return(
        <div  >
            <ProductPage  {...product} />
        </div>
    )
}

export default ProductPageContainer