
import './App.css';
import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar'
import HomeView from './components/HomeView/HomeView';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import ProductPageContainer from './components/ProudctPageContainer/ProudctPageContainer';
import { CartProvider } from './context/CartContext';
import ProductsContainerCarrito from './components/ProductsContainerCarrito/ProductsContainerCarrito';
import Checkout from './components/Checkout/Checkout';
import ContactForm from './components/ContactForm/ContactForm';






function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/ECommerce-TechWave" element={<HomeView/>}/>
          
            <Route path="/ECommerce-TechWave/ProductPage/:productId" element={<ProductPageContainer/>}/>   
            <Route path="/ECommerce-TechWave/category/:categoryId" element={<MainContainer/>}/>
              <Route path="category/:categoryId/ProductPage/:productId" element={<ProductPageContainer/>}/> 
            <Route path="/ECommerce-TechWave/supcategory/:supcategoryId" element={<MainContainer/>}/>
              <Route path="supcategory/:supcategoryId/ProductPage/:productId" element={<ProductPageContainer/>}/> 
            <Route path="/ECommerce-TechWave/fabricante/:FabricanteId" element={<MainContainer/>}/>
              <Route path="fabricante/:FabricanteId/ProductPage/:productId" element={<ProductPageContainer/>}/>   
            <Route path="/ECommerce-TechWave/color/:colorId" element={<MainContainer/>}/>
              <Route path="color/:colorId/ProductPage/:productId" element={<ProductPageContainer/>}/>   
            <Route path='/ECommerce-TechWave/carrito' element={<ProductsContainerCarrito/>}/>
            <Route path='/ECommerce-TechWave/buscar/:search' element={<MainContainer/>}/>
            <Route path='/ECommerce-TechWave/Checkout' element={<Checkout/>}/>
            <Route path='/ECommerce-TechWave/ContactForm' element={<ContactForm/>}/>
            <Route path='/ECommerce-TechWave/carrito' element={<h1>Estos son tus prductos en carrito</h1>}/>
        </Routes>
        <Footer/>
      </CartProvider>   
      </BrowserRouter>
      
    </div>
  );
}
export default App;
