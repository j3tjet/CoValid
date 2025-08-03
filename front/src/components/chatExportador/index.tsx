import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Mensaje from '../mensaje';
import ComprarPopup from '../comprarPopup';
import ExitoPopup from '../exitoPopup';

type MensajeData = {
  texto: string;
  esMio: boolean;
};

interface ExportadorProps {
  datos: {
    nombre: string;
    pais: string;
    rubro: string;
    registro: string;
    otro: string;
  };
}

const ChatExportador: React.FC<ExportadorProps> = ({ datos }) => {
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState<MensajeData[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (mensaje.trim() === '') return;

    setMensajes((prev) => [...prev, { texto: mensaje, esMio: true }]);
    setMensaje('');

    setTimeout(() => {
      setMensajes((prev) => [...prev, { texto: 'i am robot', esMio: false }]);
    }, 1000);
  };

  // 🔸 Efecto para scroll automático
  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight;
    }
  }, [mensajes]);

  return (
    <div className="chat-contenedor">
      <h1>{datos.nombre}</h1>

      <div className="mensajes-contenedor" ref={contenedorRef}>
        {mensajes.map((m, idx) => (
          <Mensaje key={idx} contenido={m.texto} esMio={m.esMio} />
        ))}
      </div>

      <div className="chat-bottom">
        <form onSubmit={manejarEnvio} className="chat-form">
          <input
            type="text"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button type="submit">Enviar</button>
        </form>
        <button className="comprar" onClick={() => setMostrarModal(true)}>
          Realizar compra
        </button>
      </div>

      {mostrarModal && (
        <ComprarPopup
          onCerrar={() => setMostrarModal(false)}
          onExito={() => {
            setMostrarModal(false);
            setMostrarExito(true);
          }}
        />
      )}

      {mostrarExito && <ExitoPopup onCerrar={() => setMostrarExito(false)} />}
    </div>
  );
};

export default ChatExportador;
