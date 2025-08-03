import React from 'react';
import './style.css';
import TarjetaExportador from "./../../components/tarjetaExportador";
import Buscador from "./../../components/buscador";

const Exportadores: React.FC = () =>{
    return <section>
        <Buscador/>
        <div className='tarjetas-contenedor'>
            <TarjetaExportador
                nombre="Empresa Exportadora S.A."
                pais="Bolivia"
                rubro="Alimentos"
                registro="123456789"
                otro="Certificado ISO"
            />
            <TarjetaExportador
                nombre="Empresa Exportadora S.A."
                pais="Bolivia"
                rubro="Alimentos"
                registro="123456789"
                otro="Certificado ISO"
            />
            <TarjetaExportador
                nombre="Empresa Exportadora S.A."
                pais="Bolivia"
                rubro="Alimentos"
                registro="123456789"
                otro="Certificado ISO"
            />
            <TarjetaExportador
                nombre="Empresa Exportadora S.A."
                pais="Bolivia"
                rubro="Alimentos"
                registro="123456789"
                otro="Certificado ISO"
            />
            <TarjetaExportador
                nombre="Empresa Exportadora S.A."
                pais="Bolivia"
                rubro="Alimentos"
                registro="123456789"
                otro="Certificado ISO"
            />
            <TarjetaExportador
                nombre="Empresa Exportadora S.A."
                pais="Bolivia"
                rubro="Alimentos"
                registro="123456789"
                otro="Certificado ISO"
            />
        </div>
    </section>;
}

export default Exportadores;