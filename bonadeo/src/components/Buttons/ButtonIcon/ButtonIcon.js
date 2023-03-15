import '../ButtonIcon/ButtonIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ButtonIcon = (props) =>{
    return(
        <div>
            <button className="buttonIcon">
            <FontAwesomeIcon icon={props.icon} size={props.talla} />
            </button>
        </div>
    )
}
export default ButtonIcon