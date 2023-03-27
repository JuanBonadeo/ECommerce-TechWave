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
                            <Link to='/supcategory/celulares'><p>Celulares</p></Link>
                            <Link to='/category/laptops'><p>Laptops</p></Link>
                            <Link to='/category/pcgamer'><p>Pc Gamer</p></Link>
                            <Link to='/category/componentes'><p>Componentes</p> </Link>
                            <Link to='/category/auriculares'><p>Auriculares</p> </Link>
                            <Link to='/category/parlantes'><p>Parlantes</p> </Link>
                            <Link to='/category/monitores'><p>Monitores</p> </Link>
                            <Link to='/category/televisores'><p>Televisores</p> </Link>
                            <Link to='/category/mouses'><p>Mouses</p> </Link>
                            <Link to='/category/teclados'><p>Teclados</p> </Link>
                            <Link to='/category/mousepads'><p>Mousepads</p> </Link>
                            <Link to='/category/smartwatches'><p>Smartwatches</p> </Link>
                            <Link to='/category/conectividad'><p>Conectividad</p> </Link>
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
            
    )
 }
 export default CategoriaPicker