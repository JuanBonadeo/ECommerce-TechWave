import '../OrderList/OrderList.css'

const OrderList = ({ handleOrderChange }) => {
    return (
        <div className='SelectOrderContainer'>
        <select onChange={handleOrderChange} id="orderBy" name='orderBy' className="form-select form-select-sm nav-link active" aria-label=".form-select-sm example">
              <option defaultValue="">Ordenar Por:</option>
              <option value="nombreAsc" aria-label="Close">Nombre A-Z</option>
              <option value="nombreDesc" aria-label="Close">Nombre Z-A</option>
              <option value="precioAsc" aria-label="Close">Menor Precio</option>
              <option value="precioDesc" aria-label="Close">Mayor Precio</option>
        </select>
    </div>
    );
}
export default OrderList



