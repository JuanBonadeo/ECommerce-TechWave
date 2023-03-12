import '../MarcasCards/MarcasCards.css'
const MarcasCards = (props) =>{
    const {src} = props
    return(
            <div className="MarcasCards">
                <img className="imageCard" src={src}></img>
            </div>
    )
}
export default MarcasCards