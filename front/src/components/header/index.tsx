import React from 'react';
import './style.css';
import { ConnectKitButton } from "connectkit";
import Menu from '../menu';

const Header: React.FC = () =>{
    return (
        <header>
            <Menu/>
            <ConnectKitButton/>
        </header>
    );
}

export default Header;