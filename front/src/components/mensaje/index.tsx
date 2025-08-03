import React, { useState } from 'react';
import './style.css';
import { traducirTexto } from '../../api/traductor';

interface MensajeProps {
  contenido: string;
  esMio: boolean;
}

const Mensaje: React.FC<MensajeProps> = ({ contenido, esMio }) => {
  const [mostrarTraduccion, setMostrarTraduccion] = useState(false);
  const [contenidoTraducido, setContenidoTraducido] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const traducir = async () => {
    if (!contenidoTraducido) {
        setCargando(true);
        try {
        const resultado = await traducirTexto(contenido, 'en', 'es');
        setContenidoTraducido(resultado);
        setMostrarTraduccion(true);
        } catch (error) {
        console.error('Error al traducir:', error);
        } finally {
        setCargando(false);
        }
    } else {
        setMostrarTraduccion(!mostrarTraduccion);
    }
    };


  return (
    <div className={`mensaje ${esMio ? 'mio' : 'remitente'}`}>
      <span>{mostrarTraduccion && contenidoTraducido ? contenidoTraducido : contenido}</span>

      {!esMio && (
        <div className="accion-traducir">
          <button onClick={traducir} disabled={cargando}>
            {cargando
              ? 'Traduciendo...'
              : mostrarTraduccion
              ? 'Ver original'
              : 'Traducir'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Mensaje;
