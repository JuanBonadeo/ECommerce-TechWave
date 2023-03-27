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
                            <NavDropdown.Item ><Link to='/category/celularesApple'>Apple</Link></NavDropdown.Item>
                            <Link><NavDropdown.Item ><Link to='/category/celularesXiaomi'>Xiaomi</Link></NavDropdown.Item></Link>
                            <Link><NavDropdown.Item ><Link to='/category/celularesSamsung'>Samsung</Link></NavDropdown.Item></Link>
                        </NavDropdown>
                        <ButtonNav label="Celulares" to='/supcategory/celulares'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href=""><Link to='/category/laptops'>Latops</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/consolas'>Consolas</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/componentes'>Componentes</Link></NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Computacion" to='/supcategory/computacion'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href=""><Link to='/category/auriculares'>Auriculares</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/parlantes'>Parlantes</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/monitores'>Monitores</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/televisores'>Televisores</Link></NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Audio & Video" to='/supcategory/audio&video'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href=""><Link to='/category/mouses'>Mouses</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/teclados'>Teclados</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/mouspads'>MousePads</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/smartwatches'>SmartWatches</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/conectividad'>Conectividad</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/category/sillas'>Sillas</Link></NavDropdown.Item>
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