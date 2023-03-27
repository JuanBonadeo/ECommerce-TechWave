
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar'
import HomeView from './components/HomeView/HomeView';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import ProductPageContainer from './components/ProudctPageContainer/ProudctPageContainer';
import Carrito from './components/Carrito/Carrito';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
            <Route path="/ProductPage/:productId" element={<ProductPageContainer/>}/>   
          <Route path="/category/:categoryId" element={<MainContainer/>}/>
            <Route path="/category/:categoryId/ProductPage/:productId" element={<ProductPageContainer/>}/> 
          <Route path="/supcategory/:supcategoryId" element={<MainContainer/>}/>
            <Route path="/supcategory/:supcategoryId/ProductPage/:productId" element={<ProductPageContainer/>}/> 
          <Route path="/fabricante/:FabricanteId" element={<MainContainer/>}/>
            <Route path="/fabricante/:FabricanteId/ProductPage/:productId" element={<ProductPageContainer/>}/>   
          <Route path="/color/:colorId" element={<MainContainer/>}/>
            <Route path="/color/:colorId/ProductPage/:productId" element={<ProductPageContainer/>}/>   
          

        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}



            

export default App;
