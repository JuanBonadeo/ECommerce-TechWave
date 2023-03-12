import '../Hero2/Hero2.css'
import MarcasCards from '../MarcasCards/MarcasCards'
const Hero2 = () =>{
    return(
        <div className="Hero2Container">
            <h2>Algunas de nuestras marcas</h2>
            <div className="MarcasCardsContainer">
                <MarcasCards src="https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png"/>
                <MarcasCards src="https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-Logo-2014.png"/>
                <MarcasCards src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Acer_Logo.svg"/>
                <MarcasCards src="https://cdn.worldvectorlogo.com/logos/redragon.svg"/>
            </div>
            
        </div>
    )
}
export default Hero2