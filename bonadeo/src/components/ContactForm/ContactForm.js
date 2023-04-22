import { useState } from "react"
import Button from "../Buttons/Buttons/Buttons"
import '../Checkout/Checkout.css'


const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, email, address
        }   
        onConfirm(userData)
    }

    return (
        <>
        <div className="Allscreen">
        <div className='LoginContainer'>
            <h2>Inicio de  Sesion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="login" placeholder="Ingrese Nombre"type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="login" placeholder="Example@gmail.com"type="text"></input>
                </div>
                <div>
                    <label>Telefono</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="login" placeholder="341 000 888 example"type="tel"></input>
                </div>
                <div>
                    <label>Direccion</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} className="login" placeholder="Address"type="text"></input>
                </div>
                <div>
                    <button>Generar Orden</button>
                </div>
                
            </form> 
            
        </div>
       </div>
        </>
        
    )
}

export default ContactForm