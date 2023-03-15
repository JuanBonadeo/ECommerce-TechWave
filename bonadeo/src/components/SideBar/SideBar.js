import '../SideBar/SideBar.css'
import React, { useState } from 'react';
import RangoPrecio from '../RangoPrecio/RangoPrecio';
import ColorPicker from '../ColorPicker/ColorPicker';
import MarcaPicker from '../FabricantePicker/FabricantePicker';
import CategoriaPicker from '../CategoriaPicker/CategoriaPicker';

const SideBar = () => {
    return (
        <div className='SideBarContainer'>
            <div className='SideBarItem'><h3>Filtrar Por:</h3></div>
            <CategoriaPicker/>
            <MarcaPicker/>
            <RangoPrecio/>
            <ColorPicker/>
        </div>
    )
}
export default SideBar