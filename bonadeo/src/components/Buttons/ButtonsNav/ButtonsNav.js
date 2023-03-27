import '../ButtonsNav/ButtonsNav.css'
import { Link } from 'react-router-dom'
const ButtonNav = (props) => {
    return(
        <Link to={props.to} className="buttonNav">{props.label}</Link>
    )
}
export default ButtonNav