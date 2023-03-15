import '../FabricantePicker/FabricantePicker.css'
import Accordion from 'react-bootstrap/Accordion';
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
 const FabricantePicker = () => {
    return (
            <div className='SideBarItem'>
                <Accordion ActiveKey="0">
                    <Accordion.Toggle  eventKey="0" className='Toggle'>
                        <h5>Fabricante</h5>
                        <ButtonIcon icon={faArrowDown} talla="2xs"/>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <div className='SideBarSubItems'>
                        <div><input type="checkbox"></input><p>Apple</p></div>
                        <div><input type="checkbox"></input><p>Motorola</p></div>
                        <div><input type="checkbox"></input><p>Samsung</p></div>
                        <div><input type="checkbox"></input><p>Xiaomi</p> </div>
                        <div><input type="checkbox"></input><p>Logitech</p></div>
                        <div><input type="checkbox"></input><p>Sony</p></div>
                        <div><input type="checkbox"></input><p>Redragon</p></div>
                        <div><input type="checkbox"></input><p>Acer</p> </div>
                        <div><input type="checkbox"></input><p>Lenovo</p></div>
                    </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
    )
 }
 export default FabricantePicker