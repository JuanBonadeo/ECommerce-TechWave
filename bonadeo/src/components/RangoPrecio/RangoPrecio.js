import '../RangoPrecio/RangoPrecio.css'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';



function RangoPrecio(prop) {
 

  return (
    <div className='SideBarItem'> 
      <h5>Rango de precio</h5>
      <div className='Rango'>
        <input placeholder="Mínimo" value="" ></input>
        -
        <input placeholder="Maximo" value="" ></input>
        <ButtonIcon icon={faArrowAltCircleRight}/>
      </div>
      
    </div>
  );
}

export default RangoPrecio;