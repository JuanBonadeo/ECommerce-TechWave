import '../RangoPrecio/RangoPrecio.css'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



function RangoPrecio(prop) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Mínimo: ${minPrice}, Máximo: ${maxPrice}`);
    // aquí puedes hacer lo que necesites con los valores capturados
    
    
  };

  return (
    <div className='SideBarItem'> 
      <h5>Rango de precio</h5>
      <form className='Rango' onSubmit={handleSubmit}>
        <input placeholder="Mínimo" value={minPrice}  onChange={handleMinPriceChange}></input>
        -
        <input placeholder="Maximo" value={maxPrice} onChange={handleMaxPriceChange}></input>
        <button  talla="md" type="sumbit"><FontAwesomeIcon icon={faArrowRight} size="l"/></button>
      </form>
      
    </div>
  );
}

export default RangoPrecio;