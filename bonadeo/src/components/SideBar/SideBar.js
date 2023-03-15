import '../SideBar/SideBar.css'
import React, { useState } from 'react';
import RangoPrecio from '../RangoPrecio/RangoPrecio';

const SideBar = () => {
    return (
        <div className='SideBarContainer'>
            <div className='SideBarItem'>
                <h5>Categorias</h5>
                <div className='SideBarSubItems'>
                <p>Celulares</p>
                <p>Laptops</p>
                <p>Pc Gamer</p>
                <p>Componentes</p> 
                <p>Auriculares</p> 
                <p>Parlantes</p> 
                <p>Monitores</p> 
                <p>Televisores</p> 
                <p>Mouses</p> 
                <p>Teclados</p> 
                <p>Mousepads</p> 
                <p>Smartwatches</p> 
                <p>Conectividad</p> 
                </div>
            </div>
            <div className='SideBarItem'>
                <h5>Marca</h5>
                <div className='SideBarSubItems'>
                <p>Apple</p>
                <p>Motorola</p>
                <p>Samsung</p> 
                <p>Xiaomi</p> 
                <p>Logitech</p> 
                <p>Sony</p> 
                <p>Redragon</p> 
                <p>Acer</p> 
                <p>Lenovo</p> 
                </div>
            </div>
            <RangoPrecio info="Minimo"/>
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
        </div>
    )
}
export default SideBar