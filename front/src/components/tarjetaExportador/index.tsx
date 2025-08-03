import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface TarjetaExportadorProps {
  nombre: string;
  pais: string;
  rubro: string;
  registro: string;
  otro: string;
  imagen?: string;
}

const TarjetaExportador: React.FC<TarjetaExportadorProps> = ({
  nombre,
  pais,
  rubro,
  registro,
  otro,
  imagen = "https://ahoraelpueblo.bo/images/noticias/economia/2024/09/ExportadoresBloqueos18924.jpg"
}) => {
  return (
    <div className="exportador-tarjeta">
      <div className='imagen-contenedor'>
        <img src={imagen} alt="imagen-del-exportador" />
      </div>
      <div className='exportador-info'>
        <h3>{nombre}</h3>
        <ul>
          <li><p><strong>País: </strong>{pais}</p></li>
          <li><p><strong>Rubro: </strong>{rubro}</p></li>
          <li><p><strong>No. de Registro: </strong>{registro}</p></li>
          <li><p><strong>Otro dato: </strong>{otro}</p></li>
        </ul>
        <Link
          to="/chat"
          state={{
            nombre,
            pais,
            rubro,
            registro,
            otro
          }}
        >
          Negociar
        </Link>
      </div>
    </div>
  );
};

export default TarjetaExportador;
