import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const TarjetaExportador: React.FC = () =>{
    return <div className="exportador-tarjeta">
        <div className='imagen-contenedor'>
            <img src="https://ahoraelpueblo.bo/images/noticias/economia/2024/09/ExportadoresBloqueos18924.jpg" alt="imagen-del-exportador" />
        </div>
        <div className='exportador-info'>
            <h3>Nombre del exportador</h3>
            <ul>
                <li><p><strong>Pais: </strong>Pais</p></li>
                <li><p><strong>Rubro: </strong>Rubro</p></li>
                <li><p><strong>No. de  Registro: </strong>No. de  Registro</p></li>
                <li><p><strong>Otro dato: </strong>Otro dato</p></li>
            </ul>
            <Link
                to="/chat"
                state={{
                    nombre: 'Empresa Exportadora S.A.',
                    pais: 'Bolivia',
                    rubro: 'Alimentos',
                    registro: '123456789',
                    otro: 'Certificado ISO'
                }}
                >
                Negociar
             </Link>
        </div>
    </div>;
}

export default TarjetaExportador;