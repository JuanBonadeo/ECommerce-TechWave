import '../Buttons/Buttons.css'
const Button = (props) => {
    return(
        <button className="button DarkModeB"><a>{props.label}</a></button>
    )
}
export default Button