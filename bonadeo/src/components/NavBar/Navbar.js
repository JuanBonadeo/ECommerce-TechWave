 import '../NavBar/NavBar.css'
import Button from '../Buttons/Buttons/Buttons'
import ButtonNav from '../Buttons/ButtonsNav/ButtonsNav'
import Searcher from '../Searcher/Searcher'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon'
import Carrito from '../Carrito/Carrito'
import DarkMode from '../DarkMode/DarkMode'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <nav>
            <div className="Nav">
                <div className="upNav">
                    <DarkMode/>
                    <h1 className=''>TECHWAVE</h1>
                    <Button  label="Iniciar Sesion"> </Button>
                </div>
                
                <div className="categorias">   
                  <ul>
                    <li >
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item ><Link to='/category/parlantes'>Apple</Link></NavDropdown.Item>
                            <Link><NavDropdown.Item >Xiaomi</NavDropdown.Item></Link>
                            <Link><NavDropdown.Item >Samsung</NavDropdown.Item></Link>
                        </NavDropdown>
                        <ButtonNav label="Celulares" to='/supcategory/celulares'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href="">Latops</NavDropdown.Item>
                            <NavDropdown.Item href="">PC Gamers</NavDropdown.Item>
                            <NavDropdown.Item href="">Componentes</NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Computacion" to='/supcategory/computacion'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href="">Auriculares</NavDropdown.Item>
                            <NavDropdown.Item href="">Parlantes</NavDropdown.Item>
                            <NavDropdown.Item href="">Monitores</NavDropdown.Item>
                            <NavDropdown.Item href="">Televisores</NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Audio & Video" to='/supcategory/audio&video'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href="">Mouses</NavDropdown.Item>
                            <NavDropdown.Item href="">Teclados</NavDropdown.Item>
                            <NavDropdown.Item href="">MousePad</NavDropdown.Item>
                            <NavDropdown.Item href="">SmartWatches</NavDropdown.Item>
                            <NavDropdown.Item href="">Conectividad</NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Accesorios" to='/supcategory/accesorios'/>
                    </li>
                  </ul>  
                </div>
            </div>
            <div className="fixedNav">
                <ButtonIcon icon={faHome} talla="lg" to={`/`}/>
                <Searcher/> 
                <Carrito/>
            </div>
        </nav>
    )
}

export default NavBar