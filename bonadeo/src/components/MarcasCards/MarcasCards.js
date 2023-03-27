import '../MarcasCards/MarcasCards.css'
import { Link } from 'react-router-dom'
const MarcasCards = (props) =>{
    const {src} = props
    return(
            <Link className="MarcasCards" to={props.to}>
                <img className="imageCard" src={src}></img>
            </Link>
    )
}
export default MarcasCards