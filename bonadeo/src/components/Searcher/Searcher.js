import '../Searcher/Searcher.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Searcher() {
  const [searchValue, setSearchValue] = useState("");
  const navigateTo = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigateTo(`/ECommerce-TechWave/buscar/${searchValue}`);
    
  };

  return (
    <>
        <form onSubmit={handleSearchSubmit}>
            <input className="search__input" placeholder="Buscar producto"type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
        </form>
    </>
  )
}

export default Searcher
