import '../Buttons/Buttons.css'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return(
        <Link to={props.to}><button className="Button"><a>{props.label}</a></button></Link>
    )
}
export default Button