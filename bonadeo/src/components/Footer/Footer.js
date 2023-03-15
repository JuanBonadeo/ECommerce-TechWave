import '../Footer/Footer.css'
import ButtonNav from '../Buttons/ButtonsNav/ButtonsNav.js'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon.js'
import ButtonSocialM from '../Buttons/ButtonSocialM/ButtonSocialM'


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
                <ButtonSocialM icon="faFacebook"></ButtonSocialM>
                <ButtonSocialM icon="faInstagram"></ButtonSocialM>
                <ButtonSocialM icon="faTiktok"></ButtonSocialM>
                <ButtonSocialM icon="faWhatsapp"></ButtonSocialM>
                <ButtonSocialM icon="faLinkedin"></ButtonSocialM>
                
                
            </div>
            <h5>© TECHWAVE, Inc. 2023. We love our users!</h5>

            
        </footer>
    )
}
export default Footer