import React from 'react';
import './style.css';
import TarjetaExportador from "./../../components/tarjetaExportador";
import Buscador from "./../../components/buscador";

const Exportadores: React.FC = () =>{
    return <section>
        <Buscador/>
        <div className='tarjetas-contenedor'>
            <TarjetaExportador/>
            <TarjetaExportador/>
            <TarjetaExportador/>
            <TarjetaExportador/>
            <TarjetaExportador/>
            <TarjetaExportador/>
            <TarjetaExportador/>
        </div>
    </section>;
}

export default Exportadores;