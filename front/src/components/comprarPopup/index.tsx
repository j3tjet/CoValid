import React from 'react';
import './style.css';

interface ComprarPopupProps {
  onCerrar: () => void;
  onExito: () => void;
}

const ComprarPopup: React.FC<ComprarPopupProps> = ({ onCerrar, onExito }) => {
  const manejarPagar = (e: React.FormEvent) => {
    e.preventDefault();
    onExito(); // Muestra popup de éxito
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="cerrar" onClick={onCerrar}>X</button>
        <form className="form-comprar" onSubmit={manejarPagar}>
          <h2>Comprar del exportador</h2>
          <input type="number" id="monto" />
          <button type="submit">Pagar</button>
        </form>
      </div>
    </div>
  );
};


export default ComprarPopup;
