import React from 'react';
import './style.css';

interface ExitoPopupProps {
  onCerrar: () => void;
}

const ExitoPopup: React.FC<ExitoPopupProps> = ({ onCerrar }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div>
            <p>Gracias por tu compra</p>
        </div>
        <button onClick={onCerrar}>OK</button>
      </div>
    </div>
  );
};

export default ExitoPopup;
