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
                <ButtonIcon iconUrl="https://cdn-icons-png.flaticon.com/512/4701/4701482.png" h="30" w="30"/>
                <ButtonIcon iconUrl="https://cdn-icons-png.flaticon.com/512/87/87390.png" h="30" w="30"/>
                <ButtonIcon iconUrl="https://cdn-icons-png.flaticon.com/512/3938/3938074.png" h="30" w="30"/>
                <ButtonIcon iconUrl="https://cdn-icons-png.flaticon.com/512/6422/6422213.png" h="30" w="30"/>
                <ButtonIcon iconUrl="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" h="30" w="30"/> 
            </div>
            <h5>© TECHWAVE, Inc. 2023. We love our users!</h5>

            
        </footer>
    )
}
export default Footer