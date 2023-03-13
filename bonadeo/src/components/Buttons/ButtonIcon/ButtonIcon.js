import '../ButtonIcon/ButtonIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
const ButtonIcon = (props) =>{
    return(
        <div>
            <button className="buttonIcon">
            <FontAwesomeIcon icon={faHome} size="lg" />
            </button>
        </div>
    )
}
export default ButtonIcon