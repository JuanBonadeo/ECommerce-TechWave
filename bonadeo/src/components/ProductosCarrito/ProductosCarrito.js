import Button from "../Buttons/Buttons/Buttons";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductosCarrito/ProductosCarrito.css";

const ProductosCarrito = () => {
  return (
    <div className="carritoProductsContainer">
      <h2>Productos en carrito:</h2>
      <div className="productsContainer">
        <ProductCard />
        <ProductCard />
      </div>
      <Button label="Finalizar Compra" className="finalizarCompra" />
    </div>
  );
};

export default ProductosCarrito;
