import './ProductsContainer.css'
import { useEffect, useState } from 'react'
import ProductList from '../ProductList/ProductList'
import Pagination from '../Pagination/Pagination'
import OrderList from '../OrderList/OrderList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../servicio/firebase/firebaseConfig'
import Loader from '../Loader/Loader'


const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [orderBy, setOrderBy] = useState([]);
    const [filters, setFilters] = useState({
      minPrice: '',
      maxPrice: '',
    });
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();
    const { supcategoryId } = useParams();
    const { colorId } = useParams();
    const { FabricanteId } = useParams();
    const { search } = useParams();
  
    const fetchProducts = (minPrice, maxPrice) => {
      setLoading(true)
      let productsRef = categoryId
        ? query(collection(db, 'products'), where('categoria', '==', categoryId))
        : collection(db, 'products');
  
      if (colorId) {
        productsRef = query(productsRef, where('color', '==', colorId));
      } else if (FabricanteId) {
        productsRef = query(productsRef, where('fabricante', '==', FabricanteId));
      } else if (supcategoryId) {
        productsRef = query(productsRef, where('supcategoria', '==', supcategoryId));
      }
      if (search) {
        productsRef = query(productsRef, where('nombre', '==', search));
      }
     
  
      getDocs(productsRef)
        .then((snapShot) => {
          const productosAdapted = snapShot.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setProducts(productosAdapted);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false)
      })
    };
  
    useEffect(() => {
      
      fetchProducts(filters.minPrice, filters.maxPrice);
    }, [categoryId, colorId, FabricanteId, supcategoryId, search, filters.minPrice, filters.maxPrice]);
  
    const handleOrderChange = (event) => {
      setOrderBy(event.target.value);
    };
  
    const handlePriceSubmit = (minPrice, maxPrice) => {
      setFilters({ ...filters, minPrice, maxPrice });
    };
    
    if(loading) {
        return (
            <div>
                <Loader/>
            </div>
        )
    }
    return(
        <div className='ContentContainer'>
            <div className='ContentHeader'>
                <div></div>
                <h2 className='h2Container'>Nuestros Productos</h2>
                <OrderList handleOrderChange={handleOrderChange}/>
            </div>
                <ProductList products={products} orderBy={orderBy} filters={filters} />
        </div>

    )
}
export default ProductsContainer

