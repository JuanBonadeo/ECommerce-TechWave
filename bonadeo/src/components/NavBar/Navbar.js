 import '../NavBar/NavBar.css'
import Button from '../Buttons/Buttons/Buttons'
import ButtonNav from '../Buttons/ButtonsNav/ButtonsNav'
import Searcher from '../Searcher/Searcher'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon'
import Carrito from '../Carrito/Carrito'
import DarkMode from '../DarkMode/DarkMode'
const NavBar = () => {
    return (
        <nav>
            <div className="nav DarkModeNav">
                <div className="upNav">
                    <DarkMode/>
                    <h1 className='DarkModeH1'>TECHWAVE</h1>
                    <Button  label="Iniciar Sesion"> </Button>
                </div>
                
                <div className="categorias">   
                  <ul>
                    <li><ButtonNav label="Celulares"></ButtonNav></li>
                    <li><ButtonNav label="Computacion"></ButtonNav></li>
                    <li><ButtonNav label="Audio & Video"></ButtonNav></li>
                    <li><ButtonNav label="Accesorios"></ButtonNav></li>
                  </ul>  
                </div>
            </div>
            <div className="fixedNav DarkModeNav">
                <ButtonIcon icon="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"/>
                <Searcher/> 
                <Carrito/>
            </div>
        </nav>
    )
}

export default NavBar