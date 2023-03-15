import '../ColorPicker/ColorPicker.css'
 const ColorPicker = () => {
    return (
        <div className='SideBarItem'>
            <h5>Color</h5>
            <div className='colors'>
                <div className='red'></div>
                <div className='blue'></div>
                <div className='grey'></div>
            </div>
            <div className='colors'>
                <div className='black'></div>
                <div className='white'></div>
                <div className='green'></div>
            </div>
        </div>
    )
 }
 export default ColorPicker