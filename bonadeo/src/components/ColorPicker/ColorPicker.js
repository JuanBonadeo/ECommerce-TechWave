import '../ColorPicker/ColorPicker.css'
import { Link } from 'react-router-dom'
 const ColorPicker = () => {
    return (
        <div className='SideBarItem'>
            <h5>Color</h5>
            <div className='colors'>
                <Link to='/ECommerce-TechWave/color/rojo'><div className='red'></div></Link>
                <Link to='/ECommerce-TechWave/color/azul'><div className='blue'></div></Link>
                <Link to='/ECommerce-TechWave/color/gris'><div className='grey'></div></Link>
            </div>
            <div className='colors'>
                <Link to='/ECommerce-TechWave/color/negro'><div className='black'></div></Link>
                <Link to='/ECommerce-TechWave/color/blanco'><div className='white'></div></Link>
                <Link to='/ECommerce-TechWave/color/verde'><div className='green'></div></Link>
            </div>
        </div>
    )
 }
 export default ColorPicker