import '../SideBar/SideBar.css'
import React, { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import MarcaPicker from '../FabricantePicker/FabricantePicker';
import CategoriaPicker from '../CategoriaPicker/CategoriaPicker';

const SideBar = (prop) => {
    return (
        <div className='SideBarContainer'>
            <div className='SideBarItem'><h3>Filtrar Por:</h3></div>
            <CategoriaPicker/>
            <MarcaPicker/>
            
            <ColorPicker/>
        </div>
    )
}
export default SideBar