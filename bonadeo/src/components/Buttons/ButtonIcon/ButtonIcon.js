import '../ButtonIcon/ButtonIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const ButtonIcon = (props) =>{
    return(
        <div >
            
            <Link to={props.to}><button className="buttonIcon">
            <FontAwesomeIcon icon={props.icon} size={props.talla}/>
            </button></Link>
        </div>
    )
}
export default ButtonIcon