import React, { useState } from 'react';
import './style.css';

const Buscador: React.FC = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');

  const handleBuscar = () => {
    console.log('Buscando:', terminoBusqueda);
  };

  return (
    <div className="buscador-contenedor">
      <input
        type="text"
        placeholder="Busca un exportador"
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
        aria-label="Buscar exportador"
      />
      <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
};

export default Buscador;
