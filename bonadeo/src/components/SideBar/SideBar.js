import '../SideBar/SideBar.css'
import React, { useState } from 'react';
import RangoPrecio from '../RangoPrecio/RangoPrecio';
import ColorPicker from '../ColorPicker/ColorPicker';
import MarcaPicker from '../MarcaPicker/MarcaPicker';
import CategoriaPicker from '../CategoriaPicker/CategoriaPicker';

const SideBar = () => {
    return (
        <div className='SideBarContainer'>
            <CategoriaPicker/>
            <MarcaPicker/>
            <RangoPrecio/>
            <ColorPicker/>
        </div>
    )
}
export default SideBar