import '../Buttons/Buttons.css'
const Button = (props) => {
    return(
        <button className="Button"><a>{props.label}</a></button>
    )
}
export default Button