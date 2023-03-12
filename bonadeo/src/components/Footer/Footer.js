import '../Footer/Footer.css'
import ButtonNav from '../Buttons/ButtonsNav/ButtonsNav.js'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon.js'
const Footer = () => {
    return(
        <footer>
            <div className='footer1'>
                <div>
                    <ButtonNav  className="dark" label="Atencion al Cliente"/>
                    <ButtonNav  className="dark"label="Preguntas Frecuentes"/>
                </div>
                <div>
                    <h2>TECHWAVE</h2>
                </div>
                <div>
                    <ButtonNav className="dark" label="Terminos & Condiciones"/>
                    <ButtonNav className="dark" label="Quienes Somos"/>
                </div>
            </div>

            
            <div className='footer2'>
                <ButtonIcon icon="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"/>
                <ButtonIcon icon="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"/>
                <ButtonIcon icon="https://cdn-icons-png.flaticon.com/512/3621/3621450.png"/>
                <ButtonIcon icon="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"/>
                <ButtonIcon icon="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"/>
            </div>
            <h5>© TECHWAVE, Inc. 2023. We love our users!</h5>

            
        </footer>
    )
}
export default Footer