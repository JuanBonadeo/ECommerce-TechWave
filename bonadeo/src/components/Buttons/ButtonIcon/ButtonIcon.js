import '../ButtonIcon/ButtonIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const ButtonIcon = (props) =>{
    return(
        <div >
            <Link to={props.to}><button className="buttonIcon">
            <img src={props.iconUrl} width={props.w} height={props.h}/>
            </button></Link>  
        </div>
    )
}
export default ButtonIcon