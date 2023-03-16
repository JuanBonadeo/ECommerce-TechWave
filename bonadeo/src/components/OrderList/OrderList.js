import '../OrderList/OrderList.css'
const OrderList = () => {
    return (
        <div className='SelectOrderContainer'>
        <select id="selectOrden" class="form-select form-select-sm nav-link active" aria-label=".form-select-sm example">
              <option selected>Ordenar Por:</option>
              <option value="1" aria-label="Close">Menor precio</option>
              <option value="2" aria-label="Close">Mayor precio</option>
            </select>
        </div>
    )
}
export default OrderList