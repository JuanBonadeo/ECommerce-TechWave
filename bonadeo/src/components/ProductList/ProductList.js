import ProductCard from "../ProductCard/ProductCard"
import '../ProductList/ProductList.css'


const ProductList = ({ products,orderBy, filters }) => {
    let filteredProducts = [...products];
    let { minPrice, maxPrice } = filters;
   
    if (orderBy === "nombreAsc") {
        filteredProducts.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    } else if (orderBy === "nombreDesc") {
        filteredProducts.sort((a, b) => (a.nombre < b.nombre) ? 1 : -1);
    } else if (orderBy === "precioAsc") {
        filteredProducts.sort((a, b) => (a.precio > b.precio) ? 1 : -1);
    } else if (orderBy === "precioDesc") {
        filteredProducts.sort((a, b) => (a.precio < b.precio) ? 1 : -1);
    }
    if (minPrice && maxPrice) {
        filteredProducts = filteredProducts.filter(product => 
            product.precio >= minPrice && product.precio <= maxPrice);
    }

    return (
        <>
            <div className='ProductsContainer'>
                {filteredProducts.map(product => <ProductCard key={product.id} {...product}/>)}
            </div> 
        </>
    )
}

export default ProductList