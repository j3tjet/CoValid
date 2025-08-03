import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Menu: React.FC = () =>{
    return (
        <div className='menu-enlaces'>
            <ul>
                <li><Link to="/">Inicio</Link></li>
            </ul>
        </div>
    );
}

export default Menu;