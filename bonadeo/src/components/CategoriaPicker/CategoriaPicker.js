import '../CategoriaPicker/CategoriaPicker.css'
import Accordion from 'react-bootstrap/Accordion';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
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
                            <p>Celulares</p>
                            <p>Laptops</p>
                            <p>Pc Gamer</p>
                            <p>Componentes</p> 
                            <p>Auriculares</p> 
                            <p>Parlantes</p> 
                            <p>Monitores</p> 
                            <p>Televisores</p> 
                            <p>Mouses</p> 
                            <p>Teclados</p> 
                            <p>Mousepads</p> 
                            <p>Smartwatches</p> 
                            <p>Conectividad</p> 
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
            
    )
 }
 export default CategoriaPicker