import '../Buttons/Buttons.css'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return(
        <Link to={props.to}><button className="Button" onClick={props.action}>{props.label}</button></Link>
    )
}
export default Button