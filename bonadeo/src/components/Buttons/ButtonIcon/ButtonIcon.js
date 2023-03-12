import '../ButtonIcon/ButtonIcon.css'
const ButtonIcon = (props) =>{
    return(
        <div>
            <button className="buttonIcon">
                    <img className="icon"src={props.icon}/>
            </button>
        </div>
    )
}
export default ButtonIcon