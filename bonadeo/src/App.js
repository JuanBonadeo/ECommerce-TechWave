
import './App.css';
import NavBar from './components/NavBar/Navbar'
import Hero1 from './components/Hero1/Hero1';
import Hero2 from './components/Hero2/Hero2';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero1/>
      <Hero2/>
      <ProductsContainer/>
      <Footer/>
    </div>
  );
}



            

export default App;
