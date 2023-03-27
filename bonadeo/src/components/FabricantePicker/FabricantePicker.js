import '../FabricantePicker/FabricantePicker.css'
import Accordion from 'react-bootstrap/Accordion';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 const FabricantePicker = () => {
    return (
            <div className='SideBarItem'>
                <Accordion ActiveKey="0">
                    <Accordion.Toggle  eventKey="0" className='Toggle'>
                        <h5>Fabricante</h5>
                        <ButtonIcon icon={faArrowDown} talla="2xs"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <div className='SideBarSubItemsC'>
                        <Link to='/Fabricante/apple'><p>Apple</p></Link>
                        <Link to='/Fabricante/motorola'><p>Motorola</p></Link>
                        <Link to='/Fabricante/samsung'><p>Samsung</p></Link>
                        <Link to='/Fabricante/xiaomi'><p>Xiaomi</p> </Link>
                        <Link to='/Fabricante/logitech'><p>Logitech</p></Link>
                        <Link to='/Fabricante/sony'><p>Sony</p></Link>
                        <Link to='/Fabricante/redragon'><p>Redragon</p></Link>
                        <Link to='/Fabricante/acer'><p>Acer</p> </Link>
                        <Link to='/Fabricante/lenovo'><p>Lenovo</p></Link>
                        <Link to='/Fabricante/razer'><p>Razer</p></Link>
                    </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
    )
 }
 export default FabricantePicker