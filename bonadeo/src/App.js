
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/Navbar'
import Hero1 from './components/Hero1/Hero1';
import Hero2 from './components/Hero2/Hero2';
import MainContainer from './components/MainContainer/MainContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero1/>
      <Hero2/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}



            

export default App;
