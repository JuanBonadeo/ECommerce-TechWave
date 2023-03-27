import '../ColorPicker/ColorPicker.css'
import { Link } from 'react-router-dom'
 const ColorPicker = () => {
    return (
        <div className='SideBarItem'>
            <h5>Color</h5>
            <div className='colors'>
                <Link to='/color/rojo'><div className='red'></div></Link>
                <Link to='/color/azul'><div className='blue'></div></Link>
                <Link to='/color/gris'><div className='grey'></div></Link>
            </div>
            <div className='colors'>
                <Link to='/color/negro'><div className='black'></div></Link>
                <Link to='/color/blanco'><div className='white'></div></Link>
                <Link to='/color/verde'><div className='green'></div></Link>
            </div>
        </div>
    )
 }
 export default ColorPicker