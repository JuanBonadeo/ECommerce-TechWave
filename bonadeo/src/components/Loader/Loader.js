import Spinner from 'react-bootstrap/Spinner';
import '../Loader/Loader.css'

const Loader = () =>{
    return (
        <>
         <Spinner className='loader' animation="border" variant="primary" size='xl'/>
        <h2>Cargando...</h2>
        </>
       
    )
}
export default Loader