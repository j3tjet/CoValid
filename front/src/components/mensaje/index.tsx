import React, { useState } from 'react';
import './style.css';
import { traducirTexto } from '../../api/traductor';

interface MensajeProps {
  contenido?: string;
  esMio: boolean;
  imagenUrl?: string;
}

const Mensaje: React.FC<MensajeProps> = ({ contenido, esMio, imagenUrl }) => {
  const [mostrarTraduccion, setMostrarTraduccion] = useState(false);
  const [contenidoTraducido, setContenidoTraducido] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const traducir = async () => {
    if (!contenido) return;
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
  if (imagenUrl) {
    return (
      <div className={`mensaje ${esMio ? 'mio' : 'remitente'}`}>
        <img src={imagenUrl} alt="imagen del mensaje" className="imagen-mensaje" />
      </div>
    );
  }
  return (
    <div className={`mensaje ${esMio ? 'mio' : 'remitente'}`}>
      <span>
        {mostrarTraduccion && contenidoTraducido ? contenidoTraducido : contenido}
      </span>

      {!esMio && contenido && (
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
