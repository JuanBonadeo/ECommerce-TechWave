import '../ButtonSocialM/ButtonSocialM.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


const ButtonSocialM = (props) =>{
    return(
        <div>
            <button className="buttonIcon">
            <FontAwesomeIcon icon={fab[props.icon]} size="xl" />
            </button>
        </div>
    )
}
export default ButtonSocialM