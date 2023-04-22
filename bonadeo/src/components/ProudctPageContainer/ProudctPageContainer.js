
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../servicio/firebase/firebaseConfig'

const ProductPageContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()


    useEffect(() => {
        const productRef = doc(db, 'products', productId)

        getDoc(productRef)
            .then(snapshot => {
                console.log(snapshot)
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
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