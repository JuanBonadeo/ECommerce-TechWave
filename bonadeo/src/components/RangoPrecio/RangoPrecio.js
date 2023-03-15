import '../RangoPrecio/RangoPrecio.css'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';



function RangoPrecio(prop) {
 

  return (
    <div className='SideBarItem'> 
      <h5>Rango de precio</h5>
      <div className='Rango'>
        <input placeholder="Mínimo" value="" ></input>
        -
        <input placeholder="Maximo" value="" ></input>
        <ButtonIcon icon={faArrowRight} talla="md"/>
      </div>
      
    </div>
  );
}

export default RangoPrecio;