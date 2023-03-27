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
                            <Link><NavDropdown.Item ><Link to='/ECommerce-TechWave/category/celularesXiaomi'>Xiaomi</Link></NavDropdown.Item></Link>
                            <Link><NavDropdown.Item ><Link to='/ECommerce-TechWave/category/celularesSamsung'>Samsung</Link></NavDropdown.Item></Link>
                        </NavDropdown>
                        <ButtonNav label="Celulares" to='/ECommerce-TechWave/supcategory/celulares'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/laptops'>Latops</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/consolas'>Consolas</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/componentes'>Componentes</Link></NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Computacion" to='/ECommerce-TechWave/supcategory/computacion'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/auriculares'>Auriculares</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/parlantes'>Parlantes</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/monitores'>Monitores</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/televisores'>Televisores</Link></NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Audio & Video" to='/ECommerce-TechWave/supcategory/audio&video'/>
                    </li>
                    <li>
                        <NavDropdown className='Dropdown'>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/mouses'>Mouses</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/teclados'>Teclados</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/mouspads'>MousePads</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/smartwatches'>SmartWatches</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/conectividad'>Conectividad</Link></NavDropdown.Item>
                            <NavDropdown.Item href=""><Link to='/ECommerce-TechWave/category/sillas'>Sillas</Link></NavDropdown.Item>
                        </NavDropdown>
                        <ButtonNav label="Accesorios" to='/ECommerce-TechWave/supcategory/accesorios'/>
                    </li>
                  </ul>  
                </div>
            </div>
            <div className="fixedNav">
                <ButtonIcon icon={faHome} talla="lg" to={`/ECommerce-TechWave`}/>
                <Searcher/> 
                <Carrito/>
            </div>
        </nav>
    )
}

export default NavBar