import '../CategoriaPicker/CategoriaPicker.css'
import Accordion from 'react-bootstrap/Accordion';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

 const CategoriaPicker = () => {
    return (
            <div className='SideBarItem'>
                <Accordion ActiveKey="1">
                    <Accordion.Toggle  eventKey="1" className='Toggle'>
                     <h5>Categorias</h5>
                     <ButtonIcon icon={faArrowDown} talla="2xs"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <div className='SideBarSubItems SideBarSubItemsC'>
                            <Link to='/ECommerce-TechWave/supcategory/celulares'><p>Celulares</p></Link>
                            <Link to='/ECommerce-TechWave/category/laptops'><p>Laptops</p></Link>
                            <Link to='/ECommerce-TechWave/category/consolas'><p>Consolas</p></Link>
                            <Link to='/ECommerce-TechWave/category/componentes'><p>Componentes</p> </Link>
                            <Link to='/ECommerce-TechWave/category/auriculares'><p>Auriculares</p> </Link>
                            <Link to='/ECommerce-TechWave/category/parlantes'><p>Parlantes</p> </Link>
                            <Link to='/ECommerce-TechWave/category/monitores'><p>Monitores</p> </Link>
                            <Link to='/ECommerce-TechWave/category/televisores'><p>Televisores</p> </Link>
                            <Link to='/ECommerce-TechWave/category/mouses'><p>Mouses</p> </Link>
                            <Link to='/ECommerce-TechWave/category/teclados'><p>Teclados</p> </Link>
                            <Link to='/ECommerce-TechWave/category/mousepads'><p>Mousepads</p> </Link>
                            <Link to='/ECommerce-TechWave/category/smartwatches'><p>Smartwatches</p> </Link>
                            <Link to='/ECommerce-TechWave/category/conectividad'><p>Conectividad</p> </Link>
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
            
    )
 }
 export default CategoriaPicker