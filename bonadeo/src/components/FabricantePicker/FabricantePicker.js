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
                        <Link to='/ECommerce-TechWave/fabricante/apple'><p>Apple</p></Link>
                        <Link to='/ECommerce-TechWave/fabricante/motorola'><p>Motorola</p></Link>
                        <Link to='/ECommerce-TechWave/fabricante/samsung'><p>Samsung</p></Link>
                        <Link to='/ECommerce-TechWave/fabricante/xiaomi'><p>Xiaomi</p> </Link>
                        <Link to='/ECommerce-TechWave/fabricante/logitech'><p>Logitech</p></Link>
                        <Link to='/ECommerce-TechWave/fabricante/sony'><p>Sony</p></Link>
                        <Link to='/ECommerce-TechWave/fabricante/redragon'><p>Redragon</p></Link>
                        <Link to='/ECommerce-TechWave/fabricante/acer'><p>Acer</p> </Link>
                        <Link to='/ECommerce-TechWave/fabricante/lenovo'><p>Lenovo</p></Link>
                        <Link to='/ECommerce-TechWave/fabricante/razer'><p>Razer</p></Link>
                    </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
    )
 }
 export default FabricantePicker